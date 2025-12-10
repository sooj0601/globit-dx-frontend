import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomTable from "~/common/components/ui/table/CustomTable";
import { TableRow } from "~/common/components/ui/table/TableRow";
import { useState } from "react";
import { SearchBox, SearchBoxItem } from "~/features/dashboard/components/search-box";
import Select from "~/common/components/ui/form/Select";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import { Search } from "lucide-react";
import DataBadge from "~/features/cost/components/data-badge";
import ToggleGroup from "~/features/cost/components/toggle-group";
import RadioGroup from "~/common/components/ui/form/RadioGroup";
import { ChevronDown } from "lucide-react";
import Pagination from "~/common/components/ui/table/Pagination";

export default function CostPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [selectedFarm, setSelectedFarm] = useState("");
  const [schStatus, setSchStatus] = useState("전체");

  const [showDetailMobile, setShowDetailMobile] = useState(false);

  return (
    <>
      <PageTitle
        title="비용 관리"
        desc="입식, 출하, 사료, 약품 등의 비용을 일괄 관리하실 수 있습니다."
      />

      <SearchBox align="start">
        {/* 원래 1번: 기간 (DOM 순서 그대로 유지) */}
        <SearchBoxItem
          label="기간"
          className={`
            order-3 md:order-none
            ${!showDetailMobile ? "hidden md:flex" : ""}
          `}
        >
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
            id="date-pick-2"
            type="date"
            value={selectedDate2}
            onChange={(e) => setSelectedDate2(e.target.value)}
            className="md:w-40 w-full"
          />
          <span className="hidden md:block">까지</span>
        </SearchBoxItem>

        {/* 원래 2번: 토글 그룹 (입식/출하/사료/약품) */}
        <SearchBoxItem label="구분"
          className="order-1 md:order-none"
        >
          <ToggleGroup />
        </SearchBoxItem>

        {/* 모바일 전용 "자세히" 버튼 (토글 바로 아래) */}
        <SearchBoxItem className="order-2 w-full flex justify-end md:hidden">
          <CustomBtn
            type="button"
            size="sm"
            variant="ghost"
            rightIcon={<ChevronDown size={16} className={showDetailMobile ? "rotate-180" : ""} />}
            onClick={() => setShowDetailMobile((prev) => !prev)}
            className="mx-auto -my-1"
          >
            {showDetailMobile ? "검색 옵션 접기" : "검색 옵션 더보기"}
          </CustomBtn>
        </SearchBoxItem>

        {/* 원래 3번: 양식장 */}
        <SearchBoxItem
          label="양식장"
          className={`
            order-4 md:order-none
            ${!showDetailMobile ? "hidden md:flex" : ""}
          `}
        >
          <Select
            name="farmName"
            onChange={(e) => setSelectedFarm(e.target.value)}
            className="md:w-48 w-full"
            value={selectedFarm}
            options={[
              { label: "양식장 1", value: "양식장 1" },
              { label: "양식장 2", value: "양식장 2" },
              { label: "양식장 3", value: "양식장 3" },
            ]}
          />
        </SearchBoxItem>

        {/* 원래 4번: 비용입력여부 */}
        <SearchBoxItem
          label="비용입력여부"
          className={`
            order-5 md:order-none
            ${!showDetailMobile ? "hidden md:flex" : ""}
          `}
        >
          <RadioGroup
            name="schStatus"
            value={schStatus}
            onChange={setSchStatus}
            options={[
              { value: "전체", label: "전체" },
              { value: "입력", label: "입력" },
              { value: "미입력", label: "미입력" },
            ]}
          />
        </SearchBoxItem>

        {/* 원래 5번: 조회 버튼 */}
        <CustomBtn
          className={`
            order-6 md:order-none
            ${!showDetailMobile ? "hidden md:inline-flex" : ""}
          `}
          rightIcon={<Search size={16} />}
        >
          조회
        </CustomBtn>
      </SearchBox>

      <Container>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-56">구분</div>
              <div className="text-center w-36">날짜</div>
              <div className="text-center w-40">수량/무게</div>
              <div className="text-center flex-1">기타</div>
              <div className="text-center w-48">가격</div>
            </>
          }
        >
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <span>겨울넙치</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <strong>겨울넙치</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="red">출하</DataBadge>
                <span>가을 도다리</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="red">출하</DataBadge>
                <strong>가을 도다리</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="yellow">약품</DataBadge>
                <span>비타민J</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="yellow">약품</DataBadge>
                <strong>비타민J</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="indigo">사료</DataBadge>
                <span>튼튼사료</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="indigo">사료</DataBadge>
                <strong>튼튼사료</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <span>겨울넙치</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <strong>겨울넙치</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
          <TableRow defaultOpen={false}
            title={
              <div className="flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <span>겨울넙치</span>
              </div>
            }
            accordion
            header={<span className="font-normal text-slate-500">2025-11-12</span>}
            footer={
              <TableTd label="가격" className="flex-1">
                <Input type="text" number value="230000" unit="원" className="w-36" />
              </TableTd>
            }
            bodyControl="lg:!p-2"
          >
            <TableTd label="구분" className="!hidden lg:!flex w-56">
              <div className="px-2 flex items-center gap-1">
                <DataBadge variant="green">입식</DataBadge>
                <strong>겨울넙치</strong>
              </div>
            </TableTd>
            <TableTd label="날짜" className="!hidden lg:!flex w-36">
              <span className="w-full text-center">2025-11-12</span>
            </TableTd>
            <TableTd label="수량/무게" className="w-full lg:w-40 col-span-2">
              <span className="w-full lg:text-center">3천마리 - 23kg</span>
            </TableTd>
            <TableTd label="기타" className="flex-1 col-span-2">
              <span className="w-full lg:text-center"></span>
            </TableTd>
            <TableTd label="가격" className="!hidden lg:!flex w-48">
              <Input type="text" number value="230000" unit="원" className="w-full lg:w-44" />
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={3} totalPages={10} />
      </Container>
    </>
  );
}
