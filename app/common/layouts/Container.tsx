type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export default function ContainerLine({
    className = '', children
  }: ContainerProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {children}
    </div>
  )
}
