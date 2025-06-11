import React from "react";

export type TableTdProps = {
  label?: string
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  mobileCard?: boolean
}

export default function TableTd({ label, children, onClick, className = '', mobileCard = true }: TableTdProps) {
  return mobileCard ? (
    <div className={`flex min-h-8 items-center gap-2 ${className}`} onClick={onClick}>
      {label && (
        <strong className="lg:hidden text-slate-500 text-sm min-w-15">{label}</strong>
      )}
      {children}
    </div>
  ) : (
    <div className={`flex items-center gap-2 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
