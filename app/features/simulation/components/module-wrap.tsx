
type ModuleWrapProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  desc?: string | React.ReactNode;
};

export default function ModuleWrap({ className = '', children, title, desc}: ModuleWrapProps) {
  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <div className={`flex items-center ${desc? 'justify-between' : ''} gap-2`}>
        <h3 className="font-bold text-lg">{title}</h3>
        {desc}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
