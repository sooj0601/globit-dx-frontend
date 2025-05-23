import Modal from "../../../../../globit-2025-yst/src/components/modules/Modal.tsx";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalEditInfo({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <Modal
      onClose={onClose}
      title="급이량 설정"
      size="md"
      zIndex={60}
    >
      <div className="flex flex-col gap-2 ">
      </div>
    </Modal>
  );
}
