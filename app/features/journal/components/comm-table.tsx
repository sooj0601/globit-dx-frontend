import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export function CommTable({
                            className = '',
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollX, setCanScrollX] = useState(false);

  const scroll = (direction: 'left' | 'right' | 'up' | 'down') => {
    const container = tableContainerRef.current;
    if (!container) return;

    const amount = 200;
    if (direction === 'left') container.scrollBy({ left: -amount, behavior: 'smooth' });
    if (direction === 'right') container.scrollBy({ left: amount, behavior: 'smooth' });
    if (direction === 'up') container.scrollBy({ top: -amount, behavior: 'smooth' });
    if (direction === 'down') container.scrollBy({ top: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setCanScrollX(container.scrollWidth > container.clientWidth);
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {canScrollX && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 z-24">
          <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
            <ChevronLeft size={32}/>
          </button>
          <span className="w-[2px] h-4 bg-slate-300"></span>
          <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
            <ChevronRight size={32}/>
          </button>
        </div>
      )}
      <div ref={tableContainerRef} className="relative w-full overflow-x-auto overflow-y-auto rounded-2xl">
        <table className={`relative w-max table-fixed border-collapse ${className}`}>
          {children}
        </table>
      </div>
    </div>
  );
}

export function CommTableHead({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead className={`sticky top-0 bg-slate-600 z-10 ${className}`}>
    {children}
    </thead>
  );
}

type CommTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
  children?: React.ReactNode;
};
export function CommTableTh({
                              className = '',
                              children,
                              ...props
                            }: CommTableThProps) {
  return (
    <th
      className={`p-2 text-white text-sm text-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

type CommTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  bgColor?: boolean;
  className?: string;
};

export function CommTableTd({
                              className = '',
                              children,
                              ...props
                            }: CommTableTdProps) {
  return (
    <td
      className={`py-2 px-2 text-center bg-slate-50 ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function CommTableRow({ className = '', children, onClick}: {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <tr onClick={onClick} className={`border-b border-slate-200 last:border-0 ${className}`}>
      {children}
    </tr>
  );
}

export function CommTableFoot({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tfoot className={`sticky bottom-0 bg-blue-200/40 z-10 backdrop-blur-sm ${className}`}>
    {children}
    </tfoot>
  );
}
