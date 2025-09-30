import Container from '~/common/layouts/Container';

import PageTitle from "~/common/components/ui/layout/PageTitle";
import {Search} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Input from "~/common/components/ui/form/Input";
import {useState} from "react";
import Select from "~/common/components/ui/form/Select";
import {SearchBox, SearchBoxItem} from "~/features/dashboard/components/search-box";
import {DepthMenu, DepthMenuItem} from "~/features/dashboard/components/depth-menu";
import MapListSwitch from "~/features/situation/components/map-list-switch";
import MapFloatInfo from "~/features/situation/components/map-float-info";
import {FarmMapPin} from "~/features/situation/components/farm-map-pin";

export default function FarmMapPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [selectedFish, setSelectedFish] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');

  return (
    <>
      <PageTitle title="양식 현황" />
      <SearchBox>
        <SearchBoxItem label="양식장">
          <Select
            name="farmName"
            onChange={(e) => setSelectedFarm(e.target.value)}
            className="md:w-36 w-full"
            value={selectedFarm}
            options={[
              { label: '양식장 1', value: '양식장 1' },
              { label: '양식장 2', value: '양식장 2' },
              { label: '양식장 3', value: '양식장 3' },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="주소">
          <Input type="text" className="md:w-36 w-full"/>
        </SearchBoxItem>
        <SearchBoxItem label="기간">
          <Input
            id="date-pick"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="md:w-36 w-full"
          />
          <span className="hidden md:block">부터</span>
          ~
          <Input
            id="date-pick"
            type="date"
            value={selectedDate2}
            onChange={(e) => setSelectedDate2(e.target.value)}
            className="md:w-36 w-full"
          />
          <span className="hidden md:block">까지</span>
        </SearchBoxItem>
        <SearchBoxItem label="어종">
          <Select
            name="fishName"
            onChange={(e) => setSelectedFish(e.target.value)}
            className="md:w-36 w-full"
            value={selectedFish}
            options={[
              { label: '어종 1', value: '어종 1' },
              { label: '어종 2', value: '어종 2' },
              { label: '어종 3', value: '어종 3' },
            ]}
          />
        </SearchBoxItem>
        <SearchBoxItem label="중량">
          <Select
            name="fishWeight"
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="md:w-36 w-full"
            value={selectedWeight}
            options={[
              { label: '중량 1', value: '중량 1' },
              { label: '중량 2', value: '중량 2' },
              { label: '중량 3', value: '중량 3' },
            ]}
          />
        </SearchBoxItem>
        <CustomBtn rightIcon={<Search size={16}/>}>조회</CustomBtn>
      </SearchBox>
      <Container>
        <div className="w-full flex flex-col gap-4 md:flex-row items-center md:justify-between">
          <MapListSwitch />
          <DepthMenu>
            <DepthMenuItem active>입식</DepthMenuItem>
            <DepthMenuItem>출하</DepthMenuItem>
            <DepthMenuItem>폐사</DepthMenuItem>
            <DepthMenuItem>성장률/보유량</DepthMenuItem>
          </DepthMenu>
        </div>
        <div className="w-full rounded-3xl relative flex grow bg-slate-200 bg-[url('/assets/map.jpg')] bg-center bg-cover bg-no-repeat">
          <MapFloatInfo/>
          <FarmMapPin top={40} left={77} percentile={65} />
          <FarmMapPin top={57} left={67} percentile={65} />
          <FarmMapPin top={40} left={10} percentile={65} />
        </div>
      </Container>
    </>
  );
}
