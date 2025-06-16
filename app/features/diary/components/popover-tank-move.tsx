import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Select from "~/common/components/ui/form/Select";
import Input from "~/common/components/ui/form/Input";
import {useState} from "react";
import TableTd from "~/common/components/ui/table/TableTd";
import {Plus, Trash2} from "lucide-react";
import Popover from "~/common/components/ui/popup/Popover";
import {TableRow} from "~/common/components/ui/table/TableRow";
import CustomTable from "~/common/components/ui/table/CustomTable";
import ModalTankAlert from "~/features/diary/components/modal-tank-alert";

export default function PopoverTankMove() {
  const [selected, setSelected] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
    <Popover
      title="이동(분조) 미수 설정"
      trigger={
        <Input type="text" number value="+300" unit="미"/>
      }
      className="w-[460px]"
    >
      <div className="overflow-y-auto grow min-h-0">
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-7">#</div>
              <div className="text-center flex-1">수조 선택</div>
              <div className="text-center flex-1">이동(분조) 미수</div>
              <div className="text-center w-7"></div>
            </>
          }
          bottomBtn={
            <CustomBtn variant="ghost" className="w-full" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
          }>
          <TableRow header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
            <TableTd className="w-7 justify-center hidden lg:flex">
              <p>1</p>
            </TableTd>
            <TableTd label="수조 선택" className="flex-1 col-span-2">
              <Select
                name="tankName1"
                onChange={(e) => setSelected(e.target.value)}
                className="grow"
                value={selected} // 추가
                options={[
                  { label: 'A-1', value: 'A-1' },
                ]}
              />
            </TableTd>
            <TableTd label="이동(분조) 미수" className="flex-1 col-span-2">
              <Input className="grow" number unit="미" value="300"/>
            </TableTd>
            <TableTd className="hidden lg:flex w-7">
              <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
            </TableTd>
          </TableRow>
        </CustomTable>
      </div>
      <div className="flex gap-2 shrink-0">
        <CustomBtn size="lg" variant="primary" className="grow" onClick={() => setOpenModal("modal1")}>저장</CustomBtn>
      </div>
    </Popover>
    {/* 입식그룹 선택 팝업 */}
    <ModalTankAlert
      isOpen={openModal === "modal1"}
      onClose={() => setOpenModal(null)}
    />
    </>
  );
}
