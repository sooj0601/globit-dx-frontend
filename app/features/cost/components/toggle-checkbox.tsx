// ~/features/cost/components/toggle-checkbox.tsx
import { Check } from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ToggleCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: ReactNode;
  disabled?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange">;

export default function ToggleCheckbox({
                                         checked,
                                         onChange,
                                         label,
                                         disabled,
                                         className = "",
                                         ...buttonProps
                                       }: ToggleCheckboxProps) {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked); // ✅ 버튼 클릭 시 직접 토글
  };

  return (
    <div className="inline-flex items-center">
      {/* 숨겨진 체크박스 (폼/접근성용) */}
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="sr-only"
      />

      <CustomBtn
        type="button"
        variant="primary"
        size="sm"
        disabled={disabled}
        onClick={handleToggle}
        leftIcon={checked ? <Check size={16} /> : null}
        className={`
          ${checked ? "opacity-100" : "opacity-40"}
          ${className}
        `}
        {...buttonProps}
      >
        <span>{label}</span>
      </CustomBtn>
    </div>
  );
}
