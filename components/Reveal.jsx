'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper — fades/slides children in when they enter the viewport.
 * `delay` (ms) staggers siblings for a choreographed entrance.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        // fallback: no observer support → show immediately
        if (!el || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`${className} ${visible ? 'reveal-visible' : 'reveal-init'}`}>
            {children}
        </Tag>
    );
}
