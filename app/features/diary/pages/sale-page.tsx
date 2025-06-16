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



export default function SalePage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedTank, setSelectedTank] = useState('A-3');
  return (
    <>
      <PageTitle title="출하" desc="출하 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <div>
          <RequireGuide />
          <InputGroup>
            <InputSet label="출하 이름" className="md:col-span-2">
              <Input type="text" readOnly value="20250000-넙치-00001" className="grow max-w-[452px]"/>
            </InputSet>
            <InputSet label="출하일자 선택" required>
              <Select
                name="saleDate"
                className="grow"
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
                options={[
                  { label: '2025-00-00', value: '2025-00-00' },
                ]}
                error="출하일자를 선택해 주세요"
              />
            </InputSet>
            <InputSet label="출하어종 선택" required >
              <Select
                name="saleFish"
                className="grow"
                onChange={(e) => setSelectedFish(e.target.value)}
                value={selectedFish}
                options={[
                  { label: '넙치', value: '넙치'},
                ]}
                error="출하어종을 선택해 주세요"
              />
            </InputSet>
          </InputGroup>
          <InputGroup lineTop>
            <CustomTable
              tableHead={
                <>
                  <div className="text-center flex-1">수조 선택</div>
                  <div className="text-center flex-1">출하 무게</div>
                  <div className="text-center flex-1">평균 무게</div>
                  <div className="text-center flex-1">단가</div>
                  <div className="text-center flex-1">출하미수</div>
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
            <InputSet label="출하 미수">
              <Input type="text" unit="미" readOnly number className="grow" value="7,200" />
            </InputSet>
          </InputGroup>
          <InputGroup lineTop>
            <InputSet label="실 출하 중량">
              <Input type="text" readOnly unit="kg" number value="9,000,000" className="grow" />
            </InputSet>
            <InputSet label="판매 미수">
              <Input type="text" unit="미" number value="9,000,000" className="grow" />
            </InputSet>
            <InputSet label="계약 출하 총 중량">
              <Input type="text" unit="kg" number value="9,000,000" className="grow"/>
            </InputSet>
            <InputSet label="판매 금액 입력" required>
              <Input type="text" unit="원" number value="9,000,000" className="grow"/>
            </InputSet>
          </InputGroup>
          <BtnWrap>
            <CustomBtn size="lg" variant="primary" className="grow w-full ml-auto md:grow-0 md:w-auto" >저장</CustomBtn>
          </BtnWrap>
        </div>
      </Container>
    </>
  )
}
