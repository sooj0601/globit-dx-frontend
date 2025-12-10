import { useState } from 'react';
import Container from '~/common/layouts/Container';
import PageTitle from '~/common/components/ui/layout/PageTitle';
import Input from '~/common/components/ui/form/Input';
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {Search, Download, Check} from 'lucide-react';
import {AccordionDataTable} from "~/features/journal/components/accordion-data-table";
import {SearchBox, SearchBoxItem} from "~/features/dashboard/components/search-box";
import Select from "~/common/components/ui/form/Select";
import StatusSelect from "~/features/journal/components/status-select";
import RadioGroup from "~/common/components/ui/form/RadioGroup";
import Pagination from "~/common/components/ui/table/Pagination";


export default function DataPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [schStatus, setSchStatus] = useState("전체");
  const [status1, setStatus1] = useState('진행중');
  const [status2, setStatus2] = useState('진행중');
  const [status3, setStatus3] = useState('미진행');
  const [status4, setStatus4] = useState('완료');
  const [status5, setStatus5] = useState('완료');
  const [status6, setStatus6] = useState('미진행');
  const [status7, setStatus7] = useState('보완요청중');
  const [status8, setStatus8] = useState('진행중');

  return (
    <>
      <PageTitle title="양식일지 관리" desc="등록된 양식일지 사진 현황을 조회할 수 있습니다. 완료된 항목은 조회되지 않습니다." />
      <SearchBox align="start">
        <SearchBoxItem label="기간">
          <Input
            id="date-pick"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="md:w-40 w-full"
          />
          <span className="hidden md:block">부터</span>
          ~
          <Input
            id="date-pick"
            type="date"
            value={selectedDate2}
            onChange={(e) => setSelectedDate2(e.target.value)}
            className="md:w-40 w-full"
          />
          <span className="hidden md:block">까지</span>
        </SearchBoxItem>
        <SearchBoxItem label="양식장">
          <Select
            name="farmName"
            onChange={(e) => setSelectedFarm(e.target.value)}
            className="md:w-48 w-full"
            value={selectedFarm}
            options={[
              { label: '양식장 1', value: '양식장 1' },
              { label: '양식장 2', value: '양식장 2' },
              { label: '양식장 3', value: '양식장 3' },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="입력상태">
          <RadioGroup
            name="schStatus"
            value={schStatus}
            onChange={setSchStatus}
            options={[
              { value: "전체", label: "전체" },
              { value: "진행중", label: "진행중" },
              { value: "미진행", label: "미진행" },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="담당자">
          <Input
            type="text"
            className="md:w-40 w-full"
            placeholder="입력하세요"
          />
        </SearchBoxItem>
        <CustomBtn rightIcon={<Search size={16}/>}>조회</CustomBtn>
      </SearchBox>
      <Container>
        <div className="flex flex-col gap-4">
          <AccordionDataTable
            headers={['등록 일시', '양식일지 날짜', '양식장', '입력상태', '담당자']}
            rows={[
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status1} onChange={setStatus1} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status2} onChange={setStatus2} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status3} onChange={setStatus3} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="primary" rightIcon={<Check size={16} />}>진행중</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status4} onChange={setStatus4} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status5} onChange={setStatus5} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status6} onChange={setStatus6} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="primary" rightIcon={<Check size={16} />}>진행중</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status7} onChange={setStatus7} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
              {
                row: ['2025-11-12 08:00:00', '2025-11-12', <strong>한손양식장</strong>, <StatusSelect value={status8} onChange={setStatus8} className="!w-32 mx-auto" />, '고다혜'],
                content: (
                  <div className='flex flex-col gap-4 w-full'>
                    <div className='bg-slate-100 w-full aspect-3/1 rounded-xl flex items-center justify-center'>
                      <span className="font-bold text-4xl text-slate-400">양식일지 사진</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <CustomBtn size="sm" variant="outline" rightIcon={<Download size={16} />}>다운로드</CustomBtn>
                      <CustomBtn size="sm" variant="success" rightIcon={<Check size={16} />}>입력완료</CustomBtn>
                    </div>
                  </div>
                )
              },
            ]}
          />
          <Pagination currentPage={3} totalPages={10} />
        </div>
      </Container>
    </>
  );
}
