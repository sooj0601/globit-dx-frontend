import React from "react";

type TableTdProps = {
  label?: string
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function TableTd({ label, children, onClick, className }: TableTdProps) {
  return (
    <div className={`flex items-center lg:flex-1 gap-2 ${className}`} onClick={onClick}>
      {label && (
        <strong className="lg:hidden text-slate-500 text-sm min-w-24">{label}</strong>
      )}
      {children}
    </div>
  );
}
