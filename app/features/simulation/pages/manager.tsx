import Container from '~/common/layouts/Container';
import ModuleWrap from '~/features/simulation/components/module-wrap';

import PageTitle from "~/common/components/ui/layout/PageTitle";
import {Calendar, Plus, CircleAlert} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import GroupItem from "~/features/simulation/components/group-item";
import Input from "~/common/components/ui/form/Input";
import {InfoSet, InfoGroup} from "~/features/simulation/components/info-set";
import {
  GroupItemTable,
  GroupItemTableTd,
  GroupItemTableTr
} from "~/features/simulation/components/group-item-table";
import {useState} from "react";
import ModalTankPlus from "~/features/simulation/components/modal-tank-plus";
import ColorSelect from "~/features/simulation/components/color-select";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <PageTitle title="입・출하 관리" desc="출하 계획 수립 가능한 입식 그룹 목록을 조회/추가한 뒤 계획을 수립할 수 있습니다." />
      <Container>
        <div className="flex flex-col gap-10 lg:gap-12">
          <ModuleWrap title="입식 그룹 목록" desc={<CustomBtn to="/simulation/plan" rightIcon={<Calendar size={16}/>}>입출하 계획</CustomBtn>}>
            <div className="flex flex-col gap-2 bg-slate-100 rounded-2xl p-4">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 border-2 border-dotted border-slate-500 rounded"></div>
                  <strong>실제 입식 그룹</strong>
                </div>
                <span>실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 border-2 border-slate-500 rounded"></div>
                  <strong>계획 입식 그룹</strong>
                </div>
                <span>실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.</span>
              </div>
            </div>
          </ModuleWrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
            <GroupItem groupName="20250503-넙치-1" colorName="violet" state="active">
              <InfoGroup className="w-full grid grid-cols-2">
                <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                  <p>2025-05-03</p>
                </InfoSet>
                <InfoSet label="예상 폐사율">
                  <p>11%</p>
                </InfoSet>
                <InfoSet label="월 평균 급이량">
                  <p>20kg</p>
                </InfoSet>
                <InfoSet label="평균체중">
                  <p>1.2kg</p>
                </InfoSet>
                <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                  <p>23,000,000원</p>
                </InfoSet>
              </InfoGroup>
              <GroupItemTable colorName="violet"
                tableHead={
                  <>
                    <div className="text-center flex-1">출하날짜</div>
                    <div className="text-center md:w-20">수조</div>
                    <div className="text-center flex-1">미수</div>
                    <div className="text-center flex-1">예상 수익</div>
                    <div className="text-center w-16"></div>
                  </>
                }
              >
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1" >
                    2025-03
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20" >
                    A1
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1" >
                    8,000
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1" >
                    30,000,000
                  </GroupItemTableTd>
                  <GroupItemTableTd className="justify-end border-t border-t-violet-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                    <CustomBtn className="bg-violet-500 hover:bg-violet-600">출하</CustomBtn>
                  </GroupItemTableTd>
                </GroupItemTableTr>
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1" >
                    2025-03
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20" >
                    A1
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1" >
                    8,000
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1" >
                    30,000,000
                  </GroupItemTableTd>
                  <GroupItemTableTd className="justify-end border-t border-t-violet-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                    <CustomBtn className="bg-violet-500 hover:bg-violet-600">출하</CustomBtn>
                  </GroupItemTableTd>
                </GroupItemTableTr>
              </GroupItemTable>
            </GroupItem>
            <GroupItem groupName="20250503-넙치-1" colorName="violet" state="plan" mode="edit">
              <InfoGroup className="w-full grid grid-cols-2">
                <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                  <Input
                    id="date-pick"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="md:w-40"
                  />
                </InfoSet>
                <InfoSet label="예상 폐사율" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="%" number className="grow" value="11" />
                </InfoSet>
                <InfoSet label="월 평균 급이량" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="kg" number className="grow" value="20" />
                </InfoSet>
                <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="kg" number className="grow" value="1.2" />
                </InfoSet>
                <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="원" number className="grow" value="23,000,000" />
                </InfoSet>
              </InfoGroup>
              <GroupItemTable colorName="violet"
                tableHead={
                  <>
                    <div className="text-center flex-1">출하날짜</div>
                    <div className="text-center md:w-20">수조</div>
                    <div className="text-center flex-1">미수</div>
                    <div className="text-center flex-1">예상 수익</div>
                  </>
                }
                bottomBtn={
                  <CustomBtn variant="ghost" className="w-full text-violet-500" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
                }
              >
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1">
                    <Input type="text" className="grow" value="2025-03" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20">
                    <Input type="text" className="grow" value="A1" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1">
                    <Input type="text" number unit="미" className="grow" value="8,000" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1">
                    <Input type="text" number unit="원" className="grow" value="30,000,000" />
                  </GroupItemTableTd>
                </GroupItemTableTr>
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1">
                    <Input type="text" className="grow" value="2025-03" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20">
                    <Input type="text" className="grow" value="A1" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1">
                    <Input type="text" number unit="미" className="grow" value="8,000" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1">
                    <Input type="text" number unit="원" className="grow" value="30,000,000" />
                  </GroupItemTableTd>
                </GroupItemTableTr>
              </GroupItemTable>
            </GroupItem>
            <GroupItem groupName="20250503-넙치-1" colorName="lime" state="active" mode="edit">
              <InfoGroup className="w-full grid grid-cols-2">
                <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                  <p>2025-05-03</p>
                </InfoSet>
                <InfoSet label="예상 폐사율">
                  <p>11%</p>
                </InfoSet>
                <InfoSet label="월 평균 급이량">
                  <p>20kg</p>
                </InfoSet>
                <InfoSet label="평균체중">
                  <p>1.2kg</p>
                </InfoSet>
                <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                  <p>23,000,000원</p>
                </InfoSet>
              </InfoGroup>
              <GroupItemTable colorName="lime"
                              tableHead={
                                <>
                                  <div className="text-center flex-1">출하날짜</div>
                                  <div className="text-center md:w-20">수조</div>
                                  <div className="text-center flex-1">미수</div>
                                  <div className="text-center flex-1">예상 수익</div>
                                </>
                              }
                              bottomBtn={
                                <CustomBtn variant="ghost" className="w-full text-lime-500" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
                              }
              >
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1">
                    <Input type="text" className="grow" value="2025-03" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20">
                    <Input type="text" className="grow" value="A1" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1">
                    <Input type="text" number unit="미" className="grow" value="8,000" />
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1">
                    <Input type="text" number unit="원" className="grow" value="30,000,000" />
                  </GroupItemTableTd>
                </GroupItemTableTr>
              </GroupItemTable>
            </GroupItem>
            <GroupItem groupName="20250503-넙치-1" colorName="pink" state="active">
              <InfoGroup className="w-full grid grid-cols-2">
                <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                  <p>2025-05-03</p>
                </InfoSet>
                <InfoSet label="예상 폐사율">
                  <p>11%</p>
                </InfoSet>
                <InfoSet label="월 평균 급이량">
                  <p>20kg</p>
                </InfoSet>
                <InfoSet label="평균체중">
                  <p>1.2kg</p>
                </InfoSet>
                <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                  <p>23,000,000원</p>
                </InfoSet>
              </InfoGroup>
              <GroupItemTable colorName="pink"
                              tableHead={
                                <>
                                  <div className="text-center flex-1">출하날짜</div>
                                  <div className="text-center md:w-20">수조</div>
                                  <div className="text-center flex-1">미수</div>
                                  <div className="text-center flex-1">예상 수익</div>
                                  <div className="text-center w-16"></div>
                                </>
                              }
              >
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1" >
                    2025-03
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20" >
                    A1
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1" >
                    8,000
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1" >
                    30,000,000
                  </GroupItemTableTd>
                  <GroupItemTableTd className="justify-end border-t border-t-pink-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                    <CustomBtn className="!bg-pink-500 hover:!bg-pink-600">출하</CustomBtn>
                  </GroupItemTableTd>
                </GroupItemTableTr>
                <GroupItemTableTr>
                  <GroupItemTableTd label="출하 날짜" className="flex-1" >
                    2025-03
                  </GroupItemTableTd>
                  <GroupItemTableTd label="수조" className="md:w-20" >
                    A1
                  </GroupItemTableTd>
                  <GroupItemTableTd label="미수" className="flex-1" >
                    8,000
                  </GroupItemTableTd>
                  <GroupItemTableTd label="예상 수익" className="flex-1" >
                    30,000,000
                  </GroupItemTableTd>
                  <GroupItemTableTd className="justify-end border-t border-t-pink-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                    <CustomBtn className="!bg-pink-500 hover:!bg-pink-600">출하</CustomBtn>
                  </GroupItemTableTd>
                </GroupItemTableTr>
              </GroupItemTable>
            </GroupItem>
            <GroupItem groupName="20250503-넙치-1" mode="create">
              <InfoGroup className="w-full grid grid-cols-2">
                <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                  <Input
                    id="date-pick"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="md:w-40"
                  />
                </InfoSet>
                <InfoSet label="어종" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="%" number className="grow" value="11" />
                </InfoSet>
                <InfoSet label="예상 폐사율">
                  <Input type="text" unit="%" number className="grow" value="11" />
                </InfoSet>
                <InfoSet label="월 평균 급이량">
                  <Input type="text" unit="kg" number className="grow" value="20" />
                </InfoSet>
                <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="kg" number className="grow" value="1.2" />
                </InfoSet>
                <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                  <Input type="text" unit="원" number className="grow" value="23,000,000" />
                </InfoSet>
                <InfoSet label="고유색상" className="col-span-2">
                  <ColorSelect errors="이미 해당 색상에 배정된 입식 그룹이 있습니다."/>
                </InfoSet>
                <InfoSet label="수조" className="col-span-2">
                  <CustomBtn variant="outline" onClick={() => setOpenModal("modal1")}>수조 추가</CustomBtn>
                </InfoSet>
              </InfoGroup>
              <div className="flex flex-col gap-2 pt-4 md:pt-2 md:flex-row md:justify-between md:items-center items-stretch w-full">
                <p className="flex items-center gap-2 text-slate-500">
                  <CircleAlert size={16}/>
                  <span>입하군 저장 후 출하 계획을 등록할 수 있습니다.</span>
                </p>
                <CustomBtn variant="primary" size="lg">입하군 저장</CustomBtn>
              </div>
            </GroupItem>
            <a href="#" className={`rounded-2xl p-4 bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-400 hover:text-slate-500 transition-colors duration-200 text-xl md:text-3xl`}>
              추가 <Plus className="ml-1 text-xl md:text-3xl"/>
            </a>
          </div>
        </div>
      </Container>
      {/* 수조 추가 팝업 */}
      <ModalTankPlus
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}
