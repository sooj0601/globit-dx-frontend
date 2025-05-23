import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  onClose: () => void;
  title: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  zIndex?: number;
}

function Modal({ onClose, title, size = "md", children, zIndex = 60 }: ModalProps) {
  useEffect(() => {
    // 모달 열리면 body 스크롤 막기
    document.body.style.overflow = "hidden";
    return () => {
      // 모달 닫히면 원래대로 돌려놓기
      document.body.style.overflow = "";
    };
  }, []);
  let sizeClass = "md:w-[480px]";
  if (size === "sm") sizeClass = "md:w-[400px]";
  else if (size === "lg") sizeClass = "md:w-[600px]";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 transition-opacity duration-300 px-4"
        style={{ zIndex: zIndex - 1 }}
        onClick={onClose}
      />
      <div
        className={`
          fixed left-4 right-4 top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 
          bg-white rounded-2xl md:rounded-3xl shadow-lg p-6
          max-h-[80vh] overflow-auto
          w-auto flex flex-col gap-8
          ${sizeClass}
        `}
        style={{ zIndex: zIndex }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <button type="button"
            className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-800 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={onClose}
          >
            <span className="font-bold">닫기</span><X size={24} />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
export default Modal;