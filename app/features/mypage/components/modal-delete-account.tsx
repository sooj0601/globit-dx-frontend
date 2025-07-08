import Modal from "~/common/components/ui/popup/Modal";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
interface ModalDeleteAccountProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDeleteAccount({ isOpen, onClose }: ModalDeleteAccountProps) {

  if (!isOpen) return null;
  return (
    <Modal
      onClose={onClose}
      title="회원 탈퇴"
      size="alert"
      zIndex={80}
    >
      <div className="overflow-y-auto grow min-h-0 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <strong className="flex items-center gap-1 text-xl">
            정말 탈퇴 하시겠습니까?
          </strong>
          <p>탈퇴 시 회원 정보와 이용 내역은 모두 삭제되며, 복구가 불가능합니다.</p>
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        <CustomBtn size="lg" variant="gray" className="flex-1" >아니오</CustomBtn>
        <CustomBtn size="lg" variant="primary" className="flex-1" >예</CustomBtn>
      </div>
    </Modal>
  );
}
