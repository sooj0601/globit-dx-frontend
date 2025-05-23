import React from 'react';
import { ChevronDown } from 'lucide-react';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  options: SelectOption[];
};

const Select: React.FC<SelectProps> = ({
    name,
    onChange,
    disabled = false,
    readonly = false,
    className = '',
    placeholder = '선택하세요',
    value,
    options,
  }) => {
  return (
    <div className={`relative flex flex-col gap-1 ${className}`}>
      <select
        name={name}
        onChange={readonly ? undefined : onChange}
        disabled={disabled || readonly}
        value={value}
        className={`w-full h-10 px-3 pr-10 border rounded-lg outline-none transition-all appearance-none
          ${
          disabled
            ? 'cursor-not-allowed text-slate-400 bg-slate-100'
            : readonly
              ? 'bg-slate-100 font-bold text-slate-600'
              : 'bg-white border-slate-300 hover:border-slate-400 focus:border-slate-400'
        }
          `}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom Chevron Icon */}
      <div className="pointer-events-none absolute right-3 top-[50%] translate-y-[-50%] text-slate-500">
        <ChevronDown size={18} />
      </div>
    </div>
  );
};

export default Select;
