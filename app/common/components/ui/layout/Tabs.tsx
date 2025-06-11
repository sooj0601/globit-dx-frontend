import { useState } from 'react';

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  className?: string;
  btnFullWidth?: boolean;
};

export default function Tabs({ tabs,  className = '', btnFullWidth = true }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`w-full ${className}`}>
      {/* 탭 버튼들 */}
      <div className="flex border-b-2 border-blue-500">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`flex justify-center items-center h-12 px-4 rounded-t-xl transition-colors ${
              index === activeIndex
                ? 'bg-blue-500 text-white font-bold'
                : 'bg-slate-100 text-slate-400 font-medium hover:text-blue-400'
            }
            ${btnFullWidth ? 'flex-1' : 'flex-1 min-w-auto lg:grow-0 lg:min-w-[180px]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="pt-6">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
