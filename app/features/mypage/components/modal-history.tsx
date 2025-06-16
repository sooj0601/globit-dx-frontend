import Modal from "~/common/components/ui/popup/Modal";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Check} from "lucide-react";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomTable from "~/common/components/ui/table/CustomTable";
interface ModalHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalHistoryInfo({ isOpen, onClose }: ModalHistoryProps) {

  if (!isOpen) return null;
  return (
    <Modal
      onClose={onClose}
      title="이전 구매 이력"
      size="xl"
      zIndex={80}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-blue-400 gap-1">
          <p>이전 구매 내역을 선택하여 값을 불러오세요.</p>
        </div>
        <CustomTable
          tableHead={
            <>
              <div className="text-center flex-1">구매일자</div>
              <div className="text-center flex-1">이름</div>
              <div className="text-center flex-1">사료구분</div>
              <div className="text-center flex-1">구매량</div>
              <div className="text-center flex-1">총금액</div>
              <div className="text-center flex-1">보유량</div>
              <div className="text-center w-20"></div>
            </>
          }
          className="md:col-span-2"
        >
          <TableRow
            variant="slate"
            title={<p>사료1 <span className="font-normal">(2025-11-03)</span></p>}
            header={<CustomBtn variant="primary" size="sm" rightIcon={<Check size={16}/>}>선택</CustomBtn>}>
            <TableTd label="구매일자" className="flex-1 justify-center hidden md:flex">
              2025-11-03
            </TableTd>
            <TableTd label="사료 이름" className="flex-1 justify-center hidden md:flex">
              <p className="grow lg:text-center font-bold overflow-hidden text-ellipsis text-nowrap">사료1</p>
            </TableTd>
            <TableTd label="사료 구분" className="flex-1 justify-center">
              <p className="grow lg:text-center">EP</p>
            </TableTd>
            <TableTd label="구매량" className="flex-1 justify-center">
              <p className="grow lg:text-center">30kg</p>
            </TableTd>
            <TableTd label="총 금액" className="flex-1 justify-center">
              <p className="grow lg:text-center">300,000</p>
            </TableTd>
            <TableTd label="보유량" className="flex-1 justify-center">
              <p className="grow lg:text-center">125,000g</p>
            </TableTd>
            <TableTd className="hidden lg:flex w-20">
              <CustomBtn variant="primary" size="sm" rightIcon={<Check size={16}/>} className="shrink-0">선택</CustomBtn>
            </TableTd>
          </TableRow>
          <TableRow
            variant="slate"
            title={<p>사료1 <span className="font-normal">(2025-11-03)</span></p>}
            header={<CustomBtn variant="primary" size="sm" rightIcon={<Check size={16}/>}>선택</CustomBtn>}>
            <TableTd label="구매일자" className="flex-1 justify-center hidden md:flex">
              2025-11-03
            </TableTd>
            <TableTd label="사료 이름" className="flex-1 justify-center hidden md:flex">
              <p className="grow lg:text-center font-bold overflow-hidden text-ellipsis text-nowrap">사료1</p>
            </TableTd>
            <TableTd label="사료 구분" className="flex-1 justify-center">
              <p className="grow lg:text-center">EP</p>
            </TableTd>
            <TableTd label="구매량" className="flex-1 justify-center">
              <p className="grow lg:text-center">30kg</p>
            </TableTd>
            <TableTd label="총 금액" className="flex-1 justify-center">
              <p className="grow lg:text-center">300,000</p>
            </TableTd>
            <TableTd label="보유량" className="flex-1 justify-center">
              <p className="grow lg:text-center">125,000g</p>
            </TableTd>
            <TableTd className="hidden lg:flex w-20">
              <CustomBtn variant="primary" size="sm" rightIcon={<Check size={16}/>} className="shrink-0">선택</CustomBtn>
            </TableTd>
          </TableRow>
        </CustomTable>
      </div>
      <div className="flex gap-2">
        <CustomBtn size="lg" variant="primary" className="grow" >저장</CustomBtn>
      </div>
    </Modal>
  );
}
