import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function NotFound() {
    return (
        <main className="pt-32 pb-24 min-h-screen bg-void flex items-center justify-center px-4">
            <Reveal className="text-center">
                <div className="font-press text-3xl sm:text-5xl text-pixie glow-pixie animate-flicker">
                    404
                </div>
                <div className="font-press text-sm sm:text-lg text-ink mt-8 leading-relaxed">
                    PAGE NOT FOUND
                </div>
                <p className="text-mute font-mono text-sm leading-relaxed max-w-md mx-auto mt-5">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="pixel-press inline-block mt-10 px-7 py-4 bg-neon text-void font-press text-[10px] sm:text-xs hover:bg-neon">
                    ← BACK TO HOME
                </Link>
            </Reveal>
        </main>
    );
}
