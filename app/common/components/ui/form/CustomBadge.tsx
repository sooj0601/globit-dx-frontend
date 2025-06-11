import type { ReactNode } from 'react';
import { Link } from 'react-router';

type CustomBadgeProps = {
  variant?: 'default' | 'primary' | 'green' | 'yellow' | 'red' | 'gray';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CustomBadge({
  variant = 'default',
  leftIcon,
  rightIcon,
  children,
  className = '',
  onClick,
}: CustomBadgeProps) {

  let variantClass = '';
  switch (variant) {
    case 'default':
      variantClass = 'border-slate-800 text-slate-800 bg-slate-800/10';
      break;
    case 'primary':
      variantClass = 'border-blue-500 text-blue-500 bg-blue-500/10';
      break;
    case 'green':
      variantClass = 'border-green-500 text-green-500 bg-green-500/10';
      break;
    case 'yellow':
      variantClass = 'border-yellow-500 text-yellow-500 bg-yellow-500/10';
      break;
    case 'red':
      variantClass = 'border-rose-500 text-rose-500 bg-rose-500/10';
      break;
    case 'gray':
      variantClass = 'border-slate-500 text-slate-500 bg-slate-500/10';
      break;

  }
  const baseClass = `inline-flex items-center justify-center h-8 px-2 border rounded-lg font-bold text-sm shrink-0 ${variantClass} ${className}`;
  const content = (
    <>
      {leftIcon && <i className="flex-shrink-0">{leftIcon}</i>}
      {children && children}
      {rightIcon && <i className="flex-shrink-0">{rightIcon}</i>}
    </>
  );
  return (
    <span
      className={`${baseClass}`}
      onClick={onClick}
    >
      {content}
    </span>
  );
}
