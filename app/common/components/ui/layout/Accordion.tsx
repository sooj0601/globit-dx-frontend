import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  headControl?: string; // 버튼 컨트롤을 위한 prop 추가
  className?: string;
  bodyControl?: string;
}

export function Accordion({ title, children, headControl = '', className = '', bodyControl = '' }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const actualOpen = isOpen

  const baseStyle = 'w-full cursor-pointer rounded-2xl flex items-center justify-between h-12 lg:h-14 px-4 font-bold'
  return (
    <div className={`rounded-2xl ${actualOpen ? 'bg-slate-50 md:bg-white' : 'bg-slate-50'} ${className}`}>
      <div
        aria-expanded={actualOpen}
        className={`${baseStyle} ${actualOpen ? 'bg-slate-50' : 'bg-slate-100'} ${headControl}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={`font-bold text-lg md:text-xl text-slate-800`}>{title}</span>
        <ChevronDown
          className={`size-6 lg:size-8 transition-transform duration-200 ${actualOpen ? 'rotate-180 text-slate-800' : 'text-slate-400'}`}
          size={32}
          strokeWidth={1.5}
        />
      </div>
      {actualOpen && (
        <div className={`p-4 md:py-6 border-t md:border-0 border-slate-300 ${bodyControl}`}>
          {children}
        </div>
      )}
    </div>
  )
}
