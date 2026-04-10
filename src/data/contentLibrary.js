export const contentLibrary = {
  profile: {
    name: 'Alex Candidate',
    title: 'Full-Stack Engineer',
    location: 'New York, NY',
    email: 'alex.candidate@email.com',
    phone: '+1 (212) 555-0129',
    links: [
      { label: 'LinkedIn', url: 'linkedin.com/in/alexcandidate' },
      { label: 'GitHub', url: 'github.com/alexcandidate' },
      { label: 'Portfolio', url: 'alexcandidate.dev' }
    ]
  },
  summaries: {
    'Software Engineering':
      'Software engineer with experience building high-throughput backend services, real-time data pipelines, and developer-first tooling. Focused on clear architecture, reliable delivery, and measurable business impact.',
    'Hardware/FPGA':
      'Hardware and FPGA engineer with hands-on development in Verilog and low-latency systems. Experienced in translating protocol requirements into deterministic, testable designs for production environments.',
    'Quantitative Research':
      'Quantitative researcher and engineer with strong programming depth in Python and C++. Builds reproducible research pipelines, latency-sensitive execution components, and data-driven models for decision support.'
  },
  education: [
    {
      degree: 'Master of Science in Computer Engineering',
      school: 'NYU Tandon School of Engineering',
      location: 'Brooklyn, NY'
    },
    {
      degree: 'Bachelor of Engineering',
      school: 'Gayatri Vidya Parishad College of Engineering (GVPCOE)',
      location: 'Visakhapatnam, India'
    }
  ],
  professionalExperience: [
    {
      role: 'Software Engineer',
      company: 'FinTech Systems Inc.',
      dates: '2022 - Present',
      bullets: [
        'Delivered event-driven microservices for trade and risk analytics that improved data freshness by 35%.',
        'Partnered with product and operations teams to automate compliance reporting workflows.',
        'Implemented observability standards across services to reduce incident resolution time.'
      ]
    },
    {
      role: 'Engineering Intern',
      company: 'Edge Compute Labs',
      dates: '2021 - 2022',
      bullets: [
        'Built internal tooling in Python for hardware validation and regression execution.',
        'Contributed to low-level C++ modules for binary parsing and diagnostics.'
      ]
    }
  ],
  projects: [
    {
      id: 'transit-aggregation-service',
      title: 'Python Real-Time Transit Data Aggregation Service',
      category: 'Software Engineering',
      highlights: [
        'Aggregated GTFS-realtime feeds and weather events into a unified stream for city-wide transit monitoring.',
        'Used Python async workers and Redis queues to support burst traffic with stable latency.',
        'Published metrics and alerting hooks to improve on-call response quality.'
      ]
    },
    {
      id: 'huffman-compression',
      title: 'C++-Based Huffman Compression System',
      category: 'Software Engineering',
      highlights: [
        'Implemented entropy encoding and decoding with a focus on deterministic performance.',
        'Benchmarked memory usage and throughput across text and binary corpora.',
        'Packaged a CLI workflow with reproducible test vectors for regression testing.'
      ]
    },
    {
      id: 'fingerprint-identification',
      title: 'Biometric Fingerprint Identification System',
      category: 'Hardware/FPGA',
      highlights: [
        'Designed a feature extraction pipeline for minutiae matching from grayscale images.',
        'Integrated pre-processing and template comparison modules with accuracy tracking.',
        'Documented model and threshold tuning across noisy and partial-print datasets.'
      ]
    },
    {
      id: 'fix-parser',
      title: 'Ultra-Low-Latency FIX Parser',
      category: 'Quantitative Research',
      highlights: [
        'Built a zero-copy parser in C++ for streaming FIX messages with strict schema validation.',
        'Reduced parse latency by optimizing field lookup and buffer reuse paths.',
        'Added deterministic benchmarks and protocol edge-case test coverage.'
      ]
    }
  ],
  skills: {
    Software: ['Python', 'C++', 'TypeScript', 'Node.js', 'SQL'],
    Hardware: ['Verilog', 'SystemVerilog', 'FPGA Bring-Up', 'Timing Analysis'],
    Protocols: ['FIX', 'TCP/IP', 'WebSocket', 'REST'],
    Tools: ['Git', 'Docker', 'Linux', 'Vivado', 'CI/CD']
  }
};

export const jobTitles = [
  'FPGA Engineer',
  'Senior FPGA Engineer',
  'Hardware Design Engineer',
  'RTL Design Engineer',
  'Verification Engineer',
  'Embedded Systems Engineer',
  'ASIC Prototyping Engineer',
  'Low Latency Engineer',
  'Software Engineer',
  'Senior Software Engineer',
  'Backend Software Engineer',
  'Distributed Systems Engineer',
  'Full-Stack Developer',
  'Data Engineer',
  'Machine Learning Engineer',
  'Software Developer - Drug Discovery',
  'C++ Trading and Simulator Engineer',
  'Quantitative Developer',
  'Quantitative Research Engineer',
  'Quantitative Analyst',
  'Algorithmic Trading Engineer',
  'Market Data Engineer',
  'Platform Engineer',
  'Site Reliability Engineer',
  'DevOps Engineer',
  'Research Engineer',
  'Research Scientist - Applied ML',
  'Computer Vision Engineer',
  'Signal Processing Engineer',
  'Robotics Software Engineer',
  'Cloud Engineer',
  'Infrastructure Engineer',
  'Solutions Engineer',
  'Technical Program Engineer',
  'Performance Engineer',
  'Compiler Engineer',
  'Systems Engineer',
  'Protocol Engineer',
  'Test Automation Engineer',
  'Production Engineer',
  'Security Engineer',
  'Application Engineer',
  'Data Platform Engineer',
  'Financial Systems Engineer'
];
