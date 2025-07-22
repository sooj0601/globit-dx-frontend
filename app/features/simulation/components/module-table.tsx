import React from 'react';

export function ModuleTable({
    className = '',
    children,
  }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
      <table className={`relative rounded-2xl overflow-hidden ${className}`}>
        {children}
      </table>
  );
}

export function ModuleTableHead({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead>
    <tr className={`h-9 text-white font-bold bg-slate-600 ${className}`}>
      {children}
    </tr>
    </thead>
  );
}

type ModuleTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  noBg?: boolean;
  noBorder?: boolean;
  className?: string;
};

export function ModuleTableTd({
    className = '',
    children,
    noBg = false,
    noBorder = false,
    ...props
  }: ModuleTableTdProps) {


  return (
    <td
      className={`h-12 text-center text-nowrap ${noBorder ? '' : 'border border-slate-300'} ${noBg ? '' : 'bg-slate-50'} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function ModuleTableTr({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tr className={`border-b border-b-slate-300 last:border-b-0 text-nowrap ${className}`}>
      {children}
    </tr>
  );
}

type ModuleTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  noBg?: boolean;
};

export function ModuleTableTh({
    className = '',
    children,
    noBg = false,
    ...props
  }: ModuleTableThProps) {
  return (
    <th
      className={`text-nowrap ${className}`}
      {...props}
    >
      <span className="px-4 text-sm">{children}</span>
    </th>
  );
}