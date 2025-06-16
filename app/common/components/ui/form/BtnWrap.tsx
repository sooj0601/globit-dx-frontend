
type BtnWrapProps = {
  className?: string;
  children?: React.ReactNode;
  lineTop?: boolean;
};

export default function BtnWrap({ className = '', children, lineTop = false }: BtnWrapProps) {
  return (
    <div className={`sticky bottom-0 inset-x-0 pb-8 pt-6 md:pt-16 md:relative flex flex-col md:flex-row items-center md:justify-between gap-2 bg-white ${lineTop ? 'border-t border-slate-300' : ''} ${className}`}>
      {children}
    </div>
  );
}
