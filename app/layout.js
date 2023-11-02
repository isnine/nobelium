import Header from '@/components/Header'
import { Providers } from '@/components/Providers'
import NavContent from '@/components/navigation/NavContent'
import '@/styles/global.css'
import { ScrollShadow } from '@nextui-org/react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="h-screen flex bg-gray-50">
            <div className="hidden w-64 shrink-0 h-full md:block">
              <NavContent />
            </div>
            <div className="grow h-full md:py-2 md:pl-2">
              <div className="h-full flex flex-col w-full overflow-hidden  md:rounded-l-lg shadow-lg bg-white dark:bg-black">
                <ScrollShadow className="h-full w-full flex flex-col justify-between">
                  <div>
                    <Header>
                      <NavContent />
                    </Header>
                    <main className="max-w-screen-md mx-auto px-4 md:px-6">{children}</main>
                  </div>

                  <div className="h-36 shrink-0 w-full bg-indigo-500/40 flex items-center justify-center text-white">
                    FOOTER 🐾
                  </div>
                </ScrollShadow>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
