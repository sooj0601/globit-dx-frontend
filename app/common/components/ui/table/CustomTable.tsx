import React, {
  type ReactNode,
} from 'react';

type CustomTableProps = {
  children?: ReactNode;
  tableHead?: ReactNode;
  bottomBtn?: string | ReactNode;
  className?: string;
};

export default function CustomTable({
    children,
    tableHead,
    bottomBtn = '',
    className = '',
  }: CustomTableProps) {
  return (
    <div className={`flex flex-col w-full gap-4 lg:gap-0 ${className}`}>
      {tableHead && (
        <div
          className={`items-center px-2 py-2 text-sm font-semibold bg-slate-600 text-slate-300 rounded-3xl rounded-b-none gap-1 hidden lg:flex }`}
        >
          {tableHead}
        </div>
      )}
      <div className={`flex flex-col gap-4 lg:gap-0`}>
        {children}
      </div>
      {bottomBtn && <div className="md:mt-4 md:mb-2">{bottomBtn}</div>}
    </div>
  );
}
