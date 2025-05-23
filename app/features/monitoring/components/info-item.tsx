type InfoItemProps = {
  label: string;
  value: string;
  className?: string;
};

export default function InfoItem({
  label,
  value,
  className = '',
}: InfoItemProps) {
  return (
    <div className={`flex items-center gap-1 shrink-0 ${className}`}>
      <strong className="font-medium text-slate-600">{label} </strong>
      <span className="font-bold">{value}</span>
    </div>
  );
}
