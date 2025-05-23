import React, { useState } from 'react';

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
      type = 'text',
      name,
      value,
      placeholder,
      onChange,
      disabled = false,
      readonly = false,
      error,
      className = '',
    }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="relative flex flex-col gap-1">
      <input
        type={isPassword && showPassword ? 'text' : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        readOnly={readonly}
        className={`w-full h-10 px-3 border  rounded-lg outline-none transition-all 
          ${error ? 'border-rose-500' : 'border-slate-300'}
          ${disabled ? 'cursor-not-allowed text-slate-400 bg-slate-100 ' : 'hover:border-slate-400' +
          ' focus:border-slate-400 bg-white'}
          ${readonly ? 'cursor-not-allowed bg-slate-100' : 'hover:border-slate-400' +
          ' focus:border-slate-400 bg-white'}
          ${className}`}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[50%] translate-y-[-50%] text-sm text-gray-500"
        >
          {showPassword ? '숨기기' : '보기'}
        </button>
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
