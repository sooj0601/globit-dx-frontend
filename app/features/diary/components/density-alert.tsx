import Input from "~/common/components/ui/Input";

type DensityAlertProps = {
  variant?: 'green' | 'red' | 'yellow';
  value?: string;
}

export default function DensityAlert({ variant = 'green', value }: DensityAlertProps) {
  const colorMap = {
    green: '!border-0 !bg-green-500',
    red: '!border-0 !bg-rose-500',
    yellow: '!border-0 !bg-yellow-400',
  };
  return (
      <Input type="text" value={value} readonly className={`text-white text-center ${colorMap[variant]}`} />
  );
}
