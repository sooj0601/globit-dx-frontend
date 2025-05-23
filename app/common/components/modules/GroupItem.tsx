type GroupItemProps = {
  name: string
  colorName?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink'// 필요한 색상 미리 정의
  className?: string
}

export default function GroupItem({
    name,
    colorName = 'slate',
    className = ''
  }: GroupItemProps) {
  const colorMap = {
    slate: 'bg-slate-50 text-slate-500 border-slate-500',
    violet: 'bg-violet-50 text-violet-500 border-violet-500',
    lime: 'bg-lime-50 text-lime-500 border-lime-500',
    yellow: 'bg-yellow-50 text-yellow-500 border-yellow-500',
    cyan: 'bg-cyan-50 text-cyan-500 border-cyan-500',
    indigo: 'bg-indigo-50 text-indigo-500 border-indigo-500',
    teal: 'bg-teal-50 text-teal-500 border-teal-500',
    pink: 'bg-pink-50 text-pink-500 border-pink-500',
  }

  return (
    <div className={`flex items-center shrink-0 h-10 px-2 rounded-lg font-bold border ${colorMap[colorName]} ${className}`}>
      {name}
    </div>
  )
}
