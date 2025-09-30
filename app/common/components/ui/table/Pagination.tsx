import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className="flex justify-center items-center gap-2 mt-4">
      <div className="flex gap-1 items-center">
        {/* 처음 */}
        <button
          className={`flex items-center justify-center w-6 h-6 rounded transition cursor-pointer
            ${currentPage === 1
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-200"}
          `}
        >
          <ChevronFirst size={16} />
        </button>

        {/* 이전 */}
        <button
          className={`flex items-center justify-center w-6 h-6 rounded transition cursor-pointer
            ${currentPage === 1
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-200"}
          `}
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* 페이지 번호 */}
      <div className="flex gap-0 items-center">
        {renderPages().map((page) => {
          // 모바일에서는 현재 페이지 ±1만 표시
          const isMobileHidden =
            page < currentPage - 2 || page > currentPage + 2;

          return (
            <button
              key={page}
              className={`flex items-center justify-center
                min-w-[36px] h-9 px-2 rounded transition cursor-pointer
                ${currentPage === page
                ? "bg-blue-500 text-white font-bold"
                : "text-slate-700 hover:bg-slate-200"}
                ${isMobileHidden ? "hidden sm:inline-flex" : "inline-flex"}
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      <div className="flex gap-1 items-center">
        {/* 다음 */}
        <button
          className={`flex items-center justify-center w-6 h-6 rounded transition cursor-pointer
            ${currentPage === totalPages
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-200"}
          `}
        >
          <ChevronRight size={16} />
        </button>

        {/* 마지막 */}
        <button
          className={`flex items-center justify-center w-6 h-6 rounded transition cursor-pointer
            ${currentPage === totalPages
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-200"}
          `}
        >
          <ChevronLast size={16} />
        </button>
      </div>
    </nav>
  );
}
