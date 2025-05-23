import Input from "~/common/components/ui/Input";

type TankNameProps = {
  variant?: 'slate' | 'violet' | 'lime' | 'yellow' | 'cyan' | 'indigo' | 'teal' | 'pink'// 필요한 색상 미리 정의
  value?: string;
}

export default function TankName({ variant = 'slate', value }: TankNameProps) {
  const colorMap = {
    slate: '!border-slate-500 !bg-slate-50 !text-slate-500',
    violet: '!border-violet-500 !bg-violet-50 !text-violet-500',
    lime: '!border-lime-500 !bg-lime-50 !text-lime-500',
    yellow: '!border-yellow-500 !bg-yellow-50 !text-yellow-500',
    cyan: '!border-cyan-500 !bg-cyan-50 !text-cyan-500',
    indigo: '!border-indigo-500 !bg-indigo-50 !text-indigo-500',
    teal: '!border-teal-500 !bg-teal-50 !text-teal-500',
    pink: '!border-pink-500 !bg-pink-50 !text-pink-500',
  };
  return (
      <Input type="text" value={value} readonly className={`text-center ${colorMap[variant]}`} />
  );
}
