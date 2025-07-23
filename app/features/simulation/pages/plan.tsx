import Container from '~/common/layouts/Container';
import ModuleWrap from '~/features/simulation/components/module-wrap';
import PageTitle from "~/common/components/ui/layout/PageTitle";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import GroupItem from "~/features/simulation/components/group-item";
import Input from "~/common/components/ui/form/Input";
import { InfoSet, InfoGroup } from "~/features/simulation/components/info-set";
import {
  GroupItemTable,
  GroupItemTableTd,
  GroupItemTableTr
} from "~/features/simulation/components/group-item-table";
import { useState } from "react";
import ChartPlaceholder from "~/features/simulation/components/chart-placeholder";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BtnWrap from "~/common/components/ui/form/BtnWrap";

export default function PlanPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PageTitle title="출하 예약 등록" desc="등록된 입식 그룹의 출하 예약을 수립할 수 있습니다." />
      <Container>
        <div className="flex flex-col gap-10 lg:gap-12 ">
          <ModuleWrap title="출하 계획 목록" className="relative" desc={<CustomBtn className="md:!flex !hidden" variant="primary" rightIcon={<Plus size={16}/>}>출하 계획 추가</CustomBtn>}>
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2}
                slidesPerGroup={1}
                navigation={{
                  nextEl: '.custom-swiper-button-next',
                  prevEl: '.custom-swiper-button-prev'
                }}
                className="!overflow-visible"
                breakpoints={{
                  0: { slidesPerView: 1, autoHeight: true },
                  768: { slidesPerView: 2, autoHeight: false }
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                <SwiperSlide>
                  <div className={`transition-all duration-300 ${activeIndex === 0 ? 'opacity-100' : 'opacity-60'}`}>
                      <GroupItem groupName="20250503-넙치-1" colorName="violet" state="active">
                        <InfoGroup className="w-full grid grid-cols-2">
                          <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                            <p>2025-05-03</p>
                          </InfoSet>
                          <InfoSet label="예상 폐사율"><p>11%</p></InfoSet>
                          <InfoSet label="월 평균 급이량"><p>20kg</p></InfoSet>
                          <InfoSet label="평균체중"><p>1.2kg</p></InfoSet>
                          <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                            <p>23,000,000원</p>
                          </InfoSet>
                        </InfoGroup>
                        <GroupItemTable colorName="violet"
                                        tableHead={<><div className="text-center flex-1">출하날짜</div><div className="text-center md:w-20">수조</div><div className="text-center flex-1">미수</div><div className="text-center flex-1">예상 수익</div><div className="text-center w-16"></div></>}
                                        bottomBtn={
                                          <CustomBtn variant="ghost" className="w-full text-violet-500" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
                                        }
                        >
                          <GroupItemTableTr>
                            <GroupItemTableTd label="출하 날짜" className="flex-1">2025-03</GroupItemTableTd>
                            <GroupItemTableTd label="수조" className="md:w-20">A1</GroupItemTableTd>
                            <GroupItemTableTd label="미수" className="flex-1">8,000</GroupItemTableTd>
                            <GroupItemTableTd label="예상 수익" className="flex-1">30,000,000</GroupItemTableTd>
                            <GroupItemTableTd className="justify-end border-t border-t-violet-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                              <CustomBtn className="bg-violet-500 hover:bg-violet-600">출하</CustomBtn>
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
                            <GroupItemTableTd className="justify-end border-t border-t-violet-300 md:border-0 mt-2 pt-2 md:mt-0 md:pt-0 md:w-16">
                              <CustomBtn className="bg-violet-500 hover:bg-violet-600">저장</CustomBtn>
                            </GroupItemTableTd>
                          </GroupItemTableTr>
                        </GroupItemTable>
                      </GroupItem>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`transition-all duration-300 ${activeIndex === 1 ? 'opacity-100' : 'opacity-60'}`}>
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`transition-all duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-60'}`}>
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`flex items-stretch transition-all duration-300 ${activeIndex === 3 ? 'opacity-100' : 'opacity-60'}`}>
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
                            <CustomBtn className="bg-pink-500 hover:bg-pink-600">출하</CustomBtn>
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
                            <CustomBtn className="bg-pink-500 hover:bg-pink-600">출하</CustomBtn>
                          </GroupItemTableTd>
                        </GroupItemTableTr>
                      </GroupItemTable>
                    </GroupItem>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="custom-swiper-button-prev absolute mt-6 md:mt-2 -left-6 md:-left-14 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <button className=" w-12 h-12 flex items-center justify-center cursor-pointer">
                  <ChevronLeft size={48} className="text-slate-300" />
                </button>
              </div>
              <div className="custom-swiper-button-next absolute mt-6 md:mt-2 -right-6 md:-right-14 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <button className=" w-12 h-12 flex items-center justify-center cursor-pointer">
                  <ChevronRight size={48} className="text-slate-300" />
                </button>
              </div>
            </div>
          </ModuleWrap>

          <ModuleWrap title="출하 예약 시뮬레이션">
            <ChartPlaceholder />
          </ModuleWrap>
          <BtnWrap className="md:hidden">
            <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >출하 계획 추가</CustomBtn>
          </BtnWrap>
        </div>
      </Container>
    </>
  );
}