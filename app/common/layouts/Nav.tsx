import NavItem from "~/common/components/NavItem";

type NavProps = {
  className?: string
}

export default function Nav({ className = '' }: NavProps) {
  return (
    <nav className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 ${className}`}>
      <NavItem label="양식 현황" to="/" />
      <NavItem
        label="입・출하관리"
        subMenu={[
          { label: '통합관리', to: '/diary' },
          { label: '입식', to: '/diary/enter' },
          { label: '출하', to: '/diary/sale' },
          { label: '이력 관리', to: '/diary/log' },
        ]}
      />
      <NavItem
        label="마이페이지"
        subMenu={[
          { label: '통합관리', to: '/' },
          { label: '입식', to: '/' },
          { label: '출하', to: '/' },
          { label: '이력 관리', to: '/' },
        ]}
        className="lg:hidden"
      />
    </nav>
  )
}