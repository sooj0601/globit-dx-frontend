import ColorSelectItem from "~/features/simulation/components/color-select-item";
import React from "react";

type GroupItemListProps = {
  className?: string
  errors?: string
}

export default function GroupItemList({ className = '', errors }: GroupItemListProps) {
  const [selectedColor, setSelectedColor] = React.useState<string>('slate');
  return (
    <div className={`flex flex-col py-2 gap-3 ${className}`}>
      <div className="flex flex-wrap gap-1">
        <ColorSelectItem
          name="colorGroup"
          variant="slate"
          checked={selectedColor === 'slate'}
          onChange={() => setSelectedColor('slate')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="violet"
          checked={selectedColor === 'violet'}
          onChange={() => setSelectedColor('violet')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="lime"
          checked={selectedColor === 'lime'}
          onChange={() => setSelectedColor('lime')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="yellow"
          checked={selectedColor === 'yellow'}
          onChange={() => setSelectedColor('yellow')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="cyan"
          checked={selectedColor === 'cyan'}
          onChange={() => setSelectedColor('cyan')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="indigo"
          checked={selectedColor === 'indigo'}
          onChange={() => setSelectedColor('indigo')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="teal"
          checked={selectedColor === 'teal'}
          onChange={() => setSelectedColor('teal')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="pink"
          checked={selectedColor === 'pink'}
          onChange={() => setSelectedColor('pink')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="brown"
          checked={selectedColor === 'brown'}
          onChange={() => setSelectedColor('brown')}
        />
        <ColorSelectItem
          name="colorGroup"
          variant="orange"
          checked={selectedColor === 'orange'}
          onChange={() => setSelectedColor('orange')}
        />
      </div>
      {errors && (
        <span className="text-rose-500 text-sm">{errors}</span>
      )}
    </div>
  )
}