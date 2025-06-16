import Container from "~/common/layouts/Container";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import TableTd from "~/common/components/ui/table/TableTd";
import TankName from "~/common/components/modules/TankName";
import GroupItemList from "~/common/components/modules/GroupItemList";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {Printer} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import {TableRow} from "~/common/components/ui/table/TableRow";

export default function DiaryLogPage() {
  return (
    <>
      <PageTitle title="양식 이력 관리" desc="양식 이력 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto mx-auto md:mx-0">
            <div className="flex items-center gap-4 grow max-w-3/4 md:max-w-none">
              <CustomLabel label="기준일자 선택" className="hidden md:flex"/>
              <input id="date-pick" type="date" className="border-b border-slate-800 grow md:w-56 h-9 px-2" />
            </div>
            <CustomBtn size="sm" variant="outline" rightIcon={<Printer size={16} />}>
              사육관리일지 출력
            </CustomBtn>
          </div>
          <GroupItemList />
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center flex-1">수조</div>
              <div className="text-center flex-1">전일미수(중량)</div>
              <div className="text-center flex-1">폐사(병어)</div>
              <div className="text-center flex-1">출하(이동)</div>
              <div className="text-center flex-1">금일미수(중량)</div>
              <div className="text-center flex-1">평균체중</div>
              <div className="text-center flex-1">중량</div>
              <div className="text-center flex-1">기타사항</div>
            </>
          }>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="violet">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="violet">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="lime">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="lime" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="lime">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="lime" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="violet">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="violet" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="pink">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="pink" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
          <TableRow
          title="A-1"
          header={
            <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
              수조이력보기
            </CustomBtn>
          }
          accordion
          variant="violet">
          <TableTd label="수조" className="!hidden lg:!flex flex-1" >
            <TankName variant="violet" tankName="A-1" to="/diary/cage/A-1" />
          </TableTd>
          <TableTd label="전일미수(중량)" className="flex-1">
            <p className="grow lg:text-center">124 (34kg)</p>
          </TableTd>
          <TableTd label="폐사(병어)" className="flex-1">
            <p className="grow lg:text-center">124 (34)</p>
          </TableTd>
          <TableTd label="출하(이동)" className="flex-1">
            <p className="grow lg:text-center">124</p>
          </TableTd>
          <TableTd label="금일미수(중량)" className="flex-1">
            <p className="grow lg:text-center">124 (34)</p>
          </TableTd>
          <TableTd label="평균체중" className="flex-1">
            <p className="grow lg:text-center">3</p>
          </TableTd>
          <TableTd label="중량" className="flex-1">
            <p className="grow lg:text-center">124kg</p>
          </TableTd>
          <TableTd label="미수" className="flex-1">
            <p className="grow lg:text-center">-</p>
          </TableTd>
        </TableRow>
          <TableRow
          title="A-1"
          header={
            <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
              수조이력보기
            </CustomBtn>
          }
          accordion
          variant="teal">
          <TableTd label="수조" className="!hidden lg:!flex flex-1" >
            <TankName variant="teal" tankName="A-1" to="/diary/cage/A-1" />
          </TableTd>
          <TableTd label="전일미수(중량)" className="flex-1">
            <p className="grow lg:text-center">124 (34kg)</p>
          </TableTd>
          <TableTd label="폐사(병어)" className="flex-1">
            <p className="grow lg:text-center">124 (34)</p>
          </TableTd>
          <TableTd label="출하(이동)" className="flex-1">
            <p className="grow lg:text-center">124</p>
          </TableTd>
          <TableTd label="금일미수(중량)" className="flex-1">
            <p className="grow lg:text-center">124 (34)</p>
          </TableTd>
          <TableTd label="평균체중" className="flex-1">
            <p className="grow lg:text-center">3</p>
          </TableTd>
          <TableTd label="중량" className="flex-1">
            <p className="grow lg:text-center">124kg</p>
          </TableTd>
          <TableTd label="미수" className="flex-1">
            <p className="grow lg:text-center">-</p>
          </TableTd>
        </TableRow>
          <TableRow
            title="A-1"
            header={
              <CustomBtn className="mr-auto bg-slate-800/30 backdrop-saturate-1000 backdrop-brightness-80" to="/diary/cage/A-1">
                수조이력보기
              </CustomBtn>
            }
            accordion
            variant="teal">
            <TableTd label="수조" className="!hidden lg:!flex flex-1" >
              <TankName variant="teal" tankName="A-1" to="/diary/cage/A-1" />
            </TableTd>
            <TableTd label="전일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34kg)</p>
            </TableTd>
            <TableTd label="폐사(병어)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="출하(이동)" className="flex-1">
              <p className="grow lg:text-center">124</p>
            </TableTd>
            <TableTd label="금일미수(중량)" className="flex-1">
              <p className="grow lg:text-center">124 (34)</p>
            </TableTd>
            <TableTd label="평균체중" className="flex-1">
              <p className="grow lg:text-center">3</p>
            </TableTd>
            <TableTd label="중량" className="flex-1">
              <p className="grow lg:text-center">124kg</p>
            </TableTd>
            <TableTd label="미수" className="flex-1">
              <p className="grow lg:text-center">-</p>
            </TableTd>
          </TableRow>
        </CustomTable>
      </Container>
    </>
  )
}
