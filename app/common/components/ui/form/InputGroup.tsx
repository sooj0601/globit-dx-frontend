
type InputGroupProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'col' | 'row';
  lineTop?: boolean;
};

export default function InputGroup({ className = '', children, lineTop = false, variant = 'default' }: InputGroupProps) {
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
    <div className={`${variantClass} gap-x-8 gap-y-6  ${className} ${lineTop ? 'border-t border-slate-300 pt-6' +
      ' md:pt-10 md:mt-4 pb-6' : 'py-6'}`}>
      {children}
    </div>
  );
}
