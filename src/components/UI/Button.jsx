import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button component with multiple variants
 */
export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    onClick,
    className = '',
    ...props
}) => {
    const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-primary-600 to-secondary-600 text-white
      hover:from-primary-700 hover:to-secondary-700 focus:ring-primary-500
      shadow-lg hover:shadow-xl
    `,
        secondary: `
      theme-border border-2 theme-text-primary hover:theme-accent-bg hover:text-white
      focus:ring-primary-500
    `,
        outline: `
      border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white
      focus:ring-primary-500
    `,
        ghost: `
      theme-text-primary hover:theme-accent-bg hover:text-white
      focus:ring-primary-500
    `
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
};
