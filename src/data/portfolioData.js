// ============================================
// Portfolio Data — Ntunyu Serge Ngala
// ============================================

export const WHATSAPP_NUMBER = "237651000536";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const personalInfo = {
  name: "Ntunyu Serge Ngala",
  title: "Video Editor & Computer Engineer",
  location: "Bamenda, Cameroon",
  email: "ntunyuserge@gmail.com",
  linkedin: "https://linkedin.com/in/ntunyu-serge-3624b2207/",
  github: "https://github.com/Serge-NSN",
  bio: `I am a Computer Engineer with a deep passion for using technology to solve problems and create meaningful digital solutions. My experience spans web development, spreadsheet management, video editing, and IT tutoring — allowing me to work comfortably across both technical and creative projects. I have collaborated with digital agencies, organisations in the communications sector, NGOs and technology startups, while also mentoring young people in practical IT skills.`,
};

export const stats = [
  { num: "3+", label: "Years Editing" },
  { num: "6+", label: "Video Categories" },
  { num: "4×", label: "MOS Champion" },
  { num: "7.9K", label: "YT Subscribers" },
];

// ============================================
// VIDEO PORTFOLIO
// Replace VIDEO_ID_X with your actual YouTube video IDs
// Format: landscape = 16:9, portrait = 9:16, square = 1:1
// ============================================
export const videos = [
  {
    id: 1,
    category: "promo",
    catLabel: "Promo Video",
    catClass: "",
    title: "Brand Promo — [Client Name]",
    desc: "High-energy promo video crafted to captivate audiences and drive brand awareness.",
    youtubeId: "VIDEO_ID_1",
    aspect: "portrait",
  },
  {
    id: 2,
    category: "promo",
    catLabel: "Promo Video",
    catClass: "",
    title: "Product Launch — [Client Name]",
    desc: "Dynamic product launch video with motion graphics and cinematic colour grading.",
    youtubeId: "VIDEO_ID_2",
    aspect: "portrait",
  },
  {
    id: 3,
    category: "promo",
    catLabel: "Promo Video",
    catClass: "",
    title: "Social Media Ad — [Brand]",
    desc: "Short-form vertical ad video optimised for Instagram and TikTok engagement.",
    youtubeId: "VIDEO_ID_3",
    aspect: "portrait",
  },
  {
    id: 4,
    category: "recap",
    catLabel: "Recap & Highlight",
    catClass: "cat-recap",
    title: "Event Highlight Reel — [Event Name]",
    desc: "A vibrant recap capturing the best moments of the event with rhythmic cuts.",
    youtubeId: "VIDEO_ID_4",
    aspect: "landscape",
  },
  {
    id: 5,
    category: "recap",
    catLabel: "Recap & Highlight",
    catClass: "cat-recap",
    title: "Sports Highlight — [Team/Event]",
    desc: "Fast-paced sports highlight reel with sync cuts and energetic transitions.",
    youtubeId: "VIDEO_ID_5",
    aspect: "landscape",
  },
  {
    id: 6,
    category: "recap",
    catLabel: "Recap & Highlight",
    catClass: "cat-recap",
    title: "Year in Review — [Client]",
    desc: "Emotional year-in-review video blending footage, music and storytelling.",
    youtubeId: "VIDEO_ID_6",
    aspect: "portrait",
  },
  {
    id: 7,
    category: "bts",
    catLabel: "Behind the Scenes",
    catClass: "cat-bts",
    title: "BTS — [Production Name]",
    desc: "An intimate behind-the-scenes look at the production process.",
    youtubeId: "VIDEO_ID_7",
    aspect: "landscape",
  },
  {
    id: 8,
    category: "bts",
    catLabel: "Behind the Scenes",
    catClass: "cat-bts",
    title: "Studio Day — [Project]",
    desc: "A day in the edit suite — raw, authentic footage of the creative workflow.",
    youtubeId: "VIDEO_ID_8",
    aspect: "portrait",
  },
  {
    id: 9,
    category: "faceless",
    catLabel: "YouTube Faceless",
    catClass: "cat-faceless",
    title: "Faceless Content — [Channel Name]",
    desc: "Engaging faceless YouTube content with smooth voiceover and motion graphics.",
    youtubeId: "VIDEO_ID_9",
    aspect: "landscape",
  },
  {
    id: 10,
    category: "faceless",
    catLabel: "YouTube Faceless",
    catClass: "cat-faceless",
    title: "Shorts Faceless — [Topic]",
    desc: "Portrait-format faceless short-form content optimised for YouTube Shorts.",
    youtubeId: "VIDEO_ID_10",
    aspect: "portrait",
  },
  {
    id: 11,
    category: "faceless",
    catLabel: "YouTube Faceless",
    catClass: "cat-faceless",
    title: "Educational Faceless — [Niche]",
    desc: "Informative faceless video with stock footage, text overlays, and clean narration.",
    youtubeId: "VIDEO_ID_11",
    aspect: "landscape",
  },
  {
    id: 12,
    category: "ai",
    catLabel: "AI Video",
    catClass: "cat-ai",
    title: "AI-Generated Film — [Title]",
    desc: "Cutting-edge AI video creation blending generative visuals with storytelling.",
    youtubeId: "VIDEO_ID_12",
    aspect: "landscape",
  },
  {
    id: 13,
    category: "ai",
    catLabel: "AI Video",
    catClass: "cat-ai",
    title: "AI Avatar — [Brand]",
    desc: "AI-powered avatar video for brand communication and digital marketing.",
    youtubeId: "VIDEO_ID_13",
    aspect: "portrait",
  },
  {
    id: 14,
    category: "ai",
    catLabel: "AI Video",
    catClass: "cat-ai",
    title: "AI Cinematic — [Title]",
    desc: "Cinematic AI-generated video with advanced prompt engineering and post-processing.",
    youtubeId: "VIDEO_ID_14",
    aspect: "landscape",
  },
  {
    id: 15,
    category: "other",
    catLabel: "Creative Edit",
    catClass: "cat-other",
    title: "Creative Showcase — [Title]",
    desc: "A creative video edit showcasing diverse styles, transitions and visual techniques.",
    youtubeId: "VIDEO_ID_15",
    aspect: "landscape",
  },
  {
    id: 16,
    category: "other",
    catLabel: "Music Video Edit",
    catClass: "cat-other",
    title: "Music Video — [Artist]",
    desc: "Visually driven music video edit with beat-synced cuts and colour grading.",
    youtubeId: "VIDEO_ID_16",
    aspect: "landscape",
  },
  // ---- VIDEOGRAPHY (Shot & Edited) ----
  {
    id: 17,
    category: "videography",
    catLabel: "Videography",
    catClass: "cat-videography",
    title: "Wedding Coverage — [Couple Name]",
    desc: "Full wedding videography — shot and edited by me using a smartphone. Every precious moment captured with a cinematic eye.",
    youtubeId: "VIDEO_ID_17",
    aspect: "landscape",
  },
  {
    id: 18,
    category: "videography",
    catLabel: "Videography",
    catClass: "cat-videography",
    title: "Wedding Highlights — [Couple Name]",
    desc: "A cinematic wedding highlight reel — shot on a smartphone and edited to perfectly capture the emotion of the day.",
    youtubeId: "VIDEO_ID_18",
    aspect: "portrait",
  },
  {
    id: 19,
    category: "videography",
    catLabel: "Videography",
    catClass: "cat-videography",
    title: "Event Coverage — [Event Name]",
    desc: "Live event videography — capturing real moments, real emotions, and real stories as they unfold.",
    youtubeId: "VIDEO_ID_19",
    aspect: "landscape",
  },
];

