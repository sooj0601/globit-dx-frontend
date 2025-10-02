import Container from '~/common/layouts/Container';
import {SearchBox, SearchBoxItem} from "~/features/dashboard/components/search-box";
import Select from "~/common/components/ui/form/Select";
import Input from "~/common/components/ui/form/Input";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Search} from "lucide-react";
import {useState} from "react";
import {DashboardSection, DashboardFarm, DashboardCurrent} from "~/features/dashboard/components/dashboard-set";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  return (
    <>
      <SearchBox>
        <SearchBoxItem label="기간">
          <Input
            id="date-pick"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="md:w-36 w-full"
          />
          <span className="hidden md:block">부터</span>
          ~
          <Input
            id="date-pick"
            type="date"
            value={selectedDate2}
            onChange={(e) => setSelectedDate2(e.target.value)}
            className="md:w-36 w-full"
          />
          <span className="hidden md:block">까지</span>
        </SearchBoxItem>
        <SearchBoxItem label="어종">
          <Select
            name="fishName"
            onChange={(e) => setSelectedFish(e.target.value)}
            className="md:w-36 w-full"
            value={selectedFish}
            options={[
              { label: '어종 1', value: '어종 1' },
              { label: '어종 2', value: '어종 2' },
              { label: '어종 3', value: '어종 3' },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="중량">
          <Select
            name="fishWeight"
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="md:w-36 w-full"
            value={selectedWeight}
            options={[
              { label: '중량 1', value: '중량 1' },
              { label: '중량 2', value: '중량 2' },
              { label: '중량 3', value: '중량 3' },
            ]}
          />
        </SearchBoxItem>
        <CustomBtn rightIcon={<Search size={16}/>}>조회</CustomBtn>
      </SearchBox>
      <Container>
        <DashboardSection title="양식장 현황" desc="(단위: 개소)">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <DashboardFarm title="2025년 등록 양식장" value="234,002,302" />
            <DashboardFarm title="누적 등록 양식장" value="234,002,302소" />
          </div>
        </DashboardSection>
        <DashboardSection title="양식 현황" desc="2025년 10월 1일 기준">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <DashboardCurrent type="stock" title="오늘의 입식" value="234,002,302" unit="마리" compare="+132,456">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-500">올해의 누적 입식</strong>
                  <span className="text-sm text-white font-bold"></span>
                </div>
                <strong className="font-bold text-2xl">234,002,302</strong>
              </div>
            </DashboardCurrent>
            <DashboardCurrent type="shipment" title="오늘의 출하" value="234,002,302" unit="마리" compare="+132,456">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-500">올해의 누적 출하</strong>
                  <span className="text-sm text-white font-bold"></span>
                </div>
                <strong className="font-bold text-2xl">234,002,302</strong>
              </div>
            </DashboardCurrent>
            <DashboardCurrent type="possession" title="오늘의 보유량" value="234,002,302" unit="마리" compare="+132,456">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-500">올해의 누적 보유량</strong>
                  <span className="text-sm text-white font-bold"></span>
                </div>
                <strong className="font-bold text-2xl">234,002,302</strong>
              </div>
            </DashboardCurrent>
            <DashboardCurrent type="death" title="오늘의 폐사" value="234,002,302" unit="마리" compare="+132,456">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-500">올해의 누적 폐사</strong>
                  <span className="text-sm text-white font-bold"></span>
                </div>
                <strong className="font-bold text-2xl">234,002,302</strong>
              </div>
            </DashboardCurrent>
          </div>
        </DashboardSection>
      </Container>
    </>
  );
}
