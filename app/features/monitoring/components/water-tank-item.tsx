import DotBadge from './dot-badge';

type WaterTankItemProps = {
  className?: string;
  tankName: string;
  state?: 'green' | 'red' | 'yellow';
  colorName?:
    | 'slate'
    | 'violet'
    | 'lime'
    | 'yellow'
    | 'cyan'
    | 'indigo'
    | 'teal'
    | 'pink'
    | 'brown'
    | 'orange'; // 필요한 색상 미리 정의
  children?: React.ReactNode;
};

export default function WaterTankItemLine({
  className = '',
  tankName,
  state = 'green',
  colorName = 'slate',
  children,
}: WaterTankItemProps) {
  const tankColorMap = {
    slate: 'bg-slate-50 border-slate-500',
    violet: 'bg-violet-50 border-violet-500',
    lime: 'bg-lime-50 border-lime-500',
    yellow: 'bg-yellow-50 border-yellow-500',
    cyan: 'bg-cyan-50 border-cyan-500',
    indigo: 'bg-indigo-50 border-indigo-500',
    teal: 'bg-teal-50 border-teal-500',
    pink: 'bg-pink-50 border-pink-500',
    brown: 'bg-[#FDF6F4] border-yellow-800',
    orange: 'bg-orange-50 border-orange-500',
  };
  const textColorMap = {
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
  const borderColorMap = {
    slate: 'border-slate-500',
    violet: 'border-violet-500',
    lime: 'border-lime-500',
    yellow: 'border-yellow-500',
    cyan: 'border-cyan-500',
    indigo: 'border-indigo-500',
    teal: 'border-teal-500',
    pink: 'border-pink-500',
    brown: 'border-yellow-800',
    orange: 'border-orange-500',
  };
  return (
    <div
      className={`border-4 rounded-2xl p-2 md:px-4 md:py-3 ${tankColorMap[colorName]} ${className}`}
    >
      <div
        className={`flex items-center pb-1 mb-1 md:pb-3 md:mb-3 justify-between border-b ${borderColorMap[colorName]}`}
      >
        <p className={`font-bold text-md md:text-lg ${textColorMap[colorName]}`}>
          {tankName}
        </p>
        <DotBadge variant={`${state}`} />
      </div>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}
