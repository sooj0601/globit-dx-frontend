import { useState } from 'react';
import PageUtilLine from '~/common/components/ui/layout/PageUtilLine';
import Container from '~/common/layouts/Container';
import PageTitle from '~/common/components/ui/layout/PageTitle';
import CustomLabel from '~/common/components/ui/form/CustomLabel';
import Input from '~/common/components/ui/form/Input';
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import { Printer } from 'lucide-react';
import DataBadge from "~/features/simulation/components/data-badge";
import {
  DataTable,
  DataTableFoot,
  DataTableHead,
  DataTableTd,
  DataTableTh
} from "~/features/simulation/components/data-table";

export default function DataPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  return (
    <>
      <PageTitle title="입・출하 계획 수익 분석표" desc="수립한 출하 계획의 종합 정보를 조회할 수 있습니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
            <div className="flex items-center gap-4 grow md:max-w-none">
              <CustomLabel label="조회기간"/>
              <div className="flex gap-2 items-center grow">
                <Input
                  id="date-pick"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="md:w-40 w-full"
                />~
                <Input
                  id="date-pick"
                  type="date"
                  value={selectedDate2}
                  onChange={(e) => setSelectedDate2(e.target.value)}
                  className="md:w-40 w-full"
                />
              </div>
            </div>
            <CustomBtn variant="outline" rightIcon={<Printer/>}>분석표 인쇄</CustomBtn>
          </div>
        </PageUtilLine>
        <div className="flex flex-col gap-4">
          <DataTable>
            <DataTableHead>
              <tr>
                <DataTableTh className="w-32">월</DataTableTh>
                <DataTableTh className="w-56">입식 그룹</DataTableTh>
                <DataTableTh className="w-32">입식 수</DataTableTh>
                <DataTableTh className="w-32">입식 비용</DataTableTh>
                <DataTableTh className="w-32">출하 수</DataTableTh>
                <DataTableTh className="w-32">출하 수익</DataTableTh>
                <DataTableTh className="w-32">예상 단가</DataTableTh>
                <DataTableTh className="w-32">예상 중량</DataTableTh>
                <DataTableTh className="w-32">예상 폐사 미 수</DataTableTh>
                <DataTableTh className="w-32">사료비</DataTableTh>
                <DataTableTh className="w-32">실 출하 수</DataTableTh>
                <DataTableTh className="w-32">실 출하 미 수</DataTableTh>
                <DataTableTh className="w-32">실 판매 단가</DataTableTh>
                <DataTableTh className="w-32">수익</DataTableTh>
                <DataTableTh className="w-32">비용</DataTableTh>
                <DataTableTh className="w-40">누적금액</DataTableTh>
              </tr>
            </DataTableHead>
            <tbody>
              <tr>
                <DataTableTd rowSpan={2} bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>16,234,123</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>230,000,000</DataTableTd>
                <DataTableTd rowSpan={2}><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd rowSpan={2} bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>16,234,123</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>230,000,000</DataTableTd>
                <DataTableTd rowSpan={2}><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd rowSpan={3} bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd rowSpan={3}>0</DataTableTd>
                <DataTableTd rowSpan={3}>0</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>16,234,123</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>-</DataTableTd>
                <DataTableTd rowSpan={3}>0</DataTableTd>
                <DataTableTd rowSpan={3}>230,000,000</DataTableTd>
                <DataTableTd rowSpan={3}><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
              </tr>
              <tr>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd rowSpan={2} bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>16,234,123</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>-</DataTableTd>
                <DataTableTd rowSpan={2}>0</DataTableTd>
                <DataTableTd rowSpan={2}>230,000,000</DataTableTd>
                <DataTableTd rowSpan={2}><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="red">출하</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
              <tr>
                <DataTableTd bgColor>2025-05</DataTableTd>
                <DataTableTd>
                  <div className="flex items-center gap-2 justify-center">
                    <DataBadge variant="green">입식</DataBadge>
                    <strong>2505-넙치-2</strong>
                  </div>
                </DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
            </tbody>
            <DataTableFoot>
              <tr>
                <DataTableTd>합계</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>123,123</DataTableTd>
                <DataTableTd>4,123,123,000</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>16,234,123</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>-</DataTableTd>
                <DataTableTd>0</DataTableTd>
                <DataTableTd>230,000,000</DataTableTd>
                <DataTableTd><strong className="text-rose-500">230,000,000</strong></DataTableTd>
              </tr>
            </DataTableFoot>
          </DataTable>
        </div>
      </Container>
    </>
  );
}
