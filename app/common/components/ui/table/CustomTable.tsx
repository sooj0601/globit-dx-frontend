import React, {
  type ReactElement,
  type ReactNode,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import { TableRow } from '~/common/components/ui/table/TableRow';
import type { TableItemProps } from '~/common/components/ui/table/TableRow';

type CustomTableProps = {
  children?: ReactNode;
  tableHead?: ReactNode;
  bottomBtn?: string | ReactNode;
  mobileCard?: boolean;
  className?: string;
};

export default function CustomTable({
    children,
    tableHead,
    mobileCard = true,
    bottomBtn = '',
    className = '',
  }: CustomTableProps) {
  return (
    <div className={`flex flex-col w-full ${mobileCard ? 'gap-4 lg:gap-0' : ''} ${className}`}>
      {tableHead && (
        <div
          className={`items-center px-2 py-2 text-sm font-semibold bg-slate-600 text-slate-300 rounded-3xl rounded-b-none gap-1 ${
            mobileCard ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {tableHead}
        </div>
      )}
      <div className={`flex flex-col ${mobileCard ? 'gap-4 lg:gap-0' : ''}`}>
        {Children.map(children, (child) => {
          if (
            isValidElement(child) &&
            (child.type === TableRow)
          ) {
            return cloneElement(child as ReactElement<TableItemProps>, {
              mobileCard,
            });
          }
          return child;
        })}
      </div>
      {bottomBtn && <div className="md:mt-4 md:mb-2">{bottomBtn}</div>}
    </div>
  );
}
