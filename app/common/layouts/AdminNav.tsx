import NavItem from '~/common/components/ui/layout/NavItem';

type NavProps = {
  className?: string;
};

export default function AdminNav({ className = '' }: NavProps) {
  return (
    <nav className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 ${className}`} role="navigation" aria-label="메인 메뉴">
      <NavItem label="가입자 승인 관리" to="/admin/account" />
      <NavItem label="양식장 정보 관리" to="/admin/farm" />
      <NavItem label="양식장 수조 관리" to="/admin/watertank" />
    </nav>
  );
}
