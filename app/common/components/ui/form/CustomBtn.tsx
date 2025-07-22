import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type CustomBtnProps = {
  size?: 'xs' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'danger' | 'ghost' | 'outline';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    case 'xs':
      sizeClass = 'h-5 text-sm gap-1 ';
      break;
    case 'sm':
      sizeClass = 'h-9 px-3 rounded-lg gap-2 ';
      break;
    case 'lg':
      sizeClass = 'h-12 md:h-14 min-w-[136px] px-4 rounded-xl gap-2 ';
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
      variantClass = 'bg-blue-500 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantClass = 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      break;
    case 'gray' :
      variantClass = 'bg-slate-200 text-slate-400 hover:bg-gray-300';
      break;
    case 'danger':
      variantClass = 'bg-rose-500 text-white hover:bg-rose-300';
      break;
    case 'ghost':
      variantClass = 'text-blue-500 hover:bg-slate-100';
      break;
    case 'outline':
      variantClass = 'border border-slate-800 bg-white hover:bg-slate-200';
      break;
  }
  const baseClass = `inline-flex items-center justify-center font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${sizeClass} ${variantClass} ${className}`;
  const content = (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children && <span className="flex-shrink-0 break-keep">{children}</span>}
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
