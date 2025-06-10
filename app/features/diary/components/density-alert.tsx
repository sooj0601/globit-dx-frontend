import Input from "~/common/components/ui/Input";

type DensityAlertProps = {
  variant?: 'green' | 'red' | 'yellow' | 'blue';
  value?: string;
}

export default function DensityAlert({ variant = 'green', value }: DensityAlertProps) {
  const colorMap = {
    green: '!border-0 !bg-green-100 text-green-500',
    red: '!border-0 !bg-rose-200 text-rose-500',
    yellow: '!border-0 !bg-yellow-400',
    blue: '!border-0 !bg-cyan-100 text-cyan-500',
  };
  return (
      <Input type="text" value={value} readOnly number inputStyle={`${colorMap[variant]}`} />
  );
}
