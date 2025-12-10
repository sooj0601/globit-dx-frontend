// ~/common/components/ui/form/RadioGroup.tsx
import type { ReactNode } from "react";

type RadioOption = {
  value: string;
  label: ReactNode;
};

type RadioGroupProps = {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

export default function RadioGroup({
                                     name,
                                     value,
                                     options,
                                     onChange,
                                     disabled = false,
                                     className = "",
                                   }: RadioGroupProps) {
  const handleChange = (optionValue: string) => {
    if (disabled) return;
    onChange(optionValue);
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {options.map((option) => {
        const checked = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            className={`inline-flex items-center gap-2 shrink-0
              ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
          >
            {/* 실제 폼 전송용 숨겨진 input */}
            <input
              type="radio"
              className="sr-only"
              name={name}
              value={option.value}
              checked={checked}
              readOnly
            />

            {/* 커스텀 동그라미 */}
            <span
              className={`
                relative flex h-5 w-5 items-center justify-center rounded-full border
                ${checked ? "border-blue-500 bg-white" : "border-slate-400 bg-slate-50"}
              `}
            >
              {checked && (
                <span className="block h-3 w-3 rounded-full bg-blue-500" />
              )}
            </span>

            {/* 레이블 */}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
