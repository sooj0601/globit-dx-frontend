import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import InputSet from "~/common/components/ui/form/InputSet";
import InputGroup from "~/common/components/ui/form/InputGroup";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {useState} from "react";
import BtnWrap from "~/common/components/ui/form/BtnWrap";
import CustomBadge from "~/common/components/ui/form/CustomBadge";



export default function InfoEdit() {
  return (
    <>
      <PageTitle title="내 정보 관리" desc="내 정보 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <div>
          {/*<RequireGuide />*/}
          <InputGroup>
            <InputSet label="이메일">
              <Input type="text" className="grow" readOnly value="email@test.com" />
            </InputSet>
            <InputSet label="별명">
              <Input type="text" className="grow" value="신짱구"/>
            </InputSet>
            <InputSet label="비밀번호">
              <Input type="password" className="grow" value="tlsWKdrn"/>
            </InputSet>
            <InputSet label="비밀번호 확인">
              <Input type="password" className="grow" value="tlsWkdrn" error="비밀번호를 확인하세요"/>
            </InputSet>
          </InputGroup>
          <InputGroup lineTop className="!gap-y-4">
            <InputSet label="보유 양식장">
              <CustomBadge size="lg" className="!bg-blue-50 !border-blue-50 !text-blue-700">제주양식장</CustomBadge>
              <CustomBadge size="lg" className="!bg-blue-50 !border-blue-50 !text-blue-700">첨단양식장</CustomBadge>
            </InputSet>
          </InputGroup>
          <InputGroup lineTop className="!gap-y-4 md:hidden">
            <div className="flex items-center justify-end">
              <CustomBtn variant="danger" className="grow-0 px-8">회원탈퇴</CustomBtn>
            </div>
          </InputGroup>
          <BtnWrap>
            <CustomBtn size="lg" variant="danger" className="grow w-full md:grow-0 md:w-auto !hidden md:!flex" >회원탈퇴</CustomBtn>
            <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >저장</CustomBtn>
          </BtnWrap>
        </div>
      </Container>
    </>
  )
}
