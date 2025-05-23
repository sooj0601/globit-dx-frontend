type PageTitleProps = {
  title: string;
  className?: string;
}

export default function PageTitle({ title, className = '' }: PageTitleProps) {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold py-4 md:py-0 text-center md:text-left ${className}`}>
      {title}
    </h2>
  )
}
