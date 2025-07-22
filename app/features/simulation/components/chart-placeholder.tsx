import React from 'react';
import { ChartArea } from 'lucide-react';

type ChartPlaceholderProps = {
  className?: string;
  ratio?: number; // width 대비 height 비율 (기본 16:9)
};

export default function ChartPlaceholder({ className = '', ratio = 9 / 16 }: ChartPlaceholderProps) {
  return (
    <div className={`relative w-full bg-slate-100 rounded-2xl ${className}`}>
      <div
        className="flex items-center justify-center text-slate-400 font-bold text-2xl gap-2"
        style={{
          aspectRatio: `${1 / ratio}`,
        }}
      >
        <ChartArea size={32} /> Chart Placeholder
      </div>
    </div>
  );
}
