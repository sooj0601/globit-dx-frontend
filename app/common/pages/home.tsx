import { redirect } from 'react-router';
import type { Route } from '../../common/pages/+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '양식통' },
    { name: 'description', content: '양식통 프로젝트' },
  ];
}

export function loader() {
  return redirect('/monitoring');
}

export default function Home() {
  return null;
}
