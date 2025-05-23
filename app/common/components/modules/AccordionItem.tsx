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
  alwaysOpenOnPc?: boolean;
}

export function AccordionItem({ title, header, children, defaultOpen = true, btnControl, variant = 'slate', className, alwaysOpenOnPc = false }: AccordionItemProps) {
  const isPc = useMediaQuery('(min-width: 1024px)') // lg 기준
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const forceOpen = alwaysOpenOnPc && isPc
  const actualOpen = forceOpen || isOpen
  const closeStyleMap = {
    slate: 'bg-slate-100',
    violet: 'bg-violet-50',
    lime: 'bg-lime-50',
    yellow: 'bg-yellow-50',
    cyan: 'bg-cyan-50',
    indigo: 'bg-indigo-50',
    teal: 'bg-teal-50',
    pink: 'bg-pink-50',
  };
  const openStyleMap = {
    slate: 'bg-slate-100 md:bg-white',
    violet: 'bg-violet-50 lg:border-0 border border-violet-500',
    lime: 'bg-lime-50 lg:border-0 border border-lime-500',
    yellow: 'bg-yellow-50 lg:border-0 border border-yellow-500',
    cyan: 'bg-cyan-50 lg:border-0 border border-cyan-500',
    indigo: 'bg-indigo-50 lg:border-0 border border-indigo-500',
    teal: 'bg-teal-50 lg:border-0 border border-teal-500',
    pink: 'bg-pink-50 lg:border-0 border border-pink-500',
  };
  const styleMap = {
    slate: 'bg-slate-200',
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
  return (
    <div className={`rounded-2xl mb-2 overflow-hidden ${actualOpen ? openStyleMap[variant] : closeStyleMap[variant]}`}>
      {!forceOpen && (
        <button
          type="button"
          aria-expanded={actualOpen}
          className={`w-full rounded-2xl flex items-center justify-between h-15 px-4 font-bold ${actualOpen ? closeStyleMap[variant] : styleMap[variant]} ${btnControl}`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`font-bold text-xl ${textStyle[variant]}`}>{title}</span>
          <div className="ml-auto">
            {header}
          </div>
          <ChevronDown
            className={`size-6 lg:size-8 transition-transform duration-200 ${actualOpen ? 'rotate-180 text-slate-800' : 'text-slate-400'}`}
            size={32}
            strokeWidth={1.5}
          />
        </button>
      )}

      {forceOpen && (
        <div className={`w-full rounded-2xl flex items-center justify-between h-15 px-4 font-bold ${btnControl}`}>
          <span className={`font-bold text-xl ${textStyle[variant]}`}>{title}</span>
          <div className="ml-auto">
            {header}
          </div>
        </div>
      )}

      {actualOpen && (
        <div className={`p-4 md:py-6 ${className}`}>
          {children}
        </div>
      )}
    </div>
  )
}
