import type { ServiceItem, ProcessStep, SLATier } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'av-design',
    number: '01',
    title: 'AV Design & Consulting',
    category: 'design',
    categoryLabel: 'Design & Engineering',
    description: 'Translating spatial and functional requirements into comprehensive AV architecture, signal diagrams, and equipment BOQs tailored to budget and workflow.',
    deliverables: [
      'Schematic AV Concepts & System Topology',
      'Sightline & Throw Ratio Calculations',
      'Equipment Bill of Quantities (BOQ)',
      'Architectural Conduiting & Floor-Box Drawings'
    ],
    toolsUsed: ['AutoCAD 2024', 'Revit BIM', 'EASE 4.4', 'Stardraw AV'],
    timeline: '1 - 2 Weeks',
    suitableFor: ['Corporate Boardrooms', 'Auditoriums', 'Experience Centers'],
    iconName: 'Compass'
  },
  {
    id: 'system-engineering',
    number: '02',
    title: 'System Engineering',
    category: 'design',
    categoryLabel: 'Design & Engineering',
    description: 'Detailed low-voltage engineering, network bandwidth calculations, thermal dissipation modeling, and structured rack elevation designs.',
    deliverables: [
      'Single-Line Signal Flow Schematics',
      '10G Network Bandwidth & VLAN Allocation',
      'Thermal Heat Load & BTU Dissipation Reports',
      'Rack Elevation Blueprints & Power Distribution'
    ],
    toolsUsed: ['AutoCAD MEP', 'Netgear AV OS', 'Middle Atlantic RackTools'],
    timeline: '1 - 2 Weeks',
    suitableFor: ['Command Centers', 'Server Rooms', 'Large Campuses'],
    iconName: 'Cpu'
  },
  {
    id: 'acoustic-consulting',
    number: '03',
    title: 'Acoustic Consulting & RT60',
    category: 'design',
    categoryLabel: 'Design & Engineering',
    description: 'Scientific sound measurement, RT60 decay calculation, sound transmission loss (STC) modeling, and custom acoustic panel layout design.',
    deliverables: [
      'On-Site RT60 & NC Background Noise Audits',
      'EASE 3D Acoustic Ray-Tracing Simulations',
      'Custom Fabric & Wooden Acoustic Panel Layouts',
      'HVAC Noise Attenuation & STC Wall Specifications'
    ],
    toolsUsed: ['Smaart V8', 'EASE Focus 3', 'NTi Audio XL2 Analyzer'],
    timeline: '3 - 5 Days',
    suitableFor: ['Boardrooms', 'Broadcast Studios', 'Auditoriums'],
    iconName: 'Volume2'
  },
  {
    id: 'equipment-supply',
    number: '04',
    title: 'Direct OEM Equipment Supply',
    category: 'supply',
    categoryLabel: 'Supply & Logistics',
    description: 'Authorized direct OEM sourcing of enterprise-grade commercial displays, microphones, amplifiers, video processors, and automation processors.',
    deliverables: [
      '100% Genuine OEM Hardware with Serial Tracking',
      'Direct Manufacturer Warranties in India',
      'On-Time Logistics Delivery in Chennai & South India',
      'Pre-Staging Lab Hardware Quality Verification'
    ],
    toolsUsed: ['Official OEM Partner Portals', 'Chennai Staging Facility'],
    timeline: 'Immediate to 2 Weeks',
    suitableFor: ['Enterprise IT', 'Architects', 'General Contractors'],
    iconName: 'PackageCheck'
  },
  {
    id: 'av-integration',
    number: '05',
    title: 'Turnkey AV Integration',
    category: 'supply',
    categoryLabel: 'Supply & Logistics',
    description: 'Flawless unification of heterogeneous audio, video, control, and IT subsystems into one cohesive, intuitive enterprise environment.',
    deliverables: [
      'Heterogeneous Subsystem Inter-Bridging',
      'Dante / AES67 Digital Audio Clock Sync',
      'Video Wall Multi-Window Canvas Setup',
      'Wireless Presentation & BYOM Integration'
    ],
    toolsUsed: ['Dante Controller', 'Q-SYS Designer', 'Crestron Toolbox'],
    timeline: '2 - 4 Weeks',
    suitableFor: ['Smart Classrooms', 'Training Rooms', 'Boardrooms'],
    iconName: 'Layers'
  },
  {
    id: 'installation-commissioning',
    number: '06',
    title: 'Installation & Physical Deployment',
    category: 'supply',
    categoryLabel: 'Supply & Logistics',
    description: 'Precision physical mounting, laser-leveled display installation, structured cable dressing, and verified end-to-end signal termination.',
    deliverables: [
      'AVIXA CTS-I Certified Precision Mounting',
      'Laser Display Plane & MicroLED Seam Alignment',
      'Structured Heat-Shrink Cable Lacing & Labeling',
      'Clean Isolated Power & Grounding Verification'
    ],
    toolsUsed: ['Bosch Laser Levels', 'Fluke Cable Analyzers', 'CTS-I Toolkits'],
    timeline: '1 - 3 Weeks',
    suitableFor: ['All Commercial & Residential Spaces'],
    iconName: 'Wrench'
  },
  {
    id: 'programming-automation',
    number: '07',
    title: 'Programming & UI Automation',
    category: 'commissioning',
    categoryLabel: 'Control & Commissioning',
    description: 'Custom programming for Crestron, Extron, and Q-SYS control engines with ergonomic vector touch interfaces and one-touch meeting macros.',
    deliverables: [
      'Custom HTML5 / Vector Touch Screen UI Design',
      'One-Touch Meeting Startup & Presentation Macros',
      'Room Scheduling Panel Integration (O365 / Google)',
      'BACnet, KNX & DALI-2 Lighting Control Gateways'
    ],
    toolsUsed: ['Crestron SIMPL# / CH5', 'Q-SYS UCI Editor', 'Extron GC Plus'],
    timeline: '1 - 2 Weeks',
    suitableFor: ['Executive Boardrooms', 'Townhalls', 'Luxury Villas'],
    iconName: 'Code2'
  },
  {
    id: 'testing-handover',
    number: '08',
    title: 'Calibration, Tuning & Handover',
    category: 'commissioning',
    categoryLabel: 'Control & Commissioning',
    description: 'Rigorous Smaart V8 acoustic tuning, colorimeter display calibration, stress testing, and structured user training sessions with manuals.',
    deliverables: [
      'Smaart V8 Acoustic RTA Reports & STI Certification',
      'Colorimeter White Balance & Rec.709 Tuning',
      'Structured Operator Training & Video Manuals',
      'Complete As-Built Dossier & Source Code Handoff'
    ],
    toolsUsed: ['Smaart V8', 'CalMAN Ultimate', 'X-Rite Colorimeter'],
    timeline: '3 - 5 Days',
    suitableFor: ['All Commissioned Spaces'],
    iconName: 'CheckCircle2'
  },
  {
    id: 'lighting-design',
    number: '09',
    title: 'Intelligent Architectural Lighting',
    category: 'commissioning',
    categoryLabel: 'Control & Commissioning',
    description: 'Photometric analysis, UGR glare reduction calculations, tunable white circadian rhythm integration, and DALI-2 scene control.',
    deliverables: [
      'Dialux 3D Photometric Lighting Simulations',
      'Glare Index (UGR < 19) Compliance Audits',
      'Circadian Tunable White Daylight Schedules',
      'Architectural Keypad & Sensor Scene Automation'
    ],
    toolsUsed: ['DIALux evo', 'Lutron Designer', 'DALI-2 Gateway Tools'],
    timeline: '1 - 2 Weeks',
    suitableFor: ['Auditoriums', 'Experience Centers', 'Galleries'],
    iconName: 'Sparkles'
  },
  {
    id: 'project-management',
    number: '10',
    title: 'Turnkey Project Management',
    category: 'maintenance',
    categoryLabel: 'Management & Maintenance',
    description: 'Dedicated site engineers coordinating with architects, general contractors, interior designers, and MEP teams for zero-delay handover.',
    deliverables: [
      'Gantt Chart Milestone & Procurement Tracking',
      'Weekly Inter-Trade Architectural Coordination',
      'Conduit, Power & Airflow Readiness Inspections',
      'Zero-Punch-List Final Project Signoff'
    ],
    toolsUsed: ['Procore', 'MS Project', 'Site Inspection Checklists'],
    timeline: 'Full Project Duration',
    suitableFor: ['New Builds', 'Campus Renovations', 'Fit-Outs'],
    iconName: 'FolderKanban'
  },
  {
    id: 'annual-maintenance',
    number: '11',
    title: 'Preventive Maintenance (PPM)',
    category: 'maintenance',
    categoryLabel: 'Management & Maintenance',
    description: 'Scheduled quarterly preventive checkups, firmware updates, optic cleanings, audio gain recalibrations, and system health audits.',
    deliverables: [
      'Quarterly On-Site Health Audits & Cleaning',
      'Display Optical Dusting & Air Filter Replacement',
      'Firmware Security Patches & Cloud Upgrades',
      'Preventive Hardware Replacement of Wearing Parts'
    ],
    toolsUsed: ['Diagnostic Cloud Portals', 'Thermal Imagers', 'Audio Meters'],
    timeline: 'Quarterly Contract',
    suitableFor: ['Corporate Campuses', 'Universities', 'Hospitals'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'amc-support',
    number: '12',
    title: '24/7 AMC & Emergency SLA Support',
    category: 'maintenance',
    categoryLabel: 'Management & Maintenance',
    description: 'Priority incident response, standby hardware replacement units, remote cloud monitoring, and dedicated Chennai technical helpdesk.',
    deliverables: [
      '2-Hour Guaranteed On-Site Response in Chennai',
      'Hot-Standby Spare Hardware Stocked in Sholinganallur',
      '24/7 Cloud Remote Telemetry & Diagnostics',
      'Dedicated Named SLA Account Engineer'
    ],
    toolsUsed: ['Jira Service Desk', 'Crestron XiO Cloud', 'Q-SYS Reflect'],
    timeline: 'Annual SLA (24/7/365)',
    suitableFor: ['Mission Critical Boardrooms', 'NOC Rooms', 'Hospitals'],
    iconName: 'Headphones'
  }
];

