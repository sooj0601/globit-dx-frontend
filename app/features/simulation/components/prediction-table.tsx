import React from "react";

export function PredictionTable({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <table className={`lg:w-full border-t-4 border-t-blue-500 border-b border-b-slate-300 ${className}`}>
      {children}
    </table>
  );
}

type PredictionTableThProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  noBg?: boolean;
};

export function PredictionTableTh({
    className = '',
    children,
    noBg = false,
    ...props
  }: PredictionTableThProps) {
  return (
    <th
      className={`h-10 text-nowrap px-2 font-bold text-blue-500 text-center border-b border-b-blue-500 ${className}`}
      {...props}
    >
      <span className="px-2">{children}</span>
    </th>
  );
}