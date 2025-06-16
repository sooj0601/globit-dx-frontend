import CustomLabel from "~/common/components/ui/form/CustomLabel";
import GroupItem from "~/common/components/modules/GroupItem";

type GroupItemListProps = {
  className?: string
}

export default function GroupItemList({ className = '' }: GroupItemListProps) {
  return (
    <div className={`flex flex-col gap-4 pt-6 border-t border-slate-300 ${className}`}>
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
          variant="violet"
        />
        <GroupItem
          key="group-item-2"
          name="2024-넙치-200030"
          variant="lime"
        />
        <GroupItem
          key="group-item-3"
          name="2024-넙치-200030"
          variant="yellow"
        />
        <GroupItem
          key="group-item-4"
          name="2024-넙치-200030"
          variant="cyan"
        />
        <GroupItem
          key="group-item-5"
          name="2024-넙치-200030"
          variant="indigo"
        />
        <GroupItem
          key="group-item-6"
          name="2024-넙치-200030"
          variant="teal"
        />
        <GroupItem
          key="group-item-7"
          name="2024-넙치-200030"
          variant="pink"
        />
        <GroupItem
          key="group-item-8"
          name="2024-넙치-200030"
          variant="slate"
        />
        <GroupItem
          key="group-item-9"
          name="2024-넙치-200030"
          variant="brown"
        />
        <GroupItem
          key="group-item-10"
          name="2024-넙치-200030"
          variant="orange"
        />
      </div>
    </div>
  )
}