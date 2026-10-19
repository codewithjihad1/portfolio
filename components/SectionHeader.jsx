import Reveal from '@/components/Reveal';

export default function SectionHeader({ stage, eyebrow, title, sub }) {
    return (
        <Reveal className="text-center mb-14">
            <div className="font-press text-[10px] sm:text-xs text-gold glow-gold tracking-wider">
                ▶ {stage} — {eyebrow}
            </div>
            <h2 className="font-press text-lg sm:text-2xl text-ink mt-4 sm:mt-5 animate-flicker">
                {title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5" aria-hidden="true">
                <span className="w-2 h-2 bg-neon" />
                <span className="text-mute font-mono text-xs sm:text-sm">- - - -</span>
                <span className="w-2 h-2 bg-pixie" />
            </div>
            {sub && (
                <p className="text-mute font-mono text-sm mt-5 max-w-xl mx-auto leading-relaxed">
                    {sub}
                </p>
            )}
        </Reveal>
    );
}
