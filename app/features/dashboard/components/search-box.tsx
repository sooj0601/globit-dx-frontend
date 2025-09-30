import React from 'react';
import CustomLabel from "~/common/components/ui/form/CustomLabel";

export function SearchBox({
                            className = '',
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col md:flex-row gap-x-6 gap-y-4 flex-wrap justify-center md:items-center bg-slate-200 rounded-2xl px-6 py-4 mb-8 ${className}`}>
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
    <div className="flex gap-2 items-center">
      {label && <CustomLabel label={label} className="md:!min-w-auto" />}
      <div className={`flex items-center gap-2 grow ${className}`}>
        {children}
      </div>
    </div>
  );
}


