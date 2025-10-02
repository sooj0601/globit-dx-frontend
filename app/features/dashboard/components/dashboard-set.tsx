import React from 'react';
import StockIcon from "~/assets/icons/stock.svg?react";
import PossessionIcon from "~/assets/icons/possession.svg?react";
import DeathIcon from "~/assets/icons/death.svg?react";

const typeConfig = {
  stock: {
    icon: StockIcon,
    bg: 'bg-blue-500 shadow-blue-500 shadow-xl/50',
    text: 'text-blue-500',
    lightBg: 'bg-blue-100',
  },
  shipment: {
    icon: StockIcon,
    bg: 'bg-indigo-500 shadow-indigo-500 shadow-xl/50',
    text: 'text-indigo-500',
    lightBg: 'bg-indigo-100',
  },
  possession: {
    icon: PossessionIcon,
    bg: 'bg-teal-400 shadow-teal-400 shadow-xl/50',
    text: 'text-teal-400',
    lightBg: 'bg-teal-100',
  },
  death: {
    icon: DeathIcon,
    bg: 'bg-violet-500 shadow-violet-500 shadow-xl/50',
    text: 'text-violet-500',
    lightBg: 'bg-violet-100',
  },
} as const;

export function DashboardSection({ className = '', children, title, desc}: {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <section className={`flex flex-col gap-2 md:gap-4 ${className}`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h3 className="md:grow text-lg md:text-xl font-bold text-slate-800">{title}</h3>
        {desc && (<span className="text-slate-500 font-medium">{desc}</span>)}
      </div>
      {children}
    </section>
  );
}

export function DashboardFarm({ title, value}: {
  title?: string;
  value?: string;
}) {
  return (
    <div className="md:grow flex flex-col md:flex-row md:justify-between items-center p-4 md:p-6 bg-slate-100 rounded-2xl md:rounded-3xl gap-2">
      <span className="flex items-center bg-slate-800 rounded-full text-white font-bold px-2 h-8">{title}</span>
      <span className="text-slate-800 font-bold text-xl md:text-2xl">{value}</span>
    </div>
  );
}

export function DashboardCurrent({ title, value, type = 'stock', unit, compare, children}: {
  title?: string;
  value?: string;
  type?: keyof typeof typeConfig;
  unit?: string;
  compare?: string;
  children?: React.ReactNode;
}) {
  const { icon: IconComponent, bg, text, lightBg } = typeConfig[type];
  return (
    <div className={`flex flex-col ${lightBg} rounded-3xl`}>
      <div className={`md:grow flex md:flex-col md:gap-9 items-center md:items-start p-4 md:p-6 rounded-2xl md:rounded-3xl text-white ${bg}`}>
        <span className="hidden md:flex items-center justify-center size-16 rounded-full bg-white/70">
          <IconComponent className={`w-12 h-12 ${text}`} />
        </span>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between">
            <span className="flex items-center text-white font-bold text-lg md:text-xl">{title}</span>
            {unit && (<span className="font-medium text-white/70">(단위 : {unit})</span>)}
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-white font-bold text-2xl md:text-3xl">{value}</span>
            <div className="flex items-center gap-2">
              <span className={`flex items-center bg-white rounded-full font-bold px-2 h-6 text-sm ${text}`}>전일대비</span>
              <span className="text-white/70 font-bold">{compare}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 ">
        {children}
      </div>
    </div>
  );
}
