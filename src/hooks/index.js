import { useState, useEffect } from "react";

/**
 * Hook to track scroll position and direction
 * @returns {object} Scroll data including position, direction, and scroll percentage
 */
export const useScrollPosition = () => {
    const [scrollData, setScrollData] = useState({
        scrollY: 0,
        scrollDirection: "up",
        scrollPercentage: 0,
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollData = () => {
            const scrollY = window.scrollY;
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage =
                scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;

            setScrollData({
                scrollY,
                scrollDirection: scrollY > lastScrollY ? "down" : "up",
                scrollPercentage: Math.min(100, Math.max(0, scrollPercentage)),
            });

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollData, { passive: true });
        updateScrollData(); // Initial call

        return () => window.removeEventListener("scroll", updateScrollData);
    }, []);

    return scrollData;
};

/**
 * Hook to handle intersection observer for animations
 * @param {object} options - Intersection observer options
 * @returns {array} [ref, isVisible, hasBeenVisible]
 */
export const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setIsVisible(isIntersecting);

                if (isIntersecting && !hasBeenVisible) {
                    setHasBeenVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
                ...options,
            }
        );

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, hasBeenVisible, options]);

    return [setRef, isVisible, hasBeenVisible];
};

/**
 * Hook to handle responsive breakpoints
 * @returns {object} Current breakpoint information
 */
export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("");

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;
            if (width < 640) setBreakpoint("sm");
            else if (width < 768) setBreakpoint("md");
            else if (width < 1024) setBreakpoint("lg");
            else if (width < 1280) setBreakpoint("xl");
            else setBreakpoint("2xl");
        };

        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);

        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return {
        breakpoint,
        isMobile: breakpoint === "sm",
        isTablet: breakpoint === "md",
        isDesktop: ["lg", "xl", "2xl"].includes(breakpoint),
    };
};

/**
 * Hook to handle local storage with SSR support
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value
 * @returns {array} [value, setValue]
 */
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if (typeof window === "undefined") return defaultValue;

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return defaultValue;
        }
    });

    const setStoredValue = (newValue) => {
        try {
            setValue(newValue);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(newValue));
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [value, setStoredValue];
};

/**
 * Hook to handle outside click detection
 * @param {Function} callback - Function to call when clicked outside
 * @returns {ref} Ref to attach to element
 */
export const useOutsideClick = (callback) => {
    const [ref, setRef] = useState(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (ref && !ref.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [callback, ref]);

    return setRef;
};
