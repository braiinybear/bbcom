// data/courses.ts
import { Course } from "../types";
import ai from "../assets/it-courses/AI.jpg"
import blockchain from "../assets/it-courses/blockchain.jpg"
import cloud from "../assets/it-courses/cloud.jpg"
import cyber from "../assets/it-courses/cyber.jpg"
import devops from "../assets/it-courses/devops.jpg"
import iot from "../assets/it-courses/iot.jpg"
import soft from "../assets/it-courses/soft-testing.jpg"
import uiux from "../assets/it-courses/uiux.jpg"
import data from "../assets/it-courses/data.jpg"
// marketing 
import salesMarketingImage from "../assets/marketing/Sales-Marketing.jpg"
import digitalMarketingImage from "../assets/marketing/Digital-Marketing.jpg"
import productMarketingImage from "../assets/marketing/Product-Marketing.jpg"
import eventMarketingImage from "../assets/marketing/Event-Marketing.jpg"
import growthMarketingImage from "../assets/marketing/Growth-Marketing.jpg"
import socialMediaMarketingImage from "../assets/marketing/Social-Media.jpg"
import salesforceCertificationImage from "../assets/marketing/Sales-Development.jpg"
import dataDrivenMarketingImage from "../assets/marketing/Advanced-Analytics.jpg"
import influencerMarketingImage from "../assets/marketing/Influencer-Marketing.jpg"
import marketingManagementImage from "../assets/marketing/Marketing-Management.jpg"

//finance 
import frmCourseImage from "../assets/finance/Blue White Minimalist Finance Management Presentation (1).jpg";
import caiaCourseImage from "../assets/finance/CAIA Course.png";
import financialAnalyticsImage from "../assets/finance/Green and White Simple Illustrative Data Analytics Presentation.jpg";
import ifrsCertificationImage from "../assets/finance/IFRS COURSE nO 4.png";
import financialModelingImage from "../assets/finance/Purple and Pink Modelling Course YouTube Thumbnail.jpg";
import financialPlanningImage from "../assets/finance/Financial planning and wealth management.png";
import investmentBankingImage from "../assets/finance/Blue White Modern Investment Presentation (1).jpg"; 
import batCourseImage from "../assets/finance/Teal and Blue Minimalist Business Accounting Presentation.jpg";
import gstCourseImage from "../assets/finance/gst .png";
import cmaCourseImage from "../assets/finance/CMA.png";


