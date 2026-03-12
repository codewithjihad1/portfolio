export const personalInfo = {
    name: 'MD JIHAD HOSSAIN',
    firstName: 'MD Jihad',
    lastName: 'Hossain',
    title: 'Frontend Developer',
    roles: ['Frontend Developer', 'React Developer', 'Next.js Developer', 'Full Stack Developer'],
    bio: 'Passionate Frontend Developer with expertise in modern web technologies. I love creating innovative solutions that bridge the gap between design and functionality, delivering exceptional user experiences through clean, efficient code.',
    location: 'Jamalpur, Bangladesh',
    email: 'mdjihadhossain793@gmail.com',
    phone: '+8801646348232',
    avatar: 'https://i.ibb.co.com/rKjswy78/1757078859551.png',
    resumeUrl: '#',
    availability: 'Available for freelance & full-time',
};

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/codewithjihad1' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/codewithjihad' },
    { name: 'Twitter', url: 'https://twitter.com/codewithjihad' },
    { name: 'Email', url: 'mailto:mdjihadhossain793@gmail.com' },
];

export const skills = {
    frontend: [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'React.js', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'TypeScript', level: 'Intermediate' },
    ],
    backend: [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Intermediate' },
        { name: 'Firebase', level: 'Intermediate' },
    ],
    tools: [
        { name: 'Git & GitHub', level: 'Expert' },
        { name: 'Figma', level: 'Advanced' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Postman', level: 'Expert' },
        { name: 'Docker', level: 'Beginner' },
    ],
};

export const levelColor = {
    Expert: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300',
    Advanced: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    Beginner: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
};

export const projects = [
    {
        id: 1,
        title: 'MediCare Pharmacy',
        description:
            'A comprehensive full-stack medicine e-commerce platform with role-based authentication (Admin, Seller, Customer), Stripe payment integration, order management, and invoice generation.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'TanStack Query'],
        category: 'Full Stack',
        gradient: 'from-emerald-500 to-teal-600',
        liveDemo: 'https://multi-vendor-e-commerce-a258a.web.app/',
        github: 'https://github.com/codewithjihad1/medicare-pharmacy',
    },
    {
        id: 2,
        title: 'Car Rental System',
        description:
            'A modern responsive car rental app with Firebase auth, Google OAuth, JWT, car management, date-based booking system, and dark/light theme toggle.',
        technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        category: 'Full Stack',
        gradient: 'from-primary-600 to-indigo-600',
        liveDemo: 'https://car-rental-c9294.web.app/',
        github: 'https://github.com/codewithjihad1/car-rental',
    },
    {
        id: 3,
        title: 'Garden Community Hub',
        description:
            'A platform for gardening enthusiasts to share tips, find local gardeners, post events, like & save tips, filter by difficulty, and connect over shared interests.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
        category: 'Full Stack',
        gradient: 'from-green-500 to-lime-600',
        liveDemo: 'https://gardening-community-c3ec1.web.app/',
        github: 'https://github.com/codewithjihad1/garden-community-hub',
    },
];

export const experience = [
    {
        id: 1,
        position: 'Junior Frontend Developer',
        company: 'WebAppick',
        location: 'Onsite - Dhaka, Bangladesh',
        duration: 'Nov 2025 — Present',
        type: 'Full-time',
        current: true,
        description:
            'Developing and maintaining responsive web applications using React and modern frontend technologies.',
        achievements: [
            'Optimized React components to improve application performance and loading speed',
            'Assisted in migrating JavaScript code to TypeScript for better maintainability',
            'Built reusable and responsive UI components following modern frontend practices',
            'Participated in code reviews and collaborated with team members to improve code quality',
        ],
        technologies: [
            'JavaScript',
            'React',
            'React Native',
            'Tailwind CSS',
            'Next.js',
            'Git',
            'Git Flow',
            'Figma',
            'WP plugins',
        ],
    },
    // {
    //     id: 2,
    //     position: 'Web Development Intern',
    //     company: 'Startup Name',
    //     location: 'Remote',
    //     duration: 'Jun 2023 — Dec 2023',
    //     type: 'Internship',
    //     current: false,
    //     description:
    //         'Assisted in building web applications and gained hands-on experience with full-stack development.',
    //     achievements: [
    //         'Built 3 responsive landing pages that increased user engagement by 25%',
    //         'Implemented RESTful APIs using Node.js and Express.js',
    //         'Participated in agile development process and daily standups',
    //         "Received 'Outstanding Intern' award for exceptional performance",
    //     ],
    //     technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    // },
];

export const contactInfo = {
    email: 'mdjihadhossain793@gmail.com',
    phone: '+8801646348232',
    whatsapp: '+8801646348232',
    location: 'Jamalpur, Bangladesh',
    availability: 'Available for freelance projects and full-time opportunities',
    responseTime: 'Usually responds within 24 hours',
};
