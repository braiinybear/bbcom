// data/courses.ts
import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "ai-ml-course",
    title: "Artificial Intelligence & Machine Learning",
    category: "IT Courses",
    description:
      "A complete guide to AI & ML including deep learning, NLP, and hands-on projects.",
    image: "/images/ai-ml.jpg",
    duration: "12 weeks",
    whatYouWillLearn: [
      "Understand the fundamentals of AI & ML",
      "Build ML models using Python and Scikit-Learn",
      "Preprocess and analyze data effectively",
      "Implement deep learning models with TensorFlow",
      "Build AI applications using NLP techniques",
      "Work with real-world AI projects",
      "Deploy AI solutions as web apps",
      "Explore careers and applications in AI",
    ],
    includes: [
      { label: "60+ hours on-demand video", icon: "video" },
      { label: "Real-world case studies & hands-on labs", icon: "code" },
      { label: "Downloadable resources", icon: "download" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" },
    ],
    
    modules: [
      {
        title: "Introduction to AI & Machine Learning",
        lecturesCount: 9,
        duration: "37min",
        chapters: [
          { title: "What is Artificial Intelligence?", duration: "03:08", preview: true },
          { title: "Types of AI" },
          { title: "Introduction to Machine Learning" },
          { title: "AI vs ML vs DL" },
          { title: "Real-World AI Applications" },
          { title: "Hands-on Project: Predict housing prices" },
        ],
      },
      {
        title: "Programming for AI & ML (Python & Data Science Basics)",
        lecturesCount: 10,
        duration: "52min",
        chapters: [
          { title: "Setting Up Python for AI Development" },
          { title: "Essential Python Libraries: NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn" },
          { title: "Data Preprocessing: Missing Values, Feature Scaling, Encoding" },
          { title: "Exploratory Data Analysis (EDA)" },
          { title: "Introduction to SQL for Data Handling" },
          { title: "Hands-on Project: Clean and Analyze a Dataset" },
        ],
      },
      {
        title: "Supervised & Unsupervised Learning",
        lecturesCount: 12,
        duration: "60min",
        chapters: [
          { title: "Understanding Regression & Classification" },
          { title: "Linear & Logistic Regression" },
          { title: "Classification with Decision Trees, Random Forest, SVM" },
          { title: "Unsupervised Learning: K-Means & Hierarchical Clustering" },
          { title: "Dimensionality Reduction: PCA" },
          { title: "Hands-on Project: Customer Churn Prediction" },
        ],
      },
      {
        title: "Deep Learning & Neural Networks",
        lecturesCount: 11,
        duration: "58min",
        chapters: [
          { title: "Introduction to Neural Networks" },
          { title: "Backpropagation & Activation Functions" },
          { title: "Convolutional Neural Networks (CNNs)" },
          { title: "Recurrent Neural Networks (RNNs) & LSTMs" },
          { title: "Transformers & LLMs (BERT, GPT)" },
          { title: "Hands-on Project: Build an Image Classifier" },
        ],
      },
      {
        title: "AI for Natural Language Processing (NLP)",
        lecturesCount: 9,
        duration: "47min",
        chapters: [
          { title: "Text Preprocessing: Tokenization, Stemming, Lemmatization" },
          { title: "Sentiment Analysis & Text Classification" },
          { title: "Named Entity Recognition (NER)" },
          { title: "Word Embeddings: Word2Vec, GloVe, BERT" },
          { title: "AI-Powered Chatbots" },
          { title: "Hands-on Project: Sentiment Analysis Model" },
        ],
      },
      {
        title: "Final Project: Real-World AI Solution",
        lecturesCount: 6,
        duration: "40min",
        chapters: [
          { title: "Select an AI Problem (e.g., fraud detection)" },
          { title: "Train and Optimize an ML Model" },
          { title: "Deploy as Web/Mobile Application" },
          { title: "Present Report on AI Impact & Opportunities" },
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
  category: "IT Courses",
  title: "Cybersecurity: Protecting Digital Assets & Ethical Hacking",
  image: "/images/courses/cybersecurity.jpg",
  duration: "12 Weeks", 
  description:
      "Learn to secure digital systems, prevent cyber attacks, and explore ethical hacking techniques. Ideal for IT professionals, entrepreneurs, and security enthusiasts.",
    whatYouWillLearn: [
      "Understand cybersecurity fundamentals & best practices",
      "Identify and mitigate security threats & vulnerabilities",
      "Conduct ethical hacking & penetration testing",
      "Secure cloud infrastructure & web applications",
      "Develop a cybersecurity strategy for businesses"
    ],
    includes: [
      { label: "60+ hours of content", icon: "video" },
      { label: "Real-world case studies & hands-on labs", icon: "code" },
      { label: "Final capstone project", icon: "app-window" },
      { label: "Certificate of completion", icon: "certificate" },
      { label: "Access on mobile and desktop", icon: "mobile" }
    ],
    modules: [
      {
        title: "Introduction to Cybersecurity",
        duration: "4h",
        lecturesCount: 6,
        chapters: [
          { title: "Understanding Cybersecurity" },
          { title: "Cyber Threats: Malware, Phishing, Ransomware" },
          { title: "Social Engineering & Attack Vectors" },
          { title: "Cybersecurity Frameworks: NIST, ISO 27001, CIS Controls" },
          { title: "Cybersecurity Careers & Certifications" },
          { title: "Case Study: Equifax & WannaCry" }
        ]
      },
      {
        title: "Network Security & Infrastructure Protection",
        duration: "5h",
        lecturesCount: 5,
        chapters: [
          { title: "Networking Basics: LAN, WAN, VPN" },
          { title: "Secure Network Architecture & Zero Trust Security" },
          { title: "IDS/IPS Systems" },
          { title: "Wi-Fi Security & Wireless Attacks" },
          { title: "Hands-on Lab: Configuring a Firewall", preview: true }
        ]
      },
      {
        title: "Ethical Hacking & Penetration Testing",
        duration: "6h",
        lecturesCount: 6,
        chapters: [
          { title: "Phases of Ethical Hacking" },
          { title: "Footprinting & Reconnaissance (OSINT)" },
          { title: "Network Scanning Tools: Nmap, Wireshark" },
          { title: "Exploiting Web Apps & SQL Injection" },
          { title: "Hands-on Lab: Penetration Testing", preview: true }
        ]
      },
      {
        title: "Web Application Security & Secure Coding",
        duration: "4.5h",
        lecturesCount: 5,
        chapters: [
          { title: "OWASP Top 10 Threats" },
          { title: "Cross-Site Scripting (XSS) & CSRF" },
          { title: "Authentication & Authorization Best Practices" },
          { title: "Hands-on Lab: Securing a Web Application", preview: true }
        ]
      },
      {
        title: "Cloud Security & DevSecOps",
        duration: "5h",
        lecturesCount: 5,
        chapters: [
          { title: "Cloud Security Models: AWS, Azure, GCP" },
          { title: "IAM in Cloud Environments" },
          { title: "Container Security: Docker & Kubernetes" },
          { title: "Security in CI/CD Pipelines (DevSecOps)" },
          { title: "Hands-on Lab: Securing Cloud Environments" }
        ]
      },
      {
        title: "Digital Forensics & Incident Response",
        duration: "4h",
        lecturesCount: 4,
        chapters: [
          { title: "Cyber Forensics & Evidence Collection" },
          { title: "Incident Response Lifecycle" },
          { title: "Reverse Engineering Malware" },
          { title: "Hands-on Lab: Forensic Investigation" }
        ]
      },
      {
        title: "Cryptography & Data Protection",
        duration: "3.5h",
        lecturesCount: 4,
        chapters: [
          { title: "Encryption Techniques: AES, RSA, SHA-256" },
          { title: "Public Key Infrastructure & SSL/TLS" },
          { title: "Blockchain Security" },
          { title: "Hands-on Lab: Encrypting Data with OpenSSL" }
        ]
      },
      {
        title: "Cybersecurity Governance & Compliance",
        duration: "3.5h",
        lecturesCount: 4,
        chapters: [
          { title: "Security Policies & Risk Management" },
          { title: "Data Privacy Laws: GDPR, HIPAA" },
          { title: "Business Continuity & Disaster Recovery" },
          { title: "Case Study: Compliance in Action" }
        ]
      },
      {
        title: "Capstone Project",
        duration: "Final Project",
        lecturesCount: 1,
        chapters: [
          { title: "Developing a Cybersecurity Strategy for an Organization" }
        ]
      }
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing: Mastering Cloud Technologies & Services",
    category: "IT Courses",
    description:
      "Master the fundamentals of cloud computing including core services, security, DevOps, and real-world implementation across AWS, Azure, and GCP.",
      image: "/images/courses/cloud-computing.jpg",
      duration: "45h 00m",
    whatYouWillLearn: [
      "Understand cloud service and deployment models (IaaS, PaaS, SaaS)",
      "Implement secure and scalable cloud infrastructure",
      "Leverage DevOps and automation with CI/CD and Terraform",
      "Work with serverless architecture and containerized applications",
      "Deploy AI/ML workloads and manage big data in the cloud",
      "Optimize cloud costs and manage billing",
      "Develop and deploy real-world cloud solutions"
    ],
    includes: [
      { label: "45+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and projects", icon: "code" },
      { label: "Downloadable resources", icon: "download" },
      { label: "Mobile and desktop access", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Cloud Computing",
        lecturesCount: 6,
        duration: "1h 30m",
        chapters: [
          { title: "What is Cloud Computing?" },
          { title: "Cloud Service Models (IaaS, PaaS, SaaS)" },
          { title: "Cloud Deployment Models" },
          { title: "Leading Cloud Providers" },
          { title: "Cloud Use Cases" },
          { title: "Case Study: Real-world Cloud Migration" }
        ]
      },
      {
        title: "Core Cloud Services & Architecture",
        lecturesCount: 5,
        duration: "2h",
        chapters: [
          { title: "Compute Services" },
          { title: "Storage Solutions" },
          { title: "Networking in the Cloud" },
          { title: "Database Services" },
          { title: "Hands-on Lab: Deploying a Web App" }
        ]
      },
      {
        title: "Cloud Security & Identity Management",
        lecturesCount: 5,
        duration: "2h",
        chapters: [
          { title: "Cloud Security Best Practices" },
          { title: "IAM & Permission Management" },
          { title: "Encryption & Data Protection" },
          { title: "Security Groups & Firewalls" },
          { title: "Hands-on Lab: IAM & Security Policies" }
        ]
      },
      {
        title: "Serverless Computing & Microservices",
        lecturesCount: 4,
        duration: "1h 30m",
        chapters: [
          { title: "Understanding Serverless Architecture" },
          { title: "Function-as-a-Service (AWS Lambda, etc.)" },
          { title: "Microservices & Containers" },
          { title: "Hands-on Lab: Deploying Serverless App" }
        ]
      },
      {
        title: "Cloud DevOps & Automation",
        lecturesCount: 4,
        duration: "1h 45m",
        chapters: [
          { title: "Introduction to Cloud DevOps" },
          { title: "CI/CD Pipelines" },
          { title: "Infrastructure as Code (IaC)" },
          { title: "Hands-on Lab: Terraform Deployment" }
        ]
      },
      {
        title: "Cloud Networking & Hybrid Cloud Solutions",
        lecturesCount: 4,
        duration: "1h 30m",
        chapters: [
          { title: "Cloud Networking Basics" },
          { title: "Load Balancing & Auto Scaling" },
          { title: "Hybrid & Multi-Cloud Strategies" },
          { title: "Hands-on Lab: Hybrid Cloud Setup" }
        ]
      },
      {
        title: "AI, Big Data & Analytics in the Cloud",
        lecturesCount: 3,
        duration: "1h",
        chapters: [
          { title: "Intro to AI/ML in the Cloud" },
          { title: "Big Data Processing Services" },
          { title: "Hands-on Lab: Deploy ML Model" }
        ]
      },
      {
        title: "Cloud Cost Management & Optimization",
        lecturesCount: 3,
        duration: "1h",
        chapters: [
          { title: "Cloud Pricing & Billing" },
          { title: "Cost Optimization Strategies" },
          { title: "Hands-on Lab: AWS Cost Explorer" }
        ]
      },
      {
        title: "Cloud Migration & Final Project",
        lecturesCount: 4,
        duration: "1h 30m",
        chapters: [
          { title: "Cloud Migration Strategies" },
          { title: "Enterprise Cloud Adoption Challenges" },
          { title: "Case Study: Major Cloud Migration" },
          { title: "Final Project: Deploy a Cloud-Based Solution", preview: true }
        ]
      }
    ]
  },
  {
    id: "data-science-analytics",
    title: "Data Science & Analytics: From Data to Decision-Making",
    category: "IT Courses",
    description:
      "Master data analysis, machine learning, big data, and business intelligence with hands-on tools like Python, R, SQL, and cloud platforms.",
    image: "/images/courses/data-science.jpg",
    duration: "50h 00m",
    whatYouWillLearn: [
      "Work with data using Python, R, SQL, and cloud platforms",
      "Perform exploratory data analysis and data visualization",
      "Build and deploy machine learning models",
      "Handle big data and real-time analytics",
      "Make data-driven business decisions"
    ],
    includes: [
      { label: "50+ hours on-demand video", icon: "video" },
      { label: "20+ coding exercises", icon: "code" },
      { label: "Downloadable resources", icon: "download" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Data Science & Analytics",
        lecturesCount: 4,
        duration: "3h 00m",
        chapters: [
          { title: "Fundamentals of Data Science" },
          { title: "Comparing Data Science, Analytics, and AI" },
          { title: "Popular Data Science Tools" },
          { title: "Case Study: Netflix’s Recommendation System" }
        ]
      },
      {
        title: "Data Collection & Preprocessing",
        lecturesCount: 4,
        duration: "3h 30m",
        chapters: [
          { title: "Data Collection Techniques" },
          { title: "Handling Missing Data" },
          { title: "Feature Engineering" },
          { title: "Hands-on Lab – Data Cleaning" }
        ]
      },
      {
        title: "Exploratory Data Analysis (EDA) & Visualization",
        lecturesCount: 4,
        duration: "4h 00m",
        chapters: [
          { title: "Data Distributions & Summary Statistics" },
          { title: "Data Visualization Techniques" },
          { title: "Identifying Correlations & Trends" },
          { title: "Hands-on Lab – Sales Data Visualization" }
        ]
      },
      {
        title: "SQL for Data Science & Databases",
        lecturesCount: 4,
        duration: "3h 00m",
        chapters: [
          { title: "Writing SQL Queries" },
          { title: "Advanced SQL Operations" },
          { title: "Introduction to NoSQL Databases" },
          { title: "Hands-on Lab – SQL Insights" }
        ]
      },
      {
        title: "Machine Learning Basics",
        lecturesCount: 4,
        duration: "4h 00m",
        chapters: [
          { title: "Supervised vs. Unsupervised Learning" },
          { title: "Regression Models" },
          { title: "Classification Techniques" },
          { title: "Hands-on Lab – Predictive Model" }
        ]
      },
      {
        title: "Advanced Machine Learning & AI Applications",
        lecturesCount: 4,
        duration: "4h 30m",
        chapters: [
          { title: "Neural Networks & Deep Learning" },
          { title: "Time-Series Forecasting" },
          { title: "Natural Language Processing (NLP)" },
          { title: "Hands-on Lab – Sentiment Analysis" }
        ]
      },
      {
        title: "Big Data & Cloud-Based Analytics",
        lecturesCount: 4,
        duration: "4h 00m",
        chapters: [
          { title: "Big Data Technologies" },
          { title: "Cloud-Based Data Warehousing" },
          { title: "Real-Time Data Processing" },
          { title: "Hands-on Lab – BigQuery Analysis" }
        ]
      },
      {
        title: "Business Intelligence & Decision-Making",
        lecturesCount: 4,
        duration: "3h 30m",
        chapters: [
          { title: "Data-Driven Decision Making" },
          { title: "A/B Testing" },
          { title: "Key Performance Indicators (KPIs)" },
          { title: "Case Study – Amazon Insights" }
        ]
      },
      {
        title: "Data Science Ethics & Security",
        lecturesCount: 4,
        duration: "3h 00m",
        chapters: [
          { title: "AI Bias & Fairness" },
          { title: "Data Privacy Regulations" },
          { title: "Cybersecurity in Data Science" },
          { title: "Case Study – AI Ethics" }
        ]
      },
      {
        title: "Final Project: Real-World Business Challenge",
        lecturesCount: 4,
        duration: "4h 30m",
        chapters: [
          { title: "Collect & Clean Data" },
          { title: "Perform Exploratory Data Analysis" },
          { title: "Build a Predictive Model" },
          { title: "Present Insights & Findings" }
        ]
      }
    ]
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development: Build Decentralized Applications & Smart Contracts",
    category: "IT Courses",
    image: "/images/courses/blockchain-development.jpg",
    duration: "14 Weeks",
    description:
      "Master blockchain architecture, smart contracts, and dApp development using Ethereum, Solidity, and Hyperledger. This hands-on course is perfect for developers, entrepreneurs, and tech enthusiasts.",
    whatYouWillLearn: [
      "Understand blockchain fundamentals and cryptographic principles",
      "Develop and deploy smart contracts using Solidity",
      "Build full-stack decentralized applications (dApps)",
      "Work with Ethereum, Polygon, BSC, and Hyperledger",
      "Implement smart contract auditing and security best practices"
    ],
    includes: [
      { label: "60+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and exercises", icon: "code" },
      { label: "Full-stack dApp projects", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" },
    ],
    modules: [
      {
        title: "Introduction to Blockchain Technology",
        lecturesCount: 6,
        duration: "1 Week",
        chapters: [
          { title: "Blockchain Fundamentals" },
          { title: "Types of Blockchain Networks" },
          { title: "Consensus Mechanisms" },
          { title: "Blockchain Platforms Overview" },
          { title: "Case Study: Blockchain in Finance" },
        ]
      },
      {
        title: "Cryptography & Security in Blockchain",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Cryptographic Hash Functions" },
          { title: "Public/Private Key Cryptography" },
          { title: "Digital Signatures" },
          { title: "Blockchain Security Challenges" },
          { title: "Lab: Verifying Digital Signatures" },
        ]
      },
      {
        title: "Smart Contract Development with Solidity",
        lecturesCount: 6,
        duration: "2 Weeks",
        chapters: [
          { title: "Solidity Basics & Syntax" },
          { title: "Deploying Smart Contracts" },
          { title: "Functions & Access Control" },
          { title: "Managing Gas Fees" },
          { title: "Lab: ERC-20 Token Development" },
        ]
      },
      {
        title: "Decentralized Applications (dApps) Development",
        lecturesCount: 6,
        duration: "2 Weeks",
        chapters: [
          { title: "Web3.js & Ethers.js" },
          { title: "React + Next.js for dApps" },
          { title: "Interacting with Smart Contracts" },
          { title: "Blockchain Transactions & Events" },
          { title: "Lab: Voting dApp" },
        ]
      },
      {
        title: "Advanced Smart Contract Development",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Smart Contract Security" },
          { title: "Oracles & Chainlink" },
          { title: "Gas Optimization" },
          { title: "Lab: NFT Marketplace" },
        ]
      },
      {
        title: "Decentralized Finance (DeFi) & Tokenomics",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "DeFi Lending & Staking" },
          { title: "Stablecoins & AMMs" },
          { title: "DEX Smart Contracts" },
          { title: "Case Study: Uniswap & Aave" },
        ]
      },
      {
        title: "NFTs & Metaverse Development",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "ERC-721 vs ERC-1155" },
          { title: "Minting & Trading NFTs" },
          { title: "NFT Minting dApp" },
          { title: "Lab: Launch NFT Collection" },
        ]
      },
      {
        title: "Blockchain Scalability & Layer 2 Solutions",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Layer 2 Protocols" },
          { title: "Cross-Chain Interoperability" },
          { title: "Rollups & ZK Rollups" },
          { title: "Lab: Deploy on Polygon" },
        ]
      },
      {
        title: "Hyperledger & Enterprise Blockchain Solutions",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Hyperledger Fabric Overview" },
          { title: "Enterprise Blockchain Use Cases" },
          { title: "Deploying Contracts in Hyperledger" },
          { title: "Case Study: IBM Supply Chain" },
        ]
      },
      {
        title: "Blockchain Security & Auditing",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Smart Contract Auditing" },
          { title: "Security Tools Overview" },
          { title: "Best Practices for Web3 Security" },
          { title: "Lab: Security Audit of Smart Contract" },
        ]
      },
      {
        title: "Final Project",
        lecturesCount: 1,
        duration: "1 Week",
        chapters: [
          { title: "Build and Deploy a Real-World Blockchain App" }
        ]
      },
    ]
  },
  {
    id: "iot-course",
    title: "Internet of Things (IoT): From Sensors to Smart Solutions",
    category: "IT Courses",
    image: "/images/courses/iot-course.jpg",
    duration: "14 Weeks",
    description:
      "Build end-to-end IoT solutions using sensors, cloud platforms, and AI. Gain practical experience in hardware integration, security, and real-time analytics for smart applications.",
    whatYouWillLearn: [
      "Understand IoT architecture & build connected solutions",
      "Work with sensors, microcontrollers & IoT cloud platforms",
      "Secure IoT devices & implement data encryption",
      "Deploy AI-powered IoT applications for automation",
      "Develop real-world IoT projects for smart homes, healthcare, and industry"
    ],
    includes: [
      { label: "60+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and exercises", icon: "code" },
      { label: "IoT project-based learning", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" },
    ],
    modules: [
      { title: "Introduction to IoT & Ecosystem", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "What is IoT?" },
        { title: "Components of IoT" },
        { title: "IoT Applications" },
        { title: "IoT Communication Protocols" },
        { title: "Case Study: IoT in Smart Homes & Industry" }
      ]},
      { title: "IoT Hardware & Sensor Integration", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "Microcontrollers & SBCs" },
        { title: "Common IoT Sensors & Actuators" },
        { title: "Sensor Data Processing" },
        { title: "Lab: Sensor Integration with Raspberry Pi" }
      ]},
      { title: "IoT Connectivity & Protocols", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Wireless Communication Technologies" },
        { title: "IoT Networking & IPv6" },
        { title: "MQTT, HTTP, WebSockets" },
        { title: "Lab: MQTT Broker Setup" }
      ]},
      { title: "IoT Cloud Platforms & Data Processing", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Overview of AWS, Azure & GCP IoT" },
        { title: "Data Streaming & Storage" },
        { title: "Edge Computing & Analytics" },
        { title: "Lab: Sending Data to AWS IoT Core" }
      ]},
      { title: "AIoT: IoT + Artificial Intelligence", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Integrating ML with IoT" },
        { title: "Predictive Maintenance" },
        { title: "Edge AI with TensorFlow Lite" },
        { title: "Lab: AI-Based Anomaly Detection" }
      ]},
      { title: "IoT Security & Privacy", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "IoT Security Threats" },
        { title: "Authentication & Encryption" },
        { title: "Security Standards & Compliance" },
        { title: "Lab: Secure IoT Communication" }
      ]},
      { title: "IoT in Smart Homes & Industry", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Home Automation" },
        { title: "Industrial IoT (IIoT)" },
        { title: "Healthcare IoT" },
        { title: "Lab: Smart Light Control with Mobile App" }
      ]},
      { title: "Edge Computing & Gateway Development", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Edge vs Cloud Computing" },
        { title: "IoT Gateway Architecture" },
        { title: "Latency & Bandwidth Optimization" },
        { title: "Lab: Object Detection with Edge AI" }
      ]},
      { title: "Blockchain for IoT Security", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "Blockchain for IoT" },
        { title: "Secure Data Transactions" },
        { title: "Decentralized IoT Networks" },
        { title: "Case Study: Blockchain + IoT in Supply Chain" }
      ]},
      { title: "IoT Project Development & Deployment", lecturesCount: 4, duration: "1 Week", chapters: [
        { title: "IoT System Design" },
        { title: "Tool & Platform Selection" },
        { title: "IoT Deployment Strategies" },
        { title: "Lab: Smart Home Project" }
      ]},
      { title: "Final Project", lecturesCount: 1, duration: "1 Week", chapters: [
        { title: "Build and Deploy a Complete IoT Solution" }
      ]}
    ]
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development: Mastering Frontend & Backend Technologies",
    category: "IT Courses",
    image: "/images/courses/full-stack-development.jpg",
    duration: "16 Weeks",
    description:
      "Gain hands-on experience in building scalable web applications from scratch. Learn frontend and backend development, database management, REST APIs, authentication, cloud deployment, DevOps, and real-time technologies.",
    whatYouWillLearn: [
      "Build responsive web frontends using HTML, CSS, JavaScript, and React",
      "Create RESTful APIs with Node.js and Express",
      "Work with SQL and NoSQL databases using ORMs",
      "Secure applications with authentication and authorization",
      "Use Git, CI/CD pipelines, Docker, and Kubernetes",
      "Deploy full-stack apps to cloud platforms like AWS and GCP"
    ],
    includes: [
      { label: "70+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and exercises", icon: "code" },
      { label: "Full-stack project development", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" },
    ],
    modules: [
      { title: "Introduction to Full-Stack Development", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "What is a Full-Stack Developer?" },
        { title: "Frontend vs Backend Responsibilities" },
        { title: "Web Architecture Overview" },
        { title: "Modern Development Stacks (MERN, MEAN, LAMP, JAMstack)" },
        { title: "Case Study: Netflix & Airbnb Architecture" }
      ]},
      { title: "Frontend Development (HTML, CSS, JavaScript)", lecturesCount: 6, duration: "1 Week", chapters: [
        { title: "HTML5 & Semantic Structure" },
        { title: "CSS Flexbox, Grid, Animations" },
        { title: "JavaScript ES6+ Fundamentals" },
        { title: "Intro to React, Angular, Vue" },
        { title: "State Management: Redux, Context API" },
        { title: "Lab: Build a Responsive Web Page" }
      ]},
      { title: "Advanced Frontend Development", lecturesCount: 6, duration: "1 Week", chapters: [
        { title: "React Basics & Hooks" },
        { title: "Performance Optimization" },
        { title: "Material-UI, Bootstrap, Tailwind CSS" },
        { title: "Routing with React Router" },
        { title: "API Integration with Axios/Fetch" },
        { title: "Lab: Multi-page Web App" }
      ]},
      { title: "Backend Development (Node.js & Express.js)", lecturesCount: 6, duration: "1 Week", chapters: [
        { title: "Node.js & NPM Basics" },
        { title: "Express.js & Middleware" },
        { title: "RESTful API Design" },
        { title: "Authentication with JWT, OAuth" },
        { title: "Error Handling & Logging" },
        { title: "Lab: Backend API with Express.js" }
      ]},
      { title: "Databases & ORM (SQL & NoSQL)", lecturesCount: 6, duration: "1 Week", chapters: [
        { title: "SQL vs NoSQL Overview" },
        { title: "MySQL, PostgreSQL, MongoDB" },
        { title: "Using Mongoose & Sequelize" },
        { title: "Database Optimization Techniques" },
        { title: "Lab: CRUD with MongoDB & Mongoose" }
      ]},
      { title: "Building & Securing RESTful APIs", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "REST API Design Principles" },
        { title: "Security: OAuth2, JWT, Session-based" },
        { title: "Rate Limiting & Throttling" },
        { title: "Data Validation & CORS" },
        { title: "Lab: Secure REST API" }
      ]},
      { title: "DevOps & Deployment", lecturesCount: 6, duration: "1 Week", chapters: [
        { title: "Intro to CI/CD & Automation" },
        { title: "Docker Containers" },
        { title: "Kubernetes Orchestration" },
        { title: "AWS, GCP, Azure Deployment" },
        { title: "Monitoring with Prometheus & Grafana" },
        { title: "Lab: Deploy App with Docker on AWS" }
      ]},
      { title: "Version Control & Collaboration", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "Git & GitHub Essentials" },
        { title: "Branching & GitFlow" },
        { title: "Code Reviews & Pull Requests" },
        { title: "CI/CD Pipelines with GitHub Actions" },
        { title: "Lab: Team Collaboration on GitHub" }
      ]},
      { title: "GraphQL & WebSockets", lecturesCount: 5, duration: "1 Week", chapters: [
        { title: "GraphQL vs REST" },
        { title: "GraphQL Server Setup" },
        { title: "WebSockets for Real-Time" },
        { title: "Lab: Real-Time Chat App" }
      ]},
      { title: "Building & Deploying a Full-Stack Project", lecturesCount: 6, duration: "2 Weeks", chapters: [
        { title: "Project Planning & Architecture" },
        { title: "Frontend & Backend Integration" },
        { title: "Cloud Deployment with Custom Domain" },
        { title: "Performance Optimization" },
        { title: "Lab: Full-Stack App Deployment" }
      ]},
      { title: "Final Project", lecturesCount: 1, duration: "1 Week", chapters: [
        { title: "Build & Deploy a Full-Stack Application (E-commerce, Social Media, etc.)" }
      ]}
    ]
  },
  {
    id: "devops",
    title: "DevOps: Mastering Automation, CI/CD, and Cloud Deployment",
    category: "IT Courses",
    image: "/images/courses/devops.jpg",
    duration: "12 Weeks",
    description:
      "Master DevOps principles, CI/CD pipelines, container orchestration, infrastructure as code, and cloud deployment with tools like Jenkins, Docker, Kubernetes, Terraform, and AWS.",
    whatYouWillLearn: [
      "Set up CI/CD pipelines for automated deployments",
      "Work with Docker & Kubernetes for container orchestration",
      "Automate infrastructure using Terraform & Ansible",
      "Deploy and monitor applications on AWS, Azure, or GCP",
      "Implement security best practices in DevOps workflows"
    ],
    includes: [
      { label: "60+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and case studies", icon: "code" },
      { label: "DevOps capstone project", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to DevOps & SDLC",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "DevOps Culture, Principles, and Best Practices" },
          { title: "Waterfall vs Agile vs DevOps" },
          { title: "Overview of DevOps Tooling" },
          { title: "Case Study: Netflix DevOps Architecture" }
        ]
      },
      {
        title: "Version Control & GitOps",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Git Fundamentals & GitHub/GitLab" },
          { title: "Branching Strategies: Feature, GitFlow, Trunk" },
          { title: "GitOps with ArgoCD & FluxCD" },
          { title: "Lab: Git Repo Setup & Workflow Management" }
        ]
      },
      {
        title: "CI with Jenkins & GitHub Actions",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "CI/CD Concepts & Automation" },
          { title: "Jenkins Setup & Jenkinsfiles" },
          { title: "GitHub Actions & GitLab CI" },
          { title: "Automated Testing in Pipelines" },
          { title: "Lab: Jenkins CI for Node.js" }
        ]
      },
      {
        title: "Containerization with Docker",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Containers vs Virtual Machines" },
          { title: "Dockerfile & Image Building" },
          { title: "Docker Compose for Multi-Container Apps" },
          { title: "Security & Optimization Best Practices" },
          { title: "Lab: Dockerized App" }
        ]
      },
      {
        title: "Kubernetes & Orchestration",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Kubernetes Architecture & Core Concepts" },
          { title: "Kubernetes Deployment with YAML" },
          { title: "Helm Charts" },
          { title: "Lab: Microservices App on Kubernetes" }
        ]
      },
      {
        title: "Infrastructure as Code with Terraform",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "IaC Concepts & Benefits" },
          { title: "Terraform vs CloudFormation vs Ansible" },
          { title: "Writing Terraform Configs" },
          { title: "Lab: Deploy AWS Infra with Terraform" }
        ]
      },
      {
        title: "Final DevOps Project",
        lecturesCount: 1,
        duration: "1 Week",
        chapters: [
          { title: "Implement CI/CD, Docker, Kubernetes & Terraform for Real-World App" }
        ]
      }
    ]
  },
  {
    id: "software-testing-qa",
    title: "Software Testing & QA: Mastering Manual & Automation Testing",
    category: "IT Courses",
    image: "/images/courses/software-testing.jpg",
    duration: "12 Weeks",
    description:
      "Become proficient in manual and automation testing with hands-on training in tools like Selenium, Cypress, JMeter, Postman, and CI/CD integration.",
    whatYouWillLearn: [
      "Perform manual and automated software testing efficiently",
      "Write detailed test cases and report bugs effectively",
      "Automate UI tests using Selenium and Cypress",
      "Conduct API and performance testing using Postman and JMeter",
      "Identify security vulnerabilities and implement secure testing measures",
      "Integrate automated tests into DevOps CI/CD pipelines"
    ],
    includes: [
      { label: "60+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and assignments", icon: "code" },
      { label: "Testing framework final project", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Software Testing & QA",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Role of Testing in SDLC & Methodologies" },
          { title: "Types of Testing: Functional, Non-functional, Manual, Automation" },
          { title: "QA Roles & Responsibilities" },
          { title: "Case Study: Preventable Failures" }
        ]
      },
      {
        title: "Manual Testing & Test Case Writing",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Test Planning & Writing Test Cases" },
          { title: "Unit, Integration, System, and UAT" },
          { title: "Black-box & White-box Testing" },
          { title: "Bug Tracking with JIRA & Bugzilla" },
          { title: "Lab: Manual Testing of Web App" }
        ]
      },
      {
        title: "API Testing with Postman & REST Assured",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "REST vs SOAP APIs" },
          { title: "Postman for Manual API Testing" },
          { title: "Automated API Tests with REST Assured" },
          { title: "Lab: E-commerce API Testing" }
        ]
      },
      {
        title: "Automation Testing with Selenium",
        lecturesCount: 5,
        duration: "1 Week",
        chapters: [
          { title: "Intro to Selenium with Java/Python" },
          { title: "Web Interactions and Selectors" },
          { title: "Form Handling and Browser Events" },
          { title: "Lab: Selenium Login Automation" }
        ]
      },
      {
        title: "Advanced Selenium & Cypress",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Selenium Grid for Parallel Testing" },
          { title: "Intro to Cypress" },
          { title: "Cypress Test Scripting" },
          { title: "Lab: Cypress Checkout Flow" }
        ]
      },
      {
        title: "Performance Testing with JMeter",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Load, Stress & Scalability Testing" },
          { title: "JMeter Setup & Test Plans" },
          { title: "Analyzing Results & Bottlenecks" },
          { title: "Lab: Load Testing Banking Site" }
        ]
      },
      {
        title: "Security Testing & Ethical Hacking Basics",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Intro to Security Testing" },
          { title: "OWASP Top 10 Vulnerabilities" },
          { title: "Burp Suite & ZAP Usage" },
          { title: "Lab: Web App Security Testing" }
        ]
      },
      {
        title: "Mobile App Testing",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Strategy & Device Selection" },
          { title: "Appium Setup & Scripting" },
          { title: "Lab: Mobile Login Automation" }
        ]
      },
      {
        title: "CI/CD Integration for Testing",
        lecturesCount: 3,
        duration: "1 Week",
        chapters: [
          { title: "CI/CD in Testing Lifecycle" },
          { title: "Jenkins & GitHub Actions for Testing" },
          { title: "Lab: Selenium Tests in CI Pipeline" }
        ]
      },
      {
        title: "Final QA Project",
        lecturesCount: 1,
        duration: "1 Week",
        chapters: [
          { title: "Create & Automate Full Testing Framework" }
        ]
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design: Mastering User Experience & Interface Design",
    category: "IT Courses",
    image: "/images/courses/ui-ux-design.jpg",
    duration: "14 Weeks",
    description:
      "Master the art and science of creating intuitive, user-friendly digital experiences through comprehensive UI/UX design principles, tools, and hands-on labs using Figma, Adobe XD, and Sketch.",
    whatYouWillLearn: [
      "Understand UI/UX fundamentals and design thinking",
      "Conduct user research and build personas",
      "Create wireframes and structure intuitive layouts",
      "Design visually appealing UI with consistency",
      "Build interactive prototypes with Figma & Adobe XD",
      "Perform usability testing and deliver final designs to developers"
    ],
    includes: [
      { label: "65+ hours on-demand video", icon: "video" },
      { label: "Hands-on labs and real-world projects", icon: "code" },
      { label: "Capstone design project", icon: "app-window" },
      { label: "Access on mobile and desktop", icon: "mobile" },
      { label: "Certificate of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to UI/UX Design",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "What is UI & UX? Understanding the Difference" },
          { title: "Importance of UX in Product Development" },
          { title: "Design Thinking Process & Human-Centered Design" },
          { title: "Case Study: How Apple & Google Use UX Design to Succeed" }
        ]
      },
      {
        title: "User Research & Understanding User Needs",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "User Personas: Creating Target Audience Profiles" },
          { title: "Conducting User Interviews & Surveys" },
          { title: "Competitor Analysis & UX Benchmarking" },
          { title: "Lab: Creating a User Persona for an E-Commerce App" }
        ]
      },
      {
        title: "Wireframing & Information Architecture",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Sketching Wireframes on Paper & Digital Tools" },
          { title: "Low-Fidelity Wireframing with Figma & Adobe XD" },
          { title: "Structuring Navigation & Layout for Better Usability" },
          { title: "Lab: Designing a Wireframe for a Travel Booking Website" }
        ]
      },
      {
        title: "UI Design & Visual Aesthetics",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Color Theory & Typography in UI Design" },
          { title: "Designing Buttons, Icons, and Interactive Elements" },
          { title: "Using Grids, Spacing & Alignment for Consistency" },
          { title: "Lab: Designing a Landing Page for a SaaS Product" }
        ]
      },
      {
        title: "Prototyping & Interactive Design",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Creating Clickable Prototypes with Figma & Adobe XD" },
          { title: "Micro-Interactions & Animations in UI" },
          { title: "User Flow Mapping & Interactive Navigation" },
          { title: "Lab: Prototyping a Mobile Banking App" }
        ]
      },
      {
        title: "Usability Testing & UX Evaluation",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Conducting Usability Testing: Methods & Tools" },
          { title: "A/B Testing for UI Improvements" },
          { title: "UX Metrics & Analytics: Heatmaps, Session Recordings" },
          { title: "Lab: Testing a Prototype & Collecting Feedback" }
        ]
      },
      {
        title: "Designing for Web & Mobile Applications",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Differences in Web & Mobile UX Design" },
          { title: "Designing for Accessibility & Inclusive Design" },
          { title: "UI Design for Different Devices (Desktop, Tablet, Mobile)" },
          { title: "Lab: Creating a Responsive UI for an Online Store" }
        ]
      },
      {
        title: "UI/UX in Product Development & Handoff to Developers",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Collaboration with Developers: Design to Code" },
          { title: "Handoff with Zeplin, Figma, and Adobe XD" },
          { title: "Creating UI Kits & Design Systems" },
          { title: "Lab: Delivering a UI/UX Project to a Developer" }
        ]
      },
      {
        title: "Final UI/UX Project",
        lecturesCount: 1,
        duration: "1 Week",
        chapters: [
          { title: "Create a Complete UI/UX Solution for a Real-World Product" }
        ]
      }
    ]
  },        
  
  
  
];