export const filterCategories = [
  { key: "all", label: "All" },
  { key: "promo", label: "Promo Videos" },
  { key: "recap", label: "Recap & Highlight" },
  { key: "bts", label: "BTS Videos" },
  { key: "faceless", label: "YouTube Faceless" },
  { key: "ai", label: "AI Videos" },
  { key: "videography", label: "📷 Videography" },
  { key: "other", label: "Other" },
];

// ============================================
// ENGINEERING SKILLS
// ============================================
export const engSkills = [
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    desc: "Building end-to-end web applications using React.js, Spring Boot (Kotlin), REST APIs, and PostgreSQL.",
    tags: ["React.js", "Spring Boot", "Kotlin", "PostgreSQL"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Crafting responsive, modern web interfaces with clean code and excellent user experience.",
    tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
  },
  {
    icon: "📊",
    title: "Microsoft Office Specialist",
    desc: "Certified in Microsoft Excel 365 and Microsoft Word — National Champion 4× and World Finalist.",
    tags: ["Excel 365", "Microsoft Word", "Data Management"],
  },
  {
    icon: "🎓",
    title: "IT Tutoring & Consulting",
    desc: "Mentoring students and interns in Front-end Development, Digital Literacy, and certification exam prep.",
    tags: ["Front-end Dev", "IC3 Literacy", "Mentoring"],
  },
];