export const courses: Course[] = [
  {
    id: "ai-ml-course",
    title: "Artificial Intelligence & Machine Learning",
    category: "IT Courses",
    description:
      "A complete guide to AI & ML including deep learning, NLP, and hands-on projects.",
    image: ai,
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
  image: cyber,
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
      image: cloud,
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
    image: data,
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
    image: blockchain,
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
    image: iot,
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
    image: devops,
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
    image: soft,
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
    image: uiux,
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

// Marketing courses

  {
    id: "sales-marketing-management",
    title: "Sales & Marketing Management Course",
    category: "Marketing",
    image: salesMarketingImage, // Replace with the actual image import
    duration: "6 Months",
    description:
      "Master essential skills in sales, marketing, CRM, and strategy through real-world projects and industry-recognized certifications.",
    whatYouWillLearn: [
      "Understand sales & marketing fundamentals",
      "Develop digital and omnichannel marketing strategies",
      "Master CRM tools and lead generation techniques",
      "Apply data-driven insights and analytics",
      "Gain hands-on experience with real-world projects",
      "Prepare for certifications like CSP and CMMP"
    ],
    includes: [
      { label: "Live + Pre-recorded sessions", icon: "video" },
      { label: "Practical case studies & tools training", icon: "code" },
      { label: "Capstone project & portfolio development", icon: "app-window" },
      { label: "CRM tools: Salesforce, HubSpot, Zoho", icon: "settings" },
      { label: "Certification of completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Sales & Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Understanding Sales & Marketing Fundamentals" },
          { title: "Market Research & Consumer Behavior" },
          { title: "Sales Cycles & Marketing Campaigns" },
          { title: "B2B vs. B2C Sales Strategies" }
        ]
      },
      {
        title: "Developing Marketing Strategies",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Brand Strategies & Market Positioning" },
          { title: "Product Development & Pricing Strategies" },
          { title: "Segmentation, Targeting, & Positioning (STP)" },
          { title: "Value Propositions & Go-to-Market Strategies" }
        ]
      },
      {
        title: "Digital Marketing & Sales Channels",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Digital Marketing Tools & Techniques" },
          { title: "Social Media, SEO, & Content Marketing" },
          { title: "Email Marketing, PPC, & Web Analytics" },
          { title: "Omnichannel Sales Approaches" }
        ]
      },
      {
        title: "Sales Management & Lead Generation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Prospecting Techniques & Lead Qualification" },
          { title: "Sales Funnels & Conversion Strategies" },
          { title: "Cold Calling, Email Outreach, & Pitching" },
          { title: "Sales Metrics & Performance Evaluation" }
        ]
      },
      {
        title: "Negotiation & Closing Sales",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Negotiation Techniques & Handling Objections" },
          { title: "Persuasive Communication Skills" },
          { title: "Consultative Selling Approaches" },
          { title: "Sales Closing Techniques & Follow-Up Practices" }
        ]
      },
      {
        title: "Customer Relationship Management (CRM)",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "CRM Tools (Salesforce, HubSpot, Zoho CRM)" },
          { title: "Customer Data & Sales Pipelines" },
          { title: "Retention Strategies & Loyalty Programs" },
          { title: "Customer Experience (CX) & Service Excellence" }
        ]
      },
      {
        title: "Strategic Marketing & Branding",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Integrated Marketing Campaigns" },
          { title: "Brand Identity, Visual Branding, & Messaging" },
          { title: "Public Relations (PR) & Corporate Communications" },
          { title: "Influencer & Affiliate Marketing Strategies" }
        ]
      },
      {
        title: "Data-Driven Sales & Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Analytics Tools (Google Analytics, CRM Reports)" },
          { title: "Sales Data, Customer Insights, & Market Trends" },
          { title: "KPIs & Performance Dashboards" },
          { title: "Predictive Analytics for Sales Forecasting" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Real-World Sales & Marketing Project" },
          { title: "Certification Preparation (CSP, CMMP)" },
          { title: "Portfolio Development" },
          { title: "Career Skills: Resume Writing, Interview Prep, & Networking" }
        ]
      }
    ]
  },
  {
    id: "digital-marketing-strategies",
    title: "Digital Marketing: Mastering Online Marketing Strategies & Tools",
    category: "Marketing",
    image: digitalMarketingImage, // Replace with your image import
    duration: "6 Months",
    description:
      "Become a proficient digital marketer with hands-on training in SEO, PPC, social media, email marketing, analytics, and campaign management.",
    whatYouWillLearn: [
      "Build and optimize websites using WordPress, Wix, or Shopify",
      "Master SEO, social media, email, and content marketing strategies",
      "Design, execute, and analyze PPC and Google Ads campaigns",
      "Use tools like Google Analytics, SEMrush, and Mailchimp effectively",
      "Develop and automate marketing funnels and email campaigns",
      "Prepare for certifications from Google, Facebook, and HubSpot"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Real-World Digital Marketing Projects", icon: "app-window" },
      { label: "Hands-on Tool Training: Google Ads, Analytics, Mailchimp", icon: "settings" },
      { label: "Portfolio Development & Capstone Campaign", icon: "code" },
      { label: "Certification of Completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Digital Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Digital Marketing Fundamentals" },
          { title: "Traditional vs. Digital Marketing" },
          { title: "Marketing Channels, Tools, & Trends" },
          { title: "Consumer Behavior & Buyer Personas" }
        ]
      },
      {
        title: "Website Planning & Development",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Designing User-Friendly Websites" },
          { title: "UI/UX Principles & Design Strategies" },
          { title: "SEO & Mobile Responsiveness" },
          { title: "Landing Pages & Lead Capture Techniques" }
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "On-Page & Off-Page SEO Techniques" },
          { title: "Keyword Research & Content Optimization" },
          { title: "SEO Tools (Google Search Console, SEMrush, Ahrefs)" },
          { title: "Website Ranking & Organic Traffic" }
        ]
      },
      {
        title: "Social Media Marketing (SMM)",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Strategies for Social Media Platforms" },
          { title: "Engaging Content Creation" },
          { title: "Paid Advertising & Boosted Posts" },
          { title: "Social Media Metrics & Performance Analysis" }
        ]
      },
      {
        title: "Pay-Per-Click (PPC) & Google Ads",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "PPC Campaigns & Bidding Strategies" },
          { title: "Setting Up Google Ads Campaigns" },
          { title: "Google Ads Manager & A/B Testing" },
          { title: "ROI & Ad Performance Analysis" }
        ]
      },
      {
        title: "Content Marketing & Blogging",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Content Strategies & Editorial Calendars" },
          { title: "Writing SEO-Friendly Content" },
          { title: "Content Management Systems (CMS)" },
          { title: "Content Promotion via Social Media & Email Marketing" }
        ]
      },
      {
        title: "Email Marketing & Automation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Email Campaigns with MailChimp, HubSpot, & More" },
          { title: "Email Automation & Drip Campaigns" },
          { title: "Personalized Emails & Newsletters" },
          { title: "Open Rates, CTR, & Conversion Analysis" }
        ]
      },
      {
        title: "Affiliate Marketing & Influencer Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Affiliate Marketing Models & Platforms" },
          { title: "Affiliate Campaigns & Tracking Links" },
          { title: "Influencer Collaborations" },
          { title: "Campaign Success & Conversion Rates" }
        ]
      },
      {
        title: "Digital Marketing Analytics & Reporting",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Google Analytics, Tag Manager, & Data Studio" },
          { title: "Website Traffic & Sales Funnels" },
          { title: "Campaign Performance & Reporting" },
          { title: "Data-Driven Insights for Marketing Strategies" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Real-World Digital Marketing Project" },
          { title: "Professional Portfolio Development" },
          { title: "Campaign Strategies & Performance Analysis" },
          { title: "Certification Preparation: Google, Facebook, HubSpot" }
        ]
      }
    ]
  },
  {
    id: "product-marketing-strategies",
    title: "Product Marketing: Mastering Strategies for Product Success & Market Growth",
    category: "Marketing",
    image: productMarketingImage,
    duration: "6 Months",
    description:
      "Gain advanced product marketing skills to successfully launch, promote, and grow products. Perfect for aspiring marketers, business professionals, and entrepreneurs.",
    whatYouWillLearn: [
      "Understand the fundamentals of product marketing and its strategic role",
      "Craft strong product positioning and messaging for market resonance",
      "Plan and execute effective go-to-market (GTM) strategies",
      "Promote products via digital marketing, SEO, PPC, and webinars",
      "Align marketing and sales teams using CRM and sales enablement tools",
      "Analyze product performance and use insights to scale growth"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Real-World Product Marketing Projects", icon: "app-window" },
      { label: "Hands-on Tool Training: Salesforce, Mixpanel, Hotjar", icon: "settings" },
      { label: "Portfolio Development & Product Launch Capstone", icon: "code" },
      { label: "Certification of Completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Product Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Role of Product Marketing vs. Product Management" },
          { title: "Market Research & Competitive Analysis" },
          { title: "Customer Segmentation & Buyer Personas" },
          { title: "Core Concepts in Product Marketing" }
        ]
      },
      {
        title: "Product Positioning & Messaging",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Crafting Brand Messaging & Value Propositions" },
          { title: "Writing Effective Positioning Statements" },
          { title: "Building Product Narratives" },
          { title: "Analyzing Market Needs & Pain Points" }
        ]
      },
      {
        title: "Go-to-Market (GTM) Strategy",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Developing GTM Strategies for Product Launches" },
          { title: "Target Market Identification & Pricing Strategies" },
          { title: "Sales Channels, Kits, and Product Demos" },
          { title: "Building Pitch Decks for Market Entry" }
        ]
      },
      {
        title: "Digital Marketing for Product Promotion",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Content Marketing, SEO, & PPC Campaigns" },
          { title: "Social Media & Email Campaigns" },
          { title: "Webinar Marketing & Event Promotion" },
          { title: "Campaign Optimization & Performance Metrics" }
        ]
      },
      {
        title: "Sales & Marketing Alignment",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Collaboration Between Sales & Marketing" },
          { title: "Sales Collateral, Case Studies, and Fact Sheets" },
          { title: "Sales Training & Product Education" },
          { title: "CRM Tools: Salesforce, HubSpot, Zoho CRM" }
        ]
      },
      {
        title: "Product Launch & Market Expansion",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Planning & Executing Product Launches" },
          { title: "PR, Media Outreach, and Launch Events" },
          { title: "Product Lifecycle & Evolution Roadmaps" },
          { title: "International Market Entry Strategies" }
        ]
      },
      {
        title: "Product Analytics & Market Insights",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Analytics Tools: Google Analytics, Mixpanel, Hotjar" },
          { title: "User Engagement, Surveys, & Churn Rate Analysis" },
          { title: "Focus Groups & Feedback Collection" },
          { title: "Using Data to Refine Product Strategies" }
        ]
      },
      {
        title: "Growth Marketing & Product Scaling",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Growth Hacking Techniques" },
          { title: "Customer Retention & Success Programs" },
          { title: "Product Improvements via Customer Feedback" },
          { title: "A/B Testing & Iterative Product Development" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Real-World Product Marketing Project" },
          { title: "Execution of Product Launch & Growth Plan" },
          { title: "Portfolio Development & Case Documentation" },
          { title: "Industry Certifications: CPMM, HubSpot, PMA" }
        ]
      }
    ]
  },
  {
    id: "event-marketing-certification",
    title: "Event Marketing Certification: Strategies for Successful Event Promotions & Engagement",
    category: "Marketing",
    image: eventMarketingImage, // Replace with the actual imported image
    duration: "3 Months",
    description:
      "Master the art of promoting and managing events through digital and experiential marketing. Learn how to create engaging campaigns, execute memorable events, and measure success.",
    whatYouWillLearn: [
      "Understand the event marketing lifecycle from planning to post-event analysis",
      "Develop creative event strategies and detailed promotional plans",
      "Promote events using digital marketing, SEO, and PPC campaigns",
      "Execute on-ground and virtual events with the latest tools and platforms",
      "Engage audiences through gamification, live coverage, and interaction",
      "Analyze event performance and optimize for better ROI"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Projects & Tools Training", icon: "app-window" },
      { label: "Real-World Event Campaign Portfolio", icon: "code" },
      { label: "Event Software Training: Eventbrite, Cvent, Whova", icon: "settings" },
      { label: "Certification of Completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Event Marketing",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Role of Event Marketing in Business Strategy" },
          { title: "Types of Events: Corporate, Social, Virtual, Hybrid" },
          { title: "Understanding the Event Lifecycle" },
          { title: "Audience Analysis & Targeting" }
        ]
      },
      {
        title: "Event Planning & Strategy",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Developing Event Themes & Marketing Plans" },
          { title: "Budget Management & Resource Allocation" },
          { title: "Venue Selection & Logistics Coordination" },
          { title: "Vendor & Speaker Management" }
        ]
      },
      {
        title: "Digital Marketing for Event Promotion",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Social Media & Email Campaigns for Events" },
          { title: "SEO, PPC, and Listing Events on Online Platforms" },
          { title: "Event Website & Landing Page Design" },
          { title: "Content Marketing & Branding Materials" }
        ]
      },
      {
        title: "On-Ground & Virtual Event Execution",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Scheduling, Team Coordination & Checklists" },
          { title: "Using Event Software: Eventbrite, Cvent, Whova" },
          { title: "Virtual Event Platforms: Zoom, Hopin, Airmeet" },
          { title: "Live Tech Setup & Troubleshooting" }
        ]
      },
      {
        title: "Audience Engagement & Interaction",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Designing Interactive Sessions: Panels, Workshops" },
          { title: "Gamification: Polls, Q&As, Networking Games" },
          { title: "Collecting Feedback & Encouraging Participation" },
          { title: "Enhancing Experience Through Visual & Audio" }
        ]
      },
      {
        title: "Event Promotion During & After the Event",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Live Coverage: Social Media, Blogging, Video Snippets" },
          { title: "Post-Event Content & Follow-ups" },
          { title: "Thank-you Emails & Continued Engagement" },
          { title: "Analyzing Event ROI & Key Metrics" }
        ]
      },
      {
        title: "Event Marketing Analytics & Reporting",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Google Analytics for Event Performance Tracking" },
          { title: "Monitoring Conversions, Registrations, and Reach" },
          { title: "Brand Impact Analysis" },
          { title: "Creating Reports & Data-Driven Strategies" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Capstone Project: Execute a Full Event Campaign" },
          { title: "Portfolio Development with Real-World Case" },
          { title: "Certification Exam Preparation: CMP, HubSpot" },
          { title: "Career Guidance, Resume Building & Interview Prep" }
        ]
      }
    ]
  },
  {
    id: "growth-marketing-certification",
    title: "Growth Marketing Certification: Driving Business Growth with Data-Driven Strategies",
    category: "Marketing",
    image: growthMarketingImage,
    duration: "3 Months",
    description:
      "Master growth marketing with data-driven techniques and practical tools to accelerate customer acquisition, increase retention, and drive sustainable business growth.",
    whatYouWillLearn: [
      "Understand the AARRR funnel and key growth metrics",
      "Design and execute growth experiments using A/B testing and data analysis",
      "Leverage digital channels like SEO, email, and paid ads for scalable growth",
      "Automate marketing workflows using tools like HubSpot and Zapier",
      "Create customer retention strategies that improve lifetime value",
      "Apply tailored growth strategies to eCommerce, SaaS, B2B, and startups"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Projects with Growth Tools", icon: "app-window" },
      { label: "Real-World Campaign Portfolio", icon: "code" },
      { label: "Training with Analytics & Automation Tools", icon: "settings" },
      { label: "Certification of Completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Growth Marketing",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "What is Growth Marketing? vs Traditional Marketing" },
          { title: "The AARRR Funnel Framework" },
          { title: "Data-Driven Decision Making & KPIs" },
          { title: "Growth Mindset & Continuous Experimentation" }
        ]
      },
      {
        title: "Growth Hacking Techniques & Strategies",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Rapid Experimentation Frameworks" },
          { title: "A/B Testing, Multivariate Testing & Cohort Analysis" },
          { title: "Referral Loops & Incentive-Based Campaigns" },
          { title: "Growth Case Studies from Leading Companies" }
        ]
      },
      {
        title: "Digital Channels for Growth",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "SEO, Content Marketing & Blogging for Growth" },
          { title: "Email Campaigns & Lead Magnets" },
          { title: "Paid Ads: Google, Facebook, LinkedIn" },
          { title: "Affiliate Marketing & Influencer Partnerships" }
        ]
      },
      {
        title: "Data Analytics & Performance Tracking",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Using Google Analytics, Mixpanel, Hotjar, Heap" },
          { title: "Tracking User Behavior & Growth Metrics" },
          { title: "Creating Dashboards for Growth KPIs" },
          { title: "Using Feedback Loops for Optimization" }
        ]
      },
      {
        title: "Customer Acquisition & Retention Strategies",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Designing Lead Gen Campaigns & Funnels" },
          { title: "Landing Page Optimization Techniques" },
          { title: "Email Drip Campaigns & Push Notifications" },
          { title: "Loyalty Programs & Churn Reduction" }
        ]
      },
      {
        title: "Growth Automation & Tools",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Using HubSpot, Zapier & ActiveCampaign" },
          { title: "Automating Email & Social Campaigns" },
          { title: "CRM Automation & Integration" },
          { title: "Tracking & Optimizing with Automated Workflows" }
        ]
      },
      {
        title: "Growth Marketing in Different Industries",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "E-commerce Growth: CRO, Upselling & Retargeting" },
          { title: "SaaS: Product-Led Growth & Freemium Models" },
          { title: "B2B: ABM, Lead Scoring, and Enablement" },
          { title: "Startups: Growth Launch Tactics & Virality" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Capstone: Execute a Real-World Growth Campaign" },
          { title: "Build & Present Your Growth Portfolio" },
          { title: "Prepare for HubSpot, Google, and GMP Certifications" },
          { title: "Resume, Career Coaching & Placement Support" }
        ]
      }
    ]
  },
  {
    id: "social-media-marketing-certification",
    title: "Social Media Marketing Certification: Mastering Digital Engagement & Brand Growth",
    category: "Marketing",
    image: socialMediaMarketingImage, 
    duration: "3 Months",
    description:
      "Master the art of digital engagement and brand growth through effective social media strategies, content creation, analytics, and influencer collaboration.",
    whatYouWillLearn: [
      "Build platform-specific strategies for Facebook, Instagram, LinkedIn, and more",
      "Develop targeted social media campaigns using buyer personas and KPIs",
      "Create compelling visuals, videos, and CTAs for engagement",
      "Manage paid advertising campaigns with A/B testing and retargeting",
      "Analyze performance using tools like Facebook Insights and Google Analytics",
      "Collaborate with influencers and build strong brand communities"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Projects & Content Tools", icon: "app-window" },
      { label: "Real-World Campaign Portfolio", icon: "code" },
      { label: "Training in Ads, Analytics & Influencer Strategy", icon: "settings" },
      { label: "Certification of Completion", icon: "certificate" }
    ],
    modules: [
      {
        title: "Introduction to Social Media Marketing",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Social Media Marketing Overview" },
          { title: "Platform-Specific Strategies: Facebook, Instagram, LinkedIn, etc." },
          { title: "Trends and Emerging Platforms (TikTok, Threads, etc.)" },
          { title: "Setting Social Media Objectives" }
        ]
      },
      {
        title: "Developing a Social Media Strategy",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Market Research & Competitor Analysis" },
          { title: "Audience Identification & Buyer Personas" },
          { title: "SMART Goal Setting & KPIs" },
          { title: "Creating a Content Calendar" }
        ]
      },
      {
        title: "Content Creation & Management",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Creating High-Impact Visuals, Reels & Stories" },
          { title: "Using Canva, Adobe Spark & Crello for Graphics" },
          { title: "Writing Persuasive Copy & CTAs" },
          { title: "Scheduling Tools: Buffer, Hootsuite, Sprout Social" }
        ]
      },
      {
        title: "Paid Advertising & Campaign Management",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Facebook, Instagram & LinkedIn Ads Setup" },
          { title: "Targeting, Bidding & Budgeting Techniques" },
          { title: "A/B Testing & Performance Optimization" },
          { title: "Retargeting Campaigns for Conversions" }
        ]
      },
      {
        title: "Social Media Analytics & Reporting",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Using Analytics Tools: Facebook, Instagram, Google" },
          { title: "Monitoring Engagement, CTR, Reach & Impressions" },
          { title: "Creating Campaign Performance Reports" },
          { title: "Data-Driven Strategy Refinement" }
        ]
      },
      {
        title: "Community Management & Engagement",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Managing Online Communities & Brand Pages" },
          { title: "Handling Comments, DMs & Reviews Professionally" },
          { title: "Influencer Collaborations & Community Expansion" },
          { title: "Crisis Management & Brand Protection" }
        ]
      },
      {
        title: "Influencer Marketing & Collaboration",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Identifying Relevant Influencers" },
          { title: "Executing Campaigns: Reviews, Giveaways, Partnerships" },
          { title: "Measuring Influencer ROI & Impact" },
          { title: "Ethical & Legal Guidelines for Collaborations" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Designing a Social Media Campaign Strategy" },
          { title: "Launching & Managing a Live Campaign" },
          { title: "Creating a Portfolio of Campaign Projects" },
          { title: "Certification Prep: Facebook Blueprint, HubSpot, Hootsuite" }
        ]
      }
    ]
  },
  {
    id: "sales-development-salesforce-certification",
    title: "Sales Development & Salesforce Certification: Mastering CRM & Sales Strategies",
    category: "Marketing",
    image: salesforceCertificationImage, 
    duration: "6 Months",
    description:
      "Gain deep expertise in sales development and Salesforce CRM with this hands-on program. Master lead generation, pipeline management, automation, and prepare for top Salesforce certifications.",
    whatYouWillLearn: [
      "Understand B2B vs B2C sales strategies and essential SDR tools",
      "Craft compelling sales pitches, cold emails, and master objection handling",
      "Use Salesforce CRM to manage contacts, leads, and pipelines",
      "Automate sales processes using Salesforce Flows, Workflows, and Process Builder",
      "Generate and track leads using Salesforce automation",
      "Build custom reports and dashboards for sales analytics"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Salesforce CRM Training", icon: "app-window" },
      { label: "Real-World Sales Campaign Projects", icon: "code" },
      { label: "Certification Preparation: Admin, SDR & Consultant", icon: "certificate" },
      { label: "Career Support & Portfolio Development", icon: "settings" }
    ],
    modules: [
      {
        title: "Introduction to Sales Development",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Role of SDRs in Business Growth" },
          { title: "B2B vs B2C Sales Strategies" },
          { title: "Essential Sales Tools (Salesforce, HubSpot, Outreach)" },
          { title: "Sales KPIs: Lead Gen, Conversion, Pipeline Management" }
        ]
      },
      {
        title: "Sales Strategies & Techniques",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Crafting Value Propositions & Sales Pitches" },
          { title: "Cold Calling, Email Outreach & Social Selling" },
          { title: "Overcoming Objections & Using Sales Scripts" },
          { title: "Building Relationships & Establishing Trust" }
        ]
      },
      {
        title: "Salesforce Fundamentals",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Overview of the Salesforce Ecosystem" },
          { title: "Managing Leads, Contacts & Accounts" },
          { title: "Customizing Salesforce Fields, Objects & Layouts" },
          { title: "Creating Dashboards & Reports" }
        ]
      },
      {
        title: "Lead Generation & Management in Salesforce",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Inbound vs Outbound Lead Generation Techniques" },
          { title: "Lead Capture, Nurturing & Tracking in Salesforce" },
          { title: "Lead Scoring & Assignment Automation" },
          { title: "Monitoring Lead Engagement Metrics" }
        ]
      },
      {
        title: "Sales Pipeline Management",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Designing a Sales Funnel & Opportunity Stages" },
          { title: "Revenue Forecasting with Salesforce Sales Cloud" },
          { title: "Pipeline Tracking & Sales Process Optimization" },
          { title: "Boosting Productivity with Flows & Workflows" }
        ]
      },
      {
        title: "Salesforce Automation & Integrations",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Automating Sales Tasks with Flows & Process Builder" },
          { title: "Salesforce Integrations with Marketing & Comms Tools" },
          { title: "Exploring AppExchange Extensions" },
          { title: "Using Salesforce APIs for Advanced Integrations" }
        ]
      },
      {
        title: "Advanced Salesforce Reporting & Analytics",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Creating Reports, Dashboards & Using Einstein Analytics" },
          { title: "Tracking Conversion, Revenue & Performance" },
          { title: "Developing Custom Visual Reports" },
          { title: "Implementing Data-Driven Sales Strategy" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "4 Weeks",
        chapters: [
          { title: "Sales Development Capstone Project (CRM / Campaign)" },
          { title: "Portfolio Development with Practical Salesforce Use Cases" },
          { title: "Salesforce Certified SDR, Admin & Sales Cloud Prep" },
          { title: "Resume Building, Interview Coaching, Career Support" }
        ]
      }
    ]
  },
  {
    id: "advanced-analytics-data-driven-marketing",
    title: "Advanced Analytics & Data-Driven Marketing Certification: Harnessing Insights for Strategic Growth",
    category: "Marketing",
    image: dataDrivenMarketingImage, 
    duration: "6 Months",
    description:
      "Master data-driven marketing and advanced analytics tools to drive strategic decisions and measurable marketing success. Ideal for marketers and data analysts seeking to boost campaign ROI and customer insights.",
    whatYouWillLearn: [
      "Apply analytics to drive marketing decisions and improve ROI",
      "Use Google Analytics, HubSpot, Hotjar, and Tableau effectively",
      "Develop segmentation and targeting strategies using data insights",
      "Implement predictive analytics and marketing automation tools",
      "Optimize user journeys and boost conversions with CRO techniques",
      "Build dashboards and visualize marketing performance effectively"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Analytics Tool Practice", icon: "app-window" },
      { label: "Real-World Data Projects & Portfolio", icon: "code" },
      { label: "Certification Preparation (Google, HubSpot, DMI)", icon: "certificate" },
      { label: "Career Coaching & Job Placement Help", icon: "settings" }
    ],
    modules: [
      {
        title: "Introduction to Data-Driven Marketing",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Evolution of Marketing: From Intuition to Data" },
          { title: "Role of Analytics in Modern Marketing" },
          { title: "Key Marketing Metrics: CLV, ROAS, Conversion Rate" },
          { title: "Adopting a Data-Driven Mindset" }
        ]
      },
      {
        title: "Marketing Analytics Tools & Technologies",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Google Analytics, Adobe Analytics, and Hotjar" },
          { title: "CRM Analytics: Salesforce, HubSpot, Zoho" },
          { title: "Social Media Analytics: Meta, Twitter, LinkedIn" },
          { title: "Email Analytics: Mailchimp, ActiveCampaign" }
        ]
      },
      {
        title: "Customer Segmentation & Targeting",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Market Research & Competitor Analysis" },
          { title: "Customer Personas & Segmentation Strategies" },
          { title: "Personalized Marketing via Data Insights" },
          { title: "Behavioral & Demographic Targeting with AI" }
        ]
      },
      {
        title: "Predictive Analytics & Marketing Automation",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Regression, Time Series & Predictive Modeling" },
          { title: "Automating Campaigns with HubSpot, Marketo, Pardot" },
          { title: "Lead Scoring & Predictive Sales Readiness" },
          { title: "Behavior-Triggered Automated Workflows" }
        ]
      },
      {
        title: "Data Visualization & Reporting",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Using Google Data Studio, Tableau & Power BI" },
          { title: "Building Dashboards & Custom Reports" },
          { title: "Communicating Insights to Stakeholders" },
          { title: "Data Storytelling for Marketing Strategy" }
        ]
      },
      {
        title: "Conversion Rate Optimization (CRO) Techniques",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "Analyzing User Behavior with Hotjar & Session Recordings" },
          { title: "A/B Testing & Multivariate Testing" },
          { title: "Funnel Analysis & Customer Journey Mapping" },
          { title: "Website & Landing Page CRO Tactics" }
        ]
      },
      {
        title: "ROI Measurement & Marketing Attribution",
        lecturesCount: 4,
        duration: "2 Weeks",
        chapters: [
          { title: "ROI Measurement & Marketing Effectiveness" },
          { title: "Attribution Models: First-Touch, Last-Touch, Multi-Touch" },
          { title: "Revenue vs Spend Analysis for Campaigns" },
          { title: "Optimizing Budget Allocation with Data" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "4 Weeks",
        chapters: [
          { title: "Capstone: E-commerce, Social Media, or Campaign Analytics Project" },
          { title: "Portfolio Building for Job Readiness" },
          { title: "Certification Prep: Google, HubSpot, DMI" },
          { title: "Resume, Interview, & Career Coaching" }
        ]
      }
    ]
  },
  {
    id: "influencer-marketing-certification",
    title: "Influencer Marketing Certification: Leveraging Influencers for Brand Growth",
    category: "Marketing",
    image: influencerMarketingImage,
    duration: "3 Months",
    description:
      "Master influencer marketing with real-world tools and strategies to enhance brand reach, engagement, and revenue. Learn how to find influencers, build campaigns, and measure ROI effectively.",
    whatYouWillLearn: [
      "Understand the fundamentals of influencer marketing and its impact on brand growth",
      "Identify and evaluate the right influencers using leading discovery tools",
      "Design effective influencer campaigns with measurable objectives and KPIs",
      "Manage influencer relationships, negotiate contracts, and guide content creation",
      "Track campaign performance and ROI using analytics tools like Hootsuite and Google Analytics",
      "Stay compliant with legal and ethical marketing practices"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Experience with Influencer Tools", icon: "app-window" },
      { label: "Real-World Projects & Portfolio", icon: "code" },
      { label: "Certification Preparation (HubSpot, DMI)", icon: "certificate" },
      { label: "Career Coaching & Job Assistance", icon: "settings" }
    ],
    modules: [
      {
        title: "Introduction to Influencer Marketing",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Influencer Marketing Fundamentals & Benefits" },
          { title: "Types of Influencers: Nano, Micro, Macro, Mega" },
          { title: "Successful Campaign Case Studies" },
          { title: "Strategic Role of Influencers in Marketing" }
        ]
      },
      {
        title: "Influencer Discovery & Selection",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Finding Influencers that Align with Brand Values" },
          { title: "Using Upfluence, Aspire, and HypeAuditor" },
          { title: "Evaluating Influencer Engagement & Authenticity" },
          { title: "Building Shortlists & Long-Term Strategies" }
        ]
      },
      {
        title: "Developing Influencer Campaigns",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Designing Campaigns for Awareness & Sales" },
          { title: "Setting Objectives & KPIs" },
          { title: "Collaborating on Engaging Influencer Content" },
          { title: "Contracts, Guidelines, and Deliverables" }
        ]
      },
      {
        title: "Influencer Outreach & Relationship Management",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Creating Personalized Outreach Strategies" },
          { title: "Email Templates & Communication Best Practices" },
          { title: "Negotiating Terms & Pricing" },
          { title: "Fostering Long-Term Influencer Partnerships" }
        ]
      },
      {
        title: "Content Creation & Promotion Strategies",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Aligning Influencer Content with Brand Voice" },
          { title: "Leveraging Stories, Reels, Videos & Blogs" },
          { title: "Cross-Platform Promotion: Instagram, TikTok, YouTube" },
          { title: "Driving Conversions with Influencer Content" }
        ]
      },
      {
        title: "Measuring Influencer Campaign Performance",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Tracking Metrics: Reach, Engagement, ROI" },
          { title: "Using Hootsuite, Social Blade, Google Analytics" },
          { title: "Optimizing Based on Campaign Performance" },
          { title: "Building Data-Driven Campaign Strategies" }
        ]
      },
      {
        title: "Legal & Ethical Considerations",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Influencer Marketing Laws & Ethics" },
          { title: "FTC Guidelines & Compliance Practices" },
          { title: "Avoiding Influencer Scams & Missteps" },
          { title: "Managing Brand Reputation in Crisis" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Capstone: Real-World Influencer Marketing Campaign" },
          { title: "Portfolio Development for Career Showcase" },
          { title: "Certification Prep: HubSpot, DMI, IMH" },
          { title: "Resume, Interview & Networking Guidance" }
        ]
      }
    ]
  },
  {
    id: "marketing-management-certification",
    title: "Marketing Management Certification: Mastering Strategic Marketing & Business Growth",
    category: "Marketing",
    image: marketingManagementImage,
    duration: "3 Months",
    description:
      "Build strategic marketing skills with this comprehensive program focused on brand management, marketing strategy, digital tools, and performance analytics to drive business growth.",
    whatYouWillLearn: [
      "Understand the role of marketing in business success and strategic growth",
      "Develop comprehensive marketing strategies and brand positioning plans",
      "Master pricing, sales, and distribution strategies across different channels",
      "Leverage digital marketing tools including SEO, social media, and automation",
      "Track and analyze marketing performance using analytics platforms",
      "Prepare for globally recognized certifications in marketing management"
    ],
    includes: [
      { label: "Live + Recorded Sessions", icon: "video" },
      { label: "Hands-on Tools & Frameworks", icon: "app-window" },
      { label: "Capstone Project & Portfolio", icon: "code" },
      { label: "Certification Prep (HubSpot, AMA, CMMP)", icon: "certificate" },
      { label: "Career Support & Placement", icon: "settings" }
    ],
    modules: [
      {
        title: "Introduction to Marketing Management",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Role of Marketing Management in Business" },
          { title: "Key Marketing Concepts & Theories" },
          { title: "Marketing Mix (4Ps): Product, Price, Place, Promotion" },
          { title: "Market Trends, Consumer Behavior & Competitor Analysis" }
        ]
      },
      {
        title: "Developing Marketing Strategies",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Setting Marketing Objectives & Goals" },
          { title: "Crafting Strategic Marketing Plans" },
          { title: "Using SWOT & PESTLE for Strategic Insights" },
          { title: "Target Market & Segmentation Techniques" }
        ]
      },
      {
        title: "Brand Management & Positioning",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Building Brand Identity & Equity" },
          { title: "Brand Positioning Strategies" },
          { title: "Brand Messaging & Communication Plans" },
          { title: "Brand Campaigns & Case Studies" }
        ]
      },
      {
        title: "Product Development & Lifecycle Management",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Product Development Stages" },
          { title: "Product Lifecycle Strategies" },
          { title: "Product Launch & Market Penetration Plans" },
          { title: "Developing Value Propositions & Differentiation" }
        ]
      },
      {
        title: "Pricing Strategies & Sales Management",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Understanding Pricing Models" },
          { title: "Strategic Pricing for Market Segments" },
          { title: "Sales Planning & Sales Management Techniques" },
          { title: "Implementing B2B, B2C, and Direct Sales Strategies" }
        ]
      },
      {
        title: "Distribution & Channel Management",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Exploring Distribution Channels" },
          { title: "Managing Vendors & Distribution Partners" },
          { title: "Logistics & Inventory Management" },
          { title: "Improving Distribution Efficiency" }
        ]
      },
      {
        title: "Integrated Marketing Communications (IMC)",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Communication Strategy Development" },
          { title: "Digital & Traditional Marketing Channels" },
          { title: "Advertising, PR, Sales Promotion & Personal Selling" },
          { title: "Consistent Brand Messaging Across Channels" }
        ]
      },
      {
        title: "Digital Marketing & Emerging Trends",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Digital Marketing Tools: SEO, SEM, Email, Social" },
          { title: "Content, Influencer & Video Marketing" },
          { title: "Emerging Trends: AI, Automation, Metaverse" },
          { title: "Adapting to Changing Consumer Preferences" }
        ]
      },
      {
        title: "Marketing Analytics & Performance Measurement",
        lecturesCount: 4,
        duration: "1 Week",
        chapters: [
          { title: "Tracking KPIs: ROI, CAC, Conversion Rates" },
          { title: "Using Google Analytics, HubSpot, SEMrush" },
          { title: "Data-Driven Marketing Optimization" },
          { title: "Analyzing Consumer Feedback & Market Research" }
        ]
      },
      {
        title: "Capstone Project & Certification Preparation",
        lecturesCount: 4,
        duration: "3 Weeks",
        chapters: [
          { title: "Capstone: Real-World Marketing Project" },
          { title: "Portfolio Development for Job Readiness" },
          { title: "Certification Prep: CMMP, HubSpot, AMA PCM" },
          { title: "Career Coaching: Resume, Interviews, Networking" }
        ]
      }
    ]
  },
  
