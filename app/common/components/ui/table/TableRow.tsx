import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {useMediaQuery} from "~/common/hooks/useMediaQuery";

export type TableItemProps = {
  title?: string | React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink' | 'brown' | 'orange';
  className?: string;
  headControl?: string;
  bodyControl?: string;
  accordion?: boolean;
  onClick?: () => void;
}

export function TableRow({ title, header, children, variant = 'default', className = '', headControl = '', bodyControl = '', accordion = false, onClick}: TableItemProps) {
  const isPc = useMediaQuery('(min-width: 1024px)') // lg 기준
  const [isOpen, setIsOpen] = useState(true);
  const forceOpen = !accordion || isPc;
  const actualOpen = forceOpen || isOpen
  const closeStyleMap = {
    default: 'bg-slate-50',
    slate: 'bg-slate-50',
    violet: 'bg-violet-50',
    lime: 'bg-lime-50',
    yellow: 'bg-yellow-50',
    cyan: 'bg-cyan-50',
    indigo: 'bg-indigo-50',
    teal: 'bg-teal-50',
    pink: 'bg-pink-50',
    brown: 'bg-[#FDF6F4]',
    orange: 'bg-orange-50',
  };
  const openStyleMap = {
    default: 'bg-slate-50 lg:bg-white',
    slate: 'bg-slate-50',
    violet: 'bg-violet-50 lg:border-0 border border-violet-500',
    lime: 'bg-lime-50 lg:border-0 border border-lime-500',
    yellow: 'bg-yellow-50 lg:border-0 border border-yellow-500',
    cyan: 'bg-cyan-50 lg:border-0 border border-cyan-500',
    indigo: 'bg-indigo-50 lg:border-0 border border-indigo-500',
    teal: 'bg-teal-50 lg:border-0 border border-teal-500',
    pink: 'bg-pink-50 lg:border-0 border border-pink-500',
    brown: 'bg-[#FDF6F4] lg:border-0 border border-yellow-800',
    orange: 'bg-orange-50 lg:border-0 border border-orange-500',
  };
  const borderStyle = {
    default: 'border-b border-b-slate-300',
    slate: 'border-slate-300',
    violet: 'border-b border-b-violet-300',
    lime: 'border-b border-b-lime-300',
    yellow: 'border-b border-b-yellow-300',
    cyan: 'border-b border-b-cyan-300',
    indigo: 'border-b border-b-indigo-300',
    teal: 'border-b border-b-teal-300',
    pink: 'border-b border-b-pink-300',
    brown: 'border-b border-b-[#C3A9A1]',
    orange: 'border-b border-b-orange-300',
  };
  const textStyle = {
    default: 'text-slate-800',
    slate: 'text-slate-800',
    violet: 'text-violet-500',
    lime: 'text-lime-500',
    yellow: 'text-yellow-500',
    cyan: 'text-cyan-500',
    indigo: 'text-indigo-500',
    teal: 'text-teal-500',
    pink: 'text-pink-500',
    brown: 'text-yellow-800',
    orange: 'text-orange-500',
  };
  const baseStyle = 'w-full flex lg:hidden items-center justify-between py-3 px-4 font-bold '
  return (
    <div onClick={onClick} className={`rounded-2xl lg:rounded-none lg:border-b-1 lg:border-b-slate-300 ${actualOpen ? openStyleMap[variant] : closeStyleMap[variant]} ${className}`}>
      {!forceOpen && (
        <div
          aria-expanded={actualOpen}
          className={`${baseStyle} ${actualOpen && borderStyle[variant]} ${headControl}`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`font-bold ${textStyle[variant]}`}>{title}</span>
          <div className="ml-auto">
            {header}
          </div>
          <ChevronDown
            className={`size-6 lg:size-8 transition-transform duration-200 ml-4 ${actualOpen ? 'rotate-180' +
              ' text-slate-800' : 'text-slate-400'}`}
            size={32}
            strokeWidth={1.5}
          />
        </div>
      )}
      {forceOpen && (title || header) && (
        <div className={`border-b border-slate-300 ${baseStyle} ${headControl}`}>
          {title && <span className="font-bold">{title}</span>}
          {header && <div className="ml-auto">{header}</div>}
        </div>
      )}
      {actualOpen && (
        <div className={`w-full lg:p-2 p-4 grid grid-cols-2 gap-x-2 gap-y-1 lg:gap-1 lg:flex lg:items-center ${bodyControl}`}>
          {children}
        </div>
      )}
    </div>
  );
}
