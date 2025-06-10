import InfoToggle from './info-toggle'
import { useState } from 'react'
import Popover from '~/common/components/ui/Popover'
import CustomBtn from '~/common/components/ui/CustomBtn'
import { ClipboardPen } from 'lucide-react'

export default function PopoverEditInfo() {
  const [enabled1, setEnabled1] = useState(false)
  const [enabled2, setEnabled2] = useState(true)
  const [enabled3, setEnabled3] = useState(true)
  const [enabled4, setEnabled4] = useState(false)
  const [enabled5, setEnabled5] = useState(false)
  const [enabled6, setEnabled6] = useState(false)

  return (
    <Popover
      title="표출 정보 수정"
      trigger={
        <CustomBtn size="sm" rightIcon={<ClipboardPen size={16} />}>
          표출 정보 수정
        </CustomBtn>
      }
    >
      <div className="flex flex-col gap-2">
        <InfoToggle label="밀식도" enabled={enabled1} onChange={setEnabled1} />
        <InfoToggle label="미수" enabled={enabled2} onChange={setEnabled2} />
        <InfoToggle label="평균체중" enabled={enabled3} onChange={setEnabled3} />
        <InfoToggle label="총 체중" enabled={enabled4} onChange={setEnabled4} />
        <InfoToggle label="폐사 미수" enabled={enabled5} onChange={setEnabled5} />
        <InfoToggle label="급이량" enabled={enabled6} onChange={setEnabled6} />
      </div>
    </Popover>
  )
}