// Finance courses

{
  id: "financial-risk-manager-frm",
  title: "Financial Risk Manager (FRM) Certification: Mastering Risk Management for Global Finance",
  category: "Finance",
  image: frmCourseImage,
  duration: "6–7 Months",
  description:
    "Prepare for the globally recognized FRM certification by mastering financial risk principles, quantitative analysis, market and credit risk, and compliance frameworks used in banking and finance.",
  whatYouWillLearn: [
    "Understand key principles of financial risk management, governance, and ethics",
    "Analyze financial products including derivatives, bonds, and structured instruments",
    "Master risk types: market, credit, operational, and liquidity",
    "Apply quantitative tools for predictive modeling and data analysis",
    "Gain insights into alternative investments and risk regulations",
    "Prepare for GARP's FRM Part 1 & 2 certification exams"
  ],
  includes: [
    { label: "FRM Part 1 & 2 Coverage", icon: "book" },
    { label: "Quantitative & Financial Tools", icon: "app-window" },
    { label: "Practice Exams & Question Banks", icon: "file" },
    { label: "Certification Prep (GARP FRM)", icon: "certificate" },
    { label: "Career Support & Placement", icon: "settings" }
  ],
  modules: [
    {
      title: "FRM Part 1: Foundations of Risk Management",
      lecturesCount: 3,
      duration: "3 Weeks",
      chapters: [
        { title: "Risk Management Principles, Governance & Ethics" },
        { title: "Introduction to Financial Risk Types" },
        { title: "Case Studies in Risk Frameworks" }
      ]
    },
    {
      title: "FRM Part 1: Quantitative Analysis",
      lecturesCount: 6,
      duration: "1 Month",
      chapters: [
        { title: "Mathematics & Probability Foundations" },
        { title: "Statistical Inference & Hypothesis Testing" },
        { title: "Regression & Time-Series Analysis" },
        { title: "Linear Algebra for Risk Modeling" },
        { title: "Numerical Techniques in Risk" },
        { title: "Data Interpretation for Risk Modeling" }
      ]
    },
    {
      title: "FRM Part 1: Financial Markets & Products",
      lecturesCount: 4,
      duration: "3 Weeks",
      chapters: [
        { title: "Understanding Bonds & Interest Rate Instruments" },
        { title: "Derivatives: Futures, Options, Swaps" },
        { title: "Structured Finance Products" },
        { title: "Market Functioning & Trading Instruments" }
      ]
    },
    {
      title: "FRM Part 1: Valuation & Risk Models",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "Valuation Techniques for Derivatives" },
        { title: "Risk Metrics: VaR, CVaR, and Stress Testing" },
        { title: "Portfolio Risk Measurement" },
        { title: "Monte Carlo Simulation" },
        { title: "Backtesting & Model Validation" }
      ]
    },
    {
      title: "FRM Part 2: Market & Credit Risk",
      lecturesCount: 7,
      duration: "1 Month",
      chapters: [
        { title: "Market Risk Management Tools" },
        { title: "Volatility & Correlation Models" },
        { title: "Credit Risk Measurement Techniques" },
        { title: "Default Risk & Credit Derivatives" },
        { title: "Credit VaR & Credit Migration" },
        { title: "Portfolio Credit Risk Modeling" },
        { title: "Risk-Adjusted Performance Measures" }
      ]
    },
    {
      title: "FRM Part 2: Operational & Liquidity Risk",
      lecturesCount: 4,
      duration: "3 Weeks",
      chapters: [
        { title: "Identifying Operational Risk Events" },
        { title: "Liquidity Risk Measurement & Stress Testing" },
        { title: "Risk Mitigation Strategies" },
        { title: "Scenario Analysis & Contingency Planning" }
      ]
    },
    {
      title: "FRM Part 2: Risk Management & Investment",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "Alternative Investments: Hedge Funds, PE" },
        { title: "Structured Credit & Asset Securitization" },
        { title: "Portfolio Management in Risk Context" },
        { title: "Behavioral Aspects of Risk Decision Making" },
        { title: "Portfolio Diversification & Risk Premiums" }
      ]
    },
    {
      title: "FRM Part 2: Regulatory & Compliance Risk",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Basel III & Financial Regulations" },
        { title: "Compliance Risk & Fraud Prevention" },
        { title: "Stress Testing & Risk Reporting" },
        { title: "Global Risk Trends & Emerging Threats" }
      ]
    },
    {
      title: "FRM Certification Preparation",
      lecturesCount: 6,
      duration: "1 Month",
      chapters: [
        { title: "FRM Part 1 & Part 2 Mock Exams" },
        { title: "Problem-Solving & Case Practice Sessions" },
        { title: "Exam Strategy, Time Management & Tips" },
        { title: "Common Mistakes & Pitfall Avoidance" },
        { title: "Final Revision Strategies" },
        { title: "Career Support: Resume, Interviews, LinkedIn" }
      ]
    }
  ]
},
{
  id: "chartered-alternative-investment-analyst-caia",
  title: "Chartered Alternative Investment Analyst (CAIA): Specializing in Alternative Investments",
  category: "Finance",
  image: caiaCourseImage,
  duration: "6–7 Months",
  description:
    "Become an expert in alternative investments with the CAIA certification. This course covers hedge funds, private equity, real assets, portfolio management, and due diligence, preparing you for success in global finance.",
  whatYouWillLearn: [
    "Understand the fundamentals and advanced concepts of alternative investments",
    "Gain deep knowledge of hedge funds, private equity, commodities, and real estate",
    "Analyze portfolio risk, performance attribution, and valuation techniques",
    "Master due diligence practices and ethical standards in alternative investing",
    "Learn about digital assets, tokenization, and modern investment vehicles",
    "Prepare thoroughly for CAIA Level 1 and Level 2 certification exams"
  ],
  includes: [
    { label: "CAIA Level 1 & 2 Coverage", icon: "book" },
    { label: "Alternative Asset Strategies & Tools", icon: "app-window" },
    { label: "Case Studies & Valuation Models", icon: "file" },
    { label: "Certification Prep (CAIA Association)", icon: "certificate" },
    { label: "Career Support & Mentorship", icon: "settings" }
  ],
  modules: [
    {
      title: "CAIA Level 1: Fundamentals of Alternative Investments",
      lecturesCount: 4,
      duration: "3 Weeks",
      chapters: [
        { title: "Introduction to Alternative Investment Classes" },
        { title: "Risk-Return Characteristics of Alternatives" },
        { title: "Investment Structures and Legal Considerations" },
        { title: "Trends and Role in Portfolio Allocation" }
      ]
    },
    {
      title: "Hedge Funds & Trading Strategies",
      lecturesCount: 6,
      duration: "1 Month",
      chapters: [
        { title: "Types of Hedge Fund Strategies" },
        { title: "Event-Driven and Macro Approaches" },
        { title: "Long/Short Equity, Arbitrage & CTA Strategies" },
        { title: "Hedge Fund Due Diligence" },
        { title: "Quantitative Methods in Hedge Funds" },
        { title: "Performance Metrics & Risk Controls" }
      ]
    },
    {
      title: "Private Equity & Venture Capital",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "PE Investment Process & Deal Lifecycle" },
        { title: "Venture Capital Strategy & Startup Valuation" },
        { title: "Buyouts, Exits & Growth Strategies" },
        { title: "Fund Structures and Governance" },
        { title: "PE Performance Measurement" }
      ]
    },
    {
      title: "Real Assets: Real Estate & Infrastructure",
      lecturesCount: 3,
      duration: "2 Weeks",
      chapters: [
        { title: "Commercial Real Estate Investments & REITs" },
        { title: "Valuation Approaches for Real Assets" },
        { title: "Infrastructure Projects and Public-Private Models" }
      ]
    },
    {
      title: "Commodities & Digital Assets",
      lecturesCount: 6,
      duration: "1 Month",
      chapters: [
        { title: "Commodity Markets: Oil, Gold & Agriculture" },
        { title: "Derivatives in Commodity Trading" },
        { title: "Cryptocurrencies: Bitcoin, Ethereum & Beyond" },
        { title: "Blockchain Technology & Tokenization" },
        { title: "Digital Asset Valuation & Custody" },
        { title: "Risks & Regulatory Landscape in Digital Finance" }
      ]
    },
    {
      title: "Valuation, Risk Management & Performance Attribution",
      lecturesCount: 4,
      duration: "3 Weeks",
      chapters: [
        { title: "Alternative Asset Valuation Models" },
        { title: "Measuring & Managing Portfolio Risk" },
        { title: "Performance Attribution Techniques" },
        { title: "Factor-Based Risk Analysis" }
      ]
    },
    {
      title: "Due Diligence, Ethics & Professional Standards",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "Ethical Principles in Alternative Investments" },
        { title: "Due Diligence Processes for Fund Selection" },
        { title: "Transparency & Investor Protection" },
        { title: "Conflicts of Interest & Fair Disclosure" },
        { title: "Regulatory Expectations & Industry Codes" }
      ]
    },
    {
      title: "CAIA Level 2: Portfolio Management with Alternatives",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Portfolio Construction Using Alternative Assets" },
        { title: "Diversification and Return Enhancement" },
        { title: "Strategic vs Tactical Allocation" },
        { title: "Case Studies in Multi-Asset Portfolios" }
      ]
    },
    {
      title: "CAIA Exam Preparation & Case Practice",
      lecturesCount: 7,
      duration: "1 Month",
      chapters: [
        { title: "CAIA Level 1 & 2 Mock Exams" },
        { title: "Exam Strategy & Time Management" },
        { title: "Case Study Problem Solving" },
        { title: "Formula Sheets & Key Concepts Review" },
        { title: "Exam-Specific Ethics Review" },
        { title: "Revision Plan & Test-Taking Tips" },
        { title: "Career Planning & Interview Coaching" }
      ]
    }
  ]
},
{
  id: "financial-analytics-certification",
  title: "Financial Analytics Certification: Data-Driven Decision-Making for Modern Finance",
  category: "Finance",
  image: financialAnalyticsImage,
  duration: "4–6 Months",
  description:
    "Master financial data analysis, predictive modeling, and risk analytics using tools like Excel, Python, R, and Tableau. This course equips finance professionals to drive business impact through data-driven strategies.",
  whatYouWillLearn: [
    "Analyze and visualize financial data using modern analytics tools",
    "Apply predictive modeling to forecast trends and guide decisions",
    "Conduct credit risk modeling and fraud detection using AI and ML",
    "Optimize investment strategies and portfolio performance",
    "Interpret corporate financial statements and projections",
    "Automate trading and comply with financial regulations and ethics"
  ],
  includes: [
    { label: "Hands-On Tool Training (Excel, Python, Tableau)", icon: "app-window" },
    { label: "Live Projects & Case Studies", icon: "code" },
    { label: "Machine Learning for Finance", icon: "brain" },
    { label: "Certification of Completion", icon: "certificate" },
    { label: "Career Guidance & Mentoring", icon: "settings" }
  ],
  modules: [
    {
      title: "Introduction to Financial Analytics",
      lecturesCount: 3,
      duration: "2 Weeks",
      chapters: [
        { title: "Understanding Financial Data & Metrics" },
        { title: "Basics of Descriptive Statistics & Visualization" },
        { title: "Overview of Tools: Excel, Python, R, Tableau" }
      ]
    },
    {
      title: "Data Analysis & Visualization Tools",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "Data Cleaning & Preparation in Excel & Python" },
        { title: "Interactive Dashboards in Tableau" },
        { title: "Visualizing Financial KPIs & Time Series" },
        { title: "Working with APIs for Financial Data" },
        { title: "Practical Case: Revenue & Cost Analysis" }
      ]
    },
    {
      title: "Predictive Modeling for Finance",
      lecturesCount: 6,
      duration: "1 Month",
      chapters: [
        { title: "Regression & Time Series Forecasting" },
        { title: "Building Predictive Models in Python & R" },
        { title: "Model Validation & Performance Metrics" },
        { title: "Predicting Stock Prices & Financial Trends" },
        { title: "Scenario Analysis & Stress Testing" },
        { title: "Hands-on Project: Trend Forecasting" }
      ]
    },
    {
      title: "Risk Analytics & Fraud Detection",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Introduction to Financial Risk Types" },
        { title: "Credit Risk Modeling Techniques" },
        { title: "Fraud Detection Using Machine Learning" },
        { title: "Case Study: Bank Loan Default Prediction" }
      ]
    },
    {
      title: "Investment & Portfolio Analytics",
      lecturesCount: 7,
      duration: "3 Weeks",
      chapters: [
        { title: "Portfolio Theory & Asset Allocation" },
        { title: "Sharpe Ratio, Beta, and Performance Measures" },
        { title: "Backtesting Investment Strategies" },
        { title: "ETF & Mutual Fund Analytics" },
        { title: "Machine Learning in Portfolio Optimization" },
        { title: "Project: Portfolio Risk-Return Analysis" },
        { title: "Using Python for Strategy Simulation" }
      ]
    },
    {
      title: "Corporate Finance & Forecasting",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Budgeting & Forecasting Techniques" },
        { title: "Financial Statement Analysis" },
        { title: "Valuation Methods & DCF Models" },
        { title: "Cash Flow & Scenario Forecasting" }
      ]
    },
    {
      title: "Big Data & AI in Finance",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "Introduction to Big Data & Cloud Tools" },
        { title: "AI in Financial Predictions & Anomaly Detection" },
        { title: "Data Pipelines for Financial Systems" },
        { title: "Real-Time Analytics Use Cases" },
        { title: "Hands-on Demo: Financial Data in BigQuery" }
      ]
    },
    {
      title: "Algorithmic Trading & Automation",
      lecturesCount: 6,
      duration: "3 Weeks",
      chapters: [
        { title: "Trading Algorithms & Strategies Overview" },
        { title: "Using Python for Backtesting" },
        { title: "Risk Controls & Trade Execution" },
        { title: "Machine Learning for Signal Generation" },
        { title: "Project: Build a Basic Trading Bot" },
        { title: "Integrating APIs & Broker Platforms" }
      ]
    },
    {
      title: "Financial Ethics & Compliance",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Ethical Principles in Financial Analytics" },
        { title: "Data Privacy & Security in Financial Systems" },
        { title: "Regulatory Standards & Risk Disclosure" }
      ]
    },
    {
      title: "Capstone Project & Certification Preparation",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "End-to-End Analytics Project (Choose Domain)" },
        { title: "Model Documentation & Business Insights" },
        { title: "Presentation to Finance Experts" },
        { title: "Certification Readiness & Final Assessment" },
        { title: "Career Planning & Industry Interview Prep" }
      ]
    }
  ]
},
{
  id: "ifrs-certification",
  title: "IFRS Certification: Mastering International Financial Reporting Standards",
  category: "Finance",
  image: ifrsCertificationImage,
  duration: "3–6 Months",
  description:
    "Gain globally recognized expertise in International Financial Reporting Standards (IFRS) and learn how to prepare compliant financial statements, understand key differences with Indian GAAP, and navigate core IFRS principles relevant to multinational and regulatory environments.",
  whatYouWillLearn: [
    "Understand the IFRS framework and global accounting standards",
    "Prepare financial statements in compliance with IFRS",
    "Identify key differences between IFRS and Indian GAAP",
    "Apply IFRS standards like IFRS 15, 16, and 9 in real-world reporting",
    "Handle consolidated financial reports under IFRS 10 & 12",
    "Implement simplified IFRS for SMEs in practical scenarios"
  ],
  includes: [
    { label: "Live + Self-Paced Content", icon: "video" },
    { label: "Case-Based IFRS Applications", icon: "app-window" },
    { label: "GAAP vs IFRS Comparative Training", icon: "layers" },
    { label: "Certification & Assessment Support", icon: "certificate" },
    { label: "Expert Sessions & Mentorship", icon: "settings" }
  ],
  modules: [
    {
      title: "Introduction to IFRS Framework",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Overview of IFRS and Global Reporting Need" },
        { title: "History and Evolution of IFRS" },
        { title: "Key Principles and Framework Elements" },
        { title: "Application in Global Business Environments" }
      ]
    },
    {
      title: "IFRS vs Indian GAAP",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Overview of Indian GAAP" },
        { title: "Major Differences in Recognition & Measurement" },
        { title: "Impact on Financial Statements" },
        { title: "Reconciliation Techniques for Reporting" },
        { title: "Case Study: Transition from GAAP to IFRS" },
        { title: "Disclosures & Compliance" }
      ]
    },
    {
      title: "Financial Statement Preparation under IFRS",
      lecturesCount: 5,
      duration: "3 Weeks",
      chapters: [
        { title: "IFRS-Compliant Balance Sheet Format" },
        { title: "Income Statement & Statement of Comprehensive Income" },
        { title: "Cash Flow Statement under IFRS" },
        { title: "Statement of Changes in Equity" },
        { title: "Notes to Financial Statements" }
      ]
    },
    {
      title: "Revenue Recognition (IFRS 15)",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Five-Step Revenue Recognition Model" },
        { title: "Application Scenarios & Examples" },
        { title: "Disclosures & Transitional Considerations" }
      ]
    },
    {
      title: "Lease Accounting (IFRS 16)",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Identifying Lease Agreements" },
        { title: "Lessee vs Lessor Accounting Treatments" },
        { title: "Right-of-Use Asset & Lease Liability" },
        { title: "Measurement & Reassessment" }
      ]
    },
    {
      title: "Financial Instruments (IFRS 9)",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Classification & Measurement of Financial Assets" },
        { title: "Impairment Model (ECL Approach)" },
        { title: "Hedge Accounting Basics" },
        { title: "Recognition and Derecognition Rules" },
        { title: "Disclosures under IFRS 9" },
        { title: "Risk Management with Financial Instruments" }
      ]
    },
    {
      title: "Consolidation & Group Reporting (IFRS 10 & 12)",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Control, Subsidiaries, and Group Structures" },
        { title: "Consolidated Financial Statements" },
        { title: "Equity Method for Associates & Joint Ventures" },
        { title: "Non-controlling Interests & Intra-group Transactions" },
        { title: "Disclosure Requirements (IFRS 12)" }
      ]
    },
    {
      title: "IFRS for SMEs",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Introduction to IFRS for SMEs" },
        { title: "Key Simplifications & Eligibility" },
        { title: "Practical Examples & Application" }
      ]
    },
    {
      title: "Capstone Project & Certification Prep",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "IFRS Application Project (Real-World Case)" },
        { title: "Mock Assessments & Feedback" },
        { title: "Final Evaluation & Review" },
        { title: "Certification Guidance & Career Mapping" }
      ]
    }
  ]
},
{
  id: "financial-modeling-valuation",
  title: "Financial Modeling and Valuation: Mastering Excel, DCF, and Investment Analysis",
  category: "Finance",
  image: financialModelingImage,
  duration: "3–6 Months",
  description:
    "Develop in-demand skills in financial modeling, business valuation, and investment analysis using Excel, DCF methods, and M&A strategies. This course is ideal for finance professionals and students aiming to build real-world forecasting and decision-making expertise.",
  whatYouWillLearn: [
    "Build structured financial models from scratch using Excel",
    "Apply valuation methods like DCF, comparables, and precedent transactions",
    "Analyze company performance using financial statements and ratios",
    "Create M&A and LBO models for investment decision-making",
    "Forecast revenues, costs, and financial outcomes under various scenarios",
    "Prepare professional reports and investor presentations"
  ],
  includes: [
    { label: "Excel-Based Case Studies", icon: "app-window" },
    { label: "Valuation Templates & Frameworks", icon: "layers" },
    { label: "Live Sessions + Practice Projects", icon: "video" },
    { label: "Certification & Resume-Ready Portfolio", icon: "certificate" },
    { label: "Placement Guidance & Career Support", icon: "settings" }
  ],
  modules: [
    {
      title: "Introduction to Financial Modeling",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Role of Financial Modeling in Finance" },
        { title: "Structuring a Financial Model" },
        { title: "Best Practices & Formatting in Excel" }
      ]
    },
    {
      title: "Excel-Based Modeling Techniques",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Dynamic Formulas & Financial Functions" },
        { title: "Building Schedules: Depreciation, Working Capital" },
        { title: "Linking Financial Statements" },
        { title: "Scenario & Sensitivity Modeling in Excel" },
        { title: "Cohort & Waterfall Analysis Techniques" },
        { title: "Model Auditing and Review" }
      ]
    },
    {
      title: "Financial Statement Analysis",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Analyzing Balance Sheets & Income Statements" },
        { title: "Cash Flow Statement Review" },
        { title: "Financial Ratios & Trend Analysis" },
        { title: "Common Size Statements & Comparisons" }
      ]
    },
    {
      title: "Forecasting & Budgeting",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Revenue Forecasting Techniques" },
        { title: "Cost Estimation Models" },
        { title: "Budget vs Actual Analysis" },
        { title: "Driver-Based Forecasting" },
        { title: "Top-Down vs Bottom-Up Budgeting" }
      ]
    },
    {
      title: "Valuation Techniques & Applications",
      lecturesCount: 7,
      duration: "2 Weeks",
      chapters: [
        { title: "Discounted Cash Flow (DCF) Method" },
        { title: "Terminal Value & WACC Calculation" },
        { title: "Comparable Company Analysis (Comps)" },
        { title: "Precedent Transaction Method" },
        { title: "Relative Valuation Multiples" },
        { title: "Valuation Adjustments & Assumptions" },
        { title: "Valuation Presentation & Storytelling" }
      ]
    },
    {
      title: "M&A and LBO Modeling",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Introduction to Mergers & Acquisitions" },
        { title: "Deal Structuring & Synergy Analysis" },
        { title: "LBO Modeling Fundamentals" },
        { title: "Debt Modeling & Exit Analysis" }
      ]
    },
    {
      title: "Capital Structure & Cost of Capital",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Debt vs Equity Analysis" },
        { title: "Calculating Cost of Capital (WACC)" },
        { title: "Optimal Capital Structure Considerations" }
      ]
    },
    {
      title: "Reporting & Investment Presentations",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Structuring a Financial Report" },
        { title: "Key Metrics to Present" },
        { title: "Visualizing Financials for Stakeholders" },
        { title: "Investor Decks & Presentation Skills" }
      ]
    },
    {
      title: "Capstone Project & Certification Prep",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Capstone: Build a Full Financial Model" },
        { title: "Company Valuation Project" },
        { title: "Mock Interviews & Case Study Discussion" },
        { title: "Portfolio Development & Review" },
        { title: "Exam & Certification Readiness" }
      ]
    }
  ]
},
{
  id: "financial-planning-wealth-management",
  title: "Financial Planning and Wealth Management: Strategies for Personal and HNI Growth",
  category: "Finance",
  image: financialPlanningImage,
  duration: "3–6 Months",
  description:
    "This comprehensive course equips financial professionals and individuals with practical knowledge in personal finance, investment strategies, tax planning, and HNI portfolio management. Ideal for wealth advisors, investment planners, and anyone looking to grow and preserve wealth effectively.",
  whatYouWillLearn: [
    "Create effective personal and HNI financial plans",
    "Apply investment strategies across asset classes for wealth growth",
    "Plan for retirement, taxes, and estate transfer efficiently",
    "Understand insurance, risk mitigation, and regulatory practices",
    "Advise clients on mutual funds, equities, and tax-saving instruments",
    "Build ethical and compliant financial advisory practices"
  ],
  includes: [
    { label: "Live Case Studies & Simulations", icon: "app-window" },
    { label: "Tax & Retirement Planning Tools", icon: "layers" },
    { label: "Investment Portfolio Exercises", icon: "bar-chart-4" },
    { label: "Certification & Career Coaching", icon: "certificate" },
    { label: "HNI Advisory Practice Projects", icon: "user-circle-2" }
  ],
  modules: [
    {
      title: "Introduction to Financial Planning",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Role of Financial Planning in Wealth Management" },
        { title: "Understanding Client Needs and Objectives" },
        { title: "Basic Concepts: Budgeting, Saving, Net Worth" },
        { title: "Financial Planning Lifecycle" }
      ]
    },
    {
      title: "Investment Strategies & Portfolio Management",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Asset Allocation and Diversification" },
        { title: "Risk and Return Analysis" },
        { title: "Equity, Debt, and Alternative Investments" },
        { title: "Portfolio Construction Techniques" },
        { title: "Monitoring & Rebalancing Portfolios" },
        { title: "Investment Psychology and Client Behavior" }
      ]
    },
    {
      title: "Retirement & Tax Planning",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Retirement Goals and Pension Planning" },
        { title: "Insurance for Retirement Security" },
        { title: "Tax-Saving Investment Strategies" },
        { title: "Income Tax Computation & Planning" },
        { title: "Post-Retirement Wealth Management" }
      ]
    },
    {
      title: "Wealth Advisory for HNIs",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Understanding HNI Financial Needs" },
        { title: "Customized Portfolio Strategies" },
        { title: "Family Office Services & Private Banking" }
      ]
    },
    {
      title: "Stock Market & Mutual Fund Advisory",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Basics of Equity, Bonds & Derivatives" },
        { title: "Mutual Fund Selection & Comparison" },
        { title: "SIP, ELSS, and Index Fund Strategies" },
        { title: "Evaluating Market Trends and Reports" },
        { title: "Investor Risk Profiling for Equity Exposure" },
        { title: "Advisory Approaches for Retail Clients" }
      ]
    },
    {
      title: "Risk Management in Financial Planning",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Types of Financial Risk" },
        { title: "Insurance Planning: Life, Health, Property" },
        { title: "Hedging Strategies and Risk Tools" },
        { title: "Building Resilient Wealth Plans" }
      ]
    },
    {
      title: "Estate & Succession Planning",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Creating Wills and Trusts" },
        { title: "Wealth Transfer Strategies" },
        { title: "Succession Planning for Businesses" }
      ]
    },
    {
      title: "Ethics & Compliance in Advisory",
      lecturesCount: 5,
      duration: "1 Week",
      chapters: [
        { title: "Code of Conduct for Financial Advisors" },
        { title: "Regulatory Framework (SEBI, RBI, IRDAI)" },
        { title: "Anti-Money Laundering (AML) Compliance" },
        { title: "Client Confidentiality & Transparency" },
        { title: "Conflict of Interest Management" }
      ]
    },
    {
      title: "Capstone: Personal Finance Planning",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Designing a Comprehensive Financial Plan" },
        { title: "Client Simulation: HNI Portfolio Case" },
        { title: "Financial Plan Presentation & Review" },
        { title: "Exam & Certification Prep" }
      ]
    }
  ]
},
{
  id: "investment-banking-certification",
  title: "Investment Banking Certification Course: M&A, Valuation, and Capital Markets",
  category: "Finance",
  image: investmentBankingImage,
  duration: "3–6 Months",
  description:
    "Designed for aspiring investment bankers, this course equips you with in-depth knowledge in mergers and acquisitions, capital markets, financial modeling, and deal structuring. Ideal for careers in corporate finance, equity research, and financial advisory.",
  whatYouWillLearn: [
    "Understand the structure and functions of investment banks",
    "Build and analyze financial models using Excel",
    "Apply valuation methods like DCF, LBO, and comparables",
    "Prepare investor presentations and pitch books",
    "Navigate M&A processes and post-deal integration",
    "Comprehend capital markets and fundraising strategies"
  ],
  includes: [
    { label: "Real M&A Deal Simulations", icon: "files" },
    { label: "Excel-Based Financial Modeling", icon: "table" },
    { label: "Valuation Case Studies", icon: "bar-chart-3" },
    { label: "Pitchbook Development Practice", icon: "notebook-pen" },
    { label: "Certification & Industry Insights", icon: "certificate" }
  ],
  modules: [
    {
      title: "Investment Banking Overview",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Role and Structure of Investment Banks" },
        { title: "Core Services: M&A, IPOs, and Advisory" },
        { title: "Career Paths and Job Roles" },
        { title: "Recent Trends in Investment Banking" }
      ]
    },
    {
      title: "M&A and Deal Structuring",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Types of Mergers and Acquisition Strategies" },
        { title: "Deal Lifecycle and Due Diligence" },
        { title: "Post-Merger Integration" },
        { title: "Synergies and Transaction Multiples" },
        { title: "Negotiation & Regulatory Considerations" },
        { title: "Case Study: Real-World M&A Deal" }
      ]
    },
    {
      title: "Financial Modeling Essentials",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Excel Techniques for Analysts" },
        { title: "3-Statement Model Building" },
        { title: "Forecasting and Assumptions" },
        { title: "Linking Financial Statements" },
        { title: "Scenario & Sensitivity Analysis" }
      ]
    },
    {
      title: "Valuation Techniques",
      lecturesCount: 7,
      duration: "2 Weeks",
      chapters: [
        { title: "Discounted Cash Flow (DCF) Method" },
        { title: "Relative Valuation: Comparables" },
        { title: "LBO Modeling Basics" },
        { title: "Enterprise vs. Equity Value" },
        { title: "Valuation Multiples and Market Data" },
        { title: "Terminal Value & WACC" },
        { title: "Valuation Project: Company Analysis" }
      ]
    },
    {
      title: "Pitchbooks & Presentations",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Structure of Investment Banking Pitchbooks" },
        { title: "Building a Winning Deal Pitch" },
        { title: "Presentation Best Practices" }
      ]
    },
    {
      title: "Equity & Debt Capital Markets",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Raising Capital Through IPOs & FPOs" },
        { title: "Debt Issuances: Bonds and Notes" },
        { title: "Syndication Process and Book Building" },
        { title: "Private Placements and Structured Finance" },
        { title: "Role of Underwriters and Rating Agencies" },
        { title: "Recent ECM & DCM Transactions" }
      ]
    },
    {
      title: "Private Equity & Venture Capital",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Investment Lifecycle in PE & VC" },
        { title: "Term Sheets & Capital Structure" },
        { title: "Exit Strategies and IRR Analysis" },
        { title: "Startup Valuation Techniques" }
      ]
    },
    {
      title: "Regulations & Compliance",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "SEBI, RBI, and Global Compliance Standards" },
        { title: "Insider Trading and Ethical Practices" },
        { title: "Anti-Money Laundering (AML) Laws" }
      ]
    },
    {
      title: "Capstone Project: End-to-End Deal Execution",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Selecting a Target Company" },
        { title: "Building Financial & Valuation Models" },
        { title: "Structuring the Deal and Presentation" },
        { title: "Final Assessment and Certification" }
      ]
    }
  ]
},
{
  id: "business-accounting-taxation",
  title: "Business Accounting and Taxation (BAT) Certification",
  category: "Finance",
  image: batCourseImage,
  duration: "3–6 Months",
  description:
    "The Business Accounting and Taxation (BAT) Course provides practical skills in financial accounting, taxation, and compliance using Tally, Excel, and GST systems. Ideal for those seeking a career in accounting, finance, or auditing across industries and SMEs.",
  whatYouWillLearn: [
    "Understand accounting principles and prepare financial statements",
    "Manage direct and indirect taxes including GST and Income Tax",
    "Gain hands-on skills using Tally and Excel for accounting tasks",
    "Handle payroll, TDS, and salary management",
    "Ensure legal compliance and reporting for businesses",
    "Perform internal audits and risk assessments"
  ],
  includes: [
    { label: "Hands-on Tally & Excel Training", icon: "layout-grid" },
    { label: "GST Filing & Compliance", icon: "file-bar-chart" },
    { label: "Income Tax Return (ITR) Filing", icon: "file-text" },
    { label: "Payroll Management Practice", icon: "users" },
    { label: "Final Project & Certification", icon: "award" }
  ],
  modules: [
    {
      title: "Accounting & Financial Statements",
      lecturesCount: 6,
      duration: "2 Weeks",
      chapters: [
        { title: "Introduction to Accounting Principles" },
        { title: "Journal Entries & Ledger Posting" },
        { title: "Trial Balance and Adjustments" },
        { title: "Profit & Loss Account Preparation" },
        { title: "Balance Sheet Structuring" },
        { title: "Cash Flow Statement Preparation" }
      ]
    },
    {
      title: "Direct & Indirect Taxation",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Income Tax Fundamentals" },
        { title: "Corporate Tax Calculations" },
        { title: "Tax Deducted at Source (TDS)" },
        { title: "Overview of Indirect Taxes" },
        { title: "Introduction to GST & Compliance" }
      ]
    },
    {
      title: "Tally & Excel for Business Accounting",
      lecturesCount: 7,
      duration: "3 Weeks",
      chapters: [
        { title: "Tally Interface & Features" },
        { title: "Creating Company and Ledgers" },
        { title: "Voucher Entry and GST in Tally" },
        { title: "Generating Financial Reports" },
        { title: "Excel Formulas for Accounting" },
        { title: "Creating Dynamic MIS Reports" },
        { title: "Excel Dashboards for Analysis" }
      ]
    },
    {
      title: "Payroll & Salary Management",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Payroll Structure & Components" },
        { title: "TDS on Salaries" },
        { title: "Salary Slip Generation and Compliance" }
      ]
    },
    {
      title: "GST Framework & Filing",
      lecturesCount: 4,
      duration: "1.5 Weeks",
      chapters: [
        { title: "GST Registration & Rules" },
        { title: "Creating GST Invoices" },
        { title: "Filing GST Returns (GSTR-1, GSTR-3B)" },
        { title: "Input Tax Credit (ITC) & Reconciliation" }
      ]
    },
    {
      title: "Financial Reporting & MIS",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Types of MIS Reports" },
        { title: "Analyzing Business Performance" },
        { title: "Cost vs. Revenue Trends" },
        { title: "Budgeting & Forecasting Techniques" },
        { title: "Reporting Tools in Excel & Tally" }
      ]
    },
    {
      title: "Business Law & Compliance",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Overview of Indian Business Law" },
        { title: "Legal Requirements for Companies" },
        { title: "Company Act & Tax Laws Compliance" },
        { title: "Ethical Accounting Practices" }
      ]
    },
    {
      title: "Audit & Risk Management",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "Internal vs. External Audit" },
        { title: "Risk Identification & Assessment" },
        { title: "Audit Report Preparation" }
      ]
    },
    {
      title: "Capstone Project: Accounting for a Real Business",
      lecturesCount: 4,
      duration: "2 Weeks",
      chapters: [
        { title: "Setup and Record Transactions in Tally" },
        { title: "Tax Calculation and Report Generation" },
        { title: "Create MIS Reports and Compliance Documents" },
        { title: "Presentation and Certification Evaluation" }
      ]
    }
  ]
},
{
  id: "gst-certification-course",
  title: "GST Certification Course",
  category: "Finance",
  image: gstCourseImage,
  duration: "2–4 Months",
  description:
    "The GST Certification Course equips learners with expert knowledge of Goods and Services Tax laws, compliance processes, return filing, ITC claims, and audits. It is ideal for accountants, business owners, tax professionals, and finance students handling indirect taxation in India.",
  whatYouWillLearn: [
    "Understand the GST structure, tax slabs, and compliance requirements",
    "Register businesses under GST and generate proper invoices",
    "File monthly and annual GST returns (GSTR-1, GSTR-3B, GSTR-9)",
    "Claim Input Tax Credit and reconcile mismatches",
    "Conduct GST audits and respond to assessments and notices",
    "Use GST software tools for return filing and compliance"
  ],
  includes: [
    { label: "GST Return Filing Practice", icon: "file-text" },
    { label: "Hands-on GST Software Training", icon: "terminal" },
    { label: "Input Tax Credit (ITC) Calculations", icon: "calculator" },
    { label: "E-Way Bill and Invoicing", icon: "file-check-2" },
    { label: "Final Certification", icon: "award" }
  ],
  modules: [
    {
      title: "GST Framework & Compliance",
      lecturesCount: 5,
      duration: "2 Weeks",
      chapters: [
        { title: "Introduction to GST & Structure" },
        { title: "GST Registration: Process & Eligibility" },
        { title: "Types of GST: CGST, SGST, IGST, UTGST" },
        { title: "Tax Rates and Slabs" },
        { title: "Compliance Rules and Penalties" }
      ]
    },
    {
      title: "GST Registration & Documentation",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "Eligibility & Required Documents" },
        { title: "GST Portal Walkthrough" },
        { title: "Online Registration Process" },
        { title: "Common Errors and Fixes" }
      ]
    },
    {
      title: "Invoicing & E-Way Bill System",
      lecturesCount: 6,
      duration: "1.5 Weeks",
      chapters: [
        { title: "Tax Invoice vs. Bill of Supply" },
        { title: "GST Invoice Format and Rules" },
        { title: "E-Way Bill Generation & Applicability" },
        { title: "Inter-State Transactions" },
        { title: "Returns Linked to Invoicing" },
        { title: "Avoiding Penalties in Billing" }
      ]
    },
    {
      title: "Input Tax Credit (ITC) & Reconciliation",
      lecturesCount: 4,
      duration: "1 Week",
      chapters: [
        { title: "ITC Eligibility Rules" },
        { title: "Matching Invoices & Claiming Credit" },
        { title: "Reversals & Reconciliation Process" },
        { title: "ITC Mismatch: Causes & Rectifications" }
      ]
    },
    {
      title: "GST Return Filing",
      lecturesCount: 7,
      duration: "2 Weeks",
      chapters: [
        { title: "Overview of GST Returns" },
        { title: "GSTR-1: Outward Supplies Filing" },
        { title: "GSTR-3B: Summary Return Filing" },
        { title: "GSTR-9: Annual Return Basics" },
        { title: "Late Fees and Interest Calculations" },
        { title: "Correcting Filed Returns" },
        { title: "Due Dates and Common Mistakes" }
      ]
    },
    {
      title: "GST Audit & Assessment",
      lecturesCount: 3,
      duration: "1 Week",
      chapters: [
        { title: "GST Audit Process & Thresholds" },
        { title: "Responding to Notices" },
        { title: "Tax Refunds & Adjustments" }
      ]
    },
    {
      title: "Reverse Charge Mechanism & TDS under GST",
      lecturesCount: 3,
      duration: "0.5 Week",
      chapters: [
        { title: "Understanding RCM Transactions" },
        { title: "TDS and TCS under GST" },
        { title: "Compliances for Special Cases" }
      ]
    },
    {
      title: "GST Software & Practical Training",
      lecturesCount: 5,
      duration: "1.5 Weeks",
      chapters: [
        { title: "Using GSTN Portal Effectively" },
        { title: "Return Filing in TallyPrime & Zoho Books" },
        { title: "Reconciling GSTR-2A & 2B" },
        { title: "Generating Reports from Software" },
        { title: "Case Study: Filing for a Small Business" }
      ]
    }
  ]
},
{
  id: "certified-management-accountant-cma",
  title: "Certified Management Accountant (CMA)",
  category: "Finance",
  image: cmaCourseImage,
  duration: "12–18 Months",
  description:
    "The Certified Management Accountant (CMA) certification by the IMA is a globally respected credential for finance and accounting professionals. It focuses on financial planning, performance management, cost control, decision analysis, and strategic financial leadership, making it ideal for those aiming for high-level finance roles.",
  whatYouWillLearn: [
    "Master financial planning, budgeting, and forecasting techniques",
    "Analyze financial performance and manage costs effectively",
    "Evaluate investment decisions and corporate finance strategies",
    "Apply decision-making tools in business scenarios",
    "Understand ethical standards and corporate governance",
    "Use data analytics and technology in financial management"
  ], 
  includes: [
    { label: "Part 1 & 2 CMA Curriculum Coverage", icon: "book" },
    { label: "Financial Modeling & Case Studies", icon: "bar-chart-3" },
    { label: "Decision-Making & Ethics Workshops", icon: "check-square" },
    { label: "Interactive Practice Tests", icon: "file-check-2" },
    { label: "CMA Exam Guidance & Mentorship", icon: "user-check" }
  ],
  modules: [
    {
      title: "Part 1: Financial Planning, Performance, and Analytics",
      lecturesCount: 6,
      duration: "6–9 Months",
      chapters: [
        { title: "External Financial Reporting Decisions" },
        { title: "Planning, Budgeting, and Forecasting" },
        { title: "Performance Management & Variance Analysis" },
        { title: "Cost Management Strategies" },
        { title: "Internal Controls & Risk Mitigation" },
        { title: "Technology & Analytics in Finance" }
      ]
    },
    {
      title: "Part 2: Strategic Financial Management",
      lecturesCount: 7,
      duration: "6–9 Months",
      chapters: [
        { title: "Financial Statement Analysis & Valuation" },
        { title: "Corporate Finance Fundamentals" },
        { title: "Decision Analysis & Pricing Strategies" },
        { title: "Risk Management & Capital Structure" },
        { title: "Investment Decisions & Economic Concepts" },
        { title: "Ethics & Professional Standards" },
        { title: "Strategic Financial Leadership & Case Applications" }
      ]
    },
    {
      title: "Financial Tools & Technology",
      lecturesCount: 4,
      duration: "1 Month",
      chapters: [
        { title: "Excel for Financial Modeling" },
        { title: "Data Visualization Using Power BI" },
        { title: "Automation & AI in Finance" },
        { title: "Using ERP & Accounting Software" }
      ]
    },
    {
      title: "CMA Practice & Exam Preparation",
      lecturesCount: 3,
      duration: "1 Month",
      chapters: [
        { title: "Mock Tests for Part 1 & Part 2" },
        { title: "Question Bank Review & Feedback" },
        { title: "Exam Strategy & Time Management" }
      ]
    },
    {
      title: "Professional Development & Ethics",
      lecturesCount: 5,
      duration: "1 Month",
      chapters: [
        { title: "Corporate Governance & Leadership Skills" },
        { title: "Professional Ethics in Finance" },
        { title: "Business Communication for Finance Professionals" },
        { title: "Career Roadmap After CMA" },
        { title: "Interview & Resume Preparation for CMA Roles" }
      ]
    }
  ]
},

];
