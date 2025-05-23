type DotBadgeProps = {
  variant?: 'green' | 'red' | 'yellow';
};

export default function DotBadge({ variant = 'green' }: DotBadgeProps) {
  const colorMap = {
    green: 'bg-green-500',
    red: 'bg-rose-500',
    yellow: 'bg-yellow-400',
  };
  const labelMap = {
    green: '원활',
    red: '주의',
    yellow: '위험',
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${colorMap[variant]}`}></span>
      <span className="text-sm font-bold">{labelMap[variant]}</span>
    </div>
  );
}
