import { ClipboardPen, Check } from 'lucide-react';
import Input from "~/common/components/ui/form/Input";

type GroupItemProps = {
  className?: string;
  groupName: string;
  state?: 'plan' | 'active';
  mode?: 'view' | 'edit' | 'create';
  colorName?:
    | 'slate'
    | 'violet'
    | 'lime'
    | 'yellow'
    | 'cyan'
    | 'indigo'
    | 'teal'
    | 'pink'
    | 'brown'
    | 'orange'; // 필요한 색상 미리 정의
  children?: React.ReactNode;
};

export default function GroupItemLine({
  className = '',
  groupName,
  state = 'active',
  mode = 'view',
  colorName = 'slate',
  children,
}: GroupItemProps) {
  let stateClass = "border-dotted";
  if (state === "plan") stateClass = "broder-solid";
  const groupColorMap = {
    slate: 'bg-slate-50 border-slate-500',
    violet: 'bg-violet-50 border-violet-500',
    lime: 'bg-lime-50 border-lime-500',
    yellow: 'bg-yellow-50 border-yellow-500',
    cyan: 'bg-cyan-50 border-cyan-500',
    indigo: 'bg-indigo-50 border-indigo-500',
    teal: 'bg-teal-50 border-teal-500',
    pink: 'bg-pink-50 border-pink-500',
    brown: 'bg-[#FDF6F4] border-yellow-800',
    orange: 'bg-orange-50 border-orange-500',
  };
  const textColorMap = {
    slate: 'text-slate-500',
    violet: 'text-violet-500',
    lime: 'text-lime-500',
    yellow: 'text-yellow-500',
    cyan: 'text-cyan-500',
    indigo: 'text-indigo-500',
    teal: 'text-teal-500',
    pink: 'text-pink-500',
    brown: 'text-yellow-800',
    orange: 'text-orange-500',
  };
  const borderColorMap = {
    slate: 'border-slate-500',
    violet: 'border-violet-500',
    lime: 'border-lime-500',
    yellow: 'border-yellow-500',
    cyan: 'border-cyan-500',
    indigo: 'border-indigo-500',
    teal: 'border-teal-500',
    pink: 'border-pink-500',
    brown: 'border-yellow-800',
    orange: 'border-orange-500',
  };
  if (mode === 'create') {
    return (
      <div
        className={`rounded-2xl p-4 bg-slate-50 ${className} `}
      >
        <div
          className={`flex items-center pb-3 mb-3 justify-between border-b border-slate-300`}
        >
          <p className={`font-bold text-md md:text-lg text-slate-500 grow`}>
            <Input type="text" placeholder="입식 그룹 이름을 입력하세요" value="" />
          </p>
        </div>
        <div className="flex flex-wrap gap-4">{children}</div>
      </div>
    )
  }
  else {
    return (
      <div
        className={`min-h-auto md:min-h-[426px] border-4 rounded-2xl p-4 ${stateClass} ${groupColorMap[colorName]} ${className} `}
      >
        <div
          className={`flex items-center pb-3 mb-3 justify-between gap-6 lg:gap-20 border-b ${borderColorMap[colorName]}`}
        >
          <p className={`font-bold text-md md:text-lg grow ${textColorMap[colorName]}`}>
            {mode === 'edit' ? (<Input type="text" placeholder="입식 그룹 이름을 입력하세요" value="" />) : (
              `${groupName}`
            )}
          </p>
          <div>
            {mode === 'edit' ? (
              <a
                href="#"
                className={`flex items-center gap-1 text-sm font-semibold ${textColorMap[colorName]} hover:underline`}
              >
                저장
                <Check size={14} />
              </a>
            ) : (
              <a
                href="#"
                className={`flex items-center gap-1 text-sm font-semibold ${textColorMap[colorName]} hover:underline`}
              >
                수정
                <ClipboardPen size={14} />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">{children}</div>
      </div>
    )
  }
}
