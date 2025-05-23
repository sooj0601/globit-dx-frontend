import {useState} from "react";
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/Input";
import PageTitle from "~/common/components/PageTitle";
import PageUtilLine from "~/common/components/PageUtilLine";
import UtilLabel from "~/common/components/ui/UtilLabel";
import GroupItem from "~/common/components/modules/GroupItem";
import {AccordionItem} from "~/common/components/modules/AccordionItem";
import TableTd from "~/features/diary/components/table-td";
import ModalSetFeed from "~/features/diary/components/modal-set-feed";
import DensityAlert from "~/features/diary/components/density-alert";
import TankName from "~/features/diary/components/tank-name";

export default function DiaryPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
      <PageTitle title="통합 관리" className={'md:mb-8'} />
      <PageUtilLine className="justify-between">
        <div className="flex items-center gap-4 w-56 md:w-auto mx-auto md:mx-0">
          <UtilLabel label="기준일자 선택" className="hidden md:flex"/>
          <input id="date-pick" type="date" className="border-b border-slate-800 grow md:w-56 h-10 px-2" />
        </div>
      </PageUtilLine>
      <PageUtilLine className="mt-6 py-6 border-t border-slate-300">
        <UtilLabel label="입식 그룹"/>
        <div className="flex flex-wrap gap-2">
          <GroupItem key="group-item-1" name="2024-넙치-200030" colorName="violet" />
          <GroupItem key="group-item-2" name="2024-넙치-200030" colorName="lime" />
          <GroupItem key="group-item-3" name="2024-넙치-200030" colorName="yellow" />
          <GroupItem key="group-item-4" name="2024-넙치-200030" colorName="cyan" />
          <GroupItem key="group-item-5" name="2024-넙치-200030" colorName="indigo" />
          <GroupItem key="group-item-6" name="2024-넙치-200030" colorName="teal" />
          <GroupItem key="group-item-7" name="2024-넙치-200030" colorName="pink" />
        </div>
      </PageUtilLine>
      <Container>
        <div className="flex flex-col gap-2">
          <div className="hidden lg:flex items-center px-4 py-2 font-bold bg-slate-600 text-slate-300 rounded-full gap-1">
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
            variant="violet" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" className="!hidden lg:!flex">
                <TankName variant="violet" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="red" value="90%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="violet" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="violet" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="green" value="30%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="violet" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="violet" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="red" value="90%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="pink" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="pink" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="green" value="30%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="lime" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="lime" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="green" value="30%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="lime" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="lime" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="red" value="90%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="violet" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="violet" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="yellow" value="60%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
              </TableTd>
            </div>
          </AccordionItem>
          <AccordionItem
            title="A-1"
            alwaysOpenOnPc
            header={
              <dl className="flex gap-2 items-center mr-4">
                <dt>밀식률</dt>
                <dd>30%</dd>
              </dl>
            }
            variant="pink" btnControl="lg:hidden" className="lg:!px-4 lg:!py-2">
            <div className="flex flex-col lg:flex-row lg:items-center rounded-lg gap-2 lg:gap-1">
              <TableTd label="수조" onClick={() => setOpenModal("modal1")} className="!hidden lg:!flex">
                <TankName variant="pink" value="A-1" />
              </TableTd>
              <TableTd label="평균체중(kg)">
                <Input type="text" value="1" className="text-center"/>
              </TableTd>
              <TableTd label="폐사(미)">
                <Input type="text" value="30" className="text-center"/>
              </TableTd>
              <TableTd label="실측(미)">
                <Input type="text" value="-30" className="text-center"/>
              </TableTd>
              <TableTd label="급이량">
                <Input type="text" value="3" className="text-center" onClick={() => setOpenModal("modal1")}/>
              </TableTd>
              <TableTd label="기준 급이량(kg)">
                <Input type="text" value="5" readonly className="text-center"/>
              </TableTd>
              <TableTd label="이동(분조)미수">
                <Input type="text" value="+30" className="text-center"/>
              </TableTd>
              <TableTd label="미수">
                <Input type="text" value="3,000" readonly className="text-center"/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex">
                <DensityAlert variant="yellow" value="60%" />
              </TableTd>
              <TableTd label="총중량(kg)">
                <Input type="text" value="43" readonly className="text-center"/>
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
    </>
  )
}
