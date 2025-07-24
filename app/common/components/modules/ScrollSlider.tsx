import { useRef, useState, useEffect, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ScrollSliderProps = {
  children: ReactNode;
  className?: string;
  scrollAmount?: number;
};

export default function ScrollSlider({
                                       children,
                                       className = '',
                                       scrollAmount = 200,
                                     }: ScrollSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startLeftRef = useRef(0);

  const isContentDragging = useRef(false);
  const contentStartX = useRef(0);
  const contentScrollStart = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateSlider = () => {
    const container = containerRef.current;
    const content = contentRef.current;
    const track = trackRef.current;
    if (container && content && track) {
      const trackWidth = track.clientWidth;
      const scrollWidth = content.scrollWidth;
      const scrollLeft = container.scrollLeft;

      const maxScroll = scrollWidth - container.clientWidth;
      if (maxScroll <= 0) {
        setSliderWidth(trackWidth);
        setSliderLeft(0);
        return;
      }

      const newSliderWidth = Math.max((container.clientWidth / scrollWidth) * trackWidth, 20); // 최소폭 지정 가능
      const newSliderLeft = (scrollLeft / maxScroll) * (trackWidth - newSliderWidth);

      setSliderWidth(newSliderWidth);
      setSliderLeft(newSliderLeft);
    }
  };

  // 슬라이더 드래그 시작
  const onSliderMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startLeftRef.current = sliderLeft;

    document.addEventListener('mousemove', onSliderMouseMove);
    document.addEventListener('mouseup', onSliderMouseUp);
    document.addEventListener('touchmove', onSliderTouchMove);
    document.addEventListener('touchend', onSliderMouseUp);
  };

  // 슬라이더 마우스 드래그 중
  const onSliderMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current || !contentRef.current) return;
    const delta = e.clientX - startXRef.current;
    const container = containerRef.current;
    const content = contentRef.current;

    let newLeft = startLeftRef.current + delta;
    const maxLeft = container.clientWidth - sliderWidth;
    newLeft = Math.max(0, Math.min(maxLeft, newLeft));

    container.scrollLeft = (newLeft / container.clientWidth) * content.scrollWidth;
  };

  // 슬라이더 터치 드래그 중
  const onSliderTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current || !contentRef.current) return;
    const delta = e.touches[0].clientX - startXRef.current;
    const container = containerRef.current;
    const content = contentRef.current;

    let newLeft = startLeftRef.current + delta;
    const maxLeft = container.clientWidth - sliderWidth;
    newLeft = Math.max(0, Math.min(maxLeft, newLeft));

    container.scrollLeft = (newLeft / container.clientWidth) * content.scrollWidth;
  };

  // 슬라이더 드래그 끝
  const onSliderMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', onSliderMouseMove);
    document.removeEventListener('mouseup', onSliderMouseUp);
    document.removeEventListener('touchmove', onSliderTouchMove);
    document.removeEventListener('touchend', onSliderMouseUp);
  };

  // 내용 드래그 시작
  const onContentMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isContentDragging.current = true;
    contentStartX.current = e.clientX;
    contentScrollStart.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = 'grabbing';

    document.addEventListener('mousemove', onContentMouseMove);
    document.addEventListener('mouseup', onContentMouseUp);
  };

  // 내용 드래그 이동
  const onContentMouseMove = (e: MouseEvent) => {
    if (!isContentDragging.current || !containerRef.current) return;
    const delta = e.clientX - contentStartX.current;
    containerRef.current.scrollLeft = contentScrollStart.current - delta;
  };

  // 내용 드래그 끝
  const onContentMouseUp = () => {
    isContentDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';

    document.removeEventListener('mousemove', onContentMouseMove);
    document.removeEventListener('mouseup', onContentMouseUp);
  };

  // 좌우 버튼 클릭 시 스크롤
  const scrollBy = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    const amount = direction === 'left' ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateSlider);
    updateSlider();

    const resize = () => updateSlider();
    window.addEventListener('resize', resize);

    return () => {
      container.removeEventListener('scroll', updateSlider);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative w-full">
        <div ref={containerRef} className="w-full overflow-x-hidden relative">
          <div
            ref={contentRef}
            onMouseDown={onContentMouseDown}
            className="w-max cursor-grab select-none"
          >
            {children}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center">
        <button
          onClick={() => scrollBy('left')}
          className="z-10 p-1 cursor-pointer hover:text-slate-600 text-slate-400"
          aria-label="왼쪽으로 스크롤"
        >
          <ChevronLeft size={32} />
        </button>
        <div ref={trackRef} className="grow relative h-2 bg-slate-200 rounded-full">
          <div
            onMouseDown={onSliderMouseDown}
            onTouchStart={onSliderMouseDown}
            className="absolute top-0 h-2 bg-slate-500 rounded-full cursor-pointer"
            style={{ width: `${sliderWidth}px`, left: `${sliderLeft}px` }}
          />
        </div>
        <button
          onClick={() => scrollBy('right')}
          className="z-10 p-1 cursor-pointer hover:text-slate-600 text-slate-400"
          aria-label="오른쪽으로 스크롤"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
