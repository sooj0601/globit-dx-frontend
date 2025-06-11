import { useEffect, useState } from 'react';
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {Plus} from "lucide-react";
import SelectableInput from "~/common/components/ui/form/SelectableInput";
import Pagination from "~/common/components/ui/table/Pagination";
import CustomBadge from "~/common/components/ui/form/CustomBadge";

export default function FarmManagement() {
  const [selectedFarms, setSelectedFarms] = useState<string[]>(['farm-001']);
  const isMobile = useIsMobile();
  const toggleFarmSelection = (value: string) => {
    setSelectedFarms((prev) =>
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
      <PageTitle title="양식장 등록 관리" desc="양식장 등록 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex items-center justify-between">
            <Input type="search" placeholder="자동생성" className="w-full md:w-auto"  />
            <CustomBtn to="/mypage/farm/edit" variant="primary" rightIcon={<Plus/>} className="!hidden md:!inline-flex">양식장 추가</CustomBtn>
          </div>
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-10">#</div>
              <div className="text-center flex-1">양식장 이름</div>
              <div className="text-center flex-1">양식장 등록번호</div>
              <div className="text-center flex-1">소유자</div>
              <div className="text-center flex-1">양식장 주소</div>
              <div className="text-center w-32">승인 여부</div>
            </>
          }
        >
          <TableRow
            title="첨단양식장"
            onClick={() => isMobile && toggleFarmSelection('farm-001')}
            header={<SelectableInput
              name="selected-farms"
              value="farm-001"
              variant="checkbox"
              checked={selectedFarms.includes('farm-001')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedFarms((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedFarms.includes('farm-001')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
              <TableTd className="w-10 lg:justify-center hidden md:flex" >
                <SelectableInput
                  name="selected-farms"
                  value="farm-001"
                  variant="checkbox"
                  checked={selectedFarms.includes('farm-001')}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    setSelectedFarms((prev) =>
                      checked ? [...prev, value] : prev.filter((v) => v !== value)
                    );
                  }}
                />
              </TableTd>
              <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
                <p className="text-center font-bold">첨단양식장</p>
              </TableTd>
              <TableTd label="등록 번호" className="flex-1 lg:justify-center col-span-2">
                319583198519053195153
              </TableTd>
              <TableTd label="소유자" className="flex-1 lg:justify-center">
                홍길동
              </TableTd>
              <TableTd label="주소" className="flex-1 lg:justify-center col-span-2">
                가나군 가나면 가나리 21
              </TableTd>
              <TableTd label="승인여부" className="w-32 lg:justify-center">
                <CustomBadge variant="green">승인</CustomBadge>
              </TableTd>
          </TableRow>
          <TableRow
            title="첨단양식장"
            onClick={() => isMobile && toggleFarmSelection('farm-002')}
            header={<SelectableInput
              name="selected-farms"
              value="farm-002"
              variant="checkbox"
              checked={selectedFarms.includes('farm-002')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedFarms((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedFarms.includes('farm-002')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
              <TableTd className="w-10 lg:justify-center hidden md:flex" >
                <SelectableInput
                  name="selected-farms"
                  value="farm-002"
                  variant="checkbox"
                  checked={selectedFarms.includes('farm-002')}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    setSelectedFarms((prev) =>
                      checked ? [...prev, value] : prev.filter((v) => v !== value)
                    );
                  }}
                />
              </TableTd>
              <TableTd label="양식장 이름" className="flex-1 lg:justify-center hidden md:flex">
                <p className="text-center font-bold">첨단양식장</p>
              </TableTd>
              <TableTd label="등록 번호" className="flex-1 lg:justify-center col-span-2">
                319583198519053195153
              </TableTd>
              <TableTd label="소유자" className="flex-1 lg:justify-center">
                홍길동
              </TableTd>
              <TableTd label="주소" className="flex-1 lg:justify-center col-span-2">
                가나군 가나면 가나리 21
              </TableTd>
              <TableTd label="승인여부" className="w-32 lg:justify-center">
                <CustomBadge variant="gray">대기중</CustomBadge>
              </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
        <div className="sticky bottom-0 inset-x-0 pb-8 pt-4 md:relative flex flex-col md:flex-row items-center md:justify-between gap-2 bg-white">
          <CustomBtn size="lg" variant="outline" className="grow w-full md:grow-0 md:w-auto" >선택 삭제</CustomBtn>
          <CustomBtn to="/mypage/farm/edit" size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto md:hidden" >양식장 추가</CustomBtn>
        </div>
      </Container>
    </>
  )
}
