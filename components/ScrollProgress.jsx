'use client';

import { useEffect, useState } from 'react';

/** Arcade "loading" bar at the top — fills as you scroll the page. */
export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-neon via-gold to-pixie shadow-[0_0_8px_var(--neon)]"
            style={{ width: `${progress}%` }}
        />
    );
}
