import { useEffect, useState } from 'react';
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import CustomTable from "~/common/components/ui/table/CustomTable";
import SelectableInput from "~/common/components/ui/form/SelectableInput";
import Pagination from "~/common/components/ui/table/Pagination";
import CustomBadge from "~/common/components/ui/form/CustomBadge";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import BtnWrap from "~/common/components/ui/form/BtnWrap";

export default function AdminFarm() {
  const [selectedFarm, setSelectedFarm] = useState<string[]>(['farm-001']);
  const isMobile = useIsMobile();
  const toggleFarmSelection = (value: string) => {
    setSelectedFarm((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    return isMobile;
  }
  return (
    <>
      <PageTitle title="양식장 정보 관리" desc="양식장 정보 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4">
            <Input type="search" placeholder="이름 검색" className="w-full md:w-auto"  />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8">
              <div className="flex items-center grow">
                <CustomLabel label="승인여부"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="status-all">전체</option>
                  <option value="status1">대기</option>
                  <option value="status2">완료</option>
                  <option value="status3">거부</option>
                </select>
              </div>
              <div className="flex items-center grow">
                <CustomLabel label="선택한 정보를"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="approval">승인</option>
                </select>
                <CustomBtn variant="primary" className="ml-4">실행</CustomBtn>
              </div>
            </div>
          </div>
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-10">#</div>
              <div className="text-center flex-1">양식장 이름</div>
              <div className="text-center flex-1">보유자</div>
              <div className="text-center flex-1">양식장 주소</div>
              <div className="text-center flex-1">등록일자</div>
              <div className="text-center w-32">승인 여부</div>
            </>
          }
        >
          <TableRow
            title={<p>제주 양식 수산</p>}
            onClick={() => isMobile && toggleFarmSelection('farm-001')}
            header={<SelectableInput
              name="selected-farm"
              value="farm-001"
              variant="checkbox"
              checked={selectedFarm.includes('farm-001')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedFarm((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedFarm.includes('farm-001')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-farm"
                value="farm-001"
                variant="checkbox"
                checked={selectedFarm.includes('user-001')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedFarm((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">제주 양식 수산</p>
            </TableTd>
            <TableTd label="보유자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="주소" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">가나군 가나면 가나리</p>
            </TableTd>
            <TableTd label="등록일자" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">2024-03-03</p>
            </TableTd>
            <TableTd label="승인여부" className="w-32 lg:justify-center">
              <CustomBadge color="green">완료</CustomBadge>
            </TableTd>
          </TableRow>
          <TableRow
            title={<p>제주 양식 수산</p>}
            onClick={() => isMobile && toggleFarmSelection('farm-002')}
            header={<SelectableInput
              name="selected-farm"
              value="farm-002"
              variant="checkbox"
              checked={selectedFarm.includes('farm-002')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedFarm((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedFarm.includes('farm-002')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-farm"
                value="farm-002"
                variant="checkbox"
                checked={selectedFarm.includes('user-001')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedFarm((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">제주 양식 수산</p>
            </TableTd>
            <TableTd label="보유자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="주소" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">가나군 가나면 가나리</p>
            </TableTd>
            <TableTd label="등록일자" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">2024-03-03</p>
            </TableTd>
            <TableTd label="승인여부" className="w-32 lg:justify-center">
              <CustomBadge color="gray">대기</CustomBadge>
            </TableTd>
          </TableRow>
          <TableRow
            title={<p>제주 양식 수산</p>}
            onClick={() => isMobile && toggleFarmSelection('farm-003')}
            header={<SelectableInput
              name="selected-farm"
              value="farm-003"
              variant="checkbox"
              checked={selectedFarm.includes('farm-003')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedFarm((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedFarm.includes('farm-003')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-farm"
                value="farm-003"
                variant="checkbox"
                checked={selectedFarm.includes('user-001')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedFarm((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">제주 양식 수산</p>
            </TableTd>
            <TableTd label="보유자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="주소" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">가나군 가나면 가나리</p>
            </TableTd>
            <TableTd label="등록일자" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">2024-03-03</p>
            </TableTd>
            <TableTd label="승인여부" className="w-32 lg:justify-center">
              <CustomBadge color="red">거부</CustomBadge>
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
        <BtnWrap className="md:!pt-6">
          <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto ml-auto" >양식장 추가</CustomBtn>
        </BtnWrap>
      </Container>
    </>
  )
}
