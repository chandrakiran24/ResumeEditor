export const contentLibrary = {
  profile: {
    name: 'Chandra Kiran Narala',
    title: 'Software Engineer',
    location: 'New York, NY',
    email: 'naralachandrakiran24@gmail.com',
    phone: '1-551-331-7492',
    links: [{ label: 'LinkedIn', url: 'linkedin.com/in/chandrakirannarala' }]
  },
  summaries: {
    'Software Engineering':
      'Software Engineer with experience building distributed data pipelines, high-throughput microservices, and performance-critical systems in Python and C++. Strong background in scalable system design, fault-tolerant architectures, and algorithm optimization, with a track record of shipping production systems under real-time constraints.',
    'Hardware/FPGA':
      'Hardware and FPGA engineer with hands-on development in Verilog and low-latency systems. Experienced in translating protocol requirements into deterministic, testable designs for production environments.',
    'Quantitative Research':
      'Quantitative researcher and engineer with strong programming depth in Python and C++. Builds reproducible research pipelines, latency-sensitive execution components, and data-driven models for decision support.'
  },
  education: [
    {
      degree: 'MS in Electrical Engineering',
      school: 'NYU Tandon',
      location: 'USA',
      dates: 'Jan 2022 - May 2024',
      courses: ['Computer System Architecture', 'Advanced VLSI', 'Advanced Hardware Design', 'DSP']
    },
    {
      degree: 'Bachelors in Electronics and Communications Engineering',
      school: 'GVPCOE',
      location: 'India',
      dates: 'Jul 2016 - Sept 2020',
      courses: [
        'Data Structures and Algorithms',
        'System Design and Optimization',
        'Computer Architecture',
        'Digital Signal Processing',
        'OS'
      ]
    }
  ],
  professionalExperience: [
    {
      role: 'SRAM DV Engineer',
      company: 'NYU, USA',
      dates: 'Jan 2024 - Nov 2025',
      bullets: [
        'Led a 4-person research team to optimize a 256x4-bit SRAM array in 7 nm FinFET, using mathematical modeling and statistical analysis to reduce power consumption by 20% compared to a 6T SRAM cell.',
        'Developed and verified SRAM testbenches using Cocotb, enabling Python-based verification with functional and latency testing.',
        'Executed timing analysis to achieve timing closure while optimizing performance, area, and power trade-offs, resolving critical timing violations for reliable read and write operations at higher clock frequencies.',
        'Collaborated with physical design team on RTL-level fixes during timing closure with hands-on exposure to Cadence ASIC flow.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Cognizant Technology Solutions, India',
      dates: 'Nov 2020 - Dec 2021',
      bullets: [
        'Optimized distributed data processing pipeline handling 100K+ requests per second using Python multiprocessing and connection pooling, reducing latency by 20% and increasing throughput by 15% for 50K+ daily active users.',
        'Built fault-tolerant microservices with circuit breakers and retry mechanisms achieving 99.9% uptime, and implemented feature toggles and A/B testing for data-driven rollouts.',
        'Automated Python-based deployment pipeline reducing deployment time by 40% through parallel testing and smart test selection, accelerating feature delivery by 40% while maintaining 80% code coverage.',
        'Worked cross-functionally with Quality Assurance and software teams to deploy performance patches in agile sprints.'
      ]
    }
  ],
  projects: [
    {
      id: 'transit-aggregation-service',
      title: 'Python Real-Time Transit Data Aggregation Service',
      category: 'Software Engineering',
      highlights: [
        'Architected a Python-based system that integrates live arrival data from 7 Metropolitan Transportation Authority feeds across 22 subway lines, parsing binary protobuf data and delivering per-direction schedules with sub-1s latency at 400 to 500 daily requests.',
        'Built optimized feed-routing logic mapping each train line to its source endpoint, reducing unnecessary API calls by up to 85% on targeted queries.',
        'Deployed on Render with fault-tolerant recovery and zero-downtime restarts.'
      ]
    },
    {
      id: 'huffman-compression',
      title: 'C++-Based Huffman Compression System',
      category: 'Software Engineering',
      highlights: [
        'Executed a C++ compression utility using Huffman coding with memory management, bit-level operations, and efficient file I/O.',
        'Developed a high-performance file compression tool implementing Huffman coding algorithm for optimal data storage solutions.',
        'Achieved 47% size reduction with 1.89:1 compression ratio and sub-second processing for 2MB files, with 0.28s encoding and 0.37s decoding performance.'
      ]
    },
    {
      id: 'fingerprint-identification',
      title: 'Biometric Fingerprint Identification System',
      category: 'Hardware/FPGA',
      highlights: [
        'Developed a biometric fingerprint identification system using Python and OpenCV that processes raw fingerprint images through a 3-stage pipeline including background removal, ridge enhancement, and SIFT feature extraction.',
        'Implemented FLANN-based matching algorithm with geometric verification using RANSAC, achieving greater than 90% accuracy with 15+ keypoint correspondences and reducing false positives by 40%.',
        'Built complete end-to-end solution with Tkinter GUI for real-time processing at about 4 seconds per fingerprint comparison.'
      ]
    },
    {
      id: 'fix-parser',
      title: 'Distributed Ultra-Low-Latency Message Parsing Engine',
      category: 'Quantitative Research',
      highlights: [
        'Engineered a performance-optimized message parsing engine in C++ and Verilog on FPGA for ultra-low-latency FIX parsing in HFT systems.',
        'Designed a custom FSM-driven architecture with a round-robin FIFO buffer for parallel message storage and precompiled BRAM lookup tables for rapid tag=value mapping and real-time validation.',
        'Projected up to 200x faster processing with latencies in the 50 microsecond range and throughput in millions of messages per second compared to CPU-based parsing with around 7ms average latency.'
      ]
    }
  ],
  skills: {
    Programming: ['C', 'C++ (Modern C++)', 'Python (PyTorch, NumPy, Pandas, SciPy)', 'Verilog', 'SystemVerilog'],
    'Development Tools': [
      'Git',
      'Linux',
      'MySQL',
      'Cocotb/Pytest for verification',
      'Selenium',
      'Xilinx Vivado',
      'Matlab',
      'Cadence Virtuoso/Innovus'
    ],
    'Systems and Methodologies': ['Object-Oriented Design', 'Design Patterns', 'Multithreading', 'Distributed Systems', 'Agile / Scrum'],
    'Protocols and Techniques': ['Ethernet (TCP/IP)', 'System-level optimization', 'Data Processing Pipelines', 'Fault Tolerant Systems']
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
