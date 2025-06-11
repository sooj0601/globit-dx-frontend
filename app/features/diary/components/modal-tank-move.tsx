import Modal from "~/common/components/ui/popup/Modal";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import ModalTankAlert from "~/features/diary/components/modal-tank-alert";
import ModalSetFeed from "~/features/diary/components/modal-set-feed";
import {useState} from "react";
import TableTd from "~/common/components/ui/table/TableTd";
import Select from "~/common/components/ui/form/Select";
import Input from "~/common/components/ui/form/Input";
import {Plus, Trash2} from "lucide-react";

interface ModalTankMoveProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTankMove({ isOpen, onClose }: ModalTankMoveProps) {
  const [selected, setSelected] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const [openModal, setOpenModal] = useState<string | null>(null);
  if (!isOpen) return null;
  return (
    <>
      <Modal
        onClose={onClose}
        title="이동(분조) 미수 설정"
        size="md"
        zIndex={60}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center px-4 py-2 font-bold bg-slate-600 text-slate-300 rounded-full gap-2">
            <div className="text-center w-10">순차</div>
            <div className="text-center flex-1">수조 선택</div>
            <div className="text-center flex-1">이동(분조) 미수</div>
            <div className="text-center w-10">-</div>
          </div>
          <div className="flex items-center px-4 py-2 rounded-2xl gap-2 bg-slate-100">
            <div className="w-10 text-center">1</div>
            <TableTd className="!flex-1">
              <Select
                name="tankName1"
                onChange={(e) => setSelected(e.target.value)}
                className="grow"
                value={selected} // 추가
                options={[
                  { label: 'A-1', value: 'A-1' },
                  { label: 'A-1', value: 'A-1' },
                  { label: 'A-1', value: 'A-1' },
                ]}
              />
            </TableTd>
            <TableTd className="!flex-1">
              <Input className="grow" value="300"/>
            </TableTd>
            <div className="w-10 text-center">
              <CustomBtn variant="danger" size="icon">
                <Trash2 size={16}/>
              </CustomBtn>
            </div>
          </div>
          <div className="flex items-center px-4 py-2 rounded-2xl gap-2 bg-slate-100">
            <div className="w-10 text-center">1</div>
            <TableTd className="!flex-1">
              <Select
                name="tankName2"
                onChange={(e) => setSelected(e.target.value)}
                className="grow"
                value={selected} // 추가
                options={[
                  { label: 'A-2', value: 'A-2' },
                  { label: 'A-2', value: 'A-2' },
                  { label: 'A-2', value: 'A-2' },
                ]}
              />
            </TableTd>
            <TableTd className="!flex-1">
              <Input className="grow" value="300"/>
            </TableTd>
            <div className="w-10 text-center">
              <CustomBtn variant="danger" size="icon">
                <Trash2 size={16}/>
              </CustomBtn>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomBtn variant="ghost" rightIcon={<Plus size={16} strokeWidth={3}/>}>추가하기</CustomBtn>
          </div>
        </div>
        <div className="flex gap-2">
          <CustomBtn size="lg" variant="primary" className="grow" onClick={() => setOpenModal("modal1")}>저장</CustomBtn>
        </div>
      </Modal>
      <ModalTankAlert
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}
