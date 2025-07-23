import type { ReactNode } from 'react';

type DataBadgeProps = {
  variant?: 'default' | 'primary' | 'green' | 'yellow' | 'red' | 'gray' | 'teal';
  children?: ReactNode;
  className?: string;
};

export default function DataBadge({
  variant = 'default',
  children,
  className = '',
}: DataBadgeProps) {

  let colorClass = '';
  switch (variant) {
    case 'default':
      colorClass = 'bg-slate-800';
      break;
    case 'primary':
      colorClass = 'bg-blue-500';
      break;
    case 'green':
      colorClass = 'bg-green-500';
      break;
    case 'yellow':
      colorClass = 'bg-yellow-500';
      break;
    case 'red':
      colorClass = 'bg-rose-500';
      break;
    case 'gray':
      colorClass = 'bg-slate-500';
      break;
    case 'teal':
      colorClass = 'bg-teal-400';
      break;
  }
  const baseClass = `flex items-center justify-center px-2 h-6 text-sm font-bold text-white rounded-md`;

  return (
    <span
      className={`${baseClass} ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
