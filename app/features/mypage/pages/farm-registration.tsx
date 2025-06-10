import {useState} from "react";
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/Input";
import PageTitle from "~/common/components/PageTitle";
import PageUtilLine from "~/common/components/PageUtilLine";
import CustomLabel from "~/common/components/ui/CustomLabel";
import GroupItem from "~/common/components/modules/GroupItem";
import {AccordionItem} from "~/common/components/modules/AccordionItem";
import TableTd from "~/features/diary/components/table-td";
import ModalSetFeed from "~/features/diary/components/modal-set-feed";
import ModalTankMove from "~/features/diary/components/modal-tank-move";
import DensityAlert from "~/features/diary/components/density-alert";
import TankName from "~/features/diary/components/tank-name";
import GroupItemList from "~/common/components/modules/GroupItemList";

export default function FarmRegistration() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
      <PageTitle title="양식장 등록 관리" desc="양식장 등록 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <PageUtilLine>
        <div className="flex items-center gap-4 w-56 md:w-auto mx-auto md:mx-0">
          <CustomLabel label="기준일자 선택" className="hidden md:flex"/>
          <input id="date-pick" type="date" className="border-b border-slate-800 grow md:w-56 h-10 px-2" />
        </div>
      </PageUtilLine>
      <GroupItemList />
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0">
          <div className="hidden lg:flex items-center px-4 py-2 text-sm font-semibold bg-slate-600 text-slate-300 rounded-3xl rounded-b-none gap-1">
            <div className="text-center flex-1">수조</div>
            <div className="text-center flex-1">평균체중(kg)</div>
            <div className="text-center flex-1">폐사(미)</div>
            <div className="text-center flex-1">실측(미)</div>
            <div className="text-center flex-1">급이량</div>
            <div className="text-center flex-1">기준 급이량(kg)</div>
            <div className="text-center flex-1">이동(분조)미수</div>
            <div className="text-center flex-1">미수</div>
            <div className="text-center flex-1">밀식률(%)</div>
            <div className="text-center flex-1">총중량(kg)</div>
          </div>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="violet" btnControl="lg:hidden" childControl="lg:!px-4 lg:!py-2" className="lg:rounded-none lg:border-b lg:border-b-slate-300">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" className="!hidden lg:!flex">
                <TankName variant="violet" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" number value="1" inputStyle="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" number value="30" inputStyle="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" number value="-30" inputStyle="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" number value="3" inputStyle="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" number value="5" readOnly inputStyle="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" number value="+30" inputStyle="text-center" onClick={() => setOpenModal("modal2")}/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" number value="3,000" readOnly inputStyle="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="red" value="90%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" number value="43" readOnly inputStyle="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
        </div>
      </Container>
      {/* 표출정보 수정 모달 */}
      <ModalSetFeed
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
      <ModalTankMove
        isOpen={openModal === "modal2"}
        onClose={() => setOpenModal(null)}
      />
    </>
  )
}
