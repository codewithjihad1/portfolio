export const personalInfo = {
    name: "MD JIHAD HOSSAIN",
    firstName: "MD Jihad",
    lastName: "Hossain",
    title: "Full-Stack Developer",
    roles: [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Node.js Developer",
        "React Developer",
        "Next.js Developer",
    ],
    bio: "Full-Stack Developer focused on building fast, accessible, and user-friendly web applications. I turn designs into clean, efficient code that delivers great real-world performance.",
    location: "Jamalpur, Bangladesh",
    email: "mdjihadhossain793@gmail.com",
    phone: "+8801646348232",
    avatar: "https://i.ibb.co.com/YTw4JFsN/jihad.webp",
    resumeUrl:
        "https://drive.google.com/file/d/19v5grunpfW60QPXWqbEqQvIwFNfM0lBY/view?usp=sharing",
    availability: "Available for freelance & full-time roles",
};

export const socialLinks = [
    { name: "GitHub", url: "https://github.com/codewithjihad1" },
    { name: "LinkedIn", url: "https://linkedin.com/in/codewithjihad" },
    { name: "Twitter", url: "https://twitter.com/codewithjihad" },
    { name: "Email", url: "mailto:mdjihadhossain793@gmail.com" },
];

export const skills = {
    frontend: [
        { name: "JavaScript", level: "Expert" },
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "TypeScript", level: "Intermediate" },
    ],
    backend: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
    ],
    tools: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Figma", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "Postman", level: "Expert" },
        { name: "Docker", level: "Beginner" },
    ],
};

export const levelColor = {
    Expert: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300",
    Advanced:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    Intermediate:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    Beginner:
        "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
};

export const projects = [
    {
        id: 1,
        slug: "medicare-pharmacy",
        title: "MediCare Pharmacy",
        role: "Full Stack Developer",
        year: "2025",
        overview:
            "MediCare Pharmacy is a full-stack medicine e-commerce platform that connects customers, sellers, and administrators in one place. Customers can browse medicines, filter by category, and place orders with secure Stripe payments, while sellers manage their own product listings and admins oversee the entire marketplace from a dedicated dashboard.",
        description:
            "A comprehensive full-stack medicine e-commerce platform with role-based authentication (Admin, Seller, Customer), Stripe payment integration, order management, and invoice generation.",
        keyFeatures: [
            "Role-based dashboards for Admin, Seller, and Customer accounts",
            "Secure Stripe payment integration with automated invoice generation",
            "Seller product management with admin approval workflow",
            "Real-time order tracking and order history with TanStack Query caching",
            "Category-based filtering, product search, and inventory management",
            "Fully responsive layout optimized for mobile, tablet, and desktop",
        ],
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "TanStack Query",
        ],
        category: "Full Stack E-commerce",
        gradient: "from-emerald-500 to-teal-600",
        liveDemo: "https://multi-vendor-e-commerce-a258a.web.app/",
        github: "https://github.com/codewithjihad1/medicare-pharmacy",
    },
    {
        id: 2,
        slug: "car-rental-system",
        title: "Car Rental System",
        role: "Full Stack Developer",
        year: "2025",
        overview:
            "A modern car rental application where car owners can list their vehicles and customers can book them by date. The system handles authentication, booking availability, and payments, with a clean responsive interface and complete dark/light theme support.",
        description:
            "A modern responsive car rental app with Firebase auth, Google OAuth, JWT, car management, date-based booking system, and dark/light theme toggle.",
        keyFeatures: [
            "Firebase authentication with email/password and Google OAuth",
            "JWT-protected private routes for secure access",
            "Date-based car booking with real-time availability checks",
            "Owner dashboard to add, update, and remove car listings",
            "Booking management — modify dates or cancel reservations",
            "Dark/light theme toggle with persisted user preference",
        ],
        technologies: [
            "React",
            "Tailwind CSS",
            "Firebase",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
        ],
        category: "Full Stack Application",
        gradient: "from-primary-600 to-indigo-600",
        liveDemo: "https://car-rental-c9294.web.app/",
        github: "https://github.com/codewithjihad1/car-rental",
    },
    {
        id: 3,
        slug: "garden-community-hub",
        title: "Garden Community Hub",
        role: "Frontend Developer",
        year: "2025",
        overview:
            "A community platform that brings gardening enthusiasts together. Members share practical tips, browse gardeners by expertise, and stay updated on local events. Built with TypeScript and Material-UI for a polished, type-safe user experience.",
        description:
            "A platform for gardening enthusiasts to share tips, find local gardeners, post events, like & save tips, filter by difficulty, and connect over shared interests.",
        keyFeatures: [
            "Share gardening tips with images, difficulty level, and descriptions",
            "Like and save tips to a personal bookmarked collection",
            "Browse and filter tips by experience difficulty",
            "Searchable gardener directory with detailed profiles",
            "Community events posting and discovery",
            "TypeScript codebase with Material-UI components",
        ],
        technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
        category: "Full Stack Community Platform",
        gradient: "from-green-500 to-lime-600",
        liveDemo: "https://gardening-community-c3ec1.web.app/",
        github: "https://github.com/codewithjihad1/garden-community-hub",
    },
];

export const experience = [
    {
        id: 1,
        position: "Junior Frontend Developer",
        company: "WebAppick",
        location: "Onsite - Dhaka, Bangladesh",
        duration: "Nov 2025 — Present",
        type: "Full-time",
        current: true,
        description:
            "Developing and maintaining Disco, a WooCommerce discount plugin, using React, PHP, WordPress, and Tailwind CSS.",
        achievements: [
            "Contributed to Disco, a WooCommerce discount plugin built with PHP, React, Redux, WordPress, and Tailwind CSS",
            "Built reusable React components for analytics dashboards, data tables, campaign forms, product badges, and customer pages",
            "Integrated dynamic APIs for Products, Orders, Customers, Campaign Reports, and Analytics",
            "Added customizable product badges, image uploads, previews, recursive rules, and validation features",
            "Improved WordPress compatibility, responsive UI, Tailwind styling, and third-party plugin integrations",
            "Added and maintained automated tests with Jest, Cypress, and WordPress unit tests",
        ],
        technologies: [
            "React",
            "Redux",
            "WordPress",
            "WooCommerce",
            "Tailwind CSS",
            "Jest",
            "Cypress",
            "Git",
            "Git Flow",
        ],
    },
];

export const contactInfo = {
    email: "mdjihadhossain793@gmail.com",
    phone: "+8801646348232",
    whatsapp: "+8801646348232",
    location: "Jamalpur, Bangladesh",
    availability:
        "Available for freelance projects and full-time opportunities",
    responseTime: "Usually responds within 24 hours",
};
