import { useEffect, useState } from 'react';
import Container from "~/common/layouts/Container";
import Input from "~/common/components/ui/form/Input";
import PageTitle from "~/common/components/ui/layout/PageTitle";
import PageUtilLine from "~/common/components/ui/layout/PageUtilLine";
import {TableRow} from "~/common/components/ui/table/TableRow";
import TableTd from "~/common/components/ui/table/TableTd";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import CustomTable from "~/common/components/ui/table/CustomTable";
import {Download, Plus} from "lucide-react";
import SelectableInput from "~/common/components/ui/form/SelectableInput";
import Pagination from "~/common/components/ui/table/Pagination";
import CustomBadge from "~/common/components/ui/form/CustomBadge";
import CustomLabel from "~/common/components/ui/form/CustomLabel";

export default function AccountApproval() {
  const [selectedUser, setSelectedUser] = useState<string[]>(['situation-001']);
  const isMobile = useIsMobile();
  const toggleUserSelection = (value: string) => {
    setSelectedUser((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    return isMobile;
  }
  return (
    <>
      <PageTitle title="가입자 승인 관리" desc="가입자 승인 관리 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4">
            <Input type="search" placeholder="이름 검색" className="w-full md:w-auto"  />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8">
              <div className="flex items-center grow">
                <CustomLabel label="승인여부"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="status-all">전체</option>
                  <option value="status1">대기</option>
                  <option value="status2">완료</option>
                  <option value="status3">거부</option>
                </select>
              </div>
              <div className="flex items-center grow">
                <CustomLabel label="권한"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="admin-all">전체</option>
                  <option value="admin1">최고관리자</option>
                  <option value="admin2">일반관리자</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8">
              <div className="flex items-center grow">
                <CustomLabel label="선택한 정보를"/>
                <select className="border-b border-slate-800 grow md:w-40 h-9 px-2">
                  <option value="approval">가입 승인</option>
                </select>
                <CustomBtn variant="primary" className="ml-4">실행</CustomBtn>
              </div>
              <div className="flex items-center grow">
                <CustomBtn variant="outline" rightIcon={<Download size={16} />}>회원 목록 다운로드</CustomBtn>
              </div>
            </div>
          </div>
        </PageUtilLine>
        <CustomTable
          tableHead={
            <>
              <div className="text-center w-10">#</div>
              <div className="text-center flex-1">이름</div>
              <div className="text-center flex-1">관리자</div>
              <div className="text-center flex-1">이메일</div>
              <div className="text-center w-32">승인 여부</div>
              <div className="text-center flex-1">권한</div>
            </>
          }
        >
          <TableRow
            title={<p>홍길동 <span className="font-normal">(일반 관리자)</span></p>}
            onClick={() => isMobile && toggleUserSelection('user-001')}
            header={<SelectableInput
              name="selected-user"
              value="user-001"
              variant="checkbox"
              checked={selectedUser.includes('user-001')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedUser((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedUser.includes('user-001')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
              <TableTd className="w-10 lg:justify-center hidden md:flex" >
                <SelectableInput
                  name="selected-user"
                  value="user-001"
                  variant="checkbox"
                  checked={selectedUser.includes('user-001')}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    setSelectedUser((prev) =>
                      checked ? [...prev, value] : prev.filter((v) => v !== value)
                    );
                  }}
                />
              </TableTd>
              <TableTd label="이름" className="flex-1 lg:justify-center hidden md:flex">
                <p className="lg:text-center font-bold">홍길동</p>
              </TableTd>
              <TableTd label="관리자" className="flex-1 lg:justify-center">
                <p className="lg:text-center">홍길동</p>
              </TableTd>
              <TableTd label="이메일" className="flex-1 lg:justify-center col-span-2">
                <p className="lg:text-center">hong@globit.kr</p>
              </TableTd>
              <TableTd label="승인여부" className="w-32 lg:justify-center">
                <CustomBadge color="green">완료</CustomBadge>
              </TableTd>
              <TableTd label="권한" className="flex-1 lg:justify-center">
                <p className="lg:text-center">일반관리자</p>
              </TableTd>
          </TableRow>
          <TableRow
            title={<p>홍길동 <span className="font-normal">(일반 관리자)</span></p>}
            onClick={() => isMobile && toggleUserSelection('user-002')}
            header={<SelectableInput
              name="selected-user"
              value="user-002"
              variant="checkbox"
              checked={selectedUser.includes('user-002')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedUser((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedUser.includes('user-002')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-user"
                value="user-002"
                variant="checkbox"
                checked={selectedUser.includes('user-002')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedUser((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">홍길동</p>
            </TableTd>
            <TableTd label="관리자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="이메일" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">hong@globit.kr</p>
            </TableTd>
            <TableTd label="승인여부" className="w-32 lg:justify-center">
              <CustomBadge color="gray">대기</CustomBadge>
            </TableTd>
            <TableTd label="권한" className="flex-1 lg:justify-center">
              <p className="lg:text-center">일반관리자</p>
            </TableTd>
          </TableRow>
          <TableRow
            title={<p>홍길동 <span className="font-normal">(일반 관리자)</span></p>}
            onClick={() => isMobile && toggleUserSelection('user-003')}
            header={<SelectableInput
              name="selected-user"
              value="user-003"
              variant="checkbox"
              checked={selectedUser.includes('user-003')}
              onChange={(e) => {
                const { checked, value } = e.target;
                setSelectedUser((prev) =>
                  checked ? [...prev, value] : prev.filter((v) => v !== value)
                );
              }}
            />}
            className={`border transition-all ${
              selectedUser.includes('user-003')
                ? 'border-blue-500 !bg-blue-50 lg:border-transparent lg:border-b-slate-300'
                : 'border-transparent'
            }`}>
            <TableTd className="w-10 lg:justify-center hidden md:flex" >
              <SelectableInput
                name="selected-user"
                value="user-003"
                variant="checkbox"
                checked={selectedUser.includes('user-002')}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setSelectedUser((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  );
                }}
              />
            </TableTd>
            <TableTd label="이름" className="flex-1 lg:justify-center hidden md:flex">
              <p className="lg:text-center font-bold">홍길동</p>
            </TableTd>
            <TableTd label="관리자" className="flex-1 lg:justify-center">
              <p className="lg:text-center">홍길동</p>
            </TableTd>
            <TableTd label="이메일" className="flex-1 lg:justify-center col-span-2">
              <p className="lg:text-center">hong@globit.kr</p>
            </TableTd>
            <TableTd label="승인여부" className="w-32 lg:justify-center">
              <CustomBadge color="red">거부</CustomBadge>
            </TableTd>
            <TableTd label="권한" className="flex-1 lg:justify-center">
              <p className="lg:text-center">일반관리자</p>
            </TableTd>
          </TableRow>
        </CustomTable>
        <Pagination currentPage={1} totalPages={5}/>
      </Container>
    </>
  )
}
