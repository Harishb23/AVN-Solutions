import { useEffect } from 'react';
import { getRouteById, type RouteSEOConfig, SITE_URL } from './siteRoutes';
import { companyDetails } from '../data/company';

/**
 * Helper to update or create an HTML meta tag
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update or create canonical link tag
 */
function setCanonicalLink(href: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Builds structured JSON-LD schema appropriate for the given route
 */
function generateSchemaForRoute(route: RouteSEOConfig) {
  const baseOrganization = {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    'name': companyDetails.name,
    'legalName': companyDetails.legalName,
    'url': SITE_URL,
    'logo': `${SITE_URL}/logo.png`,
    'image': `${SITE_URL}/hero-bg.jpg`,
    'telephone': companyDetails.phone.tel,
    'email': companyDetails.email.general,
    'priceRange': '$$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': companyDetails.address.line1,
      'addressLocality': `${companyDetails.address.area}, ${companyDetails.address.city}`,
      'addressRegion': companyDetails.address.state,
      'postalCode': companyDetails.address.pincode,
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': companyDetails.address.coordinates.lat,
      'longitude': companyDetails.address.coordinates.lng
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:30',
      'closes': '18:30'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Chennai' },
      { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
      { '@type': 'Country', 'name': 'India' }
    ],
    'sameAs': [
      'https://www.linkedin.com/company/avn-solutions',
      'https://www.instagram.com/avnsolutions'
    ]
  };

  if (route.id === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        baseOrganization,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          'url': SITE_URL,
          'name': 'AVN Solutions',
          'description': route.description,
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    };
  }

  // Subpage Schema with BreadcrumbList & Specific Entity
  const breadcrumbList = {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': `${SITE_URL}/`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': route.breadcrumbName,
        'item': route.canonical
      }
    ]
  };

  const pageSchema: Record<string, unknown> = {
    '@type': route.schemaType === 'Service' ? 'Service' : route.schemaType === 'Product' ? 'Product' : 'WebPage',
    'name': route.title,
    'description': route.description,
    'url': route.canonical,
    'provider': { '@id': `${SITE_URL}/#organization` }
  };

  if (route.schemaType === 'Service') {
    pageSchema['serviceType'] = 'Audio Visual System Integration & Engineering';
    pageSchema['areaServed'] = 'Chennai, Tamil Nadu, India';
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      baseOrganization,
      breadcrumbList,
      pageSchema
    ]
  };
}

/**
 * Dynamic SEO hook that handles Page Title, Description, Canonical, OpenGraph, Twitter, and Schema JSON-LD
 */
export function useSEO(routeId: string) {
  useEffect(() => {
    const route = getRouteById(routeId);
    const is404 = route.id === '404';

    // 1. Title Tag
    document.title = route.title;

    // 2. Primary Meta Tags
    setMetaTag('name', 'title', route.metaTitle);
    setMetaTag('name', 'description', route.description);
    setMetaTag('name', 'keywords', route.keywords);
    setMetaTag('name', 'robots', is404 ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical Tag
    setCanonicalLink(route.canonical);

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:title', route.title);
    setMetaTag('property', 'og:description', route.description);
    setMetaTag('property', 'og:url', route.canonical);
    setMetaTag('property', 'og:type', route.ogType);
    setMetaTag('property', 'og:image', route.ogImage);
    setMetaTag('property', 'og:site_name', 'AVN Solutions');

    // 5. Twitter / X Meta Tags
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', route.title);
    setMetaTag('property', 'twitter:description', route.description);
    setMetaTag('property', 'twitter:url', route.canonical);
    setMetaTag('property', 'twitter:image', route.ogImage);

    // 6. Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('avn-page-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'avn-page-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(generateSchemaForRoute(route), null, 2);
  }, [routeId]);
}
