import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLocation,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import Header from './common/layouts/Header';
import MypageMenu from './common/layouts/MypageMenu';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isMyPage = location.pathname.startsWith('/mypage');
  const isAuth = location.pathname.startsWith('/auth');
  const baseClass = 'w-full max-w-7xl mx-auto md:pt-10 px-4 md:py-12 md:px-6 grow relative';
  return isAuth ? (
    <div id="wrapper" className="w-full min-h-screen flex flex-col bg-blue-50 bg-[url(/assets/auth-bg.png)] bg-cover bg-center">
        <main className={`${baseClass}`}>
          <Outlet />
        </main>
    </div>
  ) : (
    <div id="wrapper" className="w-full min-h-screen flex flex-col">
      <Header />
      {isMyPage ? (
        <div className={`${baseClass} flex gap-16`}>
          <MypageMenu />
          <main className={`w-full`}>
            <Outlet />
          </main>
        </div>
      ) : (
        <main className={`${baseClass}`}>
          <Outlet />
        </main>
      )}
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
