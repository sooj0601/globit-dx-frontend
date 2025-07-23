import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export function DataTable({
    className = '',
    children,
  }: {
  className?: string;
  children?: React.ReactNode;
}) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right' | 'up' | 'down') => {
    const container = tableContainerRef.current;
    if (!container) return;

    const amount = 200;
    if (direction === 'left') container.scrollBy({ left: -amount, behavior: 'smooth' });
    if (direction === 'right') container.scrollBy({ left: amount, behavior: 'smooth' });
    if (direction === 'up') container.scrollBy({ top: -amount, behavior: 'smooth' });
    if (direction === 'down') container.scrollBy({ top: amount, behavior: 'smooth' });
  };
  return (
    <div className={`relative ${className}`}>
      {/* 세로 스크롤 화살표 */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 z-20 hidden lg:flex flex-col items-center gap-2">
        <button onClick={() => scroll('up')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronUp size={32}/>
        </button>
        <span className="w-4 h-[2px] bg-slate-300"></span>
        <button onClick={() => scroll('down')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronDown size={32}/>
        </button>
      </div>

      {/* 가로 스크롤 화살표 */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 z-24">
        <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronLeft size={32}/>
        </button>
        <span className="w-[2px] h-4 bg-slate-300"></span>
        <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronRight size={32}/>
        </button>
      </div>
      <div ref={tableContainerRef} className="relative w-full overflow-x-auto overflow-y-auto max-h-[500px] rounded-2xl">
        <table className={`relative w-max table-fixed border-collapse ${className}`}>
          {children}
        </table>

      </div>
    </div>
  );
}

export function DataTableHead({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead className={`sticky top-0 bg-slate-600 z-10 ${className}`}>
      {children}
    </thead>
  );
}

type DataTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
  children?: React.ReactNode;
};
export function DataTableTh({
    className = '',
    children,
    ...props
  }: DataTableThProps) {
  return (
    <th
      className={`p-2 text-white text-sm text-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}
type DataTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  bgColor?: boolean;
  className?: string;
};

export function DataTableTd({
    className = '',
    children,
    bgColor = false,
    ...props
  }: DataTableTdProps) {


  return (
    <td
      className={`border border-slate-300 py-2 px-2 text-center ${bgColor ? 'bg-slate-50' : ''} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function DataTableFoot({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tfoot className={`sticky bottom-0 bg-blue-200/40 z-10 backdrop-blur-sm ${className}`}>
      {children}
    </tfoot>
  );
}


