import Container from "~/common/layouts/Container";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import TableTd from "~/common/components/ui/table/TableTd";
import TankName from "~/common/components/modules/TankName";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {Trash2} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {TableRow} from "~/common/components/ui/table/TableRow";
import Input from "~/common/components/ui/form/Input";
import SelectableInput from "~/common/components/ui/form/SelectableInput";
import {useEffect, useState} from "react";
import BtnWrap from "~/common/components/ui/form/BtnWrap";

export default function WaterTankManagement() {
  const [selectedTank, setSelectedTank] = useState<string[]>(['tank-001' , 'tank-002']);
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
      <PageTitle title="수조 관리" desc="수조 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <Input type="search" placeholder="약품이름 검색" className="w-full md:w-auto"  />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8">
              <div className="flex items-center grow">
                <CustomLabel label="양식장 선택"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="used">양식장1</option>
                  <option value="unused">양식장2</option>
                </select>
              </div>
              <CustomBtn size="sm" variant="outline" rightIcon={<Trash2 size={16} />} className="!hidden md:!inline-flex">
                선택 수조 삭제
              </CustomBtn>
            </div>
          </div>
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-7">#</div>
              <div className="text-center flex-1">수조</div>
              <div className="text-center flex-1">수조크기</div>
              <div className="text-center flex-1">가로</div>
              <div className="text-center flex-1">세로</div>
              <div className="text-center flex-1">높이</div>
            </>
          }>
          <TableRow
            title="A-1"
            variant="violet"
            onClick={() => isMobile && toggleTankSelection('tank-001')}
            header={<SelectableInput
              name="selected-tank"
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
                : ''
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank"
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
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" />
            </TableTd>
            <TableTd label="수조크기" className="flex-1 lg:justify-center">
              <p className="text-center font-bold">134㎡</p>
            </TableTd>
            <TableTd label="가로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="세로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="높이" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            variant="violet"
            onClick={() => isMobile && toggleTankSelection('tank-002')}
            header={<SelectableInput
              name="selected-tank"
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
                : ''
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank"
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
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" />
            </TableTd>
            <TableTd label="수조크기" className="flex-1 lg:justify-center">
              <p className="text-center font-bold">134㎡</p>
            </TableTd>
            <TableTd label="가로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="세로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="높이" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            variant="pink"
            onClick={() => isMobile && toggleTankSelection('tank-003')}
            header={<SelectableInput
              name="selected-tank"
              value="tank-003"
              variant="checkbox"
              checked={selectedTank.includes('tank-003')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedTank((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedTank.includes('tank-003')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : ''
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank"
                value="tank-003"
                variant="checkbox"
                checked={selectedTank.includes('tank-003')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedTank((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="pink" tankName="A-1" />
            </TableTd>
            <TableTd label="수조크기" className="flex-1 lg:justify-center">
              <p className="text-center font-bold">134㎡</p>
            </TableTd>
            <TableTd label="가로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="세로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="높이" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            variant="lime"
            onClick={() => isMobile && toggleTankSelection('tank-004')}
            header={<SelectableInput
              name="selected-tank"
              value="tank-004"
              variant="checkbox"
              checked={selectedTank.includes('tank-004')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedTank((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedTank.includes('tank-004')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : ''
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-tank"
                value="tank-004"
                variant="checkbox"
                checked={selectedTank.includes('tank-004')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedTank((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="pink" tankName="A-1" />
            </TableTd>
            <TableTd label="수조크기" className="flex-1 lg:justify-center">
              <p className="text-center font-bold">134㎡</p>
            </TableTd>
            <TableTd label="가로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="세로" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
            <TableTd label="높이" className="flex-1 lg:justify-center">
              <Input type="text" value="30" number/>
            </TableTd>
          </TableRow>
        </CustomTable>
        <BtnWrap className="md:!pt-6">
          <CustomBtn size="lg" variant="outline" className="grow w-full md:grow-0 md:w-auto md:hidden" >선택 수조 삭제</CustomBtn>
          <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto ml-auto" >수조 추가</CustomBtn>
        </BtnWrap>
      </Container>
    </>
  )
}
