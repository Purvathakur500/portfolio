// ============================================================
// PORTFOLIO DATA
// Edit this single file to update the entire site's content.
// ============================================================

export const personalInfo = {
  name: "Purva Thakur",
  firstName: "Purva",
  lastName: "Thakur",
  primaryIdentity: "B.Tech CSE (AI & Data Engineering) Student",
  identities: ["Developer", "Public Speaker", "Anchor", "Event Manager", "Defence Aspirant"],
  location: "Punjab, India",
  university: "Lovely Professional University, Punjab",
  degree: "B.Tech — Computer Science & Engineering",
  specialization: "AI & Data Engineering",
  academicPeriod: "2025–2028",
  currentStanding: "2nd Year · 3rd Semester",
  cgpa: "9.0",
  cgpaScale: "10",
  email: "purvathakur9041@gmail.com",
  phone: "+91 94633 88044",
  goal: "To join the Defence Forces and serve with dedication, discipline and purpose.",
  coreQualities: ["Discipline", "Confidence", "Trust", "Mindset"],
  resumeUrl: "/Purva_Thakur_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/purva-thakur-56ba56350/",
  github: "https://github.com/Purvathakur500",
  email: `mailto:${personalInfo.email}`,
};

export const heroContent = {
  eyebrow: "HELLO, I'M",
  headingLine1: "PURVA",
  headingLine2: "THAKUR",
  subtitle: "B.Tech CSE (AI & Data Engineering) | Developer | Public Speaker",
  tagline: "Building with technology, speaking with confidence, leading with discipline.",
  description:
    "I am a Computer Science student specializing in AI & Data Engineering, with a passion for technology, defence, public speaking and leadership. I enjoy turning ideas into practical solutions while continuously challenging myself beyond the classroom.",
  ctaPrimary: "EXPLORE MY WORK →",
  ctaSecondary: "LET'S CONNECT",
  statusBadge: "ASPIRING DEFENCE PROFESSIONAL",
  floatingBadges: ["AI & DATA", "DEFENCE", "PUBLIC SPEAKING", "LEADERSHIP", "DEVELOPER"],
};

export const highlights = [
  { value: "AIR 587", label: "NDA 2025" },
  { value: "RUNNER-UP", label: "National Youth Gita Summit" },
  { value: "2ND", label: "Advitya — IIT Ropar Tech Fest" },
  { value: "9.0 CGPA", label: "B.Tech CSE — AI & Data Engineering" },
];

export const about = {
  label: "ABOUT ME",
  heading: "Technology, Discipline & Purpose",
  paragraphs: [
    "Purva Thakur is a B.Tech CSE student specializing in AI & Data Engineering at Lovely Professional University.",
    "She has a strong interest in software development, data engineering, defence, communication and leadership.",
    "Beyond academics, she enjoys public speaking, anchoring, event management, dancing, badminton and fitness.",
    "She believes in discipline, confidence, trust and mindset as foundations for personal and professional growth.",
    "Her long-term goal is to join the Defence Forces and serve with dedication.",
  ],
  card: {
    name: "Purva Thakur",
    role: "B.Tech CSE — AI & Data Engineering",
    location: "Punjab, India",
    cgpa: "9.0 / 10",
    focus: "AI • Data Engineering • Technology • Defence",
    goal: "Defence Services",
  },
};

export const experience = [
  {
    id: "manzil-tak",
    role: "INTERVIEW TRAINEE",
    org: "Manzil Tak",
    description:
      "Gained practical exposure to professional interview processes, structured communication and candidate assessment. Strengthened professional interaction, communication and interview-preparation skills.",
  },
  {
    id: "anchor-speaker",
    role: "ANCHOR • PUBLIC SPEAKER • EVENT MANAGER",
    org: "Campus & Technology Events",
    description:
      "Hosted and coordinated technology and campus events while delivering engaging public-speaking segments.",
    emphasis: ["Anchoring", "Public speaking", "Event coordination", "Audience engagement", "Communication"],
  },
];

export const education = {
  label: "EDUCATION",
  heading: "Academic Journey",
  degree: "B.TECH — COMPUTER SCIENCE & ENGINEERING",
  specialization: "AI & DATA ENGINEERING",
  university: "Lovely Professional University",
  location: "Punjab, India",
  period: "2025–2028",
  standing: "2nd Year · 3rd Semester",
  cgpa: "9.0 / 10",
};

