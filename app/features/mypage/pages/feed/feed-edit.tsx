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
import Tabs from "~/common/components/ui/layout/Tabs";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import Select from "~/common/components/ui/form/Select";
import {useState} from "react";
import TableTd from "~/common/components/ui/table/TableTd";



export default function FeedEdit() {
  const [selectedFeed1, setSelectedFeed1] = useState('');
  const [selectedFeed2, setSelectedFeed2] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  return (
    <>
    <PageTitle title="사료 추가" desc="사료 추가 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
    <Container>
      <Tabs
        btnFullWidth={false}
      tabs={[
        { label: '일반 사료 등록',
          content:
            <>일반 사료 등록</>
        },
        { label: '혼합 사료 등록',
          content:
            <div>
              <RequireGuide />
              <InputGroup>
                <InputSet label="혼합 사료 이름">
                  <Input type="text" className="grow" />
                </InputSet>
                <InputSet label="혼합 일자">
                  <Input type="date" className="grow"/>
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
                  <TableRow header={<CustomBtn variant="ghost" rightIcon={<Trash2 size={16}/>} className="text-rose-500 !px-0 text-sm !gap-1">삭제</CustomBtn>} className="lg:rounded-none lg:border-b lg:border-b-slate-300">
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
                  <TableRow header={<CustomBtn variant="ghost" rightIcon={<Trash2 size={16}/>} className="text-rose-500 !px-0 text-sm !gap-1">삭제</CustomBtn>} className="lg:rounded-none lg:border-b lg:border-b-slate-300">
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
                  <TableRow header={<CustomBtn variant="ghost" rightIcon={<Trash2 size={16}/>} className="text-rose-500 !px-0 text-sm !gap-1">삭제</CustomBtn>}>
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
              <div className="sticky bottom-0 inset-x-0 pb-8 pt-10 md:relative flex flex-col md:flex-row items-center md:justify-between gap-2 bg-white">
                <div className="w-full md:w-auto gap-2 flex items-center justify-between grow">
                  <CustomBtn to="/mypage/farm/edit" size="lg" variant="outline" className="grow w-full md:grow-0 md:w-auto" >초기화</CustomBtn>
                  <CustomBtn to="/mypage/farm/edit" size="lg" className="grow w-full md:grow-0 md:w-auto" >이전 구매이력 불러오기</CustomBtn>
                </div>
                <CustomBtn to="/mypage/farm/edit" size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >사료 저장</CustomBtn>
              </div>
            </div>
        }
      ]}
    />
    </Container>
    </>
  )
}
