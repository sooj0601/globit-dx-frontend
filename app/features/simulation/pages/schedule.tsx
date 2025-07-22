import Container from '~/common/layouts/Container';
import ModuleWrap from '~/features/simulation/components/module-wrap';
import {ModuleTable, ModuleTableHead, ModuleTableTd, ModuleTableTr} from "~/features/simulation/components/module-table";
import {PredictionTable, PredictionTableTh} from "~/features/simulation/components/prediction-table";
import ChartPlaceholder from '~/features/simulation/components/chart-placeholder';


export default function SchedulePage() {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 lg:gap-12 pt-4 lg:pt-0">
          <ModuleWrap title="양식장 총 미수 예측">
            <div className="w-full overflow-x-auto">
              <PredictionTable>
                <thead>
                <tr>
                  <PredictionTableTh>2025년 8월</PredictionTableTh>
                  <PredictionTableTh>2025년 9월</PredictionTableTh>
                  <PredictionTableTh>2025년 10월</PredictionTableTh>
                  <PredictionTableTh>2025년 11월</PredictionTableTh>
                  <PredictionTableTh>2025년 12월</PredictionTableTh>
                  <PredictionTableTh>2026년 1월</PredictionTableTh>
                  <PredictionTableTh>2026년 2월</PredictionTableTh>
                  <PredictionTableTh>2026년 3월</PredictionTableTh>
                  <PredictionTableTh>2026년 4월</PredictionTableTh>
                  <PredictionTableTh>2026년 5월</PredictionTableTh>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2 border-r border-r-slate-300">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center py-4 px-2">
                      <strong className="font-bold break-keep">00,000마리</strong>
                      <span className="text-slate-500">0.00kg</span>
                    </div>
                  </td>
                </tr>
                </tbody>
              </PredictionTable>
            </div>
          </ModuleWrap>
          <div className="grid lg:grid-cols-2 gap-10">
            <ModuleWrap title="AI 성장 예측" desc={<span className="text-sm text-slate-500">단위 : kg</span>}>
              <ChartPlaceholder className="max-w-[600px]" ratio={9 / 16} />
            </ModuleWrap>
            <ModuleWrap title="사료 소모량 예측" desc={<span className="text-sm text-slate-500">단위 : kg</span>}>
              <ChartPlaceholder className="max-w-[600px]" ratio={9 / 16} />
            </ModuleWrap>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <ModuleWrap title="입식 계획">
              <ModuleTable className="w-full">
                <ModuleTableHead>
                  <th>날짜</th>
                  <th>미수(마리)</th>
                  <th>평체(kg)</th>
                </ModuleTableHead>
                <tbody>
                  <ModuleTableTr>
                    <ModuleTableTd noBorder>
                      <span>2025-03-02</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>1000</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>00.00</span>
                    </ModuleTableTd>
                  </ModuleTableTr>
                  <ModuleTableTr>
                    <ModuleTableTd noBorder>
                      <span>2025-03-02</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>1000</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>00.00</span>
                    </ModuleTableTd>
                  </ModuleTableTr>
                  <ModuleTableTr>
                    <ModuleTableTd noBorder>
                      <span>2025-03-02</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>1000</span>
                    </ModuleTableTd>
                    <ModuleTableTd noBorder>
                      <span>00.00</span>
                    </ModuleTableTd>
                  </ModuleTableTr>
                </tbody>
              </ModuleTable>
            </ModuleWrap>
            <ModuleWrap title="출하 계획">
              <ModuleTable className="w-full">
                <ModuleTableHead>
                  <th>날짜</th>
                  <th>미수(마리)</th>
                </ModuleTableHead>
                <tbody>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                </tbody>
              </ModuleTable>
            </ModuleWrap>
            <ModuleWrap title="판매 수익 예측">
              <ModuleTable className="w-full">
                <ModuleTableHead>
                  <th>날짜</th>
                  <th>미수(마리)</th>
                </ModuleTableHead>
                <tbody>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                <ModuleTableTr>
                  <ModuleTableTd noBorder>
                    <span>2025-03-02</span>
                  </ModuleTableTd>
                  <ModuleTableTd noBorder>
                    <span>1000</span>
                  </ModuleTableTd>
                </ModuleTableTr>
                </tbody>
              </ModuleTable>
            </ModuleWrap>
          </div>
        </div>
      </Container>
    </>
  );
}