export const education = [
  {
    year: "2024–2025",
    title: "Master of Engineering in Computer Engineering (M.Eng)",
    school: "National Higher Polytechnic Institute, The University of Bamenda",
  },
  {
    year: "2020–2024",
    title: "Bachelor of Engineering in Computer Engineering (B.Eng)",
    school: "National Higher Polytechnic Institute, The University of Bamenda",
  },
  {
    year: "2020",
    title: "GCE Advanced Level",
    school: "Baptist Comprehensive High School Nkwen, Bamenda",
  },
  {
    year: "2018",
    title: "GCE Ordinary Level",
    school: "Baptist Comprehensive High School Nkwen, Bamenda",
  },
];

// ============================================
// EXPERIENCE
// ============================================
export const experience = [
  {
    id: 1,
    date: "May 2026 – Present",
    role: "Creative Designer",
    company: "Uni B Agency — Bamenda",
    bullets: [
      "Conceptualise and edit video ad creatives for the agency's clients.",
      "Supervise 3 other video editors in the production of social media content, ads and video-editing tasks.",
    ],
    tags: ["Video Editing", "Creative Direction", "Social Media"],
  },
  {
    id: 2,
    date: "July 2024 – 2025",
    role: "Software Engineer",
    company: "SEED — Bamenda",
    bullets: [
      "Contributed to the company's multimedia efforts by editing videos for publicity.",
      "Tutored interns in Front-end Development.",
    ],
    tags: ["Software Engineering", "Video Editing", "Tutoring"],
  },
  {
    id: 3,
    date: "March – September 2023",
    role: "Full Stack Development Intern",
    company: "Skye8 — Bamenda",
    bullets: [
      "Setup and configured databases (PostgreSQL).",
      "Developed the backend for QAHub using Spring Boot with Kotlin.",
      "Developed REST APIs for Spring Boot applications.",
      "Contributed to the frontend for e-learning platform Learnoso using React.js.",
    ],
    tags: ["Spring Boot", "Kotlin", "PostgreSQL", "React.js"],
  },
  {
    id: 4,
    date: "August – October 2022",
    role: "Computer Engineering Intern",
    company: "Port Authority of Douala, Bonanjo",
    bullets: [
      "Performed maintenance on computers by running diagnostics and troubleshooting.",
      "Completed Oracle Cloud Infrastructure course.",
    ],
    tags: ["IT Maintenance", "Oracle Cloud", "Networking"],
  },
  {
    id: 5,
    date: "August – October 2021",
    role: "IT Consultant & Tutor",
    company: "Gate Inc. — City Chemist Bamenda, Cameroon",
    bullets: [
      "Provided customer support to clients preparing for certification exams.",
      "Tutored students preparing for the IC3 Digital Literacy Exam.",
    ],
    tags: ["IT Consulting", "IC3 Literacy", "Tutoring"],
  },
  {
    id: 6,
    date: "July 2023 – Present",
    role: "Software Tester",
    company: "Tester Work — Remote",
    bullets: [
      "Test Case Development and Execution.",
      "Perform Usability, Exploratory and Functional tests following test case documents.",
      "Collaborated effectively with cross-functional teams to ensure timely delivery of high-quality software.",
    ],
    tags: ["QA Testing", "Test Cases", "Usability Testing", "Remote"],
  },
  {
    id: 7,
    date: "January 2025 – August 2025",
    role: "Lead IT Specialist",
    company: "H4BF — Bamenda, Cameroon",
    bullets: [
      "Built and maintained WordPress websites for the organisation.",
      "Trained youths in Programming and practical IT skills.",
      "Provided IT Support to staff.",
    ],
    tags: ["WordPress", "IT Support", "Training", "Youth Development"],
  },
];

// ============================================
// AWARDS
// ============================================
export const awards = [
  {
    id: 1,
    year: "2021",
    trophy: "🏆",
    title: "MOS National Championship Winner",
    desc: "Microsoft Office Specialist National Championship — Cameroon",
    featured: false,
  },
  {
    id: 2,
    year: "2022",
    trophy: "🏆",
    title: "MOS National Championship Winner",
    desc: "Microsoft Office Specialist National Championship — Cameroon",
    featured: false,
  },
  {
    id: 3,
    year: "2024",
    trophy: "🏆",
    title: "CIMFEST Hackathon Winner",
    desc: "First place at CIMFEST Hackathon 2024 — Cameroon",
    featured: false,
  },
  {
    id: 4,
    year: "2025",
    trophy: "🏆",
    title: "MOS National Championship Winner",
    desc: "Microsoft Office Specialist National Championship — Cameroon",
    featured: false,
  },
  {
    id: 5,
    year: "2025",
    trophy: "🌟",
    title: "MOS World Championship Finalist",
    desc: "Microsoft Office Specialist World Championship Finalist — USA",
    featured: true,
  },
];
