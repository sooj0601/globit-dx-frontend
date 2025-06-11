import { Check } from 'lucide-react';
import React from 'react';

type SelectableInputProps = {
  id?: string;
  name: string;
  value: string;
  label?: string;
  variant: 'checkbox' | 'radio';
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

export default function SelectableInput({
    id,
    name,
    value,
    label,
    variant,
    checked,
    onChange,
    disabled = false,
    className = '',
  }: SelectableInputProps) {
  const inputId = id || `${name}-${value}`;

  const isCheckbox = variant === 'checkbox';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label htmlFor={inputId} className="relative inline-flex items-center">
        <input
          type={variant}
          id={inputId}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        {isCheckbox ? (
          <div
            className={`
              w-5 h-5 rounded-md border 
              ${checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-slate-400'} 
              peer-focus:ring-2 ring-blue-300 flex items-center justify-center
              transition-colors
            `}
          >
            {checked && <Check strokeWidth={2} className="w-4 h-4 text-white" />}
          </div>
        ) : (
          <div
            className={`
              w-5 h-5 rounded-full border 
              ${checked ? 'border-blue-500 ring-2 ring-blue-300' : 'border-slate-400'}
              peer-focus:ring-2 transition-all
            `}
          >
            {checked && (
              <div className="w-4 h-4 bg-blue-500 rounded-full m-auto mt-[4px]" />
            )}
          </div>
        )}
      </label>

      {label && (
        <label htmlFor={inputId} className="cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
}
