import Container from "~/common/layouts/Container";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {TableRow} from "~/common/components/ui/table/TableRow";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import BtnWrap from "~/common/components/ui/form/BtnWrap";
import Pagination from "~/common/components/ui/table/Pagination";
import Input from "~/common/components/ui/form/Input";
import CustomBadge from "~/common/components/ui/form/CustomBadge";
import { Link } from 'react-router';
import StatusSelect from "~/features/mypage/components/status-select";
import {useState} from "react";
import {Pill} from "lucide-react";

export default function MedicineManagement() {
  const [status1, setStatus1] = useState('사용');
  const [status2, setStatus2] = useState('미사용');
  const [status3, setStatus3] = useState('미사용');
  const [status4, setStatus4] = useState('사용');
  const [status5, setStatus5] = useState('사용');
  return (
    <>
      <PageTitle title="약품 관리" desc="약품 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <Input type="search" placeholder="약품이름 검색" className="w-full md:w-auto"  />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8">
              <div className="flex items-center grow">
                <CustomLabel label="보유여부"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="all">전체</option>
                  <option value="used">사용</option>
                  <option value="unused">미사용</option>
                </select>
              </div>
            </div>
          </div>
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-7">#</div>
              <div className="text-center flex-1">구매일자</div>
              <div className="text-center flex-1">이름</div>
              <div className="text-center flex-1">현재 보유량(g)</div>
              <div className="text-center flex-1">최초 구매량(g)</div>
              <div className="text-center flex-1">약품구분</div>
              <div className="text-center flex-1">사용여부</div>
              <div className="text-center flex-1">구매처</div>
            </>
          }>
          <TableRow
            accordion
            title="사료1"
            className={status1 === '미사용' ? '!bg-slate-100' : ''}
          >
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구매일자" className="flex-1 col-span-2">
              <Link to="/mypage/medicine/detail" className="grow lg:text-center text-slate-500 underline text-nowrap">2025-05-03</Link>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold text-ellipsis">사료1</p>
            </TableTd>
            <TableTd label="현재 보유량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="최초 구매량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="약품구분" className="flex-1">
              <p className="grow lg:text-center">의약품</p>
            </TableTd>
            <TableTd label="사용여부" className="flex-1 lg:justify-center col-span-2">
              <StatusSelect value={status1} onChange={setStatus1} className="!w-24" />
            </TableTd>
            <TableTd label="구매처" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title="사료1"
            className={status2 === '미사용' ? '!bg-slate-100' : ''}
          >
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구매일자" className="flex-1 col-span-2">
              <Link to="/mypage/medicine/detail" className="grow lg:text-center text-slate-500 underline text-nowrap">2025-05-03</Link>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold text-ellipsis">사료1</p>
            </TableTd>
            <TableTd label="현재 보유량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="최초 구매량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="약품구분" className="flex-1">
              <p className="grow lg:text-center">영양제</p>
            </TableTd>
            <TableTd label="사용여부" className="flex-1 lg:justify-center col-span-2">
              <StatusSelect value={status2} onChange={setStatus2} className="!w-24" />
            </TableTd>
            <TableTd label="구매처" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title="사료1"
            className={status3 === '미사용' ? '!bg-slate-100' : ''}
          >
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구매일자" className="flex-1 col-span-2">
              <Link to="/mypage/medicine/detail" className="grow lg:text-center text-slate-500 underline text-nowrap">2025-05-03</Link>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold text-ellipsis">사료1</p>
            </TableTd>
            <TableTd label="현재 보유량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="최초 구매량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="약품구분" className="flex-1">
              <p className="grow lg:text-center">비타민</p>
            </TableTd>
            <TableTd label="사용여부" className="flex-1 lg:justify-center col-span-2">
              <StatusSelect value={status3} onChange={setStatus3} className="!w-24" />
            </TableTd>
            <TableTd label="구매처" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title="사료1"
            className={status4 === '미사용' ? '!bg-slate-100' : ''}
          >
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구매일자" className="flex-1 col-span-2">
              <Link to="/mypage/medicine/detail" className="grow lg:text-center text-slate-500 underline text-nowrap">2025-05-03</Link>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold text-ellipsis">사료1</p>
            </TableTd>
            <TableTd label="현재 보유량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="최초 구매량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="약품구분" className="flex-1">
              <p className="grow lg:text-center">의약품</p>
            </TableTd>
            <TableTd label="사용여부" className="flex-1 lg:justify-center col-span-2">
              <StatusSelect value={status4} onChange={setStatus4} className="!w-24" />
            </TableTd>
            <TableTd label="구매처" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            accordion
            title="사료1"
            className={status5 === '미사용' ? '!bg-slate-100' : ''}
          >
            <TableTd className="!hidden lg:!flex w-7" >
              <p className="grow lg:text-center">1</p>
            </TableTd>
            <TableTd label="구매일자" className="flex-1 col-span-2">
              <Link to="/mypage/medicine/detail" className="grow lg:text-center text-slate-500 underline text-nowrap">2025-05-03</Link>
            </TableTd>
            <TableTd label="이름" className="!hidden lg:!flex flex-1">
              <p className="grow lg:text-center font-bold text-ellipsis">사료1</p>
            </TableTd>
            <TableTd label="현재 보유량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="최초 구매량" className="flex-1">
              <p className="grow lg:text-center">94,203g</p>
            </TableTd>
            <TableTd label="약품구분" className="flex-1">
              <p className="grow lg:text-center">의약품</p>
            </TableTd>
            <TableTd label="사용여부" className="flex-1 lg:justify-center col-span-2">
              <StatusSelect value={status5} onChange={setStatus5} className="!w-24" />
            </TableTd>
            <TableTd label="구매처" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
        <BtnWrap className="md:!pt-6">
          <CustomBtn to="/mypage/medicine/edit" size="lg" variant="primary" className="grow w-full ml-auto md:grow-0 md:w-auto" >약품 추가</CustomBtn>
        </BtnWrap>
      </Container>
    </>
  )
}
