import Modal from "~/common/components/ui/Modal";
import CustomBtn from "~/common/components/ui/CustomBtn";
import Select from "~/common/components/ui/Select";
import {useState} from "react";
import {CircleAlert} from "lucide-react";
import InputSet from "~/common/components/modules/InputSet";
interface ModalTankAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTankAlertInfo({ isOpen, onClose }: ModalTankAlertProps) {
  const [selected, setSelected] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  if (!isOpen) return null;

  return (
    <Modal
      onClose={onClose}
      title="입식그룹 선택"
      size="sm"
      zIndex={80}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-rose-500 gap-1">
          <strong className="flex items-center gap-1">
            <CircleAlert size={16} /> 입식그룹이 다릅니다.
          </strong>
          <p>이동하시려면 대상 수조에 변경할 그룹을 선택하여 주세요.</p>
        </div>
        <InputSet label="A-1" variant="col">
          <Select
            name="category"
            onChange={(e) => setSelected(e.target.value)}
            placeholder="입식그룹 선택"
            className="grow"
            options={[
              { label: '2025-넙치-입식그룹-1', value: '2025-넙치-입식그룹-1' },
              { label: '2025-넙치-입식그룹-1', value: '2025-넙치-입식그룹-1' },
              { label: '2025-넙치-입식그룹-1', value: '2025-넙치-입식그룹-1' },
            ]}
          />
        </InputSet>
      </div>
      <div className="flex gap-2">
        <CustomBtn size="lg" variant="primary" className="grow">저장</CustomBtn>
      </div>
    </Modal>
  );
}
