import PageUtilLine from '~/common/components/PageUtilLine';
import Container from '~/common/layouts/Container';
import PageTitle from '~/common/components/PageTitle';
import GroupItemList from '~/common/components/modules/GroupItemList';
import CustomLabel from '~/common/components/ui/CustomLabel';
import { AccordionItem } from '~/common/components/modules/AccordionItem';
import WaterTankItemLine from '~/features/monitoring/components/water-tank-item';
import InfoItem from '~/features/monitoring/components/info-item';
import PopoverEditInfo from '~/features/monitoring/components/popover-edit-info';
import DotBadge from "~/features/monitoring/components/dot-badge";

export default function FarmMonitoringPage() {
  return (
    <>
      <PageTitle title="양식 현황" desc="양식현황 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <PageUtilLine>
        <div className="w-full md:w-auto flex items-center gap-4">
          <CustomLabel label="기준일자 선택" className="hidden md:flex" />
          <input
            id="date-pick"
            type="date"
            className="border-b border-slate-800 grow md:w-56 h-10 px-2"
          />
          <PopoverEditInfo />
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between" >
          <div className="flex md:item-center gap-y-1 gap-2 md:gap-4 flex-wrap p-4 md:p-0 bg-slate-100 md:bg-white rounded-2xl md:rounded-none">
            <InfoItem variant="colorful" label="전체 보유 미수" value="3,000" />
            <InfoItem variant="colorful" label="전체 중량" value="3,000 kg" />
            <InfoItem variant="colorful" label="폐사 미수" value="3,000" />
          </div>
          <div className="flex items-center gap-4 lg:justify-end">
            <CustomLabel className="min-w-auto" label="밀식률" />
            <DotBadge variant="green" />
            <DotBadge variant="yellow" />
            <DotBadge variant="red" />
          </div>
        </div>
      </PageUtilLine>
      <GroupItemList />
      <Container>
        <div className="flex flex-col gap-4">
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
        </div>
      </Container>
    </>
  );
}
