'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 상담 버튼을 제외한 일반 네비게이션 링크
  const navLinks = [
    { name: '의료진소개', href: '/doctors' },
    { name: '클리닉소개', href: '/clinic' },
    { name: '진료안내', href: '/treatment' },
    { name: '시술후기', href: '/reviews' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-brand-light shadow-md border-b border-brand-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고/홈 링크 */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-brand-text hover:text-brand-cta transition-all duration-300"
            >
              고운결피부과의원
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-text hover:text-brand-cta px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-cta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
            {/* CTA 상담 버튼 */}
            <Link
              href="/consultation"
              className="bg-brand-cta hover:bg-brand-accent text-brand-light px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ml-4 flex items-center justify-center"
            >
              상담예약
            </Link>
          </div>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-text hover:text-brand-cta focus:outline-none focus:text-brand-cta transition-all duration-300"
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light border-t border-brand-accent/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-text hover:text-brand-cta hover:bg-brand-accent/10 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* 모바일 CTA 상담 버튼 */}
            <div className="px-3 pt-4">
              <Link
                href="/consultation"
                className="bg-brand-cta hover:bg-brand-accent text-brand-light block py-3 text-base font-medium text-center rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                상담예약
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 