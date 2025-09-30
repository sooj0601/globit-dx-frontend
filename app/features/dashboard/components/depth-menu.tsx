import React from 'react';

export function DepthMenu({
                            className = '',
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      {children}
    </div>
  );
}

export function DepthMenuItem({
    className = '',
    children,
    active = false,
    link,
    onClick,
  }: {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
  link?: string; // 기본값 제거
  onClick?: () => void;
}) {
  const baseClass =
    `flex items-center justify-center h-10 min-w-16 px-4 border-b-4 cursor-pointer 
     ${active ? 'border-blue-500' : 'hover:border-slate-300 border-transparent'} 
     ${className}`;

  const textClass =
    `text-slate-500 ${active ? 'text-slate-800 font-bold' : 'hover:text-slate-800 font-medium'}`;

  return link !== undefined ? (
    <a href={link} className={baseClass}>
      <span className={textClass}>{children}</span>
    </a>
  ) : (
    <button type="button" onClick={onClick} className={baseClass}>
      <span className={textClass}>{children}</span>
    </button>
  );
}
