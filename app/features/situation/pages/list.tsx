import Container from '~/common/layouts/Container';

import PageTitle from "~/common/components/ui/layout/PageTitle";
import {Search} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Input from "~/common/components/ui/form/Input";
import {useState} from "react";
import Select from "~/common/components/ui/form/Select";
import {SearchBox, SearchBoxItem} from "~/features/dashboard/components/search-box";
import MapListSwitch from "~/features/situation/components/map-list-switch";
import {
  DataTable,
  DataTableHead,
  DataTableTd,
  DataTableTh
} from "~/features/dashboard/components/data-table";
import Pagination from "~/common/components/ui/table/Pagination";

export default function FarmListPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  return (
    <>
      <PageTitle title="양식 현황" />
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
        <div className="w-full flex flex-col gap-4 md:flex-row items-center md:justify-between">
          <MapListSwitch />
        </div>
        <div className="flex flex-col gap-4">
          <DataTable>
            <DataTableHead>
              <tr>
                <DataTableTh className="w-32">날짜</DataTableTh>
                <DataTableTh className="w-56">양식장 이름</DataTableTh>
                <DataTableTh className="grow">입식수(마리)-평균중량(g)</DataTableTh>
                <DataTableTh className="grow">출하수-평균중량(g)</DataTableTh>
                <DataTableTh className="w-32">어종</DataTableTh>
                <DataTableTh className="w-32">폐사(마리)</DataTableTh>
                <DataTableTh className="w-32">보유량(kg)</DataTableTh>
              </tr>
            </DataTableHead>
            <tbody>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={8} bgColor="bg2">
                <strong>2025-05</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr className="border-b border-slate-500">
              <DataTableTd rowSpan={2} bgColor="bg1">
                <strong>2025-05</strong>
              </DataTableTd>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            <tr>
              <DataTableTd>
                <strong>제주 첨단</strong>
              </DataTableTd>
              <DataTableTd>123,341,234 -100</DataTableTd>
              <DataTableTd>123,124,123 - 1.1</DataTableTd>
              <DataTableTd>넙치</DataTableTd>
              <DataTableTd>12,320</DataTableTd>
              <DataTableTd>321</DataTableTd>
            </tr>
            </tbody>
          </DataTable>
          <Pagination currentPage={3} totalPages={10} />
        </div>
      </Container>
    </>
  );
}
