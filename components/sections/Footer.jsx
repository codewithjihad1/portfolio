import { EmailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';
import { personalInfo, socialLinks } from '@/data/portfolio';

const socialIcons = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
    Email: EmailIcon,
};

const navLinks = [
    { href: '#hero', label: 'PLAY' },
    { href: '#about', label: 'PLAYER' },
    { href: '#experience', label: 'QUESTS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'GAMES' },
    { href: '#contact', label: 'CONTACT' },
];

export default function Footer() {
    return (
        <footer className="bg-void border-t-2 border-line pt-16 pb-8 relative overflow-hidden">
            {/* decorative pixel floor */}
            <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon via-gold to-pixie"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* GAME OVER screen */}
                <div className="text-center mb-14">
                    <div className="font-press text-xl sm:text-3xl text-pixie glow-pixie animate-flicker">
                        GAME OVER?
                    </div>
                    <div className="font-press text-[9px] sm:text-[11px] text-mute mt-5 tracking-widest">
                        NAH — IT&apos;S JUST CREDITS
                    </div>
                    <div className="font-press text-[8px] sm:text-[10px] text-gold glow-gold mt-3 animate-pulse">
                        ★ CONTINUE? INSERT COIN ★
                    </div>
                </div>

                {/* middle row: nav + socials */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pb-10 border-b-2 border-line">
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="font-press text-[9px] text-mute hover:text-neon transition-colors">
                                {label}
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map(({ name, url }) => {
                            const Icon = socialIcons[name];
                            return Icon ? (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="pixel-press w-10 h-10 flex items-center justify-center bg-panel text-mute hover:text-gold">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ) : null;
                        })}
                    </div>
                </div>

                {/* credit roll */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mute">
                    <p>
                        © {new Date().getFullYear()} <span className="text-ink">MD JIHAD HOSSAIN</span> · TOP SCORE:{' '}
                        <span className="text-neon glow-neon">999999</span>
                    </p>
                    <p>
                        BUILT WITH{' '}
                        <span className="text-aqua font-medium">NEXT.JS</span> +{' '}
                        <span className="text-aqua font-medium">TAILWIND</span> ON{' '}
                        <span className="text-grape font-medium">CRT MODE</span>
                    </p>
                    <p className="hidden lg:block">MAIL: {personalInfo.email}</p>
                </div>
            </div>
        </footer>
    );
}
