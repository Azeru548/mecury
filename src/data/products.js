// Content extracted verbatim from the original site's product pages.
// Slugs match the original URLs (e.g. /shell-tube-heat-exchanger/).

// Body layouts, transcribed from each page's Elementor CSS.
//  'dotted3' — Overview full width, then 3 dotted columns (post-25)
//  'dotted2' — Overview full width, then 2 dotted columns (post-21/17/1218)
//  'stacked' — single narrow column, headings + lists stacked, no borders
//  'sidebar' — 70% main column (text + full-width image band) beside a
//              29.917% sidebar holding the "Products and Services" sub-menu
export const BODY_LAYOUTS = {
  // Two 50/50 columns: text on the left, video + a pair of background-image
  // bands on the right (post-1228)
  split: {
    sectionPad: '30px 0 80px 0',
    colPad: '0 30px 11px 0',
    leftWidth: '50%',
    rightWidth: '50%',
    overviewPad: '0 0 15px 0',
    blockPad: '0 0 0 0',
  },
  sidebar: {
    sectionPad: '30px 0 80px 0',
    mainWidth: '70%',
    mainPad: '0 30px 30px 0',
    sideWidth: '29.917%',
    sidePad: '0 30px 30px 30px',
    blockPad: '0 0 20px 0',
    // Background-image band: 376px spacer inside 8px padding
    bandPad: '8px',
    bandHeight: 376,
    gapSpacer: 30,
    sideTitle: 'Products and Services',
    sideSpacer: 20,
  },
  dotted3: {
    sectionPad: '30px 0 20px',
    overviewPad: '0 0 25px 0',
    widths: ['44.164%', '31.668%', '23.446%'],
    pads: ['25px 25px 10px 25px', '25px 0 25px 25px', '25px 0 25px 25px'],
  },
  dotted2: {
    sectionPad: '30px 0 20px',
    overviewPad: '0 0 10px 0',
    widths: ['50%', '50%'],
    pads: ['25px 25px 10px 25px', '25px 0 25px 25px'],
  },
  stacked: {
    sectionPad: '30px 0 80px 0',
    stackWidth: '70%',
    blockPad: '0 0 20px 0',
  },
}

