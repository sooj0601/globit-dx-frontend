import {ChevronDown} from 'lucide-react';

type FarmSelectProps = {
  className?: string
}

export default function FarmSelect({ className = '' }: FarmSelectProps) {
  return (
    <div className={`relative w-60 ${className}`}>
      <label htmlFor="farmList" className="sr-only">
        양식장 목록
      </label>
      <select
        id="farmList"
        name="farmList"
        className="appearance-none block w-full h-12 pl-3 pr-8 rounded-full bg-slate-100 focus:border-blue-500 focus:ring-blue-500 font-medium"
        defaultValue=""
      >
        <option value="all">
          전체 양식장
        </option>
        <option value="apple">양식장 A</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <ChevronDown />
      </div>
    </div>
  )
}