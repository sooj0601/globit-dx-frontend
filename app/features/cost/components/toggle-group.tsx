import { useState } from "react";
import ToggleCheckbox from "~/features/cost/components/toggle-checkbox";

const toggleOptions = [
  { key: "option1", label: "입식" },
  { key: "option2", label: "출하" },
  { key: "option3", label: "사료" },
  { key: "option4", label: "약품" },
];

type ToggleKey = (typeof toggleOptions)[number]["key"];

function ToggleGroup() {
  const [activeKeys, setActiveKeys] = useState<ToggleKey[]>([]);

  const handleChange = (key: ToggleKey, nextChecked: boolean) => {
    setActiveKeys((prev) =>
      nextChecked ? [...prev, key] : prev.filter((k) => k !== key)
    );
  };

  return (
    <div className="flex gap-2">
      {toggleOptions.map((opt) => {
        const isActive = activeKeys.includes(opt.key);

        return (
          <ToggleCheckbox
            key={opt.key}
            checked={isActive}
            onChange={(next) => handleChange(opt.key, next)}
            label={opt.label}
          />
        );
      })}
    </div>
  );
}

export default ToggleGroup;
