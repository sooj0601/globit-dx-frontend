type PageUtilProps = {
  className?: string
  children?: React.ReactNode
}

export default function PageUtilLine({
    className = '', children
  }: PageUtilProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  )
}
