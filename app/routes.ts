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
    route('/info', 'features/mypage/pages/info-edit.tsx'),
    ...prefix('feed', [
      route('/', 'features/mypage/pages/feed/feed-management.tsx'),
      route('/detail', 'features/mypage/pages/feed/feed-detail.tsx'),
      route('/edit', 'features/mypage/pages/feed/feed-edit.tsx'),
    ]),
    ...prefix('medicine', [
      route('/', 'features/mypage/pages/medicine/medicine-management.tsx'),
      route('/detail', 'features/mypage/pages/medicine/medicine-detail.tsx'),
      route('/edit', 'features/mypage/pages/medicine/medicine-edit.tsx'),
    ]),
    ...prefix('farm', [
      route('/', 'features/mypage/pages/farm/farm-management.tsx'),
      route('/edit', 'features/mypage/pages/farm/farm-edit.tsx'),
    ]),
    route('watertank', 'features/mypage/pages/water-tank-management.tsx'),
  ]),

  // MARK: - 관리자 페이지
] satisfies RouteConfig;
