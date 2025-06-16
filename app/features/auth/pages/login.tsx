import CustomBtn from "~/common/components/ui/form/CustomBtn";
import InputGroup from "~/common/components/ui/form/InputGroup";
import InputSet from "~/common/components/ui/form/InputSet";
import Input from "~/common/components/ui/form/Input";


export default function Login() {
  return (
    <div className="flex flex-col justify-center gap-4 fixed inset-0 bg-white p-6 md:rounded-2xl md:p-10 md:w-[460px] md:h-fit md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:shadow-lg md:shadow-blue-800/10">

      <img src="/assets/logo-vertical.svg" alt="양식통 로고" className="w-36 mx-auto -mt-20 md:mt-0" />

      <InputGroup variant="col" className="!p-0">
        <InputSet label="아이디" variant="col">
          <Input type="text" className="grow" />
        </InputSet>
        <InputSet label="비밀번호" variant="col">
          <Input type="password" className="grow" />
        </InputSet>
      </InputGroup>

      <div className="flex justify-end items-center w-full">
        <CustomBtn variant="ghost" size="sm" className="!p-0 underline text-slate-500">
          비밀번호 찾기
        </CustomBtn>
      </div>

      <CustomBtn variant="primary" size="lg" className="w-full">
        로그인
      </CustomBtn>

      <div className="flex justify-between items-center w-full">
        <p className="text-slate-500">아직 회원이 아니신가요?</p>
        <CustomBtn variant="ghost" size="sm" color="primary" className="!p-0">
          회원가입 하기
        </CustomBtn>
      </div>
    </div>
  );
}
