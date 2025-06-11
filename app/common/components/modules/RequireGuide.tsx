
type RequireGuideProps = {
  className?: string;
};

export default function RequireGuide({ className = '' }: RequireGuideProps) {
  return (
    <div className={`w-full lg:text-right ${className}`}>
      <p className={`font-medium`}><span className="text-rose-500">*</span> 표시된 항목은 필수 입력 항목입니다.</p>
    </div>
  );
}
