import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';

type StatusSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  disabled?: boolean;
  className?: string;
};

type DropdownPos = {
  top: number;
  left: number;
  width: number;
};

export default function StatusSelect({
                                       value,
                                       onChange,
                                       options = ['진행중', '미진행', '보완요청중', '완료'],
                                       disabled = false,
                                       className = '',
                                     }: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<DropdownPos | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStyleByValue = (v: string) => {
    if (v === '진행중') return 'text-blue-500 border-blue-500 bg-blue-50';
    if (v === '미진행') return 'text-amber-500 border-amber-500 bg-amber-50';
    if (v === '보완요청중') return 'text-rose-500 border-rose-500 bg-rose-50';
    if (v === '완료') return 'text-green-500 border-green-500 bg-green-50';
    return 'text-slate-800 border-slate-300 bg-white';
  };

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 아코디언 row 클릭 방지
    if (disabled) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPos({
        top: rect.bottom + 4, // 약간 아래로 여유
        left: rect.left,
        width: rect.width,
      });
    }
    setOpen((prev) => !prev);
  };

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>, opt: string) => {
    e.stopPropagation(); // overlay로 전파 방지
    onChange(opt);
    setOpen(false);
  };

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`relative w-full ${className}`}
        ref={containerRef}
      >
        <div
          className={`
            h-9 px-3 rounded-lg border flex items-center justify-between cursor-pointer
            ${disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : getStyleByValue(value)}
          `}
          onClick={handleToggle}
        >
          <span className="font-bold">{value}</span>
          <ChevronDown size={18} className="text-slate-500" />
        </div>
      </div>

      {open && !disabled && pos &&
        createPortal(
          // 전체 화면 overlay: 밖을 클릭하면 닫힘
          <div
            className="fixed inset-0 z-[9999]"
            onMouseDown={close}
          >
            <ul
              className="absolute rounded-lg border border-slate-300 bg-white shadow-md overflow-hidden"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
              }}
              onMouseDown={(e) => e.stopPropagation()} // 리스트 안 클릭 시 overlay로 전파 방지
            >
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={(e) => handleSelect(e, opt)}
                  className={`px-3 py-2 hover:bg-slate-100 cursor-pointer ${
                    opt === value ? 'font-bold text-slate-800' : 'text-slate-500'
                  }`}
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )
      }

      {/* Purge-safe */}
      <span className="hidden">
        text-green-700 border-green-400 bg-green-50
        text-rose-700 border-rose-300 bg-rose-50
      </span>
    </>
  );
}
