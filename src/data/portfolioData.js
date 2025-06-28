import { FaAws, FaCss3, FaDocker, FaEnvelope, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaPython, FaReact, FaTwitter, FaVuejs } from "react-icons/fa";
import avatar from "../assets/images/profile.png";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostman, SiTypescript } from "react-icons/si";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { GiRestingVampire } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { VscCode } from "react-icons/vsc";

// Personal Information
export const personalInfo = {
    name: "MD JIHAD HOSSAIN",
    title: "Frontend Developer",
    subtitle: "Crafting Digital Experiences with Modern Technologies",
    bio: `Passionate Frontend Developer with expertise in modern web technologies. 
        I love creating innovative solutions that bridge the gap between design and functionality, 
        delivering exceptional user experiences through clean, efficient code.`,
    location: "Jamalpur, Bangladesh",
    email: "mdjihadhossain793@gmail.com",
    phone: "+8801646348232",
    whatsapp: "+8801646348232",
    avatar,
    resume: "/path-to-your-resume.pdf",
};

// Social Links
export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/codewithjihad1",
        icon: FaGithub,
        color: "#181717",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/codewithjihad",
        icon: FaLinkedin,
        color: "#0A66C2",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/codewithjihad",
        icon: FaTwitter,
        color: "#1DA1F2",
    },
    {
        name: "Email",
        url: "mailto:mdjihadhossain793@gmail.com",
        icon: FaEnvelope,
        color: "#EA4335",
    },
];

// About Me Details
export const aboutMe = {
    introduction: `I'm a passionate Full Stack Developer with over X years of experience in creating 
                innovative web applications. My journey in programming started with curiosity about 
                how websites work, and it has evolved into a deep passion for building scalable, 
                user-centric applications.`,

    programmingJourney: `My programming journey began in [Year] when I wrote my first "Hello World" 
                      program. Since then, I've been constantly learning and adapting to new 
                      technologies. I believe in writing clean, maintainable code and following 
                      best practices to deliver robust applications.`,

    workEnjoyment: `I particularly enjoy working on challenging problems that require creative 
                 solutions. Whether it's optimizing database queries, designing intuitive user 
                 interfaces, or architecting scalable systems, I find satisfaction in every 
                 aspect of the development process.`,

    hobbies: [
        "🏀 Playing Basketball - Helps me stay active and think strategically",
        "🎨 Digital Art & Design - Exploring creativity through visual mediums",
        "📚 Reading Tech Blogs - Staying updated with latest industry trends",
        "🎮 Gaming - Appreciating interactive design and user experience",
        "🌱 Gardening - Finding peace in nurturing growth (like code!)",
    ],

    personality: `I'm a collaborative team player who believes in the power of diverse perspectives. 
               I'm always eager to learn from others and share my knowledge. My colleagues often 
               describe me as detail-oriented, creative, and someone who brings positive energy 
               to the team.`,
};

