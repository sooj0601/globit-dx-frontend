import {X} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import RequireGuide from "~/common/components/modules/RequireGuide";
import InputGroup from "~/common/components/ui/form/InputGroup";
import InputSet from "~/common/components/ui/form/InputSet";
import Input from "~/common/components/ui/form/Input";
import TabRadio from "~/common/components/ui/form/TabRadio";
import {useState} from "react";


export default function SignUp() {
  const [tab, setTab] = useState('tab1');
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10 bg-white md:rounded-2xl md:shadow-lg md:shadow-blue-800/10 md:w-[560px] md:h-full md:max-h-[880px] fixed inset-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold">회원가입</h2>
        <button type="button"
                className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-800 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <span className="font-bold">취소</span><X size={24} />
        </button>
      </div>
      <TabRadio
        name="example-tabs"
        selected={tab}
        onChange={setTab}
        options={[
          { label: '지역담당자', value: 'tab1' },
          { label: '양식장관리자', value: 'tab2' },
          { label: '양식장근로자', value: 'tab3' },
        ]}
      />
      <div className="overflow-y-auto grow">
        <RequireGuide className="!text-left" />
        <InputGroup variant="col">
          <InputSet label="이메일" required variant="col">
            <Input type="text" className="grow" error="이메일 주소를 확인해 주세요" />
          </InputSet>
          <InputSet label="비밀번호" required variant="col">
            <Input type="password" className="grow" />
          </InputSet>
          <InputSet label="비밀번호 확인" required variant="col">
            <Input type="password" className="grow" error="비밀번호를 확인해 주세요" />
          </InputSet>
        </InputGroup>
        <InputGroup variant="col" lineTop>
          <InputSet label="별명" required variant="col">
            <Input type="text" className="grow" />
          </InputSet>
          <InputSet label="설치 관리자 입력" required variant="col">
            <Input type="text" className="grow" />
          </InputSet>
        </InputGroup>
      </div>
      <div className="flex w-full">
        <CustomBtn variant="primary" size="lg" className="grow">회원가입</CustomBtn>
      </div>
    </div>
  );
}
