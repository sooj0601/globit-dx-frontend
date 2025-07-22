import React, {createContext, type ReactNode, useContext} from 'react';
import clsx from 'clsx';

type GroupItemTableColor =
  | 'slate'
  | 'violet'
  | 'lime'
  | 'yellow'
  | 'cyan'
  | 'indigo'
  | 'teal'
  | 'pink'
  | 'brown'
  | 'orange';

const GroupItemTableColorContext = createContext<GroupItemTableColor>('slate');

export function useGroupItemTableColor() {
  return useContext(GroupItemTableColorContext);
}
export function GroupItemTable({
    className = '',
    colorName = 'slate',
    children,
    tableHead,
    bottomBtn = '',
  }: {
  className?: string;
  colorName?: GroupItemTableColor;
  children?: React.ReactNode;
  tableHead?: ReactNode;
  bottomBtn?: string | ReactNode;
}) {
  const headBgMap: Record<string, string> = {
    slate: 'bg-slate-600',
    violet: 'bg-violet-500',
    lime: 'bg-lime-500',
    yellow: 'bg-yellow-500',
    cyan: 'bg-cyan-500',
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500',
    pink: 'bg-pink-500',
    brown: 'bg-yellow-800',
    orange: 'bg-orange-500',
  };
  const borderMap: Record<string, string> = {
    slate: 'border-slate-300',
    violet: 'border-violet-300',
    lime: 'border-lime-300',
    yellow: 'border-yellow-300',
    cyan: 'border-cyan-300',
    indigo: 'border-indigo-300',
    teal: 'border-teal-300',
    pink: 'border-pink-300',
    brown: 'border-[#EADFDB]',
    orange: 'border-orange-300',
  };
  const bgMap: Record<string, string> = {
    slate: 'bg-slate-100',
    violet: 'bg-violet-100',
    lime: 'bg-lime-100',
    yellow: 'bg-yellow-100',
    cyan: 'bg-cyan-100',
    indigo: 'bg-indigo-100',
    teal: 'bg-teal-100',
    pink: 'bg-pink-100',
    brown: 'bg-[#F8EDE9]',
    orange: 'bg-orange-100',
  };
  return (
    <GroupItemTableColorContext.Provider value={colorName}>
      <div className={`flex flex-col w-full rounded-2xl overflow-hidden gap-4 md:gap-0 ${className}`}>
        {tableHead && (
          <div
            className={`items-center px-2 py-2 text-sm font-semibold ${headBgMap[colorName]} text-white gap-1 hidden md:flex`}
          >
            {tableHead}
          </div>
        )}
        <div className={`flex flex-col gap-4 md:gap-0`}>
          {children}
        </div>
        {bottomBtn && <div className="md:mt-4 md:mb-2">{bottomBtn}</div>}
      </div>
    </GroupItemTableColorContext.Provider>
  );
}


export function GroupItemTableTr({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const color = useGroupItemTableColor();
  const borderMap: Record<string, string> = {
    slate: 'border-slate-300',
    violet: 'border-violet-300',
    lime: 'border-lime-300',
    yellow: 'border-yellow-300',
    cyan: 'border-cyan-300',
    indigo: 'border-indigo-300',
    teal: 'border-teal-300',
    pink: 'border-pink-300',
    brown: 'border-[#EADFDB]',
    orange: 'border-orange-300',
  };
  const bgMap: Record<string, string> = {
    slate: 'bg-slate-100',
    violet: 'bg-violet-100',
    lime: 'bg-lime-100',
    yellow: 'bg-yellow-100',
    cyan: 'bg-cyan-100',
    indigo: 'bg-indigo-100',
    teal: 'bg-teal-100',
    pink: 'bg-pink-100',
    brown: 'bg-[#F8EDE9]',
    orange: 'bg-orange-100',
  };
  return (
    <div className={`flex flex-col md:flex-row md:items-center gap-1 w-full rounded-2xl md:rounded-none p-4 md:px-2 md:py-0 md:border-b ${bgMap[color]} ${borderMap[color]} last:border-b-0 text-nowrap ${className}`}>
      {children}
    </div>
  );
}



type GroupItemTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  label?: string
  className?: string;
  children?: React.ReactNode
  onClick?: () => void
};
export function GroupItemTableTd({
    label,
    onClick,
    className = '',
    children,
    ...props
  }: GroupItemTableTdProps) {

  return (
    <div
      className={`flex items-center md:justify-center md:text-center text-nowrap gap-2 md:min-h-12 px-1 ${className}`}
      {...props}
    >
      {label && (
        <strong className="md:hidden text-slate-500 text-sm w-15 shrink-0 break-keep">{label}</strong>
      )}
      {children}
    </div>
  );
}
