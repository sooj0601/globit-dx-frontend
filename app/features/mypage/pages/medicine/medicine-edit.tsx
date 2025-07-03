import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import InputSet from "~/common/components/ui/form/InputSet";
import InputGroup from "~/common/components/ui/form/InputGroup";
import RequireGuide from "~/common/components/modules/RequireGuide";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import Select from "~/common/components/ui/form/Select";
import {useState} from "react";
import BtnWrap from "~/common/components/ui/form/BtnWrap";
import ModalHistory from "~/features/mypage/components/modal-history";



export default function MedicineEdit() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [medicineType, setMedicineType] = useState('');
  const [medicineList, setMedicineList] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('g');
  const [selectedUnit2, setSelectedUnit2] = useState('g');
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
    <PageTitle title="약품 추가" desc="약품 추가 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
    <Container>
      <div>
        <RequireGuide />
        <InputGroup>
          <InputSet label="약품구분">
            <Select
              name="medicineType"
              onChange={(e) => setMedicineType(e.target.value)}
              className="grow"
              value={medicineType} // 추가
              options={[
                { label: '항생제', value: '항생제' },
              ]}
            />
          </InputSet>
          <InputSet label="약품">
            <Select
              name="medicineList"
              onChange={(e) => setMedicineList(e.target.value)}
              className="grow"
              value={medicineList} // 추가
              options={[
                { label: '약품 리스', value: '약품 리스트' },
              ]}
            />
          </InputSet>
          <InputSet label="구매 일자">
            <Input
              id="date-pick"
              className="grow"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </InputSet>
        </InputGroup>
        <InputGroup lineTop>
          <InputSet label="약품 구매 총 중량" required>
            <Input type="text" number value="300" className="grow"/>
            <Select
              name="enterWeightUnit1"
              className="grow"
              onChange={(e) => setSelectedUnit(e.target.value)}
              value={selectedUnit}
              options={[
                { label: 'g', value: 'g'},
              ]}
            />
          </InputSet>
          <InputSet label="단위 중량">
            <Input type="text" number value="300" className="grow"/>
            <Select
              name="enterWeightUnit2"
              className="grow"
              onChange={(e) => setSelectedUnit2(e.target.value)}
              value={selectedUnit2}
              options={[
                { label: 'g', value: 'g'},
              ]}
            />
          </InputSet>
          <InputSet label="구매 수량">
            <Input type="text" className="grow" number/>
          </InputSet>
          <InputSet label="총 구매 금액" required>
            <Input type="text" className="grow" number unit="원"/>
          </InputSet>
          <InputSet label="구매처">
            <Input type="text" className="grow"/>
          </InputSet>
        </InputGroup>
        <BtnWrap>
          <div className="w-full md:w-auto gap-2 flex items-center justify-between grow">
            <CustomBtn size="lg" variant="outline" className="grow md:grow-0 md:w-auto" >초기화</CustomBtn>
            <CustomBtn size="lg" className="grow md:grow-0 md:w-auto" onClick={() => setOpenModal("modal1")} >이전 구매이력 불러오기</CustomBtn>
          </div>
          <CustomBtn to="/mypage/feed" size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >사료 저장</CustomBtn>
        </BtnWrap>
      </div>
    </Container>
    {/* 구매내역 팝업 */}
    <ModalHistory
      isOpen={openModal === "modal1"}
      onClose={() => setOpenModal(null)}
    />
    </>
  )
}
