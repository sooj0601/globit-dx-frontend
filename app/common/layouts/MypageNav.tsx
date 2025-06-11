import MypageNavItem from "~/common/components/ui/layout/MypageNavItem";

type MypageNavProps = {
  className?: string
}

export default function MypageNav({ className = '' }: MypageNavProps) {
  return (
    <nav className={`flex flex-col gap-2 ${className}`}>
      <MypageNavItem label="내 정보 관리" to="/mypage/info" />
      <MypageNavItem label="사료 관리" to="/mypage/feed" />
      <MypageNavItem label="약품 관리" to="/mypage/medicine" />
      <MypageNavItem label="양식장 등록 관리" to="/mypage/farm" />
      <MypageNavItem label="수조 관리" to="/mypage/watertank" />
    </nav>
  )
}