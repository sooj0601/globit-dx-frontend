import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  // MARK: - 메인(랜딩) 페이지 (현재는 없어서 리다이렉션 시켜야함)
  index('common/pages/home.tsx'),

  //MARK: - 인증 관리
  ...prefix('auth', [
    route('login', 'features/auth/pages/login.tsx'),
    route('sign-up', 'features/auth/pages/sign-up.tsx'),
  ]),

  // MARK: - 양식 현황
  route('monitoring', 'features/monitoring/pages/farm-monitoring-page.tsx'),

  // MARK: - 입/출하 관리
  ...prefix('diary', [
    route('', 'features/diary/pages/diary-page.tsx'),
    route('enter', 'features/diary/pages/enter-page.tsx'),
    route('sale', 'features/diary/pages/sale-page.tsx'),
    route('log', 'features/diary/pages/diary-log-page.tsx'),
    route('cage/:cageId', 'features/diary/pages/cage-log-page.tsx'),
  ]),

  // MARK: - 마이페이지
  ...prefix('mypage', [
    route('', 'features/mypage/pages/info-page.tsx'),
    route('feed', 'features/mypage/pages/feed-management.tsx'),
    route('medicine', 'features/mypage/pages/medicine-management.tsx'),
    route('farm', 'features/mypage/pages/farm-registration.tsx'),
    route('watertank', 'features/mypage/pages/water-tank-management.tsx'),
  ]),

  // MARK: - 관리자 페이지
] satisfies RouteConfig;
