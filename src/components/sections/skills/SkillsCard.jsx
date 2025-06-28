import React from 'react'
import {ProgressBar}  from '../../UI'

const SkillsCard = ({ skill, index }) => {
    return (
        <div
            key={skill.name}
            className="group"
            style={{ animationDelay: `${600 + index * 100}ms` }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                        {skill.icon ? <skill.icon /> : null}
                    </span>
                    <div>
                        <h4 className="font-semibold theme-text-primary group-hover:theme-accent transition-colors duration-200">
                            {skill.name}
                        </h4>
                        <p className="text-xs theme-text-secondary">
                            {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-sm font-bold theme-text-primary">
                        {skill.level} %
                    </span>
                </div>
            </div>

            <ProgressBar
                percentage={skill.level < 0 ? 0 : skill.level}
                color={skill.level >= 90 ? 'success' : skill.level >= 65 ? 'good' : skill.level >= 50 ? 'warning' : skill.level >= 0 ? 'danger' : 'primary'}
                size="md"
                animated={false}
                showPercentage={false}
                className="group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    )
}

export default SkillsCard
