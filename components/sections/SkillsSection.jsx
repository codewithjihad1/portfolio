import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { skills } from '@/data/portfolio';

/* level → XP bar fill (out of 10) + tag */
const levelMeta = {
    Expert: { blocks: 9, tag: '9 / 10' },
    Advanced: { blocks: 7, tag: '7 / 10' },
    Intermediate: { blocks: 5, tag: '5 / 10' },
    Beginner: { blocks: 3, tag: '3 / 10' },
};

const categoryColor = {
    'Frontend': 'text-neon border-neon bg-neon/10',
    'Backend': 'text-aqua border-aqua bg-aqua/10',
    'Tools & Others': 'text-pixie border-pixie bg-pixie/10',
};

function SkillCategory({ title, emoji, items }) {
    const headerClass = categoryColor[title] ?? 'text-ink border-line bg-void';
    return (
        <div className="pixel-panel p-6">
            {/* window title bar */}
            <div className="flex items-center justify-between m-0 mb-6 pb-3 border-b-2 border-line">
                <h3 className="font-press text-[9px] sm:text-[10px] text-ink tracking-wider">
                    <span className="mr-2">{emoji}</span>
                    {title.toUpperCase()}
                </h3>
                <span className={`font-press text-[7px] px-2 py-1 border ${headerClass}`}>
                    {items.length} SKILLS
                </span>
            </div>

            <div className="space-y-4">
                {items.map(({ name, level }) => {
                    const meta = levelMeta[level] ?? levelMeta['Beginner'];
                    return (
                        <div key={name} className="group">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs text-ink group-hover:text-aqua transition-colors">
                                    {name}
                                </span>
                                <span className="font-press text-[7px] text-mute">{meta.tag}</span>
                            </div>

                {/* XP blocks scale in one-by-one when the card reveals */}
                <div className="flex gap-1" role="img" aria-label={`${name} — ${level}`}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span
                            key={i}
                            style={{ transitionDelay: `${i * 50}ms` }}
                            className={`xp-block h-2.5 flex-1 border ${
                                i < meta.blocks
                                    ? 'bg-neon border-line'
                                    : 'bg-void2 border-line/40'
                            }`}
                        />
                    ))}
                </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-void">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    stage="02"
                    eyebrow="TECH STACK"
                    title="Skills &amp; Expertise"
                    sub="The technologies and tools I use to design, build, and maintain modern web applications."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Reveal>
                        <SkillCategory title="Frontend" emoji="🎨" items={skills.frontend} />
                    </Reveal>
                    <Reveal delay={150}>
                        <SkillCategory title="Backend" emoji="⚙️" items={skills.backend} />
                    </Reveal>
                    <Reveal delay={300}>
                        <SkillCategory title="Tools & Others" emoji="🛠️" items={skills.tools} />
                    </Reveal>
                </div>

                {/* legend */}
                <Reveal delay={200} className="pixel-panel inline-flex flex-wrap items-center gap-6 mt-10 px-6 py-4 mx-auto w-max max-w-full">
                    <span className="font-press text-[8px] text-mute tracking-widest">PROFICIENCY:</span>
                    {Object.entries(levelMeta).map(([level, meta]) => (
                        <span key={level} className="flex items-center gap-2">
                            <span className="flex gap-0.5" aria-hidden="true">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-1.5 h-2 ${
                                            i < meta.blocks ? 'bg-neon' : 'bg-void2 border border-line/30'
                                        }`}
                                    />
                                ))}
                            </span>
                            <span className="font-mono text-[10px] text-mute">{level}</span>
                        </span>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
