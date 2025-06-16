import React from 'react';

type TabOption = {
  label: string;
  value: string;
};

type TabRadioProps = {
  name: string;
  options: TabOption[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function TabRadio({ name, options, selected, onChange, className = '' }: TabRadioProps) {
  return (
    <div className="w-full flex border-b-2 border-blue-500">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex justify-center items-center h-12 px-4 rounded-t-xl transition-colors flex-1 
            ${selected === opt.value
            ? 'bg-blue-500 text-white font-bold'
            : 'bg-slate-100 text-slate-400 font-medium hover:text-blue-400 '}
            ${className}
          `}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            className="hidden"
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
