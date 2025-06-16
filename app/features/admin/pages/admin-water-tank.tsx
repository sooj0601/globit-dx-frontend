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
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import BtnWrap from "~/common/components/ui/form/BtnWrap";

export default function AdminWaterTank() {
  const [selectedTank, setSelectedTank] = useState<string[]>(['tank-001']);
  const isMobile = useIsMobile();
  const toggleTankSelection = (value: string) => {
    setSelectedTank((prev) =>
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
      <PageTitle title="양식장 수조 관리" desc="양식장 수조 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4">
            <Input type="search" placeholder="이름 검색" className="w-full md:w-auto"  />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8 ml-auto">
              <div className="flex items-center grow">
                <CustomLabel label="선택한 정보를"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="delete">삭제</option>
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
              <div className="text-center flex-1">관리자</div>
              <div className="text-center flex-1">이메일</div>
              <div className="text-center flex-1">수조 형태</div>
              <div className="text-center flex-1">수조</div>
              <div className="text-center flex-1">면적</div>
            </>
          }
        >
          <TableRow
            title={<p>제주 양식 수산 <span className="font-normal">A-1</span></p>}
            onClick={() => isMobile && toggleTankSelection('tank-001')}
            header={<SelectableInput
              name="selected-tank1"
              value="tank-001"
              variant="checkbox"
              checked={selectedTank.includes('tank-001')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedTank((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedTank.includes('tank-001')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank1"
                value="tank-001"
                variant="checkbox"
                checked={selectedTank.includes('tank-001')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedTank((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">제주 양식 수산</p>
            </TableTd>
            <TableTd label="관리자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="이메일" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">hong@globit.kr</p>
            </TableTd>
            <TableTd label="수조형태" className="flex-1 lg:justify-center">
              <p className="lg:text-center">사각형</p>
            </TableTd>
            <TableTd label="수조" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center">A-1</p>
            </TableTd>
            <TableTd label="면적" className="flex-1 lg:justify-center">
              <p className="lg:text-center">123</p>
            </TableTd>
          </TableRow>
          <TableRow
            title={<p>제주 양식 수산 <span className="font-normal">A-1</span></p>}
            onClick={() => isMobile && toggleTankSelection('tank-002')}
            header={<SelectableInput
              name="selected-tank2"
              value="tank-002"
              variant="checkbox"
              checked={selectedTank.includes('tank-002')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedTank((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedTank.includes('tank-002')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank2"
                value="tank-002"
                variant="checkbox"
                checked={selectedTank.includes('tank-002')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedTank((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">제주 양식 수산</p>
            </TableTd>
            <TableTd label="관리자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="이메일" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">hong@globit.kr</p>
            </TableTd>
            <TableTd label="수조형태" className="flex-1 lg:justify-center">
              <p className="lg:text-center">사각형</p>
            </TableTd>
            <TableTd label="수조" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center">A-1</p>
            </TableTd>
            <TableTd label="면적" className="flex-1 lg:justify-center">
              <p className="lg:text-center">123</p>
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
        <BtnWrap className="md:!pt-6">
          <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto ml-auto" >수조 추가</CustomBtn>
        </BtnWrap>
      </Container>
    </>
  )
}
