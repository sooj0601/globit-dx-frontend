import Container from "~/common/layouts/Container";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {TableRow} from "~/common/components/ui/table/TableRow";
import Pagination from "~/common/components/ui/table/Pagination";

export default function FeedDetail() {
  return (
    <>
      <PageTitle title="사료 상세 이력 관리" desc="사료 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-7">#</div>
              <div className="text-center flex-1">사용일자</div>
              <div className="text-center flex-1">이름</div>
              <div className="text-center flex-1">사용 수조</div>
              <div className="text-center flex-1">사용량</div>
              <div className="text-center flex-1">보유량</div>
              <div className="text-center flex-1">구분</div>
            </>
          }>
          <TableRow
            accordion
            title={<p>혼합 사료 1번 <span className="font-normal">(2025-05-03 12:00)</span></p>}>
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="사용일자" className="!hidden lg:!flex flex-1">
              <p className="grow text-center text-slate-500">2025-05-03 12:00</p>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold">혼합 사료 1번</p>
            </TableTd>
            <TableTd label="사용 수조" className="flex-1">
              <p className="grow lg:text-center">A-2</p>
            </TableTd>
            <TableTd label="사용량" className="flex-1">
              <p className="grow lg:text-center">4kg</p>
            </TableTd>
            <TableTd label="보유량" className="flex-1">
              <p className="grow lg:text-center">94kg</p>
            </TableTd>
            <TableTd label="구분" className="flex-1 col-span-2">
              <p className="grow lg:text-center font-bold">혼합(혼합사료 이름)</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title={<p>사료 1번 <span className="font-normal">(2025-05-03 12:00)</span></p>}>
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="사용일자" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center text-slate-500">2025-05-03 12:00</p>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold">사료 1번</p>
            </TableTd>
            <TableTd label="사용 수조" className="flex-1">
              <p className="grow lg:text-center">A-2</p>
            </TableTd>
            <TableTd label="사용량" className="flex-1">
              <p className="grow lg:text-center">4kg</p>
            </TableTd>
            <TableTd label="보유량" className="flex-1">
              <p className="grow lg:text-center">94kg</p>
            </TableTd>
            <TableTd label="구분" className="flex-1 col-span-2">
              <p className="grow lg:text-center">급이</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title={<p>사료 2번 <span className="font-normal">(2025-05-03 12:00)</span></p>}>
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="사용일자" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center text-slate-500">2025-05-03 12:00</p>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold">사료 2번</p>
            </TableTd>
            <TableTd label="사용 수조" className="flex-1">
              <p className="grow lg:text-center">A-2</p>
            </TableTd>
            <TableTd label="사용량" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
            <TableTd label="보유량" className="flex-1">
              <p className="grow lg:text-center">94kg</p>
            </TableTd>
            <TableTd label="구분" className="flex-1 col-span-2">
              <p className="grow lg:text-center">등록 및 구매</p>
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
      </Container>
    </>
  )
}
