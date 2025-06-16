import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import InputSet from "~/common/components/ui/form/InputSet";
import InputGroup from "~/common/components/ui/form/InputGroup";
import RequireGuide from "~/common/components/modules/RequireGuide";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Plus, Trash2} from "lucide-react";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import Select from "~/common/components/ui/form/Select";
import {useState} from "react";
import CustomTable from "~/common/components/ui/table/CustomTable";
import BtnWrap from "~/common/components/ui/form/BtnWrap";



export default function EnterPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedTank, setSelectedTank] = useState('A-3');
  const [selectedUnit, setSelectedUnit] = useState('g');
  const [selectedUnit2, setSelectedUnit2] = useState('g');
  return (
    <>
      <PageTitle title="입식" desc="입식 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <div>
          <RequireGuide />
          <InputGroup>
            <InputSet label="입식 그룹 명" className="md:col-span-2">
              <Input type="text" readOnly value="20250000-넙치-00001" className="grow max-w-[452px]"/>
            </InputSet>
            <InputSet label="입식일자 선택" required>
              <Select
                name="enterDate"
                className="grow"
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
                options={[
                  { label: '2025-00-00', value: '2025-00-00' },
                ]}
                error="입식일자를 선택해 주세요"
              />
            </InputSet>
            <InputSet label="입식어종 선택" required >
              <Select
                name="enterFish"
                className="grow"
                onChange={(e) => setSelectedFish(e.target.value)}
                value={selectedFish}
                options={[
                  { label: '넙치', value: '넙치'},
                ]}
                error="입식어종을 선택해 주세요"
              />
            </InputSet>
          </InputGroup>
          <InputGroup lineTop>
            <CustomTable
              tableHead={
                <>
                  <div className="text-center flex-1">수조 선택</div>
                  <div className="text-center flex-1">입식미수</div>
                  <div className="text-center flex-1">총 중량</div>
                  <div className="text-center flex-1">면적</div>
                  <div className="text-center flex-1">밀도</div>
                  <div className="text-center w-7"></div>
                </>
              }
              bottomBtn={
                <CustomBtn variant="ghost" className="w-full" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
              }
              className="md:col-span-2"
            >
              <TableRow variant="slate" header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
                <TableTd label="수조 선택" className="flex-1 justify-center">
                  <Select
                    name="tankName"
                    onChange={(e) => setSelectedTank(e.target.value)}
                    value={selectedTank}
                    className="grow max-w-[160px]"
                    options={[
                      { label: 'A-3', value: 'A-3' },
                    ]}
                  />
                </TableTd>
                <TableTd label="출하 무게" className="flex-1 justify-center">
                  <Input number unit="kg" value="5" className="grow max-w-[160px]" />
                </TableTd>
                <TableTd label="평균 무게" className="flex-1 justify-center">
                  <Input number unit="kg" value="5" className="grow max-w-[160px]" />
                </TableTd>
                <TableTd label="단가(시가)" className="flex-1 justify-center">
                  <Input number unit="원" value="142,000" className="grow max-w-[160px]" />
                </TableTd>
                <TableTd label="출하 미수" className="flex-1 justify-center">
                  <Input number unit="미" value="5,000" className="grow max-w-[160px]" />
                </TableTd>
                <TableTd className="hidden lg:flex w-7">
                  <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                </TableTd>
              </TableRow>
            </CustomTable>
            <InputSet label="입식 미수">
              <Input type="text" unit="미" readOnly number className="grow" value="7,200" />
            </InputSet>
          </InputGroup>
          <InputGroup lineTop>
            <InputSet label="구입 금액 입력" required>
              <Input type="text" readOnly unit="원" number value="9,000,000" className="grow" />
            </InputSet>
            <InputSet label="구입 단가(참고)">
              <Input type="text" unit="원" number value="9,000,000" className="grow" />
            </InputSet>
            <InputSet label="체장">
              <Input type="text" unit="cm" number value="12.3" className="grow"/>
            </InputSet>
            <InputSet label="체고">
              <Input type="text" unit="cm" number value="12.3" className="grow"/>
            </InputSet>
            <InputSet label="입식 어종 평균 체중" required>
              <Input type="text" number value="9,000,000" className="grow"/>
              <Select
                name="enterWeightUnit"
                className="grow"
                onChange={(e) => setSelectedUnit(e.target.value)}
                value={selectedUnit}
                options={[
                  { label: 'g', value: 'g'},
                ]}
              />
            </InputSet>
            <InputSet label="입식 어종 총 체중">
              <Input type="text" number value="9,000,000" className="grow"/>
              <Select
                name="enterWeightUnit2"
                className="grow"
                onChange={(e) => setSelectedUnit2(e.target.value)}
                value={selectedUnit2}
                options={[
                  { label: 'g', value: 'g'},
                ]}
              />
            </InputSet>
          </InputGroup>
          <BtnWrap>
            <div className="w-full md:w-auto gap-2 flex items-center justify-between grow md:grow-0 flex-wrap mr-auto">
              <CustomBtn size="lg" variant="danger" className="grow md:grow-0 md:w-auto" >삭제</CustomBtn>
              <CustomBtn size="lg" variant="outline" className="grow md:grow-0 md:w-auto" >수정</CustomBtn>
              <CustomBtn size="lg" className="grow w-full md:grow-0 md:w-auto" >목록</CustomBtn>
            </div>
            <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >저장</CustomBtn>
          </BtnWrap>
        </div>
      </Container>
    </>
  )
}
