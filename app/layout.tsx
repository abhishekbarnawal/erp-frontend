import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/core/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AXIS',
  description: 'Next Generation HRMS Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          {/* <nav className="bg-cyan-900 h-20 shadow-lg flex w-full justify-between items-center pr-6">
            <div className='flex w-60 h-full items-center place-content-between px-2'>
              <p className='px-2'>Logo</p>
              <p className='px-2'>Brand Name</p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Search" />
              <Button type="submit">Search</Button>
            </div>
          </nav> */}
          <div className='flex grow h-full overflow-auto'>
            <Sidebar />
            {children}
          </div>
          <div className="text-center py-2 bg-cyan-900"><p className="text-white text-sm">© 2023 ERP | All rights reserved</p></div>
        </div>
      </body>
    </html>
  )
}
