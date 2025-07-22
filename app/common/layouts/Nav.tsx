import NavItem from '~/common/components/ui/layout/NavItem';

type NavProps = {
  className?: string;
};

export default function Nav({ className = '' }: NavProps) {
  return (
    <nav className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 ${className}`} role="navigation" aria-label="메인 메뉴">
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
        label="입・출하계획"
        subMenu={[
          { label: '입・출하계획', to: '/simulation' },
          { label: '입・출하관리', to: '/simulation/manager' },
          { label: '입・출하계획 수익 분석표', to: '/simulation/data' },
        ]}
      />

      <NavItem
        label="마이페이지"
        subMenu={[
          { label: '내 정보 관리', to: '/mypage/info' },
          { label: '사료 관리', to: '/mypage/feed' },
          { label: '약품 관리', to: '/mypage/medicine' },
          { label: '양식장 등록 관리', to: '/mypage/farm' },
          { label: '수조 관리', to: '/mypage/watertank' },
        ]}
        className="lg:hidden"
      />
    </nav>
  );
}
