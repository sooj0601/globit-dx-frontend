import React, { useState } from 'react';

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  className?: string;
  inputStyle?: string;
  onClick?: () => void;
  unit?: string;
  number?: boolean; // ✅ 숫자 입력용 커스텀 prop
};

const Input: React.FC<InputProps> = ({
    type = 'text',
    name,
    value,
    placeholder,
    onChange,
    disabled = false,
    readOnly = false,
    error,
    className = '',
    inputStyle = '',
    onClick,
    unit,
    number = false, // 기본값 false
  }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const hasRightElement = isPassword || !!unit;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (number) {
      const numeric = e.target.value;
      if (/^\d*$/.test(numeric)) {
        onChange?.(e);
      }
    } else {
      onChange?.(e);
    }
  };

  return (
    <div className={`relative flex flex-col gap-1 ${className}`}>
      <input
        type={isPassword ? (showPassword ? 'text' : 'password') : 'text'} // ✅ 항상 text 기반
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={onClick}
        disabled={disabled}
        readOnly={readOnly}
        className={`w-full h-9 ${hasRightElement ? 'pr-10' : 'pr-3'} pl-3 border rounded-lg outline-none transition-all
          ${error ? 'border-rose-500' : 'border-slate-300'}
          ${
          disabled
            ? 'cursor-not-allowed text-slate-400 bg-slate-100'
            : readOnly
              ? 'bg-slate-100 font-bold'
              : 'bg-white hover:border-slate-400 focus:border-slate-400'
        }
          ${number ? 'text-right' : ''}
          ${inputStyle}`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 inset-y-0 my-auto text-sm text-gray-500"
        >
          {showPassword ? '숨기기' : '보기'}
        </button>
      )}

      {!isPassword && unit && (
        <span className="absolute right-3 inset-y-0 my-auto text-sm text-gray-500 pointer-events-none">
          {unit}
        </span>
      )}

      {error && <span className="text-sm text-rose-500">{error}</span>}
    </div>
  );
};

export default Input;
