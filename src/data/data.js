// Personal Information
export const personalInfo = {
  name: "Behailu Yifru",
  title: "Computer Science Student & Full-Stack Web Developer",
  bio: "I am a passionate fourth-year Computer Science student at Debre Berhan University, specializing in Web Development with additional experience in mobile and desktop applications. I love creating innovative solutions that solve real-world problems and contribute to the tech ecosystem in Ethiopia.",
  profileImage: "/images/myprofile.png",
  education: {
    university: "Debre Berhan University",
    degree: "Bachelor of Science in Computer Science",
    year: "4th Year",
    expectedGraduation: "2027"
  }
};

// Skills Data
export const skills = {
  programmingLanguages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Java", level: 85, icon: "☕" },
    { name: "JavaScript", level: 88, icon: "📜" },
    { name: "C++", level: 80, icon: "⚡" },
    { name: "PHP", level: 75, icon: "🐘" },
    { name: "HTML/CSS", level: 92, icon: "🌐" }
  ],
  frameworksTools: [
    { name: "React", level: 88, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "Git", level: 85, icon: "📊" },
    { name: "Laravel", level: 78, icon: "🎯" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" }
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "PostgreSQL", level: 75, icon: "🐘" }
  ]
};

// Projects Data - Curated selection of Production, Commercial, and Open-Source Systems
export const projects = [
  {
    id: 1,
    title: "By-poems ('የግጥም መድረክ') Platform",
    description: "A modern full-stack social poetry platform with dual web and native Android clients. Features poetry feeds, author profiles, verse curation, community interactions, and authentic Amharic typography. Live on Vercel and distributed as a native Android app via Telegram.",
    image: "/images/by_poems_preview.jpg",
    technologies: ["Next.js", "React", "Java", "Android XML", "Tailwind CSS", "Vercel"],
    githubLink: null,
    liveDemo: "https://by-poems.vercel.app/",
    telegramApp: "https://t.me/bytech21",
    searchKeywords: "የግጥም መድረክ by-poems poetry amharic social platform vercel",
    category: "web",
    badge: "Production · Web & Android App",
    isPrivate: true,
    highlights: [
      "Live web application built with Next.js & responsive Tailwind CSS",
      "Native Android mobile app developed with Java & XML",
      "Searchable on Google/Bing by 'የግጥም መድረክ'",
      "Distributed on Telegram channel: t.me/bytech21"
    ]
  },
  {
    id: 2,
    title: "BY-Tech Full-Stack Electronics E-Commerce",
    description: "A comprehensive, high-performance web platform designed for tech retailers selling computers, laptops, smartphones, and electronics. Engineered beyond basic catalogs with dynamic spec filtering, real-time cart state, modern checkout flows, and responsive UI.",
    image: "/images/by_tech_ecommerce.svg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Vercel"],
    githubLink: null,
    liveDemo: "https://by-tech.vercel.app/",
    searchKeywords: "by-tech e-commerce electronics computers laptops smartphones store",
    category: "web",
    badge: "Production Web Platform",
    isPrivate: true,
    highlights: [
      "Advanced product categorization and spec-based search",
      "Dynamic interactive shopping cart and checkout architecture",
      "Optimized for high-speed delivery with Next.js on Vercel",
      "Mobile-first responsive design tailored for electronics commerce"
    ]
  },
  {
    id: 3,
    title: "Smart Contactless QR Cafe & Restaurant System",
    description: "An innovative digital contactless dining and menu management system designed for modern cafes and restaurants. Customers scan dynamic QR codes on dining tables to browse categorized digital menus, view daily specials, and place instant orders.",
    image: "/images/qr_cafe_menu.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "QR Tech", "Node.js"],
    githubLink: null,
    videoDemo: "https://vt.tiktok.com/ZSgHymDDy/",
    searchKeywords: "smart qr cafe menu restaurant digital contactless food dining",
    category: "web",
    badge: "Commercial / Client Solution",
    isPrivate: true,
    highlights: [
      "Contactless instant table ordering via QR code scanning",
      "Dynamic visual categorization for coffees, pastries, and meals",
      "Interactive video demonstration featured on TikTok",
      "Eliminates paper menu reprint overhead for hospitality venues"
    ]
  },
  {
    id: 4,
    title: "BY Mobile Video Downloader (Android)",
    description: "A high-performance native Android application built with Java & XML that downloads videos from YouTube and TikTok in multiple qualities and formats (1080p, 720p, MP3 audio). Engineered with background thread queues and smooth local storage integration.",
    image: "/images/video_downloader_preview.jpg",
    technologies: ["Java", "Android XML", "Android SDK", "Multi-Threading"],
    githubLink: null,
    telegramApp: "https://t.me/bytech21",
    searchKeywords: "video downloader mobile android java xml youtube tiktok mp3 1080p",
    category: "mobile",
    badge: "Native Android App",
    isPrivate: true,
    highlights: [
      "Direct high-speed downloads from YouTube and TikTok",
      "Multiple format resolutions: 1080p, 720p, 480p, and MP3 audio extraction",
      "Built natively using Java and Android XML architecture",
      "Available for download on Telegram: t.me/bytech21"
    ]
  },
  {
    id: 5,
    title: "Ethiopian Skill Match Web Application",
    description: "A comprehensive platform designed to connect skilled individuals with local employment opportunities and freelance projects. Features include user profiles, job matching algorithms, and real-time notifications.",
    image: "/images/Ethiopian Skill Match Web Application.png",
    technologies: ["HTML", "JavaScript", "Java", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/behailu412/Ethiopian-Skill-Match-Web-Application",
    liveDemo: null,
    category: "web",
    badge: "Open Source Platform",
    isPrivate: false
  },
  {
    id: 6,
    title: "Ethiopian Food Advisor AI Agent",
    description: "An intelligent AI agent providing personalized dietary recommendations, recipe suggestions, and nutritional information focused specifically on authentic Ethiopian cuisine and traditional cooking methods.",
    image: "/images/Ethiopian Food Advisor AI Agent.png",
    technologies: ["Python", "AI/ML", "Flask", "BeautifulSoup"],
    githubLink: "https://github.com/behailu412/Ethiopian_food_advisor_AI_Agent",
    liveDemo: null,
    category: "ai",
    badge: "AI & Machine Learning",
    isPrivate: false
  },
  {
    id: 7,
    title: "BY YouTube Video Downloader (Desktop)",
    description: "A powerful utility tool that allows users to download YouTube videos in various formats and qualities for offline viewing. Features batch downloading and format conversion capabilities.",
    image: "/images/BY YouTube_Video Downloader.png",
    technologies: ["Python", "PyTube", "FFmpeg", "Tkinter"],
    githubLink: "https://github.com/behailu412/BY-YouTube-Video-Downloader",
    liveDemo: null,
    category: "tool",
    badge: "Desktop Utility",
    isPrivate: false
  },
  {
    id: 8,
    title: "BY TeleTok",
    description: "A creative social communication project that integrates messaging and content sharing features, providing users with a unique platform for digital interaction and media sharing.",
    image: "/images/BY TeleTok.png",
    technologies: ["JavaScript", "Python", "Socket.io", "MySQL"],
    githubLink: "https://github.com/behailu412/BY_TeleTok",
    liveDemo: null,
    category: "web",
    badge: "Real-Time Web App",
    isPrivate: false
  },
  {
    id: 9,
    title: "Python Kivy Mobile App",
    description: "A cross-platform mobile application developed using the Kivy framework, demonstrating modern mobile development practices and responsive UI design for both Android and iOS platforms.",
    image: "/images/Python Kivy_Mobile App.jpg",
    technologies: ["Python", "Kivy", "SQLite", "Buildozer"],
    githubLink: "https://github.com/behailu412/python-kivy-mobile-app",
    liveDemo: null,
    category: "mobile",
    badge: "Cross-Platform Mobile",
    isPrivate: false
  }
];

