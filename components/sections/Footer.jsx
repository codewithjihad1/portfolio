import { personalInfo, socialLinks } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from "@/components/Icons";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Email: EmailIcon,
};

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-blue-500">Jihad</span>
              <span className="text-white">.</span>
            </a>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xs">
              Frontend Developer crafting modern, responsive web experiences with
              clean and efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </h4>
            <p className="text-slate-400 text-sm mb-1">{personalInfo.email}</p>
            <p className="text-slate-400 text-sm mb-4">{personalInfo.phone}</p>

            <div className="flex gap-3">
              {socialLinks.map(({ name, url }) => {
                const Icon = socialIcons[name];
                return Icon ? (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500 text-slate-400 hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MD Jihad Hossain. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with{" "}
            <span className="text-blue-400 font-medium">Next.js</span> &{" "}
            <span className="text-blue-400 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
