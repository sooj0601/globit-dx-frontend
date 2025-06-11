import {useState} from "react";
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {Plus} from "lucide-react";
import SelectableInput from "~/common/components/ui/form/SelectableInput";
import Pagination from "~/common/components/ui/table/Pagination";



export default function FeedManagement() {
  const [selectedFarms, setSelectedFarms] = useState<string[]>([]);
  return (
    <>
      <PageTitle title="사료 관리" desc="사료 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <div className="sticky bottom-0 inset-x-0 pb-8 pt-4 md:relative flex flex-col md:flex-row items-center md:justify-between gap-2 bg-white">
          <CustomBtn to="/mypage/feed/edit" size="lg" variant="primary" className="grow w-full md:grow-0 ml-auto md:w-auto" >사료 추가</CustomBtn>
        </div>
      </Container>
    </>
  )
}
