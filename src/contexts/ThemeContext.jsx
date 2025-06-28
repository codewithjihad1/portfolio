import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check local storage or default to 'light'
        const saved = localStorage.getItem('theme');
        return saved || 'light';
    });

    const isDark = theme === 'dark';

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem('theme', theme);

        // Apply theme to document using data-theme attribute
        document.documentElement.setAttribute('data-theme', theme);

        // Also add/remove dark class for compatibility
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');

    const value = {
        theme,
        isDark,
        toggleTheme,
        setLightTheme,
        setDarkTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };