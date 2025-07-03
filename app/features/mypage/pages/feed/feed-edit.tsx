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
import TabRadio from "~/common/components/ui/form/TabRadio";
import ModalHistory from "~/features/mypage/components/modal-history";



export default function FeedEdit() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [tab, setTab] = useState('tab1');
  const [feedType, setFeedType] = useState('');
  const [selectedFeed1, setSelectedFeed1] = useState('');
  const [selectedFeed2, setSelectedFeed2] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  return (
    <>
    <PageTitle title="사료 추가" desc="사료 추가 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
    <Container>
      <TabRadio
        name="example-tabs"
        selected={tab}
        onChange={setTab}
        options={[
          { label: '일반 사료 등록', value: 'tab1' },
          { label: '혼합 사료 등록', value: 'tab2' },
        ]}
      className="lg:max-w-44"
      />
      <div>
        {tab === 'tab1' && (
          <>
            <RequireGuide />
            <InputGroup>
              <InputSet label="사료구분">
                <Select
                  name="feedType"
                  onChange={(e) => setFeedType(e.target.value)}
                  className="grow"
                  value={feedType} // 추가
                  options={[
                    { label: '생사료', value: '생사료' },
                  ]}
                />
              </InputSet>
              <InputSet label="사료 이름">
                <Input type="text" className="grow" error="사료 이름을 입력하세요"/>
              </InputSet>
              <InputSet label="구매 일자">
                <Input
                  id="date-pick"
                  className="grow"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </InputSet>
            </InputGroup>
            <InputGroup lineTop>
              <InputSet label="사료 구매 중량">
                <Input type="text" className="grow" number unit="kg"/>
              </InputSet>
              <InputSet label="구매 수량">
                <Input type="text" className="grow" number/>
              </InputSet>
              <InputSet label="사료 총 중량" required>
                <Input type="text" className="grow" number unit="kg"/>
              </InputSet>
              <InputSet label="총 구매 금액" required>
                <Input type="text" className="grow" number unit="원"/>
              </InputSet>
              <InputSet label="구매 단가 금액">
                <Input type="text" className="grow" number unit="원"/>
              </InputSet>
              <InputSet label="구매처">
                <Input type="text" className="grow"/>
              </InputSet>
            </InputGroup>
          </>
        )}
        {tab === 'tab2' && (
          <>
            <RequireGuide />
            <InputGroup>
              <InputSet label="혼합 사료 이름">
                <Input type="text" className="grow" />
              </InputSet>
              <InputSet label="혼합 일자">
                <Input
                  id="date-pick2"
                  className="grow"
                  type="date"
                  value={selectedDate2}
                  onChange={(e) => setSelectedDate2(e.target.value)}
                />
              </InputSet>
            </InputGroup>
            <InputGroup lineTop className="!gap-y-4">
              <CustomLabel label="혼합 사료 추가" />
              <CustomTable
                tableHead={
                  <>
                    <div className="text-center w-7">#</div>
                    <div className="text-center flex-1">사료이름</div>
                    <div className="text-center flex-1">혼합량(kg)</div>
                    <div className="text-center flex-1 hidden md:block">구분</div>
                    <div className="text-center flex-1 hidden md:block">보유량</div>
                    <div className="text-center flex-1 hidden md:block">잔량</div>
                    <div className="text-center flex-1 hidden md:block">구매처</div>
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
                  <TableTd label="사료 이름" className="flex-1 justify-center col-span-2">
                    <Select
                      name="feedType"
                      className="grow"
                      onChange={(e) => setSelectedFeed1(e.target.value)}
                      value={selectedFeed1}
                      options={[
                        { label: '새우', value: '새우' },
                      ]}
                    />
                  </TableTd>
                  <TableTd label="혼합량" className="flex-1 justify-center col-span-2">
                    <Input number unit="kg" value="5" className="grow" />
                  </TableTd>
                  <TableTd label="구분" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="보유량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="잔량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="구매처" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd className="hidden lg:flex w-7">
                    <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                  </TableTd>
                </TableRow>
                <TableRow variant="slate" header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
                  <TableTd className="w-7 justify-center hidden lg:flex">
                    <p>1</p>
                  </TableTd>
                  <TableTd label="사료 이름" className="flex-1 justify-center col-span-2">
                    <Select
                      name="feedType"
                      className="grow"
                      onChange={(e) => setSelectedFeed2(e.target.value)}
                      value={selectedFeed2}
                      options={[
                        { label: '새우', value: '새우' },
                      ]}
                    />
                  </TableTd>
                  <TableTd label="혼합량" className="flex-1 justify-center col-span-2">
                    <Input number unit="kg" value="5" className="grow"/>
                  </TableTd>
                  <TableTd label="구분" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="보유량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="잔량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="구매처" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd className="hidden lg:flex w-7">
                    <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                  </TableTd>
                </TableRow>
              </CustomTable>
            </InputGroup>
            <InputGroup lineTop className="!gap-y-4">
              <CustomLabel label="약품 추가" />
              <CustomTable
                tableHead={
                  <>
                    <div className="text-center w-7">#</div>
                    <div className="text-center flex-1">약품이름</div>
                    <div className="text-center flex-1">혼합량(kg)</div>
                    <div className="text-center flex-1 hidden md:block">구분</div>
                    <div className="text-center flex-1 hidden md:block">보유량</div>
                    <div className="text-center flex-1 hidden md:block">잔량</div>
                    <div className="text-center flex-1 hidden md:block">구매처</div>
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
                  <TableTd label="약품 이름" className="flex-1 justify-center col-span-2">
                    <Select
                      name="feedType"
                      className="grow"
                      onChange={(e) => setSelectedMedicine(e.target.value)}
                      value={selectedMedicine}
                      options={[
                        { label: '비타민', value: '비타민' },
                      ]}
                    />
                  </TableTd>
                  <TableTd label="혼합량" className="flex-1 justify-center col-span-2">
                    <Input number unit="kg" value="5" className="grow"/>
                  </TableTd>
                  <TableTd label="구분" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="보유량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="잔량" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd label="구매처" className="flex-1 justify-center hidden md:flex">
                    <p className="text-center">5</p>
                  </TableTd>
                  <TableTd className="hidden lg:flex w-7">
                    <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
                  </TableTd>
                </TableRow>
              </CustomTable>
            </InputGroup>
            <InputGroup lineTop>
              <InputSet label="사료 총 중량">
                <Input type="text" unit="kg" readOnly number className="grow" value="7,200" />
              </InputSet>
            </InputGroup>
          </>
        )}
        <BtnWrap>
          <div className="w-full md:w-auto gap-2 flex items-center justify-between grow">
            <CustomBtn size="lg" variant="outline" className="grow md:grow-0 md:w-auto" >초기화</CustomBtn>
            <CustomBtn size="lg" className="grow md:grow-0 md:w-auto" onClick={() => setOpenModal("modal1")} >이전 구매이력 불러오기</CustomBtn>
          </div>
          <CustomBtn to="/mypage/feed" size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >사료 저장</CustomBtn>
        </BtnWrap>
      </div>
    </Container>
    {/* 구매내역 팝업 */}
    <ModalHistory
      isOpen={openModal === "modal1"}
      onClose={() => setOpenModal(null)}
    />
    </>
  )
}
