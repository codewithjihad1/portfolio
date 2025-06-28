import React from 'react';
import PropTypes from 'prop-types';

/**
 * Animated progress bar component
 */
export const ProgressBar = ({
    percentage,
    color = 'primary',
    size = 'md',
    animated = true,
    showPercentage = true,
    className = ''
}) => {
    const colors = {
        success: 'bg-gradient-to-r from-green-500 to-green-600',
        good: 'bg-gradient-to-r from-green-300 to-green-400',
        warning: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
        danger: 'bg-gradient-to-r from-red-500 to-red-600',
        primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
    };

    const sizes = {
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4'
    };

    return (
        <div className={`w-full ${className}`}>
            <div className={`bg-gray-200 dark:bg-gray-700 rounded-full ${sizes[size]} overflow-hidden`}>
                <div
                    className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-3000 ease-out ${animated ? 'animate-pulse' : ''
                        }`}
                    style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
                />
            </div>
            {showPercentage && (
                <div className="text-right mt-1">
                    <span className="text-sm theme-text-secondary">{percentage}%</span>
                </div>
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    animated: PropTypes.bool,
    showPercentage: PropTypes.bool,
    className: PropTypes.string
};

/**
 * Loading spinner component
 */
export const Spinner = ({
    size = 'md',
    color = 'primary',
    className = ''
}) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const colors = {
        primary: 'text-primary-600',
        secondary: 'text-secondary-600',
        white: 'text-white',
        gray: 'text-gray-600'
    };

    return (
        <div className={`inline-block animate-spin ${sizes[size]} ${colors[color]} ${className}`}>
            <svg fill="none" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
};

Spinner.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    color: PropTypes.oneOf(['primary', 'secondary', 'white', 'gray']),
    className: PropTypes.string
};
