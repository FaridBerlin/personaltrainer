import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 cursor-pointer uppercase tracking-wider';

  const variants = {
    primary: 'bg-lime-400 text-gray-900 hover:bg-lime-300 focus:ring-lime-400 shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40 hover:-translate-y-0.5',
    secondary: 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/30 backdrop-blur-sm',
    outline: 'border border-lime-400/50 text-lime-400 hover:bg-lime-400 hover:text-gray-900 focus:ring-lime-400',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5 focus:ring-white/30',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-[11px]',
    md: 'px-7 py-3 text-xs',
    lg: 'px-9 py-4 text-xs',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
