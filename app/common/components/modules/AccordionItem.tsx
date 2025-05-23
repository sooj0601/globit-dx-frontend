import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItemProps = {
  title: string;
  header?: React.ReactNode; // 이제 단순 텍스트 대신 전체 콘텐츠 가능
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, header, children, defaultOpen = true }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl mb-2 overflow-hidden bg-slate-100 md:bg-white">
      <button
        type="button"
        aria-expanded={isOpen}
        className={`w-full rounded-2xl flex items-center justify-between h-15 px-4 font-bold hover:bg-slate-100 ${isOpen ? 'bg-slate-100' : 'bg-slate-200'}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="font-bold text-xl">{title}</span>
        <div className="ml-auto">
          {header}
        </div>
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-800' : 'text-slate-400'}`} size={32} strokeWidth={1.5} />
      </button>
      {isOpen && (
        <div className="p-2 md:px-4 md:py-6">
          {children}
        </div>
      )}
    </div>
  );
}
