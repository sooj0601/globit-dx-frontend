type GroupItemProps = {
  name: string
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink' | 'brown' | 'orange'// 필요한 색상
  // 미리 정의
  className?: string
}

export default function GroupItem({
    name,
    variant = 'slate',
    className = ''
  }: GroupItemProps) {
  const colorMap = {
    slate: 'bg-slate-50 text-slate-500 border-slate-500 hover:bg-slate-100',
    violet: 'bg-violet-50 text-violet-500 border-violet-500 hover:bg-violet-100',
    lime: 'bg-lime-50 text-lime-500 border-lime-500 hover:bg-lime-100',
    yellow: 'bg-yellow-50 text-yellow-500 border-yellow-500 hover:bg-yellow-100',
    cyan: 'bg-cyan-50 text-cyan-500 border-cyan-500 hover:bg-cyan-100',
    indigo: 'bg-indigo-50 text-indigo-500 border-indigo-500 hover:bg-indigo-100',
    teal: 'bg-teal-50 text-teal-500 border-teal-500 hover:bg-teal-100',
    pink: 'bg-pink-50 text-pink-500 border-pink-500 hover:bg-pink-100',
    brown: 'bg-[#FDF6F4] text-yellow-800 border-yellow-800 hover:bg-[#F3E3DE]',
    orange: 'bg-orange-50 text-orange-500 border-orange-500 hover:bg-orange-100',
  }
  const baseClass = 'flex items-center shrink-0 h-10 px-2 rounded-lg font-bold border cursor-pointer transition-colors duration-200 ';

  return (
    <button type="button" className={`${baseClass} ${colorMap[variant]} ${className}`}>
      {name}
    </button>
  )
}
