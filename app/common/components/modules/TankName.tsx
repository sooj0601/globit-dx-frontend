import {Link} from "react-router";

type TankNameProps = {
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink' | 'brown' | 'orange'// 필요한 색상
  tankName: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TankName({ variant = 'slate', tankName, to, onClick }: TankNameProps) {
  const colorMap = {
    slate: 'border-slate-500 bg-slate-50 text-slate-500',
    violet: 'border-violet-500 bg-violet-50 text-violet-500',
    lime: 'border-lime-500 bg-lime-50 text-lime-500',
    yellow: 'border-yellow-500 bg-yellow-50 text-yellow-500',
    cyan: 'border-cyan-500 bg-cyan-50 text-cyan-500',
    indigo: 'border-indigo-500 bg-indigo-50 text-indigo-500',
    teal: 'border-teal-500 bg-teal-50 text-teal-500',
    pink: 'border-pink-500 bg-pink-50 text-pink-500',
    brown: 'border-yellow-800 bg-[#FDF6F4] text-yellow-800',
    orange: 'border-orange-500 bg-orange-50 text-orange-500',
  };
  const hoverMap = {
    slate: 'hover:bg-slate-100',
    violet: 'hover:bg-violet-100',
    lime: 'hover:bg-lime-100',
    yellow: 'hover:bg-yellow-100',
    cyan: 'hover:bg-cyan-100',
    indigo: 'hover:bg-indigo-100',
    teal: 'hover:bg-teal-100',
    pink: 'hover:bg-pink-100',
    brown: 'hover:bg-[#F3E3DE]',
    orange: 'hover:bg-orange-100',
  }
  const baseClass = 'flex justify-center items-center text-center border h-9 rounded-lg px-2 w-full font-bold';
  return to ? (
    <Link to={to} className={`cursor-pointer ${baseClass} ${colorMap[variant]} ${hoverMap[variant]}`}>
      {tankName}
    </Link>
  ) : (
    <button type="button" className={`${onClick ? `cursor-pointer ${hoverMap[variant]}`:''} ${baseClass} ${colorMap[variant]}`} onClick={onClick}>
      {tankName}
    </button>
  );
}