// Skills Data
export const skills = {
    frontend: [
        { name: "JavaScript", level: 90, icon: FaJs, color: "#F7DF1E" },
        { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
        { name: "HTML5", level: 100, icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: FaCss3, color: "#1572B6" },
        { name: "Tailwind CSS", level: 90, icon: RiTailwindCssFill, color: "#06B6D4" },
        { name: "TypeScript", level: 50, icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", level: 70, icon: RiNextjsFill, color: "#000000" },
        { name: "Vue.js", level: 0, icon: FaVuejs, color: "#4FC08D" },
    ],
    backend: [
        { name: "Node.js", level: 70, icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", level: 60, icon: undefined, color: "#000000" },
        { name: "Python", level: 0, icon: FaPython, color: "#3776AB" },
        { name: "MongoDB", level: 50, icon: DiMongodb, color: "#47A248" },
        { name: "PostgreSQL", level: 0, icon: DiPostgresql, color: "#4169E1" },
        { name: "REST APIs", level: 70, icon: GiRestingVampire, color: "#FF6B35" },
        { name: "GraphQL", level: 0, icon: GrGraphQl, color: "#E10098" },
    ],
    tools: [
        { name: "Git", level: 90, icon: FaGit, color: "#F05032" },
        { name: "Docker", level: 0, icon: FaDocker, color: "#2496ED" },
        { name: "AWS", level: 0, icon: FaAws, color: "#FF9900" },
        { name: "Figma", level: 85, icon: FaFigma, color: "#F24E1E" },
        { name: "VS Code", level: 100, icon: VscCode, color: "#007ACC" },
        { name: "Postman", level: 90, icon: SiPostman, color: "#FF6C37" },
    ],
};

// Education Data
export const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University Name",
        location: "City, Country",
        duration: "2020 - 2024",
        gpa: "3.8/4.0",
        description:
            "Focused on software engineering, data structures, algorithms, and web development.",
        highlights: [
            "Dean's List for 6 consecutive semesters",
            "Led development team for final year capstone project",
            "Published research paper on web optimization techniques",
        ],
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "School Name",
        location: "City, Country",
        duration: "2018 - 2020",
        grade: "A+",
        description:
            "Specialized in Science with Mathematics, Physics, and Chemistry.",
        highlights: [
            "Top 5% of graduating class",
            "Mathematics Olympiad Regional Champion",
            "Science Fair Winner - Web Development Project",
        ],
    },
];

// Experience Data (if applicable)
export const experience = [
    {
        position: "Frontend Developer",
        company: "Tech Company Name",
        location: "City, Country",
        duration: "Jan 2024 - Present",
        type: "Full-time",
        description:
            "Developing and maintaining responsive web applications using React and modern frontend technologies.",
        achievements: [
            "Improved application performance by 40% through code optimization",
            "Led migration from JavaScript to TypeScript for better code maintainability",
            "Collaborated with design team to implement pixel-perfect UI components",
            "Mentored 2 junior developers and conducted code reviews",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
    },
    {
        position: "Web Development Intern",
        company: "Startup Name",
        location: "City, Country",
        duration: "Jun 2023 - Dec 2023",
        type: "Internship",
        description:
            "Assisted in building web applications and gained hands-on experience with full-stack development.",
        achievements: [
            "Built 3 responsive landing pages that increased user engagement by 25%",
            "Implemented RESTful APIs using Node.js and Express.js",
            "Participated in agile development process and daily standups",
            "Received 'Outstanding Intern' award for exceptional performance",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    },
];

// Projects Data
export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
        shortDescription: "Modern e-commerce solution with advanced features",
        image: "/project-images/ecommerce.jpg", // Add your project image
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        featured: true,
        liveDemo: "https://your-ecommerce-demo.com",
        githubRepo: "https://github.com/yourusername/ecommerce-platform",
        detailedDescription: `This e-commerce platform represents a comprehensive solution for online retail businesses. 
                         Built with modern technologies, it provides a seamless shopping experience for customers 
                         while offering robust management tools for administrators.`,
        features: [
            "User registration and authentication with JWT",
            "Product catalog with advanced filtering and search",
            "Shopping cart with persistent state",
            "Secure payment processing with Stripe integration",
            "Order tracking and management system",
            "Admin dashboard for inventory management",
            "Responsive design for all devices",
            "Email notifications for order updates",
        ],
        challenges: [
            "Implementing secure payment processing while maintaining user experience",
            "Optimizing database queries for large product catalogs",
            "Creating a responsive design that works across all device sizes",
            "Managing state across complex user flows",
        ],
        improvements: [
            "Add multi-vendor marketplace functionality",
            "Implement advanced analytics and reporting",
            "Add real-time chat support",
            "Integrate AI-powered product recommendations",
        ],
        duration: "3 months",
        role: "Full Stack Developer",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
        shortDescription: "Collaborative productivity tool for teams",
        image: "/project-images/task-manager.jpg",
        technologies: [
            "React",
            "TypeScript",
            "Firebase",
            "Material-UI",
            "Socket.io",
        ],
        category: "Frontend",
        featured: true,
        liveDemo: "https://your-task-manager-demo.com",
        githubRepo: "https://github.com/yourusername/task-manager",
        detailedDescription: `A comprehensive task management solution designed to boost team productivity. 
                         Features real-time collaboration, intuitive project organization, and detailed 
                         progress tracking capabilities.`,
        features: [
            "Real-time collaboration with live updates",
            "Drag-and-drop task organization",
            "Project timeline and milestone tracking",
            "Team member assignment and notifications",
            "File attachment and commenting system",
            "Advanced filtering and search capabilities",
            "Time tracking and productivity analytics",
            "Dark/light theme toggle",
        ],
        challenges: [
            "Implementing real-time synchronization across multiple users",
            "Creating an intuitive drag-and-drop interface",
            "Optimizing performance with large datasets",
            "Designing a scalable notification system",
        ],
        improvements: [
            "Add calendar integration",
            "Implement advanced reporting features",
            "Add mobile app version",
            "Include AI-powered task prioritization",
        ],
        duration: "2 months",
        role: "Frontend Developer",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description:
            "A comprehensive weather application with location-based forecasts, interactive maps, and weather alerts.",
        shortDescription: "Interactive weather tracking application",
        image: "/project-images/weather-app.jpg",
        technologies: [
            "Vue.js",
            "Express.js",
            "Weather API",
            "Chart.js",
            "Sass",
        ],
        category: "Full Stack",
        featured: false,
        liveDemo: "https://your-weather-app-demo.com",
        githubRepo: "https://github.com/yourusername/weather-dashboard",
        detailedDescription: `An advanced weather application that provides detailed meteorological information 
                         with beautiful visualizations. Features location-based forecasts, historical data, 
                         and severe weather alerts.`,
        features: [
            "Current weather conditions with detailed metrics",
            "7-day forecast with hourly breakdowns",
            "Interactive weather maps",
            "Location-based automatic updates",
            "Weather alerts and notifications",
            "Historical weather data visualization",
            "Favorite locations management",
            "Responsive design with smooth animations",
        ],
        challenges: [
            "Integrating multiple weather APIs for comprehensive data",
            "Creating responsive chart visualizations",
            "Handling geolocation and privacy concerns",
            "Optimizing API calls to reduce costs",
        ],
        improvements: [
            "Add weather-based activity recommendations",
            "Implement machine learning for better predictions",
            "Add social sharing features",
            "Include air quality monitoring",
        ],
        duration: "1.5 months",
        role: "Full Stack Developer",
    },
];

// Contact Information
export const contactInfo = {
    email: "mdjihadhossain793@gmail.com",
    phone: "+8801646348232",
    whatsapp: "+8801646348232",
    location: "Jamalpur, Bangladesh",
    availability:
        "Available for freelance projects and full-time opportunities",
    responseTime: "Usually responds within 24 hours",
    preferredContact: "email",
};
