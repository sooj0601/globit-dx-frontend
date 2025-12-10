import React from 'react';
import CustomLabel from "~/common/components/ui/form/CustomLabel";

export function SearchBox({
                            className = '',
  align = 'center',
                            children,
                          }: {
  className?: string;
  align?: 'center' | 'start';
  children?: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col md:items-center md:flex-row gap-x-10 gap-y-4 flex-wrap bg-slate-200 rounded-2xl px-6 py-4 mb-8 ${align == 'center' ? 'justify-center' : 'justify-start'} ${className}`}>
      {children}
    </div>
  );
}

export function SearchBoxItem({ className = '', children, label}: {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {label &&
				<label className={`flex items-center gap-2 font-bold shrink-0 min-w-auto`}>
          {label}
				</label>
      }
      <div className={`flex items-center gap-2 grow`}>
        {children}
      </div>
    </div>
  );
}


