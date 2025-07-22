type TankSelectItemProps = {
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink' | 'brown' | 'orange'// 필요한 색상
  tankName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function TankSelectItem({ variant = 'slate', tankName, onClick, disabled }: TankSelectItemProps) {
  const colorMap = {
    slate: 'bg-slate-500 disabled:bg-slate-200',
    violet: 'bg-violet-500 disabled:bg-violet-200',
    lime: 'bg-lime-500 disabled:bg-lime-200',
    yellow: 'bg-yellow-500 disabled:bg-yellow-200',
    cyan: 'bg-cyan-500 disabled:bg-cyan-200',
    indigo: 'bg-indigo-500 disabled:bg-indigo-200',
    teal: 'bg-teal-500 disabled:bg-teal-200',
    pink: 'bg-pink-500 disabled:bg-pink-200',
    brown: 'bg-[#F3E3DE] disabled:bg-[#F3E3DE]',
    orange: 'bg-orange-500 disabled:bg-orange-200',
  };
  const hoverMap = {
    slate: 'hover:bg-slate-600',
    violet: 'hover:bg-violet-600',
    lime: 'hover:bg-lime-600',
    yellow: 'hover:bg-yellow-600',
    cyan: 'hover:bg-cyan-600',
    indigo: 'hover:bg-indigo-600',
    teal: 'hover:bg-teal-600',
    pink: 'hover:bg-pink-600',
    brown: 'hover:bg-[#F3E3DE]',
    orange: 'hover:bg-orange-600',
  }
  const baseClass = 'flex justify-center items-center text-center font-bold h-16 rounded-lg text-white';
  return (
    <button type="button" disabled={disabled} className={`cursor-pointer ${hoverMap[variant]} ${baseClass} ${colorMap[variant]}`} onClick={onClick}>
      {tankName}
    </button>
  );
}
