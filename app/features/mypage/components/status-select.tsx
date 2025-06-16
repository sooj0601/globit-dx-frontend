import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type StatusSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options?: string[]; // 기본값: ['사용', '미사용']
  disabled?: boolean;
  className?: string;
};

export default function StatusSelect({
    value,
    onChange,
    options = ['사용', '미사용'],
    disabled = false,
    className = '',
  }: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStyleByValue = (v: string) => {
    if (v === '사용') return 'text-green-500 border-green-500 bg-green-50';
    if (v === '미사용') return 'text-rose-500 border-rose-500 bg-rose-50';
    return 'text-slate-800 border-slate-300 bg-white';
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      <div
        className={`
          h-9 px-3 rounded-lg border flex items-center justify-between cursor-pointer
          ${disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : getStyleByValue(value)}
        `}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className="font-bold">{value}</span>
        <ChevronDown size={18} className="text-slate-500" />
      </div>

      {open && !disabled && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-slate-300 bg-white shadow-md overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-3 py-2 hover:bg-slate-100 cursor-pointer ${
                opt === value ? 'font-bold text-slate-800' : 'text-slate-500'
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {/* Purge-safe */}
      <span className="hidden">
        text-green-700 border-green-400 bg-green-50
        text-rose-700 border-rose-300 bg-rose-50
      </span>
    </div>
  );
}
