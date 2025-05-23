import PageUtilLine from '../../../common/components/PageUtilLine';
import Container from '../../../common/layouts/Container';
import PageTitle from '../../../common/components/PageTitle';
import CustomBtn from '../../../common/components/ui/CustomBtn';
import GroupItem from '../../../common/components/modules/GroupItem';
import UtilLabel from '../../../common/components/ui/UtilLabel';
import { AccordionItem } from '../../../common/components/modules/AccordionItem';
import WaterTankItemLine from '../components/water-tank-item';
import InfoItem from '../components/info-item';
import { ClipboardPen } from 'lucide-react';
import ModalEditInfo from '../components/modal-edit-info';
import { useState } from 'react';

export default function FarmMonitoringPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
      <PageTitle title="양식 현황" className={'md:mb-8'} />
      <PageUtilLine className="justify-between">
        <div className="flex items-center gap-4">
          <UtilLabel label="기준일자 선택" className="hidden md:flex" />
          <input
            id="date-pick"
            type="date"
            className="border-b border-slate-800 grow md:w-56 h-10 px-2"
          />
          <CustomBtn
            size="sm"
            rightIcon={<ClipboardPen size={16} />}
            onClick={() => setOpenModal('modal1')}
          >
            표출 정보 수정
          </CustomBtn>
        </div>
        <div className="flex md:item-center gap-2 md:gap-4 md:justify-end flex-wrap p-4 md:p-0 bg-slate-100 md:bg-white rounded-2xl md:rounded-none">
          <InfoItem label="전체 보유 미수 (미)" value="3,000" />
          <InfoItem label="전체 중량 (kg)" value="3,000" />
          <InfoItem label="폐사 미수 (미)" value="3,000" />
        </div>
      </PageUtilLine>
      <PageUtilLine className="mt-6 py-6 border-t border-slate-300">
        <UtilLabel label="입식 그룹" />
        <div className="flex flex-wrap gap-2">
          <GroupItem
            key="group-item-1"
            name="2024-넙치-200030"
            colorName="violet"
          />
          <GroupItem
            key="group-item-2"
            name="2024-넙치-200030"
            colorName="lime"
          />
          <GroupItem
            key="group-item-3"
            name="2024-넙치-200030"
            colorName="yellow"
          />
          <GroupItem
            key="group-item-4"
            name="2024-넙치-200030"
            colorName="cyan"
          />
          <GroupItem
            key="group-item-5"
            name="2024-넙치-200030"
            colorName="indigo"
          />
          <GroupItem
            key="group-item-6"
            name="2024-넙치-200030"
            colorName="teal"
          />
          <GroupItem
            key="group-item-7"
            name="2024-넙치-200030"
            colorName="pink"
          />
        </div>
      </PageUtilLine>
      <Container>
        <AccordionItem title="A동">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            <WaterTankItemLine tankName="A-1" colorName="violet" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="violet" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="violet" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="lime" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="lime" state="red">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="A-1" colorName="pink" state="red">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
          </div>
        </AccordionItem>
        <AccordionItem title="B동">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="teal" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="yellow" state="red">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="yellow" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="cyan" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
          </div>
        </AccordionItem>
        <AccordionItem title="C동">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="teal" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="yellow" state="red">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="yellow" state="yellow">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
            <WaterTankItemLine tankName="B-1" colorName="cyan" state="green">
              <InfoItem label="미수" value="500" />
              <InfoItem label="체중" value="3,000kg" />
            </WaterTankItemLine>
          </div>
        </AccordionItem>
      </Container>
      {/* 표출정보 수정 모달 */}
      <ModalEditInfo
        isOpen={openModal === 'modal1'}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}