// Certifications Data
export const certifications = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    date: "2024",
    description: "Comprehensive course covering AI concepts, machine learning basics, and intelligent system design.",
    pdfPath: "/certifications/Artificial Intelligence Fundamentals.pdf",
    certificateLink: "https://www.udacity.com/certificate/e/5f54ecc0-996d-11f0-a0cb-a7154636d7d4",
    skills: ["Machine Learning", "Neural Networks", "Python"]
  },
  {
    id: 2,
    title: "Data Analysis Fundamentals",
    issuer: "Udacity",
    date: "2024",
    description: "In-depth training on data analysis techniques, statistical methods, and data visualization.",
    pdfPath: "/certifications/Data Analysis Fundamentals.pdf",
    certificateLink: "https://www.udacity.com/certificate/e/75a15f42-99e3-11f0-9cf0-8f4a4e3c0cbc",
    skills: ["Pandas", "NumPy", "Data Visualization", "Statistics"]
  },
  {
    id: 3,
    title: "Android Developer Fundamentals",
    issuer: "Udacity",
    date: "2023",
    description: "Complete guide to Android app development including UI design, data storage, and network operations.",
    pdfPath: "/certifications/Android Developer Fundamentals.pdf",
    certificateLink: "https://www.udacity.com/certificate/e/dc2a9d3c-99e8-11f0-b800-cb0cde29c633",
    skills: ["Kotlin", "Android Studio", "Firebase", "REST APIs"]
  },
  {
    id: 4,
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "2023",
    description: "Core programming concepts including algorithms, data structures, and problem-solving techniques.",
    pdfPath: "/certifications/Programming Fundamentals.pdf",
    certificateLink: "https://www.udacity.com/certificate/e/ccf06116-9b15-11f0-be87-332ea1e3b9b4",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "OOP"]
  }
];

