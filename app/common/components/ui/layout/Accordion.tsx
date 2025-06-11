import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {useMediaQuery} from "~/common/hooks/useMediaQuery";

type AccordionItemProps = {
  title: string;
  header?: React.ReactNode; // 이제 단순 텍스트 대신 전체 콘텐츠 가능
  children: React.ReactNode;
  defaultOpen?: boolean;
  btnControl?: string; // 버튼 컨트롤을 위한 prop 추가
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink'
  className?: string;
  childControl?: string;
  alwaysOpenOnPc?: boolean;
}

export function Accordion({ title, header, children, defaultOpen = true, btnControl, variant = 'slate', className, childControl, alwaysOpenOnPc = false }: AccordionItemProps) {
  const isPc = useMediaQuery('(min-width: 1024px)') // lg 기준
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const forceOpen = alwaysOpenOnPc && isPc
  const actualOpen = forceOpen || isOpen
  const closeStyleMap = {
    slate: 'bg-slate-50',
    violet: 'bg-violet-50',
    lime: 'bg-lime-50',
    yellow: 'bg-yellow-50',
    cyan: 'bg-cyan-50',
    indigo: 'bg-indigo-50',
    teal: 'bg-teal-50',
    pink: 'bg-pink-50',
  };
  const openStyleMap = {
    slate: 'bg-slate-50 md:bg-white',
    violet: 'bg-violet-50 lg:border-0 border border-violet-500',
    lime: 'bg-lime-50 lg:border-0 border border-lime-500',
    yellow: 'bg-yellow-50 lg:border-0 border border-yellow-500',
    cyan: 'bg-cyan-50 lg:border-0 border border-cyan-500',
    indigo: 'bg-indigo-50 lg:border-0 border border-indigo-500',
    teal: 'bg-teal-50 lg:border-0 border border-teal-500',
    pink: 'bg-pink-50 lg:border-0 border border-pink-500',
  };
  const styleMap = {
    slate: 'bg-slate-100',
    violet: 'bg-violet-50',
    lime: 'bg-lime-50',
    yellow: 'bg-yellow-50',
    cyan: 'bg-cyan-50',
    indigo: 'bg-indigo-50',
    teal: 'bg-teal-50',
    pink: 'bg-pink-50',
  };
  const textStyle = {
    slate: 'text-slate-800',
    violet: 'text-violet-800',
    lime: 'text-lime-800',
    yellow: 'text-yellow-800',
    cyan: 'text-cyan-800',
    indigo: 'text-indigo-800',
    teal: 'text-teal-800',
    pink: 'text-pink-800',
  };
  const baseStyle = 'w-full cursor-pointer rounded-2xl flex items-center justify-between h-14 px-4 font-bold'
  return (
    <div className={`rounded-2xl overflow-hidden ${actualOpen ? openStyleMap[variant] : closeStyleMap[variant]} ${className}`}>
      {!forceOpen && (
        <div
          aria-expanded={actualOpen}
          className={`${baseStyle} ${actualOpen ? closeStyleMap[variant] : styleMap[variant]} ${btnControl}`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`font-bold text-lg md:text-xl ${textStyle[variant]}`}>{title}</span>
          <div className="ml-auto">
            {header}
          </div>
          <ChevronDown
            className={`size-6 lg:size-8 transition-transform duration-200 ${actualOpen ? 'rotate-180 text-slate-800' : 'text-slate-400'}`}
            size={32}
            strokeWidth={1.5}
          />
        </div>
      )}

      {forceOpen && (
        <div className={`${baseStyle} ${btnControl}`}>
          <span className={`font-bold text-lg md:text-xl ${textStyle[variant]}`}>{title}</span>
          <div className="ml-auto">
            {header}
          </div>
        </div>
      )}

      {actualOpen && (
        <div className={`p-4  md:py-6 border-t md:border-0 border-slate-300 ${childControl}`}>
          {children}
        </div>
      )}
    </div>
  )
}
