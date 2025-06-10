type InfoItemProps = {
  label: string;
  value: string;
  className?: string;
  variant?: 'default' | 'colorful';
};

export default function InfoItem({
  label,
  value,
  className = '',
  variant = 'default',
}: InfoItemProps) {
  return variant === 'colorful' ? (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <strong className="font-bold text-slate-500">{label}</strong>
      <span className="w-0.5 h-3 bg-slate-400"></span>
      <span className="font-bold text-blue-500">{value}</span>
    </div>
  ) : (
    <div className={`flex items-center gap-1 shrink-0 ${className}`}>
      <strong className="font-bold text-sm text-slate-800">{label}</strong>
      <span className="font-medium text-slate-500">{value}</span>
    </div>
  );
}