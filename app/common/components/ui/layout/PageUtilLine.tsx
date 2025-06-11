type PageUtilProps = {
  className?: string
  children?: React.ReactNode
}

export default function PageUtilLine({
    className = '', children
  }: PageUtilProps) {
  return (
    <div className={`w-full flex flex-col gap-6 items-start ${className}`}>
      {children}
    </div>
  )
}
