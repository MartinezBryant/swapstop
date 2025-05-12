import React from 'react';

/**
 * Button component with loading state
 * 
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether the button is in loading state
 * @param {string} props.className - Additional classes for the button
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.type - Button type (submit, button, reset)
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Whether the button is disabled
 * @returns {JSX.Element}
 */
function LoadingButton({ 
  isLoading, 
  className = "", 
  children, 
  type = "button", 
  onClick,
  disabled = false,
  ...rest 
}) {
  return (
    <button
      type={type}
      className={`relative ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className="invisible">{children}</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="animate-spin h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default LoadingButton;