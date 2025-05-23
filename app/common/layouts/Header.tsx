import { Link } from 'react-router';
import { useState } from 'react';

import Nav from './Nav';
import FarmSelect from '../components/modules/FarmSelect';
import UserInfo from '../components/modules/UserInfo';
import { Menu } from 'lucide-react'; // 햄버거 아이콘
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="bg-white sticky top-0 h-16 lg:h-24 z-50 flex justify-center">
      <div className="w-full max-w-7xl h-full mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="w-[123px] flex items-center shrink-0 grow-0">
          <img
            src={'/assets/logo.svg'}
            alt="양식통 로고"
            className="h-8"
            loading="lazy"
          />
        </Link>
        {/* 양식장 선택 : 모바일 숨김 */}
        <FarmSelect className="hidden md:block ml-8 mr-auto" />
        {/* 데스크탑 전용 영역 */}
        <div className="hidden lg:flex items-center gap-16">
          <Nav />
          <UserInfo />
        </div>
        {/* 햄버거 버튼 */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={32} strokeWidth={1.5} />
        </button>
      </div>
      {/* 사이드바 */}
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
