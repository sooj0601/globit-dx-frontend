
type DensitySetWrapProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
};

export default function DensitySetWrap({ className = '', children, title}: DensitySetWrapProps) {
  return (
    <div className={`flex flex-col p-4 bg-slate-100 rounded-xl ${className} `}>
      <div className="pb-4 mb-4 border-b border-slate-300">
        <p className="font-bold text-slate-500">{title}</p>
      </div>
      <div className="flex flex-col gap-4">
      {children}
      </div>
    </div>
  );
}
