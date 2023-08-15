
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

import { Providers } from './redux/provider'
import NavBar from './NavBar/NavBar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center flex-col p-10 gap-5 min-h-screen'>
        <Providers>
          <header>
          <NavBar />
          </header>
          {children}
        </Providers>
        </body>
    </html>
  )
}
