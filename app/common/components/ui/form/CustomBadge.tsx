import type { ReactNode } from 'react';
import { Link } from 'react-router';

type CustomBadgeProps = {
  color?: 'default' | 'primary' | 'green' | 'yellow' | 'red' | 'gray' | 'teal';
  size?: 'default' | 'lg';
  variant?: 'outline' | 'filled';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CustomBadge({
  color = 'default',
  size = 'default',
  variant = 'outline',
  leftIcon,
  rightIcon,
  children,
  className = '',
  onClick,
}: CustomBadgeProps) {

  let colorClass = '';
  switch (color) {
    case 'default':
      colorClass = 'border-slate-800 text-slate-800 bg-slate-800/10';
      break;
    case 'primary':
      colorClass = 'border-blue-500 text-blue-500 bg-blue-500/10';
      break;
    case 'green':
      colorClass = 'border-green-500 text-green-500 bg-green-500/10';
      break;
    case 'yellow':
      colorClass = 'border-yellow-500 text-yellow-500 bg-yellow-500/10';
      break;
    case 'red':
      colorClass = 'border-rose-500 text-rose-500 bg-rose-500/10';
      break;
    case 'gray':
      colorClass = 'border-slate-500 text-slate-500 bg-slate-500/10';
      break;
    case 'teal':
      colorClass = 'border-teal-500 text-teal-500 bg-teal-500/10';
      break;
  }
  let variantClass = '';
  switch (variant) {
    case 'outline':
      switch (color) {
        case 'default':
          colorClass = 'border-slate-800 text-slate-800 bg-slate-800/10';
          break;
        case 'primary':
          colorClass = 'border-blue-500 text-blue-500 bg-blue-500/10';
          break;
        case 'green':
          colorClass = 'border-green-500 text-green-500 bg-green-500/10';
          break;
        case 'yellow':
          colorClass = 'border-yellow-500 text-yellow-500 bg-yellow-500/10';
          break;
        case 'red':
          colorClass = 'border-rose-500 text-rose-500 bg-rose-500/10';
          break;
        case 'gray':
          colorClass = 'border-slate-500 text-slate-500 bg-slate-500/10';
          break;
        case 'teal':
          colorClass = 'border-teal-500 text-teal-500 bg-teal-500/10';
          break;
      }
      break;
    case 'filled':
      switch (color) {
        case 'default':
          colorClass = 'border-slate-800 text-white bg-slate-800';
          break;
        case 'primary':
          colorClass = 'border-blue-500 text-white bg-blue-500';
          break;
        case 'green':
          colorClass = 'border-green-500 text-white bg-green-500';
          break;
        case 'yellow':
          colorClass = 'border-yellow-500 text-white bg-yellow-500';
          break;
        case 'red':
          colorClass = 'border-rose-500 text-white bg-rose-500';
          break;
        case 'gray':
          colorClass = 'border-slate-500 text-white bg-slate-500';
          break;
        case 'teal':
          colorClass = 'border-teal-400 text-white bg-teal-400';
          break;
      }
      break;
  }
  let sizeClass = '';
  switch (size) {
    case 'default':
      sizeClass = 'min-w-14 h-8 px-2 text-sm ';
      break;
    case 'lg':
      sizeClass = 'h-9 px-3 text-base';
      break;
  }

  const baseClass = `inline-flex items-center justify-center border rounded-lg gap-1 font-bold shrink-0 ${sizeClass} ${colorClass} ${className}`;
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
