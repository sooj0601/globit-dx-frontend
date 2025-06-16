import React from "react";

export type TableTdProps = {
  label?: string
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function TableTd({ label, children, onClick, className = '' }: TableTdProps) {
  return (
    <div className={`flex min-h-8 items-center gap-2 ${className}`} onClick={onClick}>
      {label && (
        <strong className="lg:hidden text-slate-500 text-sm w-15 shrink-0 break-keep">{label}</strong>
      )}
      {children}
    </div>
  );
}
