import { useEffect, useRef } from 'react';
import Nav from './Nav';
import FarmSelect from '../components/modules/FarmSelect';
import UserInfo from '../components/modules/UserInfo';
import { X } from 'lucide-react';
import NavItem from '../components/ui/layout/NavItem';

type SideSlideProps = {
  open: boolean;
  onClose: () => void;
};

export default function SideSlide({ open, onClose }: SideSlideProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (backdropRef.current && e.target === backdropRef.current) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  // 사이드바 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-3/4 md:w-72 h-full bg-white shadow-lg p-4 flex flex-col gap-4 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 border-b border-slate-300 pb-4">
          <div className="flex justify-between items-center">
            <UserInfo />
            <button onClick={onClose}>
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>
          <FarmSelect className="w-full block md:hidden" />
        </div>
        <Nav />
        <div className="border-t border-slate-300"></div>
        <NavItem label="로그아웃" to="/logout" />
      </div>
    </div>
  );
}
