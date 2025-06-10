import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  type ReactElement,
} from "react"
import { X } from "lucide-react"
import { useMediaQuery } from "~/common/hooks/useMediaQuery"

type Direction = "top" | "bottom"

interface PopoverProps {
  trigger: ReactElement<any, any>
  children: React.ReactNode
  title?: string
}

export default function Popover({ children, trigger, title }: PopoverProps) {
  const [open, setOpen] = useState(false)
  const [direction, setDirection] = useState<Direction>("bottom")
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (open && !isMobile) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, isMobile])
  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobile, open])


  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const triggerMiddle = rect.top + rect.height / 2
      const screenHalf = window.innerHeight / 2
      setDirection(triggerMiddle > screenHalf ? "top" : "bottom")
    }
    setOpen((prev) => !prev)
  }

  const triggerWithHandler = cloneElement(trigger, {
    onClick: (e: React.MouseEvent) => {
      trigger.props.onClick?.(e)
      handleOpen(e)
    },
  })


  return (
    <div className="relative inline-block" ref={containerRef}>
      {triggerWithHandler}
      {open && (
        <>
        {isMobile ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
              onClick={() => setOpen(false)} // 배경 클릭 시 닫힘
            >
              <div
                className="w-11/12 max-w-sm p-4 rounded-xl bg-white text-sm border border-gray-200 shadow-xl"
                onClick={(e) => e.stopPropagation()} // 내부 클릭은 이벤트 전파 차단
              >
                {title && (
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                    <button type="button"
                            className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-800 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                    >
                      <span className="font-bold">닫기</span><X size={24} />
                    </button>
                  </div>
                )}
                {children}
              </div>
            </div>
          ) : (
            <div
              className={`
          z-50 w-64 p-4 rounded-xl bg-white text-sm border border-gray-200 shadow-xl
          transition-all duration-300 ease-out transform
          ${direction === "top" ? "absolute bottom-full mb-2" : "absolute top-full mt-2"}
        `}
            >
              {title && (
                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-semibold text-slate-700">
                    {title}
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
              {children}
            </div>
          )}
        </>
      )}
    </div>
  )
}
