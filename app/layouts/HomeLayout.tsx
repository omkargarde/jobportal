import { Header } from '~/components/Header'

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-24">{children}</main>
    </>
  )
}
