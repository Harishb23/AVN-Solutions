import type { PartnerBrand } from '../types';

export const brandsData: PartnerBrand[] = [
  // Display
  {
    id: 'samsung',
    name: 'Samsung Commercial',
    category: 'Display',
    logoText: 'SAMSUNG',
    description: 'MicroLED The Wall, SMART Signage, and 4K commercial displays.',
    tier: 'Platinum',
    popularGear: ['The Wall MicroLED', 'QHB Series 4K', 'Flip Pro Interactive']
  },
  {
    id: 'lg',
    name: 'LG Commercial Displays',
    category: 'Display',
    logoText: 'LG COMMERCIAL',
    description: 'Ultra-stretch displays, fine-pitch LED, and 0.88mm video walls.',
    tier: 'Platinum',
    popularGear: ['0.88mm Video Wall', 'LG MAGNIT MicroLED', 'One:Quick Works']
  },
  {
    id: 'absen',
    name: 'Absen LED',
    category: 'Display',
    logoText: 'ABSEN',
    description: 'World-leading direct-view LED walls and stage rental displays.',
    tier: 'Gold',
    popularGear: ['Absenicon All-in-One', 'Clear Cobalt MicroLED', 'KL Slim Series']
  },

  // Audio
  {
    id: 'bose',
    name: 'Bose Professional',
    category: 'Audio',
    logoText: 'BOSE PRO',
    description: 'Panaray steerable columns, EdgeMax architectural audio, and FreeSpace.',
    tier: 'Platinum',
    popularGear: ['Panaray MSA12X', 'DesignMax In-Ceiling', 'ControlSpace DSP']
  },
  {
    id: 'qsys',
    name: 'Q-SYS',
    category: 'Audio',
    logoText: 'Q-SYS',
    description: 'Cloud-manageable audio, video, and control platform.',
    tier: 'Platinum',
    popularGear: ['Core 110f', 'Core Nano', 'Q-SYS Touch Panels']
  },
  {
    id: 'jbl',
    name: 'JBL Professional',
    category: 'Audio',
    logoText: 'JBL PROFESSIONAL',
    description: 'Commercial sound reinforcement, column speakers, and stadium PA.',
    tier: 'Gold',
    popularGear: ['CBT Series Columns', 'Control Contract Series', 'EON Pro']
  },
  {
    id: 'genelec',
    name: 'Genelec',
    category: 'Audio',
    logoText: 'GENELEC',
    description: 'Smart IP active PoE installation monitors with studio grade fidelity.',
    tier: 'Gold',
    popularGear: ['4430A Smart IP', '4420A PoE', 'Smart IP Manager']
  },

  // Microphones
  {
    id: 'shure',
    name: 'Shure',
    category: 'Microphones',
    logoText: 'SHURE',
    description: 'Microflex Advance ceiling array microphones, wireless systems, and DSP.',
    tier: 'Platinum',
    popularGear: ['MXA920 Ceiling Array', 'ULX-D Digital Wireless', 'IntelliMix Room DSP']
  },
  {
    id: 'sennheiser',
    name: 'Sennheiser',
    category: 'Microphones',
    logoText: 'SENNHEISER',
    description: 'TeamConnect Ceiling 2, EW-DX digital wireless, and speech audio.',
    tier: 'Platinum',
    popularGear: ['TeamConnect Ceiling 2', 'EW-DX UHF Wireless', 'SpeechLine Digital']
  },

  // Video Conferencing
  {
    id: 'logitech',
    name: 'Logitech',
    category: 'Video Conferencing',
    logoText: 'LOGITECH',
    description: 'Rally Bar, Rally Plus, Tap IP controllers, and enterprise MTR systems.',
    tier: 'Platinum',
    popularGear: ['Rally Bar', 'Rally Plus 4K', 'Logitech Tap IP', 'Sight AI Camera']
  },
  {
    id: 'poly',
    name: 'Poly (HP)',
    category: 'Video Conferencing',
    logoText: 'POLY | HP',
    description: 'Poly Studio X-Series, DirectorAI cameras, and hybrid meeting headsets.',
    tier: 'Platinum',
    popularGear: ['Studio X70', 'Studio X52', 'TC10 Touch Controller']
  },
  {
    id: 'barco',
    name: 'Barco',
    category: 'Video Conferencing',
    logoText: 'BARCO',
    description: 'ClickShare wireless presentation and BYOM conferencing solutions.',
    tier: 'Platinum',
    popularGear: ['ClickShare CX-50 Gen 2', 'ClickShare CX-30', 'ClickShare C-10']
  },

  // Control & Automation
  {
    id: 'crestron',
    name: 'Crestron',
    category: 'Control',
    logoText: 'CRESTRON',
    description: '4-Series control processors, DM NVX AV-over-IP, and touch panels.',
    tier: 'Platinum',
    popularGear: ['CP4N Core 4-Series', 'TSW-1070 Touch Screen', 'DM NVX 360']
  },
  {
    id: 'extron',
    name: 'Extron',
    category: 'Control',
    logoText: 'EXTRON',
    description: 'Pro series control processors, TouchLink interfaces, and matrix switchers.',
    tier: 'Platinum',
    popularGear: ['IPCP Pro 550', 'TLP Pro 1025T', 'DTP CrossPoint 4K']
  },
  {
    id: 'lutron',
    name: 'Lutron',
    category: 'Automation',
    logoText: 'LUTRON',
    description: 'Quantum and Athena architectural lighting and automated shading systems.',
    tier: 'Platinum',
    popularGear: ['Athena Hub', 'Quantum Greenglaze', 'Sivoia QS Motorized Shades']
  },

  // Projection
  {
    id: 'panasonic',
    name: 'Panasonic Connect',
    category: 'Projection',
    logoText: 'PANASONIC',
    description: 'High-lumen 4K 1-Chip and 3-Chip DLP laser projection systems.',
    tier: 'Gold',
    popularGear: ['PT-MZ20K 20,000L', 'PT-REQ12 4K Laser', 'PT-VMZ7ST Short Throw']
  },
  {
    id: 'christie',
    name: 'Christie Digital',
    category: 'Projection',
    logoText: 'CHRISTIE',
    description: 'Cinema-grade pure laser projectors and Pandoras Box media servers.',
    tier: 'Gold',
    popularGear: ['Griffyn 4K50-RGB', 'Inspire Series 1DLP', 'Mystique Auto-Alignment']
  },

  // Networking
  {
    id: 'netgear',
    name: 'Netgear AV',
    category: 'Networking',
    logoText: 'NETGEAR AV',
    description: 'M4250 & M4300 series dedicated Pro AV-over-IP managed switches.',
    tier: 'Platinum',
    popularGear: ['M4250-26G4F-PoE+', 'M4300-96X 10G Modular', 'ProAV OS Interface']
  }
];
