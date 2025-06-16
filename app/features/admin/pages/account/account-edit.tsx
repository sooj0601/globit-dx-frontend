import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import InputSet from "~/common/components/ui/form/InputSet";
import InputGroup from "~/common/components/ui/form/InputGroup";
import RequireGuide from "~/common/components/modules/RequireGuide";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Plus, Trash2} from "lucide-react";
import {TableRow} from "~/common/components/ui/table/TableRow";
import CustomTable from "~/common/components/ui/table/CustomTable";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import Select from "~/common/components/ui/form/Select";
import {useState} from "react";
import TableTd from "~/common/components/ui/table/TableTd";
import BtnWrap from "~/common/components/ui/form/BtnWrap";



export default function AccountEdit() {
  const [selectedFeed1, setSelectedFeed1] = useState('');
  const [selectedFeed2, setSelectedFeed2] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  return (
    <>
      <PageTitle title="가입자 정보 수정" desc="가입자 정보 수정 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <div>
          {/*<RequireGuide />*/}
          <InputGroup>
            <InputSet label="이메일">
              <Input type="text" className="grow" value="hong@globit.kr"/>
            </InputSet>
            <InputSet label="비밀번호 초기화">
              <CustomBtn variant="outline">비밀번호 초기화</CustomBtn>
            </InputSet>
            <InputSet label="별명">
              <Input type="text" className="grow" value="신짱구"/>
            </InputSet>
          </InputGroup>
          <InputGroup lineTop className="!gap-y-4">
            <CustomLabel label="담당고객" />
            <CustomTable
              tableHead={
                <>
                  <div className="text-center w-7">#</div>
                  <div className="text-center flex-1">고객이름</div>
                  <div className="text-center w-7"></div>
                </>
              }
              bottomBtn={
                <CustomBtn variant="ghost" className="w-full" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
              }
              className="md:col-span-2"
            >
              <TableRow variant="slate" header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
                <TableTd className="w-7 justify-center hidden lg:flex">
                  <p>1</p>
                </TableTd>
                <TableTd label="고객 이름" className="flex-1 justify-center col-span-2">
                  <Input type="text" value="신형만" />
                </TableTd>
                <TableTd className="hidden lg:flex w-7">
                  <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                </TableTd>
              </TableRow>
              <TableRow variant="slate" header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
                <TableTd className="w-7 justify-center hidden lg:flex">
                  <p>1</p>
                </TableTd>
                <TableTd label="고객 이름" className="flex-1 justify-center col-span-2">
                  <Input type="text" value="신형만" />
                </TableTd>
                <TableTd className="hidden lg:flex w-7">
                  <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                </TableTd>
              </TableRow>
            </CustomTable>
          </InputGroup>
          <BtnWrap>
            <CustomBtn to="/admin/account" size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto ml-auto" >저장</CustomBtn>
          </BtnWrap>
        </div>
      </Container>
    </>
  )
}
