import React, { forwardRef } from 'react';
import { Calendar } from 'lucide-react';

const CustomDateInput = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder, id, name, inputStyle }, ref) => (
  <div className="relative w-full h-9">
    <input
      type="text"
      readOnly
      ref={ref}
      onClick={onClick}
      value={value}
      placeholder={placeholder}
      name={name}
      id={id}
      className={`w-full h-9 pl-2 pr-10 border border-slate-300 rounded-lg outline-none bg-white hover:border-slate-400 focus:border-slate-400 ${inputStyle}`}
    />
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 inset-y-0 my-auto text-slate-500 hover:text-slate-700"
    >
      <Calendar size={18} />
    </button>
  </div>
));

export default CustomDateInput;
