import React, { useState } from "react";
import {MapPin, Search} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import ModalFarmSituation from "~/features/situation/components/modal-farm-situation";
import ModalGrowthSituation from "~/features/situation/components/modal-growth-situation";

interface FarmMapPinProps {
  top: number;         // absolute top 위치 (%)
  left: number;        // absolute left 위치 (%)
  percentile: number;  // 0 ~ 100
  active?: boolean;    // 기본 active 여부
}

export const FarmMapPin: React.FC<FarmMapPinProps> = ({
    top,
    left,
    percentile,
    active = false,
  }) => {
  const [hovered, setHovered] = useState(false);
  const filledCount = Math.min(5, Math.max(0, Math.floor(percentile / 20)));
  const isActive = active || hovered;
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <div
        className="absolute group"
        style={{ top: `${top}%`, left: `${left}%` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative flex flex-col gap-1.5 items-center">
          {/* 툴팁 (PC에서만 보이게 md:block) */}
          <div
            className={`absolute left-10 -top-10 flex-col gap-2 w-80 p-4 rounded-3xl bg-white whitespace-nowrap 
                        opacity-0 group-hover:opacity-100 transition hidden md:flex`}
          >
            <div className="flex justify-between items-center">
              <strong className="text-lg text-slate-800">첨단수산</strong>
              <p className="flex items-center justify-end gap-0.5 text-sm text-slate-500">
                <MapPin size={14} />
                <span>서귀포시 중앙로 12-4</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-slate-100 py-3 px-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold pr-2 ">입식 마리 수</p>
                  <p><strong className="text-lg">123,044,222</strong> 마리</p>
                </div>
                <p className="text-slate-500 text-sm">2025년 5월 ~ 2025년 6월 기준</p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <CustomBtn rightIcon={<Search size={16}/>} onClick={() => setOpenModal("modal1")}>입식/출하/폐사 그래프 조회</CustomBtn>
                <CustomBtn rightIcon={<Search size={16}/>} onClick={() => setOpenModal("modal2")}>성장률/보유량 그래프 조회</CustomBtn>
              </div>
            </div>
          </div>

          {/* 백분위 바 (사각형 5개) */}
          <div className="flex flex-col gap-0.5 p-0.5 bg-white/50 rounded-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-2 rounded-xs ${
                  i < filledCount ? "bg-emerald-400" : "bg-slate-800/20"
                }`}
              />
            ))}
          </div>

          {/* 맵핀 이미지 */}
          {isActive ? (
            <img
              src="/assets/marker-active.png"
              alt="Map Pin Active"
              className="w-10 h-10"
            />
          ) : (
            <img src="/assets/marker.png" alt="Map Pin" className="w-8 h-8" />
          )}
        </div>
      </div>
      {/* 양식현황 팝업 */}
      <ModalFarmSituation
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
      <ModalGrowthSituation
        isOpen={openModal === "modal2"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
};
