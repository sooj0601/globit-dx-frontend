import React from 'react';
import {Check} from "lucide-react";

type TabOption = {
  label: string;
  value: string;
};

type CustomRadioProps = {
  name: string;
  options: TabOption[];
  selected: string;
  onChange: (value: string) => void;
};

export default function CustomRadio({ name, options, selected, onChange }: CustomRadioProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap w-full">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center rounded-full h-10 pl-3 pr-4 gap-2 transition-colors grow shrink-0 break-keep border
            ${selected === opt.value
            ? 'border-blue-500 text-blue-500 font-bold'
            : 'border-slate-100 bg-slate-100 text-slate-500'}
          `}
        >
          <div className={`size-5 rounded-full border flex items-center justify-center ${selected === opt.value
            ? 'bg-blue-500 border-blue-500 text-white '
            : 'bg-white border-slate-300'}`}>
            {selected === opt.value && (
              <Check size={16} strokeWidth={2}/>
            )}
          </div>
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