export const achievements = [
  {
    id: "nda",
    title: "NDA 2025",
    result: "ALL INDIA RANK 587",
    description: "Successfully recommended through the National Defence Academy selection process.",
    featured: true,
  },
  {
    id: "gita-summit",
    title: "National Youth Gita Summit",
    result: "OVERALL RUNNER-UP",
    description: "Placed 2nd nationally among 10,000+ participants.",
    featured: false,
  },
  {
    id: "advitya",
    title: "Advitya — IIT Ropar",
    result: "2ND POSITION",
    description: "Secured 2nd position at the national-level technology fest.",
    featured: false,
  },
];

export const skills = {
  label: "EXPERTISE",
  heading: "Skills That Power My Work",
  categories: [
    {
      name: "Programming",
      items: ["Python", "Java", "C++"],
    },
    {
      name: "Core Computer Science",
      items: ["Data Structures & Algorithms", "Problem Solving"],
    },
    {
      name: "Development",
      items: ["Full-Stack Development", "Streamlit"],
    },
    {
      name: "Data & Analytics",
      items: ["Data Analytics", "Analytical Thinking", "Data Engineering"],
    },
    {
      name: "Professional",
      items: [
        "Leadership",
        "Communication",
        "Public Speaking",
        "Team Management",
        "Event Management",
        "Product Management",
      ],
    },
  ],
};

export const projects = [
  {
    id: "officerpath",
    title: "OfficerPath",
    category: "Defence Technology / Python / Streamlit",
    description:
      "OfficerPath is a defence-oriented preparation and monitoring application designed to help defence aspirants organize preparation, track progress and manage key activities.",
    technologies: ["Python", "Streamlit"],
    image: "officerpath",
    github: "https://github.com/Purvathakur500/officerpath",
    status: null,
    primaryLabel: "VIEW PROJECT",
    secondaryLabel: "SOURCE CODE",
  },
  {
    id: "smart-boat",
    title: "Smart Boat — Flood Rescue System",
    category: "IoT / Hardware / Disaster Management",
    description:
      "A sensor-based prototype boat designed for flood rescue applications, integrating LDR and ultrasonic sensors for environmental detection and responsive movement.",
    technologies: ["LDR Sensors", "Ultrasonic Sensor", "Sensor Integration", "Prototype Hardware"],
    image: "smartboat",
    github: null,
    status: "PROTOTYPE",
    primaryLabel: null,
    secondaryLabel: null,
  },
  {
    id: "drone-system",
    title: "Drone System",
    category: "Currently Working",
    description: "Exploring drone-based technology with a focus on practical applications and intelligent systems.",
    technologies: [],
    image: null,
    github: null,
    status: "IN PROGRESS",
    primaryLabel: null,
    secondaryLabel: null,
  },
  {
    id: "smart-mushroom",
    title: "Smart Mushroom Farming System",
    category: "Currently Working",
    description: "Developing a technology-driven mushroom farming system exploring smart monitoring and automation.",
    technologies: [],
    image: null,
    github: null,
    status: "IN PROGRESS",
    primaryLabel: null,
    secondaryLabel: null,
  },
];

export const certifications = [
  {
    id: "python-cert",
    title: "Python Certification",
    issuer: null,
    date: null,
    credentialId: null,
  },
];

export const interests = [
  { name: "Public Speaking" },
  { name: "Dancing" },
  { name: "Badminton" },
  { name: "Anchoring" },
  { name: "Event Management" },
  { name: "Running & Fitness" },
  { name: "Defence" },
];

export const defenceGoal = {
  heading: "Driven By Purpose",
  statement: "My goal is to join the Defence Forces and serve with discipline, courage and responsibility.",
  pillars: ["Discipline", "Leadership", "Confidence", "Fitness", "Service", "Technology"],
};

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Full Professional Proficiency" },
  { name: "Punjabi", level: "Native / Bilingual Proficiency" },
];

export const testimonials = {
  enabled: false, // flip to true once real testimonials are available
  items: [],
};

export const contact = {
  label: "GET IN TOUCH",
  heading: "Let's Connect",
  description:
    "Whether it's technology, collaboration, speaking, events or an exciting new idea, I'd love to connect.",
  ctaLabel: "SEND MESSAGE →",
};

export const footer = {
  brand: "PURVA THAKUR",
  tagline: "Technology • Leadership • Purpose",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: "© 2026 Purva Thakur. All rights reserved.",
};

export const navigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];
