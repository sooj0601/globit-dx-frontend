import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Select from "~/common/components/ui/form/Select";
import Input from "~/common/components/ui/form/Input";
import InputSet from "~/common/components/ui/form/InputSet";
import {useState} from "react";
import TableTd from "~/common/components/ui/table/TableTd";
import {Plus, Trash2} from "lucide-react";
import Popover from "~/common/components/ui/popup/Popover";
import {TableRow} from "~/common/components/ui/table/TableRow";
import CustomTable from "~/common/components/ui/table/CustomTable";
import TabRadio from "~/common/components/ui/form/TabRadio";

export default function PopoverSetFeed() {
  const [selectedFeed, setSelectedFeed] = useState('');
  const [selectedFeed2, setSelectedFeed2] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [tab, setTab] = useState('tab1');
  return (
    <>
    <Popover
      title="급이량 설정"
      trigger={
        <Input type="text" number value="3" unit="kg"/>
      }
      className="w-[460px]"
    >
      <div className="shrink-0">
        <TabRadio
          name="example-tabs"
          selected={tab}
          onChange={setTab}
          options={[
            { label: '전체 입력', value: 'tab1' },
            { label: '시간 입력', value: 'tab2' },
          ]}
        />
      </div>
      <div className="overflow-y-auto grow min-h-0">
      {tab === 'tab1' &&
          <div className="flex flex-col gap-6">
            <InputSet label="사료 선택" variant="col">
              <Select
                name="feedType"
                onChange={(e) => setSelectedFeed(e.target.value)}
                className="grow"
                value={selectedFeed}
                options={[
                  { label: '혼합사료 1', value: '혼합사료 1' },
                  { label: '혼합사료 2', value: '혼합사료 2' },
                  { label: '혼합사료 3', value: '혼합사료 3' },
                ]}
              />
            </InputSet>
            <InputSet label="급이량 입력" variant="col">
              <Input className="grow" number unit="kg" value=""/>
            </InputSet>
          </div>
        }
        {tab === 'tab2' &&
          <CustomTable
            tableHead={
              <>
                <div className="text-center w-7">#</div>
                <div className="text-center flex-1">시간 선택</div>
                <div className="text-center flex-1">사료 선택</div>
                <div className="text-center flex-1">급이량(kg)</div>
                <div className="text-center w-7"></div>
              </>
            }
            bottomBtn={
              <CustomBtn variant="ghost" className="w-full" rightIcon={<Plus size={16}/>}>추가하기</CustomBtn>
            }>
            <TableRow header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
              <TableTd className="w-7 justify-center hidden lg:flex">
                <p>1</p>
              </TableTd>
              <TableTd label="시간 선택" className="flex-1 col-span-2">
                <Select
                  name="timeSelect"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="grow"
                  value={selectedTime}
                  options={[
                    { label: '09:00', value: '09:00' },
                  ]}
                />
              </TableTd>
              <TableTd label="사료 선택" className="flex-1 col-span-2">
                <Select
                  name="feedType2"
                  onChange={(e) => setSelectedFeed2(e.target.value)}
                  className="grow"
                  value={selectedFeed2}
                  options={[
                    { label: '혼합사료 2', value: '혼합사료 2' },
                  ]}
                />
              </TableTd>
              <TableTd label="급이량" className="flex-1 col-span-2">
                <Input className="grow" value="300" number unit="kg"/>
              </TableTd>
              <TableTd className="hidden lg:flex w-7">
                <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
              </TableTd>
            </TableRow>
            <TableRow header={<CustomBtn variant="ghost" size="xs" rightIcon={<Trash2 size={16}/>} className="text-rose-500">삭제</CustomBtn>}>
              <TableTd className="w-7 justify-center hidden lg:flex">
                <p>1</p>
              </TableTd>
              <TableTd label="시간 선택" className="flex-1 col-span-2">
                <Select
                  name="timeSelect"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="grow"
                  value={selectedTime}
                  options={[
                    { label: '09:00', value: '09:00' },
                  ]}
                />
              </TableTd>
              <TableTd label="사료 선택" className="flex-1 col-span-2">
                <Select
                  name="feedType2"
                  onChange={(e) => setSelectedFeed2(e.target.value)}
                  className="grow"
                  value={selectedFeed2}
                  options={[
                    { label: '혼합사료 2', value: '혼합사료 2' },
                  ]}
                />
              </TableTd>
              <TableTd label="급이량" className="flex-1 col-span-2">
                <Input className="grow" value="300" number unit="kg"/>
              </TableTd>
              <TableTd className="hidden lg:flex w-7">
                <CustomBtn variant="danger" size="icon" rightIcon={<Trash2 size={16}/>}><span className="sr-only">삭제</span></CustomBtn>
              </TableTd>
            </TableRow>
          </CustomTable>
        }
      </div>
      <div className="flex gap-2 shrink-0">
        <CustomBtn size="lg" variant="primary" className="grow">저장</CustomBtn>
      </div>
    </Popover>
    </>
  );
}
