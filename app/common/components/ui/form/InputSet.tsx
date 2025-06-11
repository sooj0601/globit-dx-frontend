import CustomLabel from "~/common/components/ui/form/CustomLabel";

type InputSetProps = {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  required?: boolean;
  htmlFor?: string; // 추가
  variant?: 'col' | 'row';
};

export default function InputSet({ className = '', label, children, required, htmlFor, variant = 'row' }: InputSetProps) {
  return (
    <div className={`flex flex-col gap-2 ${variant === 'row' ? 'lg:flex-row lg:items-start' : ''} ${className}`}>
      {label && <CustomLabel label={label} required={required} htmlFor={htmlFor} className={`w-[120px] ${variant === 'col' ? '' : 'md:h-9'} `} />}
      <div className="flex grow items-center flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}
