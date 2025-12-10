import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CommTable, CommTableHead, CommTableTh, CommTableTd, CommTableRow } from '~/features/journal/components/comm-table'

type AccordionRowProps = {
  row: React.ReactNode[]; // 기본 행 데이터
  children: React.ReactNode; // 펼쳐졌을 때 보여줄 상세 내용
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionRow({ row, children, isOpen, onToggle }: AccordionRowProps) {
  return (
    <>
      {/* 기본 행 */}
      <CommTableRow
        onClick={onToggle}
        className={`cursor-pointer hover:bg-slate-100 ${isOpen ? 'border-b-transparent' : ''}`}
      >
        <CommTableTd
          className={`h-12 text-center ${isOpen ? 'bg-white' : ''}`}
        >
          {isOpen ? <ChevronDown size={24} className="mr-auto ml-auto" /> : <ChevronUp size={24} className="opacity-40 ml-auto mr-auto"/>}
        </CommTableTd>
        {row.map((cell, i) => (
          <CommTableTd key={i} className={`h-12 ${isOpen ? `bg-white` : ``}`}>{cell}</CommTableTd>
        ))}
      </CommTableRow>

      {/* 펼친 영역 */}
      {isOpen && (
        <CommTableRow className={isOpen ? '!border-b !border-b-slate-300' : ''}>
          <CommTableTd colSpan={row.length + 1} className="bg-white !pt-4 !pb-8">
            {children}
          </CommTableTd>
        </CommTableRow>
      )}
    </>
  );
}

export type AccordionDataTableProps = {
  headers: string[];
  rows: { row: React.ReactNode[]; content: React.ReactNode }[];
};

export function AccordionDataTable({ headers, rows }: AccordionDataTableProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <CommTable className="!w-full">
      <CommTableHead>
        <tr>
          <CommTableTh className="w-14"/>
          {headers.map((h, i) => (
            <CommTableTh key={i}>{h}</CommTableTh>
          ))}
        </tr>
      </CommTableHead>
      <tbody>
      {rows.map((row, i) => (
        <AccordionRow
          key={i}
          row={row.row}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        >
          {row.content}
        </AccordionRow>
      ))}
      </tbody>
    </CommTable>
  );
}
