import React, { useState } from 'react';
import { Search, Eye, EyeOff } from 'lucide-react'; // 아이콘 라이브러리 (예시)

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
  number?: boolean;
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
    number = false,
  }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isSearch = type === 'search';
  const isFile = type === 'file';
  const hasRightElement = isPassword || !!unit || isSearch;

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

  // 파일 input은 따로 처리
  if (isFile) {
    return (
      <div className={`relative flex flex-col gap-1 ${className}`}>
        <input
          type="file"
          name={name}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          className={`w-full h-9 file:px-4 file:py-1 file:bg-slate-200 file:border file:border-slate-300
            text-sm rounded-lg border border-slate-300 ${inputStyle}`}
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className={`relative flex flex-col gap-1`}>
        <input
          type={(isPassword && showPassword) ? 'text' : type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={onClick}
          disabled={disabled}
          readOnly={readOnly}
          inputMode={number ? 'numeric' : undefined}
          autoComplete="off"
          className={`w-full h-9 ${hasRightElement ? 'pr-6' : 'pr-2'}  pl-2 border rounded-lg outline-none transition-all
            ${error ? 'border-rose-500' : 'border-slate-300'}
            ${disabled ? 'cursor-not-allowed text-slate-400 bg-slate-100'
            : readOnly ? 'bg-slate-100 font-bold'
              : 'bg-white hover:border-slate-400 focus:border-slate-400'}
            ${number ? 'text-right' : ''}
            ${inputStyle}`}
        />

        {/* 비밀번호 토글 */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 inset-y-0 my-auto text-sm text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {/* 단위 표시 */}
        {!isPassword && unit && (
          <span className="absolute right-1.5 inset-y-0 my-auto flex items-center text-sm font-medium text-slate-400 pointer-events-none">
            {unit}
          </span>
        )}

        {/* 검색 아이콘 */}
        {isSearch && (
          <button type="button" className="cursor-pointer absolute right-3 inset-y-0 my-auto text-slate-600 hover:text-slate-400">
            <Search size={18} />
          </button>
        )}
      </div>
      {error && <span className="text-sm text-rose-500">{error}</span>}
    </div>
  );
};

export default Input;
