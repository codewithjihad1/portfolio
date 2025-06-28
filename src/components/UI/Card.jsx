import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component with hover effects and customizable styling
 */
export const Card = ({
    children,
    className = '',
    hover = true,
    padding = 'md',
    ...props
}) => {
    const baseClasses = `
    theme-bg-primary theme-border border rounded-xl shadow-lg
    transition-all duration-300
  `;

    const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        none: ''
    };

    return (
        <div
            className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hover: PropTypes.bool,
    padding: PropTypes.oneOf(['sm', 'md', 'lg', 'none'])
};

/**
 * Modal component with backdrop and animations
 */
export const Modal = ({
    isOpen,
    onClose,
    children,
    title,
    size = 'md',
    className = ''
}) => {
    if (!isOpen) return null;

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
                    onClick={onClose}
                ></div>

                {/* Modal */}
                <div className={`
          inline-block align-bottom theme-bg-primary rounded-lg text-left overflow-hidden shadow-xl 
          transform transition-all sm:my-8 sm:align-middle w-full ${sizes[size]} ${className}
        `}>
                    {title && (
                        <div className="px-6 py-4 theme-bg-secondary theme-border border-b">
                            <h3 className="text-lg font-medium theme-text-primary">{title}</h3>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 theme-text-secondary hover:theme-text-primary"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}
                    <div className="px-6 py-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    className: PropTypes.string
};
