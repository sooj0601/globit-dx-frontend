import { useState } from 'react';

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  className?: string;
};

export default function Tabs({ tabs,  className = '' }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`w-full ${className}`}>
      {/* 탭 버튼들 */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`flex justify-center flex-1 px-4 pb-2 lg:text-lg transition-colors ${
              index === activeIndex
                ? 'border-b-4 border-blue-500 text-blue-500 font-bold'
                : 'border-b-1 border-slate-400 text-slate-400 font-medium hover:text-blue-400'
            }`}
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
