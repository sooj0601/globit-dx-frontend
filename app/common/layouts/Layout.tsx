import type {ReactNode} from 'react'
import Header from './Header.tsx'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div id="wrapper" className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="w-full max-w-7xl mx-auto md:pt-10 px-4 md:px-6 flex-grow">{children}</main>
    </div>
  )
}

export default Layout