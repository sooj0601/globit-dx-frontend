import { useState } from 'react';

import MypageNav from './MypageNav';

export default function MypageMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="w-[200px] items-stretch border-r border-slate-300 shrink-0 hidden md:flex flex-col gap-10">
      <h2>
        <span className="font-bold text-2xl">마이페이지</span>
      </h2>
      <MypageNav />
    </div>
  );
}
