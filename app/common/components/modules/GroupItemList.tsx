import CustomLabel from "~/common/components/ui/form/CustomLabel";
import GroupItem from "~/common/components/modules/GroupItem";
import {useEffect, useState} from "react";
import {ChevronDown} from "lucide-react";

type GroupItemListProps = {
  className?: string
}

export default function GroupItemList({ className = '' }: GroupItemListProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기에 따라 모바일 여부 체크
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsOpen(true); // PC에서는 항상 열림
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleOpen = () => {
    if (isMobile) setIsOpen((prev) => !prev);
  };


  return (
    <div className={`flex flex-col gap-4 pt-6 border-t border-slate-300 ${className}`}>
      <button
        onClick={toggleOpen}
        className={`relative flex flex-col lg:flex-row lg:items-center lg:gap-2 justify-between w-full text-left ${
          isMobile ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {isMobile ? (
          <div className="flex items-center justify-between w-full pb-2">
            <CustomLabel label="입식 그룹" />
            <div className="flex items-center gap-1 text-blue-500 font-bold">
              <span>{isOpen ? "접기" : "펼치기"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        ) : (
          <>
            <CustomLabel label="입식 그룹" />
          </>
        )}
        <span className={'text-sm lg:text-base text-slate-500 font-medium text-left'}>
          입식그룹을 선택하시면 해당 입식그룹 목록만 조회됩니다.
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isMobile
            ? isOpen
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
            : "max-h-none opacity-100"
        }`}
      >
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
    </div>
  )
}