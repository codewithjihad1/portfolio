import { skills, levelColor } from "@/data/portfolio";

function SkillCategory({ title, emoji, items }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map(({ name, level }) => (
          <div key={name} className="flex items-center justify-between">
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
              {name}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                levelColor[level] ?? levelColor["Beginner"]
              }`}
            >
              {level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
            What I Know
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            My Skills
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I work with to build modern, performant web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend" emoji="🎨" items={skills.frontend} />
          <SkillCategory title="Backend" emoji="⚙️" items={skills.backend} />
          <SkillCategory title="Tools & Others" emoji="🛠️" items={skills.tools} />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {[
            { level: "Expert", color: levelColor["Expert"] },
            { level: "Advanced", color: levelColor["Advanced"] },
            { level: "Intermediate", color: levelColor["Intermediate"] },
            { level: "Beginner", color: levelColor["Beginner"] },
          ].map(({ level, color }) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