// Contact Information
export const contactInfo = {
  email: "yifrubehailu412@gmail.com",
  github: "https://github.com/behailu412",
  linkedin: "https://www.linkedin.com/in/behailu-yifru-8b508042b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  telegram: "https://t.me/haile_cs_1",
  location: "Debre Berhan, Ethiopia",
  resume: "https://drive.google.com/file/d/1yTh-iOD9x1Ce_dA-YBUvXGk1D3kC75fH/view?usp=sharing"
};

// Formspree configuration - works immediately on all devices
export const formspreeConfig = {
  endpoint: 'https://formspree.io/f/mnjowbjp', // Working endpoint for yifrubehailu412@gmail.com
  email: 'yifrubehailu412@gmail.com'
};

// Quick Highlights / Stats
export const quickStats = [
  { label: "Academic Standing", value: "4th Year", subtext: "Debre Berhan University" },
  { label: "Portfolio Projects", value: "10+", subtext: "Production, Mobile & Open-Source" },
  { label: "Certifications", value: "4", subtext: "Udacity Verified" },
  { label: "Core Technologies", value: "12+", subtext: "Next.js, React, Java & Python" }
];

// Interactive Role Taglines for Hero Typewriter
export const heroTaglines = [
  "4th-Year Computer Science Scholar",
  "Full-Stack Web & Next.js Developer",
  "Python & AI Agent Enthusiast",
  "Building Impactful Digital Solutions"
];

// Academic & Technical Journey Timeline
export const careerJourney = [
  {
    period: "2023 - Foundations",
    title: "Programming & Android Core",
    organization: "Debre Berhan University & Udacity",
    description: "Built rock-solid foundations in Object-Oriented Programming, data structures, algorithms, and mobile development with Kotlin/Android.",
    badge: "Foundation"
  },
  {
    period: "2024 - AI & Data Specialization",
    title: "AI Fundamentals & Data Analysis",
    organization: "Udacity Nanodegrees",
    description: "Earned dual Nanodegree certifications in AI fundamentals and Data Analysis. Developed custom machine learning workflows and Python intelligent systems.",
    badge: "Nanodegree"
  },
  {
    period: "2025 - Full-Stack & Native Apps",
    title: "Production Web & Native Android Engineering",
    organization: "Independent & Client Developments",
    description: "Architected By-poems platform (Next.js & Java Android), BY-Tech full-stack e-commerce store, Smart QR cafe menu systems, and high-performance video downloaders distributed via Telegram.",
    badge: "Engineering"
  },
  {
    period: "2026 - Present (4th Year)",
    title: "Senior Engineering & Scalable Platforms",
    organization: "Graduating Senior · Debre Berhan University",
    description: "Specializing in advanced Next.js web applications, scalable cloud deployments on Vercel, and delivering client-facing digital solutions across Ethiopia and beyond.",
    badge: "Current"
  }
];

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Journey", href: "#journey", id: "journey" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Contact", href: "#contact", id: "contact" }
];

// Social Media Links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/behailu412",
    icon: "FaGithub",
    color: "#0a9e97"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/behailu-yifru-8b508042b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "FaLinkedin",
    color: "#0077b5"
  },
  {
    name: "Email",
    url: "mailto:yifrubehailu412@gmail.com",
    icon: "FaEnvelope",
    color: "#ea4335"
  },
  {
    name: "Telegram",
    url: "https://t.me/haile_cs_1",
    icon: "FaTelegram",
    color: "#0088cc"
  }
];
