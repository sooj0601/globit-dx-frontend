import Switch from '../../../common/components/ui/Switch';

interface InfoToggleProps {
  label: string;
  enabled: boolean;
  onChange: (val: boolean) => void;
}

export default function InfoToggle({
  label,
  enabled,
  onChange,
}: InfoToggleProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl p-4 md:px-4 md:py-2 ${
        enabled ? 'bg-slate-100' : 'bg-slate-200'
      }`}
    >
      <span className={`${enabled ? 'font-bold' : ''}`}>{label}</span>
      <Switch checked={enabled} onChange={onChange} />
    </div>
  );
}
