import { useState } from 'react'

const SkillsCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getSkillIcon = (skillName) => {
        const iconMap = {
            'React': '⚛️',
            'JavaScript': '📜',
            'TypeScript': '📘',
            'HTML5': '🏗️',
            'CSS3': '🎨',
            'Tailwind CSS': '💨',
            'Next.js': '🔗',
            'Vue.js': '💚',
            'Node.js': '🟢',
            'Express.js': '🚂',
            'Python': '🐍',
            'MongoDB': '🍃',
            'PostgreSQL': '🐘',
            'REST APIs': '🌐',
            'GraphQL': '📊',
            'Git': '📁',
            'Docker': '🐳',
            'AWS': '☁️',
            'Figma': '🎭',
            'VS Code': '💻',
            'Postman': '📮'
        };
        return iconMap[skillName] || '💡';
    };

    const getProficiencyInfo = (level) => {
        if (level >= 90) return { label: 'Expert', color: 'from-emerald-500 to-green-600', bgColor: 'bg-emerald-500/10' };
        if (level >= 75) return { label: 'Advanced', color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-500/10' };
        if (level >= 60) return { label: 'Intermediate', color: 'from-amber-500 to-orange-600', bgColor: 'bg-amber-500/10' };
        return { label: 'Beginner', color: 'from-slate-500 to-gray-600', bgColor: 'bg-slate-500/10' };
    };

    const proficiency = getProficiencyInfo(skill.level);

    return (
        <div
            className={`
                relative group cursor-pointer transition-all duration-500 ease-out
                transform hover:scale-105 hover:-translate-y-2
                ${isHovered ? 'z-10' : 'z-0'}
            `}
            style={{ animationDelay: `${600 + index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="fade-up"
            data-aos-delay={`${600 + index * 100}ms`}
        >
            {/* Card Container */}
            <div className={`
                relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500
                bg-white/80 dark:bg-gray-800/80 
                border-gray-200/50 dark:border-gray-700/50
                group-hover:bg-white/90 dark:group-hover:bg-gray-800/90
                group-hover:border-primary-300/50 dark:group-hover:border-primary-600/50
                group-hover:shadow-2xl group-hover:shadow-primary-500/20
                ${isHovered ? 'ring-2 ring-primary-500/30' : ''}
            `}>
                {/* Background Gradient */}
                <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${proficiency.color} opacity-5
                `} />

                {/* Icon Section */}
                <div className="relative mb-4">
                    <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center mb-3
                        bg-gradient-to-br ${proficiency.color} 
                        shadow-lg group-hover:shadow-xl transition-all duration-300
                        transform group-hover:scale-110 group-hover:rotate-3
                    `}>
                        {skill.icon ? (
                            <skill.icon className="w-8 h-8 text-white" />
                        ) : (
                            <span className="text-2xl">{getSkillIcon(skill.name)}</span>
                        )}
                    </div>

                    {/* Floating Badge */}
                    <div className={`
                        absolute -top-2 -right-2 px-2 py-1 rounded-lg text-xs font-bold
                        ${proficiency.bgColor} ${proficiency.color.includes('emerald') ? 'text-emerald-700' :
                            proficiency.color.includes('blue') ? 'text-blue-700' :
                                proficiency.color.includes('amber') ? 'text-amber-700' : 'text-slate-700'}
                        backdrop-blur-sm border border-white/20
                        transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100
                    `}>
                        {proficiency.label}
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative">
                    {/* Skill Name */}
                    <h4 className="text-lg font-bold theme-text-primary mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {skill.name}
                    </h4>

                    {/* Experience Info */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${proficiency.color.includes('emerald') ? 'bg-emerald-500' :
                                proficiency.color.includes('blue') ? 'bg-blue-500' :
                                    proficiency.color.includes('amber') ? 'bg-amber-500' : 'bg-slate-500'} 
                              animate-pulse group-hover:animate-none`} />
                            <span className="text-sm theme-text-secondary">
                                {Math.floor(skill.level / 20)} years exp.
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                {/* {animatedSkills[activeCategory] ? skill.level : 0}% */}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hover Effects */}
                <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `} />

                {/* Shine Effect */}
                <div className={`
                    absolute inset-0 rounded-2xl overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-transparent before:via-white/10 before:to-transparent
                    before:translate-x-[-100%] group-hover:before:translate-x-[100%]
                    before:transition-transform before:duration-1000 before:ease-out
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `} />
            </div>

            {/* Projects Counter (Optional) */}
            <div className={`
                absolute -bottom-2 left-4 right-4 mx-auto w-fit
                px-3 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border
                border-gray-200 dark:border-gray-700
                transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-300 delay-200
            `}>
                <div className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span className="theme-text-secondary">{Math.floor(skill.level / 15)} projects</span>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard
