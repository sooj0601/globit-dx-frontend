import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type CustomBtnProps = {
  size?: 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'ghost';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomBtn({
  size = 'sm',
  variant = 'default',
  leftIcon,
  rightIcon,
  children,
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
}: CustomBtnProps) {
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'h-10 px-4 rounded-xl';
      break;
    case 'lg':
      sizeClass = 'h-13 px-4 rounded-xl';
      break;
    case 'icon':
      sizeClass = 'size-7 flex items-center justify-center rounded-lg';
      break;
  }

  let variantClass = '';
  switch (variant) {
    case 'default':
      variantClass = 'bg-slate-800 text-white hover:bg-slate-700';
      break;
    case 'primary':
      variantClass = 'bg-blue-600 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantClass = 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      break;
    case 'danger':
      variantClass = 'bg-rose-500 text-white hover:bg-rose-300';
      break;
    case 'ghost':
      variantClass = 'text-blue-500 hover:bg-slate-100';
      break;
  }
  const baseClass = `inline-flex items-center justify-center gap-2 font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClass} ${variantClass} ${className}`;
  const content = (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }
  return (
    <button
      className={`${baseClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {content}
    </button>
  );
}
