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
  className?: string
}

export default function Popover({ children, trigger, title, className = '' }: PopoverProps) {
  const [open, setOpen] = useState(false)
  const [direction, setDirection] = useState<Direction>("bottom")
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
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
                className="fixed flex flex-col inset-x-4 max-h-[80vh] overflow-hidden p-6 gap-4 rounded-2xl bg-white border border-gray-200 shadow-lg"
                onClick={(e) => e.stopPropagation()} // 내부 클릭은 이벤트 전파 차단
              >
                {title && (
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                    <button type="button"
                            className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-600 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                    >
                      <span className="font-bold">닫기</span><X size={24} />
                    </button>
                  </div>
                )}
                <div className="flex flex-col gap-6 h-full grow min-h-0">
                  {children}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`
          z-50 p-4 rounded-xl bg-white border border-gray-200 shadow-xl
          transition-all duration-300 ease-out transform flex flex-col gap-4 ${className}
          ${direction === "top" ? "absolute bottom-full mb-1" : "absolute top-full mt-1"}
        `}
            >
              {title && (
                <div className="flex items-center justify-between ">
                  <div className="text-lg font-semibold">
                    {title}
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-slate-600 hover:text-slate-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
              <div className="flex flex-col gap-6 h-full grow min-h-0">
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
