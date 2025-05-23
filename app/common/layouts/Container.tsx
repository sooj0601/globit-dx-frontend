type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export default function ContainerLine({
    className = '', children
  }: ContainerProps) {
  return (
    <div className={`flex flex-col pt-4 pb-16 ${className}`}>
      {children}
    </div>
  )
}
