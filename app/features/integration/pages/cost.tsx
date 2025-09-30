import Container from '~/common/layouts/Container';

import PageTitle from "~/common/components/ui/layout/PageTitle";
import {Search} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Input from "~/common/components/ui/form/Input";
import {useState} from "react";
import Select from "~/common/components/ui/form/Select";
import {SearchBox, SearchBoxItem} from "~/features/dashboard/components/search-box";
import {
  DataTable,
  DataTableHead,
  DataTableTd,
  DataTableTh
} from "~/features/dashboard/components/data-table";
import Pagination from "~/common/components/ui/table/Pagination";
import {DepthMenu, DepthMenuItem} from "~/features/dashboard/components/depth-menu";

export default function CostStatsPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  return (
    <>
      <PageTitle title="통합 현황" />
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
        <CustomBtn rightIcon={<Search size={16}/>}>조회</CustomBtn>
      </SearchBox>
      <Container>
        <div className="w-full flex flex-col gap-4 md:flex-row items-center md:justify-between">
          <p className="text-slate-500 text-sm order-2 md:order-1">화면을 좌우로 스크롤하시면 전체 표를 확인하실 수 있습니다.</p>
          <DepthMenu className="order-1 md:order-2">
            <DepthMenuItem>성장률 통계</DepthMenuItem>
            <DepthMenuItem link="/integration" active>비용 통계</DepthMenuItem>
            <DepthMenuItem link="/integration/farm">양식장 통계</DepthMenuItem>
          </DepthMenu>
        </div>
        <div className="flex flex-col gap-4">
          <DataTable>
            <DataTableHead>
              <tr>
                <DataTableTh className="w-32">연도</DataTableTh>
                <DataTableTh className="w-56">소비구분</DataTableTh>
                <DataTableTh className="w-32">1월</DataTableTh>
                <DataTableTh className="w-32">2월</DataTableTh>
                <DataTableTh className="w-32">3월</DataTableTh>
                <DataTableTh className="w-32">4월</DataTableTh>
                <DataTableTh className="w-32">5월</DataTableTh>
                <DataTableTh className="w-32">6월</DataTableTh>
                <DataTableTh className="w-32">7월</DataTableTh>
                <DataTableTh className="w-32">8월</DataTableTh>
                <DataTableTh className="w-32">9월</DataTableTh>
                <DataTableTh className="w-32">10월</DataTableTh>
                <DataTableTh className="w-32">11월</DataTableTh>
                <DataTableTh className="w-32">12월</DataTableTh>
              </tr>
            </DataTableHead>
            <tbody>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={2} bgColor="bg2">
                <strong>2025</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={2} bgColor="bg1">
                <strong>2025</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={2} bgColor="bg2">
                <strong>2025</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={2} bgColor="bg1">
                <strong>2025</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>
                <strong>입식비용</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
              <DataTableTd>123,341,234 원</DataTableTd>
            </tr>
            </tbody>
          </DataTable>
          <Pagination currentPage={3} totalPages={10} />
        </div>
      </Container>
    </>
  );
}
