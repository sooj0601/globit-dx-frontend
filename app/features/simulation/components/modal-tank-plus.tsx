import Modal from "~/common/components/ui/popup/Modal";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import InputSet from "~/common/components/ui/form/InputSet";
import Select from "~/common/components/ui/form/Select";
import {useState} from "react";
import TankSelectItem from "~/features/simulation/components/tank-select-item";

interface ModalTankPlusProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTankPlus({ isOpen, onClose }: ModalTankPlusProps) {
  const [selectedDate, setSelectedDate] = useState('1양식장');
  const [selectedFish, setSelectedFish] = useState('');
  if (!isOpen) return null;
  return (
    <Modal
      onClose={onClose}
      title="수조 선택"
      size="sm"
      zIndex={80}
    >

      <div className="overflow-y-auto grow min-h-0 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-x-4">
          <InputSet>
            <Select
              name="enterDate"
              className="grow"
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
              options={[
                { label: '1양식장', value: '1양식장' },
              ]}
            />
          </InputSet>
          <InputSet >
            <Select
              name="enterFish"
              className="grow"
              onChange={(e) => setSelectedFish(e.target.value)}
              value={selectedFish}
              options={[
                { label: '넙치', value: '넙치'},
              ]}
            />
          </InputSet>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <TankSelectItem variant="violet" tankName="A1"/>
          <TankSelectItem variant="violet" tankName="A1"/>
          <TankSelectItem disabled variant="violet" tankName="A1"/>
          <TankSelectItem disabled variant="violet" tankName="A1"/>
          <TankSelectItem variant="violet" tankName="A1"/>
          <TankSelectItem variant="violet" tankName="A1"/>
          <TankSelectItem variant="violet" tankName="A1"/>
          <TankSelectItem disabled variant="violet" tankName="A1"/>
          <TankSelectItem variant="violet" tankName="A1"/>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem disabled variant="lime" tankName="A1"/>
          <TankSelectItem disabled variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem disabled variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem disabled variant="lime" tankName="A1"/>
          <TankSelectItem disabled variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
          <TankSelectItem variant="lime" tankName="A1"/>
        </div>

      </div>
      <div className="flex gap-2 shrink-0">
        <CustomBtn size="lg" variant="primary" className="grow" >완료</CustomBtn>
      </div>
    </Modal>
  );
}
