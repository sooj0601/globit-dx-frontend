type PageTitleProps = {
  title: string;
  desc?: string;
  className?: string;
}

export default function PageTitle({ title, desc, className = '' }: PageTitleProps) {
  return (
    <div className={`w-full flex flex-col gap-2 py-4 md:py-0 item-center md:items-start md:mb-8 ${className}`}>
      <h2 className={`text-2xl md:text-3xl font-bold text-center md:text-left`}>
        {title}
      </h2>
      <span className="text-slate-600 break-keep text-center md:text-left">{desc}</span>
    </div>
  )
}
