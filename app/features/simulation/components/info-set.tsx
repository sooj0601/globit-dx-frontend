import CustomLabel from "~/common/components/ui/form/CustomLabel";

type InfoSetProps = {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  required?: boolean;
  htmlFor?: string; // 추가
  variant?: 'col' | 'row';
};

export function InfoSet({ className = '', label, children, required, htmlFor, variant = 'row' }: InfoSetProps) {
  return (
    <div className={`flex  gap-2 ${variant === 'row' ? 'flex-row items-center' : 'flex-col'} ${className}`}>
      {label && <CustomLabel label={label} required={required} htmlFor={htmlFor} className={` ${variant === 'col' ? '' : 'w-[64px] md:w-[80px] md:h-9'} `} />}
      <div className="flex grow items-center flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

type InfoGroupProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'col' | 'row';
};

export function InfoGroup({ className = '', children, variant = 'default' }: InfoGroupProps) {
  let variantClass = '';
  switch (variant) {
    case 'default':
      variantClass = 'grid grid-cols-1 md:grid-cols-2';
      break;
    case 'col':
      variantClass = 'flex flex-col';
      break;
    case 'row':
      variantClass = 'flex flex-row';
      break;
  }
  return (
    <div className={`${variantClass} gap-x-4 gap-y-2  ${className}`}>
      {children}
    </div>
  );
}
