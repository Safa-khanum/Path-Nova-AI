export const userData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 234 567 8900",
  location: "San Francisco, CA",
  careerInterests: ["Software Development", "Data Science", "AI/ML"],
  education: "Bachelor's in Computer Science",
  experience: "2 years",
};

export const dashboardStats = {
  resumeScore: 85,
  missingSkills: 5,
  recommendedJobs: 12,
  interviewScore: 78,
};

export const extractedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Git",
  "HTML/CSS",
  "REST APIs",
  "MongoDB",
  "Problem Solving",
  "Team Collaboration",
];

export const missingSkills = [
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
];

export const strengths = [
  "Strong foundation in web development",
  "Good understanding of React ecosystem",
  "Experience with backend development",
  "Solid problem-solving abilities",
];

export const weaknesses = [
  "Limited cloud computing knowledge",
  "Need to improve DevOps skills",
  "Lack of containerization experience",
];

export const careerRecommendations = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    matchPercentage: 92,
    location: "Remote",
    salary: "$80,000 - $120,000",
    requiredSkills: ["React", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
    description: "Join our team to build cutting-edge web applications using modern technologies.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Innovation Labs",
    matchPercentage: 85,
    location: "San Francisco, CA",
    salary: "$90,000 - $130,000",
    requiredSkills: ["React", "Node.js", "MongoDB", "JavaScript", "REST APIs"],
    description: "Work on exciting projects that impact millions of users worldwide.",
  },
  {
    id: 3,
    title: "React Developer",
    company: "Digital Solutions",
    matchPercentage: 88,
    location: "Hybrid",
    salary: "$75,000 - $110,000",
    requiredSkills: ["React", "JavaScript", "Redux", "HTML/CSS", "Git"],
    description: "Create beautiful and performant user interfaces for our clients.",
  },
  {
    id: 4,
    title: "Junior Software Engineer",
    company: "StartupXYZ",
    matchPercentage: 78,
    location: "Remote",
    salary: "$70,000 - $100,000",
    requiredSkills: ["JavaScript", "Python", "Git", "REST APIs"],
    description: "Learn and grow with a fast-paced startup environment.",
  },
];

export const learningRoadmap = [
  {
    week: 1,
    title: "Master TypeScript Fundamentals",
    topics: [
      "Type annotations and interfaces",
      "Generics and advanced types",
      "TypeScript with React",
    ],
    projects: ["Build a type-safe Todo app"],
    resources: ["TypeScript Handbook", "TypeScript Deep Dive"],
    completed: false,
  },
  {
    week: 2,
    title: "Introduction to Docker",
    topics: [
      "Docker basics and containers",
      "Dockerfile creation",
      "Docker Compose",
    ],
    projects: ["Containerize a Node.js application"],
    resources: ["Docker Documentation", "Docker for Beginners"],
    completed: false,
  },
  {
    week: 3,
    title: "AWS Fundamentals",
    topics: [
      "EC2 and S3 basics",
      "Lambda functions",
      "AWS deployment strategies",
    ],
    projects: ["Deploy a web app on AWS"],
    resources: ["AWS Free Tier", "AWS Certified Cloud Practitioner"],
    completed: false,
  },
  {
    week: 4,
    title: "CI/CD Pipeline Setup",
    topics: [
      "GitHub Actions basics",
      "Automated testing",
      "Continuous deployment",
    ],
    projects: ["Set up CI/CD for a React project"],
    resources: ["GitHub Actions Docs", "CI/CD Best Practices"],
    completed: false,
  },
];

export const interviewQuestions = [
  {
    id: 1,
    question: "What is the difference between var, let, and const in JavaScript?",
    category: "JavaScript",
    difficulty: "Easy",
    expectedAnswer: "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
  },
  {
    id: 2,
    question: "Explain the Virtual DOM and how React uses it.",
    category: "React",
    difficulty: "Medium",
    expectedAnswer: "Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by comparing changes and updating only what's necessary.",
  },
  {
    id: 3,
    question: "What are React Hooks and why are they useful?",
    category: "React",
    difficulty: "Medium",
    expectedAnswer: "Hooks allow you to use state and other React features in functional components. They make code more reusable and easier to understand.",
  },
  {
    id: 4,
    question: "How do you handle asynchronous operations in JavaScript?",
    category: "JavaScript",
    difficulty: "Medium",
    expectedAnswer: "Using callbacks, Promises, or async/await. Modern approach prefers async/await for cleaner code.",
  },
  {
    id: 5,
    question: "What is RESTful API and its principles?",
    category: "Backend",
    difficulty: "Easy",
    expectedAnswer: "REST is an architectural style for APIs using HTTP methods (GET, POST, PUT, DELETE). It's stateless and uses standard HTTP status codes.",
  },
];

export const skillsData = {
  technical: [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 65 },
    { name: "HTML/CSS", level: 90 },
    { name: "Git", level: 75 },
  ],
  soft: [
    { name: "Communication", level: 80 },
    { name: "Problem Solving", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Time Management", level: 75 },
  ],
};
