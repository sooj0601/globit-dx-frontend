import { Check } from 'lucide-react';

type ColorSelectItemProps = {
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink' | 'brown' | 'orange';
  disabled?: boolean;
  checked?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ColorSelectItem({
                                          variant = 'slate',
                                          checked = false,
                                          disabled = false,
                                          name,
                                          onChange,
                                        }: ColorSelectItemProps) {
  const baseColorMap: Record<string, string> = {
    slate: 'bg-slate-50 border-slate-500 hover:bg-slate-100',
    violet: 'bg-violet-50 border-violet-500 hover:bg-violet-100',
    lime: 'bg-lime-50 border-lime-500 hover:bg-lime-100',
    yellow: 'bg-yellow-50 border-yellow-500 hover:bg-yellow-100',
    cyan: 'bg-cyan-50 border-cyan-500 hover:bg-cyan-100',
    indigo: 'bg-indigo-50 border-indigo-500 hover:bg-indigo-100',
    teal: 'bg-teal-50 border-teal-500 hover:bg-teal-100',
    pink: 'bg-pink-50 border-pink-500 hover:bg-pink-100',
    brown: 'bg-[#FDF6F4] border-yellow-800 hover:bg-[#F3E3DE]',
    orange: 'bg-orange-50 border-orange-500 hover:bg-orange-100',
  };

  const checkIconColorMap: Record<string, string> = {
    slate: 'text-slate-500',
    violet: 'text-violet-500',
    lime: 'text-lime-500',
    yellow: 'text-yellow-500',
    cyan: 'text-cyan-500',
    indigo: 'text-indigo-500',
    teal: 'text-teal-500',
    pink: 'text-pink-500',
    brown: 'text-yellow-800',
    orange: 'text-orange-500',
  };

  return (
    <label className="relative">
      <input
        type="radio"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`
          w-9 h-6 rounded-md border-2 flex items-center justify-center transition
          ${baseColorMap[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {checked && <Check size={16} className={checkIconColorMap[variant]} />}
      </div>
    </label>
  );
}
