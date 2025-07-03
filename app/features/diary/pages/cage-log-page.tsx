import Container from "~/common/layouts/Container";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import TableTd from "~/common/components/ui/table/TableTd";
import GroupItemList from "~/common/components/modules/GroupItemList";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {TableRow} from "~/common/components/ui/table/TableRow";
import Input from "~/common/components/ui/form/Input";
import {useState} from "react";

export default function CageLogPage() {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
      <PageTitle title="수조 이력 관리" desc="수조 이력 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full md:w-auto mx-auto md:mx-0">
            <div className="flex items-center grow">
              <CustomLabel label="수조 선택"/>
              <select className="border-b border-slate-800 grow md:w-56 h-9 px-2">
                <option value="A-1">A-1</option>
                <option value="A-2">A-2</option>
                <option value="A-3">A-3</option>
                <option value="B-1">B-1</option>
              </select>
            </div>
            <div className="flex items-center grow">
              <CustomLabel label="기준일자 선택"/>
              <select className="border-b border-slate-800 grow md:w-56 h-9 px-2">
                <option value="2025-01-01">2025-01-01</option>
                <option value="2025-01-02">2025-01-02</option>
                <option value="2025-01-03">2025-01-03</option>
                <option value="2025-01-04">2025-01-04</option>
              </select>
            </div>
            <div className="flex items-center grow">
              <CustomLabel label="입식 그룹 명"/>
              <input type="text" className="border-b border-slate-800 grow md:w-56 h-9 px-2" />
            </div>
            <div className="flex items-center grow">
              <CustomLabel label="입식 일자"/>
              <Input
                id="date-pick"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border-b border-slate-800 grow md:w-56"
                inputStyle="border-none"
              />
            </div>
          </div>
          <GroupItemList />
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-7">#</div>
              <div className="text-center flex-1">구분</div>
              <div className="text-center flex-1">일자</div>
              <div className="text-center flex-1">현 미수</div>
              <div className="text-center flex-1">미수 변동</div>
              <div className="text-center flex-1">출하량</div>
              <div className="text-center flex-1">급이량</div>
              <div className="text-center flex-1">투약량</div>
              <div className="text-center flex-1">이동 수조</div>
            </>
          }>
          <TableRow
            accordion
            title={<p>입식 <span className="font-normal">(2025-05-03 12:00)</span></p>}>
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구분" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold">분조</p>
            </TableTd>
            <TableTd label="일자" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center text-slate-500">2025-05-03 12:00</p>
            </TableTd>
            <TableTd label="현 미수" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="미수 변동" className="flex-1">
              <p className="grow lg:text-center font-bold text-green-500">+120</p>
            </TableTd>
            <TableTd label="출하량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="투약량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="이동 수조" className="flex-1">
              <p className="grow lg:text-center font-bold">A-7</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title={<p>분조 <span className="font-normal">(2025-05-03 12:00)</span></p>}>
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구분" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold">분조</p>
            </TableTd>
            <TableTd label="일자" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center text-slate-500">2025-05-03 12:00</p>
            </TableTd>
            <TableTd label="현 미수" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="미수 변동" className="flex-1">
              <p className="grow lg:text-center font-bold text-rose-500">-120</p>
            </TableTd>
            <TableTd label="출하량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="투약량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="이동 수조" className="flex-1">
              <p className="grow lg:text-center font-bold">A-7</p>
            </TableTd>
          </TableRow>
        </CustomTable>
      </Container>
    </>
  )
}
