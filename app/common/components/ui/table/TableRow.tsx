export type TableItemProps = {
  title?: string;
  header?: React.ReactNode; // 이제 단순 텍스트 대신 전체 콘텐츠 가능
  children: React.ReactNode;
  className?: string;
  childControl?: string;
  mobileCard?: boolean;
  onClick?: () => void;
}

export function TableRow({ title, header, children, className, childControl, mobileCard = true, onClick}: TableItemProps) {
  return mobileCard ? (
    <div onClick={onClick} className={`rounded-2xl overflow-hidden bg-slate-50  lg:rounded-none lg:border-b lg:border-b-slate-300 transition-all ${className}`}>
      {(title || header) && (
        <div className="w-full flex md:hidden items-center justify-between h-12 px-4 font-bold border-b md:border-0 border-slate-300">
          {title && <span className="font-bold text-lg">{title}</span>}
          {header && <div className="ml-auto">{header}</div>}
        </div>
      )}
      <div className={`w-full lg:p-2 p-4 grid grid-cols-2 gap-x-2 gap-y-1 lg:gap-1 lg:flex lg:items-center ${childControl}`}>
        {children}
      </div>
    </div>
  ) : (
    <div className={`flex items-center min-h-10 bg-slate-50 p-2 border-b border-slate-300 ${className}`}>
      {children}
    </div>
  );
}
