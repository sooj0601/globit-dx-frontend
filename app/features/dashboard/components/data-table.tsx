import { useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DataTable({
                            className = "",
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const checkOverflow = () => {
    const container = tableContainerRef.current;
    if (!container) return;
    setShowArrows(container.scrollWidth > container.clientWidth);
  };

  useLayoutEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    // 처음 로딩 시 체크
    checkOverflow();

    // ResizeObserver로 컨테이너 크기 변화를 감지
    const observer = new ResizeObserver(() => checkOverflow());
    observer.observe(container);

    // window 리사이즈도 같이 감지
    window.addEventListener("resize", checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    const container = tableContainerRef.current;
    if (!container) return;

    const amount = 200;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div
        ref={tableContainerRef}
        className="relative w-full overflow-x-auto overflow-y-auto max-h-[500px] rounded-2xl bg-white"
      >
        <table
          className={`relative min-w-full w-max table-fixed border-collapse ${className}`}
        >
          {children}
        </table>
      </div>

      {/* 가로 스크롤 화살표 */}
      {showArrows && (
        <div className="hidden lg:flex items-center gap-2 z-24">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500"
          >
            <ChevronLeft size={32} />
          </button>
          <span className="w-[2px] h-4 bg-slate-300"></span>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export function DataTableHead({
                                className = "",
                                children,
                              }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead className={`sticky top-0 bg-slate-600 z-10 ${className}`}>
    {children}
    </thead>
  );
}

type DataTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
  children?: React.ReactNode;
};

export function DataTableTh({
                              className = "",
                              children,
                              ...props
                            }: DataTableThProps) {
  return (
    <th
      className={`p-2 text-white text-sm text-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

type BgColorType = "none" | "bg1" | "bg2";

const bgColorMap: Record<BgColorType, string> = {
  none: "",
  bg1: "bg-slate-200",
  bg2: "bg-slate-200/70",
};

type DataTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  bgColor?: BgColorType;
  className?: string;
};

export function DataTableTd({
                              className = "",
                              children,
                              bgColor = "none",
                              ...props
                            }: DataTableTdProps) {
  return (
    <td
      className={`border-b border-slate-300 py-2 px-2 text-center ${bgColorMap[bgColor]} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function DataTableFoot({
                                className = "",
                                children,
                              }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tfoot
      className={`sticky bottom-0 bg-blue-200/40 z-10 backdrop-blur-sm ${className}`}
    >
    {children}
    </tfoot>
  );
}