export const products = [
  {
    slug: 'shell-tube-heat-exchanger',
    title: 'Heat Exchanger',
    // The sub-menu on Structural Fabrication uses the original's longer label
    subMenuTitle: 'Heat Exchanger / Air Cooler',
    overview:
      'Engineered and fabricated for efficient thermal transfer in demanding process environments, our heat exchangers are designed to meet a wide range of operating conditions and performance requirements.',
    capabilities: [
      'Custom-designed shell & tube and air-cooled exchangers',
      'Thermal design using industry-standard engineering tools',
      'Fabrication in accordance with ASME and NACE standards',
      'Built for high-pressure and high-temperature applications',
      'Skid-mounted configurations available',
    ],
    applications: [
      'Oil & gas production and processing',
      'Refineries and petrochemical facilities',
      'Gas treatment and cooling systems',
      'Power Generation',
      'Food Processing',
      'Pharmaceutical',
    ],
    materials: ['Stainless Steel', 'Carbon Steel', 'Duplex'],
    bodyLayout: 'dotted3',
    // Two navy pill headings, each followed by a 50/50 row of doc previews
    docGroups: [
      {
        title: 'Shell & Tube Heat Exchanger',
        docs: ['1mTHqBEEt7PvRC6yO9sIsjXNYv57kSoIG', '17m3QuaqnmQrtPlM6bPFkDqsUKX6tFhZh'],
      },
      {
        title: 'Air - Cooled Heat Exchanger',
        docs: ['1FEc-6fpN3M5NgjRMTMAz3U1wXmXa8MWP', '1xBBjgJmCenktFY-JLrpuHVnht4ayArX5'],
      },
    ],
    imageRows: [],
    driveDocs: [
      '17m3QuaqnmQrtPlM6bPFkDqsUKX6tFhZh',
      '1FEc-6fpN3M5NgjRMTMAz3U1wXmXa8MWP',
      '1mTHqBEEt7PvRC6yO9sIsjXNYv57kSoIG',
      '1xBBjgJmCenktFY-JLrpuHVnht4ayArX5',
    ],
    card: {
      title: 'HEAT',
      subtitle: 'EXCHANGER',
      shortDesc:
        'Delivering precision thermal performance, our heat exchangers maximize efficiency, reliability, and operational excellence in demanding environments.',
      image: '/images/heat-exchanger.jpg',
    },
  },
  {
    slug: 'pressure-vessels-towers-columns',
    title: 'Pressure Vessels / Towers / Columns',
    bodyLayout: 'dotted2',
    overview:
      'Absolute Energy Field specializes in the design and fabrication of ASME-certified pressure and process columns to meet stringent industry requirements.',
    capabilities: [
      'ASME "U" & "S" stamp certified manufacturing',
      'Custom-engineering vessels for various process conditions',
      'Designed and fabricated per ASME BPVC & NACE standards',
      'Full inspection, testing, and National Board registration',
      'High-strenght fabrication for critical applications',
    ],
    applications: [
      'Separation and processing systems',
      'Refining and petrochemical operations',
      'Storage and reaction vessels',
      'Oil & Gas Industry',
      'Chemical Industry',
      'Food & Dairy Industry',
      'Pharmaceutical',
      'Pressurized Gas',
    ],
    // Two boxed sections, each split into 3 columns with these exact widths.
    // The second row only fills its first two columns — the third is empty.
    imageRows: [
      {
        widths: ['34.497%', '34.5%', '30.667%'],
        images: [
          '/images/prod/20221230_231944936_iOS.jpeg',
          '/images/prod/20250127_195909841_iOS.jpeg',
          '/images/prod/20220420_011646000_iOS.jpeg',
        ],
      },
      {
        widths: ['34.5%', '34.4%'],
        images: [
          '/images/prod/20260508_170809654_iOS.jpeg',
          '/images/prod/20260508_170559774_iOS.jpeg',
        ],
      },
    ],
    // Videos, in a 50/50 row that sits ABOVE the photo sections
    driveDocs: ['1Ue3l9d-cWRYQldYkndmOLYLgQ2wygxI3', '1XTgGxr6LcCZDlK_HpjVVIS3AjeoNI4nY'],
    card: {
      title: 'PRESSURE VESSELS/',
      subtitle: 'TOWERS/COLUMNS',
      shortDesc:
        'Expertly engineered for high-performance operations, ensuring superior strength, safety, and long-term integrity under extreme conditions.',
      image: '/images/pressure-vessels.jpg',
    },
  },
  {
    slug: 'modular-process-skid-packages',
    title: 'Modular Process Skid Packages',
    bodyLayout: 'split',
    // This page's h5 headings are black, unlike the #283820 used elsewhere
    headingColor: '#000000',
    // One video at the top of the right column, with two background-image
    // bands (410px spacers) sitting side by side beneath it
    overview:
      'Fully integrated modular systems designed for efficient installation, scalability, and rapid deployment in complex industrial environments.',
    capabilities: [
      'Complete skid-mounted process units',
      'Pre-assembled and factory-tested systems',
      'Compact, space-optimized designs',
      'Integrated instrumentation and controls',
      'Reduced on-site installation time',
    ],
    applications: [
      'Oil & Gas facilities',
      'Chemical processing plants',
      'Water and wastewater systems',
      'Energy infrastructure projects',
    ],
    imageRows: [],
    driveDocs: ['1sykPeZSU2elfjSO-2KzbfzavUrI5Wl5Z'],
    // Two CSS background bands, side by side, each 410px tall
    bandImages: [
      '/images/mod-20220119_190954386_iOS.jpeg',
      '/images/mod-20220119_191351375_iOS.jpeg',
    ],
    bandImagesHeight: 410,
    card: {
      title: 'MODULAR PROCESS',
      subtitle: 'SKID PACKAGES',
      shortDesc:
        'Fully integrated, precision-built systems designed to accelerate deployment while maintaining uncompromising quality and performance.',
      image: '/images/modular-skids.jpg',
    },
  },
  {
    slug: 'piping-fabrication',
    title: 'Piping Fabrication',
    bodyLayout: 'dotted2',
    overview:
      'High-quality process piping fabricated to meet strict industry codes, ensuring reliability, performance, and seamless integration.',
    capabilities: [
      'Process spool piping fabrication',
      'Built to ASME, API, and industry standards',
      'Carbon steel, alloy, and stainless materials',
      'Certified welding and inspection procedures',
      'Ready-to-install assemblies',
    ],
    applications: [
      'Oil & gas facilities',
      'Petrochemical plants',
      'Industrial processing infrastructure',
    ],
    // Single section, two 50% columns
    imageRows: [
      {
        widths: ['50%', '50%'],
        images: ['/images/prod/20220907_165912178_iOS.jpeg', '/images/prod/20220516_230656501_iOS.jpeg'],
      },
    ],
    driveDocs: [],
    card: {
      title: 'PIPING',
      subtitle: 'FABRICATION',
      shortDesc:
        'Fabricated to strict specifications and quality control standards, delivering reliable piping solutions.',
      image: '/images/piping-fabrication.jpg',
    },
  },
  {
    slug: 'structural-fabrication',
    title: 'Structural Fabrication',
    bodyLayout: 'sidebar',
    overview:
      'Precision structural steel fabrication supporting industrial systems, equipment, and modular skids.',
    capabilities: [
      'Structural steel for industrial applications',
      'Skid bases and equipment support frames',
      'Heavy-duty fabrication for process systems',
      'Coatings and corrosion-resistant finishes',
      'Built to meet project-specific requirements',
    ],
    applications: [
      'Modular skid systems',
      'Industrial plants and facilities',
      'Equipment support and platforms',
    ],
    // Background-image band inside the main column (CSS background on the
    // original, not an <img>). 376px spacer inside 8px of padding.
    imageRows: [],
    bandImage: '/images/structural-bg.jpg',
    driveDocs: [],
    showProductsMenu: true,
    card: {
      title: 'STRUCTURAL',
      subtitle: 'FABRICATION',
      shortDesc:
        'Precision-engineered structural systems built for durability, stability, and seamless integration across complex industrial applications.',
      image: '/images/structural-fabrication.jpg',
    },
  },
  {
    slug: 'water-treatment',
    title: 'Water Treatment',
    bodyLayout: 'dotted2',
    overview:
      'Custom-engineered water treatment solutions designed to support efficient and reliable process operations.',
    capabilities: [
      'Process and produced water treatment systems',
      'Skid-mounted and modular designs',
      'Integration with broader processing units',
      'Engineered to meet specific operating conditions',
      'Reliable, low-maintenance performance',
    ],
    applications: [
      'Oil & gas water management',
      'Industrial process water treatment',
      'Environmental compliance systems',
    ],
    // Single section split 36.5% / 63.5%
    imageRows: [
      {
        widths: ['36.5%', '63.5%'],
        images: ['/images/prod/20241127_171922015_iOS-rotated.jpeg', '/images/prod/20260210_000325764_iOS.jpeg'],
      },
    ],
    driveDocs: [],
    card: {
      title: 'WATER',
      subtitle: 'TREATMENT',
      shortDesc:
        'Advanced treatment solutions engineered to deliver consistent quality, operational efficiency, and long-term sustainability.',
      image: '/images/water-treatment.jpg',
    },
  },
]
