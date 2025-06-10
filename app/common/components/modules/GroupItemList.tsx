import CustomLabel from "~/common/components/ui/CustomLabel";
import GroupItem from "~/common/components/modules/GroupItem";

type GroupItemListProps = {
  className?: string
}

export default function GroupItemList({ className = '' }: GroupItemListProps) {
  return (
    <div className={`flex flex-col gap-4 mt-6 py-6 border-t border-slate-300 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 justify-between">
        <CustomLabel label="입식 그룹" />
        <span className={'text-sm lg:text-base text-slate-500 font-medium'}>
          입식그룹을 선택하시면 해당 입식그룹 목록만 조회됩니다.
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <GroupItem
          key="group-item-1"
          name="2024-넙치-200030"
          colorName="violet"
        />
        <GroupItem
          key="group-item-2"
          name="2024-넙치-200030"
          colorName="lime"
        />
        <GroupItem
          key="group-item-3"
          name="2024-넙치-200030"
          colorName="yellow"
        />
        <GroupItem
          key="group-item-4"
          name="2024-넙치-200030"
          colorName="cyan"
        />
        <GroupItem
          key="group-item-5"
          name="2024-넙치-200030"
          colorName="indigo"
        />
        <GroupItem
          key="group-item-6"
          name="2024-넙치-200030"
          colorName="teal"
        />
        <GroupItem
          key="group-item-7"
          name="2024-넙치-200030"
          colorName="pink"
        />
        <GroupItem
          key="group-item-7"
          name="2024-넙치-200030"
          colorName="slate"
        />
        <GroupItem
          key="group-item-7"
          name="2024-넙치-200030"
          colorName="brown"
        />
        <GroupItem
          key="group-item-7"
          name="2024-넙치-200030"
          colorName="orange"
        />
      </div>
    </div>
  )
}