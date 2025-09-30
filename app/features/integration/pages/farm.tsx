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

export default function FarmStatsPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  return (
    <>
      <PageTitle title="통합 현황" />
      <SearchBox>
        <SearchBoxItem label="양식장">
          <Select
            name="farmName"
            onChange={(e) => setSelectedFarm(e.target.value)}
            className="md:w-36 w-full"
            value={selectedFarm}
            options={[
              { label: '양식장 1', value: '양식장 1' },
              { label: '양식장 2', value: '양식장 2' },
              { label: '양식장 3', value: '양식장 3' },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="주소">
          <Input type="text" className="md:w-36 w-full"/>
        </SearchBoxItem>
        <SearchBoxItem label="보유자">
          <Input type="text" className="md:w-36 w-full"/>
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
            <DepthMenuItem link="/integration">비용 통계</DepthMenuItem>
            <DepthMenuItem link="/integration/farm" active>양식장 통계</DepthMenuItem>
          </DepthMenu>
        </div>
        <div className="flex flex-col gap-4">
          <DataTable>
            <DataTableHead>
              <tr>
                <DataTableTh className="w-20">#</DataTableTh>
                <DataTableTh className="grow">양식장 이름</DataTableTh>
                <DataTableTh className="grow">주소</DataTableTh>
                <DataTableTh className="w-32">어종</DataTableTh>
                <DataTableTh className="w-32">보유자</DataTableTh>
              </tr>
            </DataTableHead>
            <tbody>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd>1</DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>제주시 중앙로 175, 3층</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>홍길동</DataTableTd>
            </tr>
            </tbody>
          </DataTable>
          <Pagination currentPage={3} totalPages={10} />
        </div>
      </Container>
    </>
  );
}