export const slaTiersData: SLATier[] = [
  {
    id: 'bronze-sla',
    name: 'Bronze Care',
    tierTag: 'ESSENTIAL PREVENTIVE',
    priceDescriptor: 'Scheduled Maintenance',
    responseTime: 'Next Business Day (8-Hr)',
    summary: 'Ideal for standard corporate meeting spaces requiring regular preventive maintenance, firmware security updates, and scheduled audit checks.',
    features: [
      'Quarterly scheduled on-site physical health audits',
      'Optics cleaning & projector filter de-dusting',
      'Firmware security patches & software upgrades',
      'Business hours telephone & email ticketing helpdesk',
      'Detailed quarterly performance & uptime report'
    ],
    bestFor: 'Medium corporate offices & academic training rooms'
  },
  {
    id: 'silver-sla',
    name: 'Silver Priority',
    tierTag: 'BUSINESS CRITICAL',
    popular: true,
    priceDescriptor: 'Priority SLA Response',
    responseTime: '4-Hour Guaranteed Chennai Response',
    summary: 'Our most popular corporate contract for executive boardrooms, video conference suites, and town halls demanding prompt on-site engineering intervention.',
    features: [
      '4-Hour guaranteed on-site response time in Chennai',
      'Bi-monthly preventive maintenance & audio recalibration',
      'Priority RMA hardware swap & logistics handling',
      'Remote cloud diagnostics & telemetry monitoring',
      'Dedicated technical account manager',
      'Complimentary user refresher training sessions'
    ],
    bestFor: 'Executive boardrooms, hybrid suites & townhalls'
  },
  {
    id: 'gold-sla',
    name: 'Gold Enterprise',
    tierTag: 'MISSION CRITICAL 24/7',
    priceDescriptor: 'Zero Downtime Guarantee',
    responseTime: '2-Hour Emergency On-Site Response',
    summary: 'For high-stakes executive boardrooms, Network Operation Centers (NOC), broadcast studios, and 24/7 command centers requiring zero downtime.',
    features: [
      '2-Hour emergency on-site response across Chennai',
      'Hot-standby hardware replacement units in Sholinganallur',
      '24/7/365 dedicated priority hotline & monitoring',
      'Monthly comprehensive Smaart audio & display tuning',
      'Named Principal AV Engineer assigned to account',
      'Full source code & firmware backup vault management'
    ],
    bestFor: 'Command centers, mission-critical boardrooms & hospitals'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    phase: 'UNDERSTAND',
    title: 'Discover & Requirements Analysis',
    description: 'We meet with key stakeholders to understand operational workflows, spatial ergonomics, user requirements, and technical goals.',
    outputs: ['User Journey & Persona Mapping', 'Functional AV Requirements Brief', 'Budgetary Bounds & Feasibility Matrix'],
    duration: 'Week 1',
    leadRole: 'Principal AV Consultant'
  },
  {
    number: '02',
    phase: 'SURVEY',
    title: 'Site Survey & Acoustic Auditing',
    description: 'Detailed site inspection evaluating physical room dimensions, ambient lux levels, baseline RT60 reverberation, and conduit routes.',
    outputs: ['Physical Laser Dimension Scans', 'Baseline Smaart RT60 & NC Audio Data', 'MEP & Cable Pathway Readiness Report'],
    duration: 'Week 1 - 2',
    leadRole: 'Acoustic & Site Engineer'
  },
  {
    number: '03',
    phase: 'DESIGN',
    title: 'Conceptual AV Architecture',
    description: 'Developing system architecture, equipment selection, throw distance calculations, and detailed bill of quantities.',
    outputs: ['System Topology Architecture Brief', 'Display Sightline & Audio Dispersion Maps', 'Preliminary BOQ & Budgetary Estimate'],
    duration: 'Week 2',
    leadRole: 'Senior Design Consultant'
  },
  {
    number: '04',
    phase: 'ENGINEER',
    title: 'Detailed Engineering & Schematics',
    description: 'Formulating single-line schematics, cable schedules, thermal management, and network security topologies.',
    outputs: ['AutoCAD Single-Line Signal Schematics', 'Rack Elevation & Heat Load Blueprints', 'Network VLAN & Bandwidth Matrix'],
    duration: 'Week 2 - 3',
    leadRole: 'Systems Design Engineer'
  },
  {
    number: '05',
    phase: 'SUPPLY',
    title: 'Direct OEM Supply & Lab Staging',
    description: 'Sourcing 100% genuine equipment from certified OEM partners and pre-configuring hardware in our Chennai engineering lab.',
    outputs: ['Direct OEM Factory Shipments', 'Pre-Installation Lab Verification Test', 'Baseline Firmware Flashing & Pre-Labeling'],
    duration: 'Week 3 - 5',
    leadRole: 'Logistics & QA Lead'
  },
  {
    number: '06',
    phase: 'INSTALL',
    title: 'Precision Physical Installation',
    description: 'Physical deployment by certified AVIXA technicians following strict cabling, grounding, and aesthetic standards.',
    outputs: ['Concealed Structured Cabling & Lacing', 'Laser-Leveled Display Wall Mounting', 'Standardized Clean Rack Integration'],
    duration: 'Week 5 - 7',
    leadRole: 'AVIXA CTS-I Field Engineer'
  },
  {
    number: '07',
    phase: 'PROGRAM',
    title: 'Control Programming & DSP Tuning',
    description: 'Writing control logic, designing intuitive touch glass graphics, and tuning DSP acoustic algorithms.',
    outputs: ['Custom Vector UI Glass Interface', 'IntelliMix / Q-SYS DSP Gain Structuring', 'Automated One-Touch Meeting Macros'],
    duration: 'Week 7 - 8',
    leadRole: 'Certified Crestron/Q-SYS Programmer'
  },
  {
    number: '08',
    phase: 'CALIBRATE',
    title: 'Calibration, Testing & Training',
    description: 'End-to-end stress testing under live loads, followed by hands-on training for corporate executives and IT staff.',
    outputs: ['Smaart V8 Acoustic Tuning Report', 'CalMAN Display White Balance Audit', 'Hands-on User Training & Video Manuals'],
    duration: 'Week 8',
    leadRole: 'Quality & Commissioning Lead'
  },
  {
    number: '09',
    phase: 'MAINTAIN',
    title: 'Handover & Chennai SLA Support',
    description: 'Delivering comprehensive as-built documentation and transitioning to active 24/7 Chennai-based SLA maintenance support.',
    outputs: ['Complete As-Built Dossier & Schematics', 'Manufacturer Warranty Certificates', 'Active 24/7 Chennai SLA Maintenance Contract'],
    duration: 'Ongoing',
    leadRole: 'SLA Support Operations Manager'
  }
];
