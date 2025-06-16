import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import InputSet from "~/common/components/ui/form/InputSet";
import InputGroup from "~/common/components/ui/form/InputGroup";
import RequireGuide from "~/common/components/modules/RequireGuide";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Paperclip, Mail, Plus, Trash2} from "lucide-react";
import {TableRow} from "~/common/components/ui/table/TableRow";
import CustomTable from "~/common/components/ui/table/CustomTable";
import TableTd from "~/common/components/ui/table/TableTd";
import BtnWrap from "~/common/components/ui/form/BtnWrap";



export default function FarmEdit() {
  return (
    <>
    <PageTitle title="양식장 등록 관리" desc="양식장 등록 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
    <Container>
      <div>
        <RequireGuide />
        <InputGroup>
          <InputSet label="양식장 번호">
            <Input type="text" className="grow" readOnly />
          </InputSet>
          <InputSet label="양식장 이름" required>
            <Input type="text" placeholder="양식장 이름을 입력하세요" className="grow" error={"양식장 이름을 입력해 주세요"} />
          </InputSet>
          <InputSet label="소유자" required >
            <Input type="text" placeholder="소유자 이름을 입력하세요" className="grow" />
          </InputSet>
          <InputSet label="양식장 주소" className="md:col-span-2">
            <div className="flex flex-col grow gap-2">
              <InputSet>
                <Input type="text" className="grow" />
                <CustomBtn variant="outline" rightIcon={<Mail size={16}/>}>우편번호 찾기</CustomBtn>
              </InputSet>
              <Input type="text" className="grow" />
              <Input type="text" className="grow" />
            </div>
          </InputSet>
        </InputGroup>
        <InputGroup lineTop>
          <InputSet label="어업허가증" className="md:col-span-2">
            <Input type="text" value="어업허가증.pdf" className="grow" />
            <CustomBtn rightIcon={<Paperclip size={16}/>}>파일 업로드</CustomBtn>
          </InputSet>
          <InputSet label="사업자등록증" className="md:col-span-2">
            <Input type="text" value="사업자등록증.pdf" className="grow" />
            <CustomBtn rightIcon={<Paperclip size={16}/>}>파일 업로드</CustomBtn>
          </InputSet>
        </InputGroup>
        <InputGroup lineTop>
          <CustomTable
            tableHead={
              <>
                <div className="text-center flex-1">동이름</div>
                <div className="text-center flex-1">수조개수</div>
                <div className="text-center flex-1">수조크기</div>
                <div className="text-center w-7"></div>
              </>
            }
            bottomBtn={
              <CustomBtn variant="ghost" className="w-full" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
            }
            className="md:col-span-2"
          >
            <TableRow
              variant="slate"
              header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
              <TableTd label="동이름" className="flex-1 justify-center">
                <Input value="A동" className="max-w-[160px]" />
              </TableTd>
              <TableTd label="수조개수" className="flex-1 justify-center">
                <Input number value="32" />
              </TableTd>
              <TableTd label="수조크기" className="flex-1 justify-center">
                <Input number unit="㎡" value="32" />
              </TableTd>
              <TableTd className="hidden lg:flex w-7">
                <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
              </TableTd>
            </TableRow>
            <TableRow
              variant="slate"
              header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
              <TableTd label="동이름" className="flex-1 justify-center">
                <Input value="A동" className="max-w-[160px]" />
              </TableTd>
              <TableTd label="수조개수" className="flex-1 justify-center">
                <Input number value="32" />
              </TableTd>
              <TableTd label="수조크기" className="flex-1 justify-center">
                <Input number unit="㎡" value="32" />
              </TableTd>
              <TableTd className="hidden lg:flex w-7">
                <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
              </TableTd>
            </TableRow>
          </CustomTable>
        </InputGroup>
        <BtnWrap>
          <CustomBtn to="/mypage/farm" size="lg" variant="primary" className="grow w-full ml-auto md:grow-0 md:w-auto" >양식장 추가</CustomBtn>
        </BtnWrap>
      </div>
    </Container>
    </>
  )
}
