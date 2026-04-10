export const contentLibrary = {
  profile: {
    name: 'Chandra Kiran Narala',
    title: 'Software/Hardware Co-design Engineer',
    location: 'New York, NY',
    email: 'chandrakirannarala@gmail.com',
    phone: '1-551-331-7492',
    links: [{ label: 'LinkedIn', url: 'linkedin.com/in/chandrakirannarala' }]
  },
  summaries: {
    'Hardware / FPGA Focus':
      'Hardware Engineer specializing in low-latency, performance-critical systems. Strong expertise in modern C++, multithreading, memory optimization, and real-time system design, with hands-on experience building hardware-accelerated pipelines using FPGAs and HDL toolchains.',
    'Software / Hardware Co-design':
      'Software/Hardware co-design Engineer with MS in Electrical Engineering and strong experience in high-performance systems, hardware acceleration. Skilled in Python, C++, and Verilog with a deep foundation in algorithms, computer architecture, and system-level optimization.',
    'Low Latency / HFT Focus':
      'Engineer with expertise in low-latency FPGA design, RTL coding, and hardware acceleration. Experienced in optimizing high-performance computing systems for ultra-low latency applications, including algorithmic trading and high-speed networking.'
  },
  education: [
    {
      degree: 'MS in Electrical Engineering',
      school: 'NYU Tandon',
      location: 'USA',
      dates: 'Jan 2022 - May 2024',
      courses: [
        'Computer System Architecture',
        'Advanced VLSI',
        'Advanced Hardware Design',
        'DSP',
        'Physics of Quantum Computing'
      ]
    },
    {
      degree: 'Bachelors in Electronics and Communications Engineering',
      school: 'GVPCOE',
      location: 'India',
      dates: 'Jul 2016 - Sept 2020',
      courses: [
        'Data Structures & Algorithms',
        'System Design & Optimization',
        'Computer Architecture',
        'Digital Logic Design'
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
      id: 'ultra-low-latency-fix-parser',
      title: 'Ultra-Low Latency FPGA-Based FIX Parser',
      category: 'Low Latency / HFT Focus',
      highlights: [
        'Engineered a horizontally scalable microservice parser (Verilog/Python) on FPGA for ultra-low latency FIX parsing in HFTs.',
        'Designed a custom FSM-driven design featuring a round-robin FIFO buffer for parallel message storage and precompiled BRAM lookup tables for rapid tag=value mapping and real-time validation, thereby eliminating the runtime overhead of XML parsing.',
        'Projected to achieve up to 200 times faster processing; delivering latencies in 30 microseconds range and handling millions of messages per second compared to CPU-based parsing, with 7ms average latency.'
      ]
    },
    {
      id: 'transit-aggregation-service',
      title: 'Python Real-Time Transit Data Aggregation Service',
      category: 'Software / Hardware Co-design',
      highlights: [
        'Architected a Python-based system that integrates live arrival data from 7 Metropolitan Transportation Authority feeds across 22 subway lines, parsing binary protobuf data and delivering per-direction schedules with sub-1s latency at 400-500 daily requests.',
        'Built optimized feed-routing logic mapping each train line to its source endpoint, reducing unnecessary API calls by up to 85% on targeted queries, and deployed on Render with fault-tolerant recovery and zero-downtime restarts.'
      ]
    },
    {
      id: 'huffman-compression',
      title: 'C++-Based Huffman Compression System',
      category: 'Software / Hardware Co-design',
      highlights: [
        'Developed a high-performance file compression tool implementing Huffman coding algorithm for optimal data storage solutions.',
        'Achieved 47% size reduction with 1.89:1 compression ratio and sub-second processing for 2MB files.',
        'Delivered perfect lossless reconstruction with 0.28s encoding and 0.37s decoding performance.'
      ]
    },
    {
      id: 'fingerprint-identification',
      title: 'Biometric Fingerprint Identification System',
      category: 'Software / Hardware Co-design',
      highlights: [
        'Developed a biometric fingerprint identification system using Python and OpenCV that processes raw fingerprint images through a 3-stage pipeline including background removal, ridge enhancement, and SIFT feature extraction.',
        'Implemented FLANN-based matching algorithm with geometric verification using RANSAC, achieving greater than 90% accuracy with 15+ keypoint correspondences and reducing false positives by 40%, by processing comparisons in ~4 seconds per fingerprint.'
      ]
    },
    {
      id: 'object-detection-zynq7000',
      title: 'Object Detection Model on Zynq-7000 SoC FPGA',
      category: 'Hardware / FPGA Focus',
      highlights: [
        'Deployed YOLOv8 in an autoscaling FPGA cluster, achieving the same performance while reducing power consumption by 96% compared to an Intel i5, reduced BRAM usage and minimized DSP block utilization.',
        'Integrated CNN using Vitis HLS and Vivado on a Zynq-7000 SoC, achieving real-time detection with a 3.2 Tbps throughput.'
      ]
    },
    {
      id: 'moving-average-crossover',
      title: 'Moving Average Crossover Trading Strategy',
      category: 'Low Latency / HFT Focus',
      highlights: [
        'Engineered Python-based backtesting framework using Backtrader and Matplotlib to process and analyze 2 years of historical market data of BTC across 500+ trading sessions, enhancing processing efficiency by 30%.',
        'Implemented a dual moving average crossover strategy (10-day and 20-day SMAs) that automated precise buy/sell signals, improving the Sharpe Ratio to 1.2 and optimizing risk-adjusted returns.'
      ]
    },
    {
      id: 'riscv-rv321',
      title: 'RISC-V RV321 32-bit Processor',
      category: 'Hardware / FPGA Focus',
      highlights: [
        'Architected a 32-bit RISC-V RV321 processor in Verilog, integrating a 5-stage pipeline for efficient instruction execution.',
        'Deployed an FPGA Basys3 board, achieving 100MHz operation with optimized timing constraints and logic utilization.'
      ]
    },
    {
      id: 'artix7-pong',
      title: 'Low Latency Pong Game on Artix-7 FPGA',
      category: 'Hardware / FPGA Focus',
      highlights: [
        'Designed and implemented a Pong game on Artix-7 FPGA using Verilog and VGA controller for 640x480 resolution at 60Hz.',
        'Developed custom finite state machines for low-latency paddle control, ball movement, and score tracking.'
      ]
    }
  ],
  skills: {
    Programming: [
      'C',
      'C++ (Modern C++)',
      'Python (PyTorch, NumPy, Pandas, SciPy)',
      'Java',
      'Verilog',
      'SystemVerilog',
      'VHDL',
      'x86 Assembly Level'
    ],
    'Development Tools': [
      'Git',
      'Linux',
      'MySQL',
      'Cocotb/Pytest for verification',
      'Selenium',
      'Xilinx Vivado',
      'Matlab',
      'Cadence Virtuoso/Innovus',
      'Altera Quartus Prime'
    ],
    'Systems and Methodologies': [
      'Object-Oriented Design',
      'Design Patterns',
      'Multithreading',
      'Distributed Systems',
      'Agile / Scrum',
      'FSM-based Architecture',
      'REST APIs'
    ],
    'Protocols and Techniques': [
      'Ethernet (TCP/IP)',
      'FIX Protocol',
      'I2C',
      'SPI',
      'PCIe',
      'UART',
      'RS-232',
      'System-level optimization'
    ]
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
