import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '고운결피부과 | 전문적이고 따뜻한 피부 관리',
  description: '고운결피부과에서 전문적이고 개인 맞춤형 피부 치료를 받아보세요. 경험 많은 의료진과 최신 장비로 건강하고 아름다운 피부를 만들어 드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
