import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import TableTd from "~/common/components/ui/table/TableTd";
import PopoverSetFeed from "~/features/diary/components/popover-set-feed";
import PopoverTankMove from "~/features/diary/components/popover-tank-move";
import DensityInput from "~/features/diary/components/density-input";
import TankName from "~/common/components/modules/TankName";
import GroupItemList from "~/common/components/modules/GroupItemList";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {TableRow} from "~/common/components/ui/table/TableRow";

export default function DiaryPage() {
  return (
    <>
      <PageTitle title="통합 관리" desc="통합 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto mx-auto md:mx-0">
            <div className="flex items-center gap-4 grow max-w-3/4 md:max-w-none">
              <CustomLabel label="기준일자 선택" className="hidden md:flex"/>
              <input id="date-pick" type="date" className="border-b border-slate-800 grow md:w-56 h-9 px-2" />
            </div>
          </div>
          <GroupItemList />
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center flex-1">수조</div>
              <div className="text-center flex-1">평균체중</div>
              <div className="text-center flex-1">폐사</div>
              <div className="text-center flex-1">실측</div>
              <div className="text-center flex-1">급이량</div>
              <div className="text-center flex-1">기준 급이량</div>
              <div className="text-center flex-1">이동(분조)미수</div>
              <div className="text-center flex-1">미수</div>
              <div className="text-center flex-1">밀식률</div>
              <div className="text-center flex-1">총중량</div>
            </>
          }>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-green-500">60%</dd>
              </dl>
            }
            variant="violet" bodyControl="lg:!p-2">
              <TableTd label="수조" className="!hidden lg:!flex flex-1" >
                <TankName variant="violet" tankName="A-1" />
              </TableTd>
              <TableTd label="평균체중" className="flex-1">
                <Input type="text" number value="1" unit="kg" />
              </TableTd>
              <TableTd label="폐사" className="flex-1">
                <Input type="text" number value="30" unit="미"/>
              </TableTd>
              <TableTd label="실측" className="flex-1">
                <Input type="text" number value="-30" unit="미"/>
              </TableTd>
              <TableTd label="급이량" className="flex-1">
                <PopoverSetFeed/>
              </TableTd>
              <TableTd label="기준 급이량" className="flex-1">
                <Input type="text" number value="5" readOnly unit="kg"/>
              </TableTd>
              <TableTd label="이동(분조)미수" className="flex-1">
                <PopoverTankMove/>
              </TableTd>
              <TableTd label="미수" className="flex-1">
                <Input type="text" number value="3,000" unit="미" readOnly/>
              </TableTd>
              <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
                <DensityInput variant="green" value="60%" />
              </TableTd>
              <TableTd label="총중량" className="flex-1">
                <Input type="text" number value="43" unit="kg" readOnly/>
              </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-green-500">60%</dd>
              </dl>
            }
            variant="violet" bodyControl="lg:!p-2">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" />
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <Input type="text" number value="1" unit="kg" />
            </TableTd>
            <TableTd label="폐사" className="flex-1">
              <Input type="text" number value="30" unit="미"/>
            </TableTd>
            <TableTd label="실측" className="flex-1">
              <Input type="text" number value="-30" unit="미"/>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <PopoverSetFeed/>
            </TableTd>
            <TableTd label="기준 급이량" className="flex-1">
              <Input type="text" number value="5" readOnly unit="kg"/>
            </TableTd>
            <TableTd label="이동(분조)미수" className="flex-1">
              <PopoverTankMove/>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <Input type="text" number value="3,000" unit="미" readOnly/>
            </TableTd>
            <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
              <DensityInput variant="green" value="60%" />
            </TableTd>
            <TableTd label="총중량" className="flex-1">
              <Input type="text" number value="43" unit="kg" readOnly/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-rose-500">90%</dd>
              </dl>
            }
            variant="lime" bodyControl="lg:!p-2">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="lime" tankName="A-1" />
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <Input type="text" number value="1" unit="kg" />
            </TableTd>
            <TableTd label="폐사" className="flex-1">
              <Input type="text" number value="30" unit="미"/>
            </TableTd>
            <TableTd label="실측" className="flex-1">
              <Input type="text" number value="-30" unit="미"/>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <PopoverSetFeed/>
            </TableTd>
            <TableTd label="기준 급이량" className="flex-1">
              <Input type="text" number value="5" readOnly unit="kg"/>
            </TableTd>
            <TableTd label="이동(분조)미수" className="flex-1">
              <PopoverTankMove/>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <Input type="text" number value="3,000" unit="미" readOnly/>
            </TableTd>
            <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
              <DensityInput variant="red" value="90%" />
            </TableTd>
            <TableTd label="총중량" className="flex-1">
              <Input type="text" number value="43" unit="kg" readOnly/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-sky-500">10%</dd>
              </dl>
            }
            variant="pink" bodyControl="lg:!p-2">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="pink" tankName="A-1" />
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <Input type="text" number value="1" unit="kg" />
            </TableTd>
            <TableTd label="폐사" className="flex-1">
              <Input type="text" number value="30" unit="미"/>
            </TableTd>
            <TableTd label="실측" className="flex-1">
              <Input type="text" number value="-30" unit="미"/>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <PopoverSetFeed/>
            </TableTd>
            <TableTd label="기준 급이량" className="flex-1">
              <Input type="text" number value="5" readOnly unit="kg"/>
            </TableTd>
            <TableTd label="이동(분조)미수" className="flex-1">
              <PopoverTankMove/>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <Input type="text" number value="3,000" unit="미" readOnly/>
            </TableTd>
            <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
              <DensityInput variant="blue" value="10%" />
            </TableTd>
            <TableTd label="총중량" className="flex-1">
              <Input type="text" number value="43" unit="kg" readOnly/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-green-500">60%</dd>
              </dl>
            }
            variant="violet" bodyControl="lg:!p-2">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" />
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <Input type="text" number value="1" unit="kg" />
            </TableTd>
            <TableTd label="폐사" className="flex-1">
              <Input type="text" number value="30" unit="미"/>
            </TableTd>
            <TableTd label="실측" className="flex-1">
              <Input type="text" number value="-30" unit="미"/>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <PopoverSetFeed/>
            </TableTd>
            <TableTd label="기준 급이량" className="flex-1">
              <Input type="text" number value="5" readOnly unit="kg"/>
            </TableTd>
            <TableTd label="이동(분조)미수" className="flex-1">
              <PopoverTankMove/>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <Input type="text" number value="3,000" unit="미" readOnly/>
            </TableTd>
            <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
              <DensityInput variant="green" value="60%" />
            </TableTd>
            <TableTd label="총중량" className="flex-1">
              <Input type="text" number value="43" unit="kg" readOnly/>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            accordion
            header={
              <dl className="flex gap-2 items-center mr-4 text-sm">
                <dt>밀식률</dt>
                <dd className="text-rose-500">90%</dd>
              </dl>
            }
            variant="brown" bodyControl="lg:!p-2">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="brown" tankName="A-1" />
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <Input type="text" number value="1" unit="kg" />
            </TableTd>
            <TableTd label="폐사" className="flex-1">
              <Input type="text" number value="30" unit="미"/>
            </TableTd>
            <TableTd label="실측" className="flex-1">
              <Input type="text" number value="-30" unit="미"/>
            </TableTd>
            <TableTd label="급이량" className="flex-1">
              <PopoverSetFeed/>
            </TableTd>
            <TableTd label="기준 급이량" className="flex-1">
              <Input type="text" number value="5" readOnly unit="kg"/>
            </TableTd>
            <TableTd label="이동(분조)미수" className="flex-1">
              <PopoverTankMove/>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <Input type="text" number value="3,000" unit="미" readOnly/>
            </TableTd>
            <TableTd label="밀식률" className="!hidden lg:!flex flex-1">
              <DensityInput variant="red" value="90%" />
            </TableTd>
            <TableTd label="총중량" className="flex-1">
              <Input type="text" number value="43" unit="kg" readOnly/>
            </TableTd>
          </TableRow>
        </CustomTable>
      </Container>
    </>
  )
}
