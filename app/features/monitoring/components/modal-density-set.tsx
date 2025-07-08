import Modal from "~/common/components/ui/popup/Modal";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import InputSet from "~/common/components/ui/form/InputSet";
import Input from "~/common/components/ui/form/Input";
import DensitySetWrap from "~/features/monitoring/components/density-set-wrap";
interface ModalDensitySetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDensitySet({ isOpen, onClose }: ModalDensitySetProps) {

  if (!isOpen) return null;
  return (
    <Modal
      onClose={onClose}
      title="밀도 기준 설정"
      size="sm"
      zIndex={80}
    >
      <div className="overflow-y-auto grow min-h-0 flex flex-col gap-4">
        <DensitySetWrap title="테스트01의 밀도 설정">
          <InputSet label="분조 필요 밀도 (kg/㎥)" variant="col">
            <Input type="text" unit="kg" number value="9,000,000" className="grow" />
          </InputSet>
          <InputSet label="추가 입식 필요 밀도 (kg/㎥)" variant="col">
            <Input type="text" unit="kg" number value="9,000,000" className="grow" />
          </InputSet>
        </DensitySetWrap>
        <DensitySetWrap title="테스트01의 밀도 설정">
          <InputSet label="분조 필요 밀도 (kg/㎥)" variant="col">
            <Input type="text" unit="kg" number value="9,000,000" className="grow" />
          </InputSet>
          <InputSet label="추가 입식 필요 밀도 (kg/㎥)" variant="col">
            <Input type="text" unit="kg" number value="9,000,000" className="grow" />
          </InputSet>
        </DensitySetWrap>
      </div>
      <div className="flex gap-2 shrink-0">
        <CustomBtn size="lg" variant="primary" className="grow" >저장</CustomBtn>
      </div>
    </Modal>
  );
}
