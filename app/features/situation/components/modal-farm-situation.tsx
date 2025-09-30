import Modal from "~/common/components/ui/popup/Modal";
import ChartPlaceholder from "~/features/situation/components/chart-placeholder";
import {MapPin} from "lucide-react";
import React from "react";
interface ModalFarmSituationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalFarmSituation({ isOpen, onClose }: ModalFarmSituationProps) {

  if (!isOpen) return null;
  return (
    <Modal
      onClose={onClose}
      title="양식 현황"
      subTitle="입식/출하/폐사"
      size="xl"
      zIndex={80}
    >
      <div className="overflow-y-auto grow min-h-0 flex flex-col gap-2 md:gap-4">
        <div className="flex justify-between items-center bg-slate-100 px-4 py-2 md:p-4 rounded-2xl">
          <strong className="md:text-lg text-slate-800">첨단수산</strong>
          <p className="flex items-center justify-end gap-0.5 text-sm text-slate-500">
            <MapPin size={14} />
            <span>서귀포시 중앙로 12-4</span>
          </p>
        </div>
        <ChartPlaceholder title="월별 입식 출하 폐사 현황" ratio={6 / 16}/>
      </div>
    </Modal>
  );
}
