'use client'

import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-main/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          {/* 이미지 - 모바일에서는 먼저 표시 */}
          <div className="lg:order-last lg:col-start-2">
            <div className="relative lg:-ml-24 lg:mr-0">
              <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl ml-auto">
                <Image
                  src="/images/hero-main.png"
                  alt="피부 관리를 받고 있는 여성"
                  width={500}
                  height={625}
                  className="object-cover w-full h-full object-[0%_center]"
                  priority
                />
              </div>
              
              {/* 플로팅 리뷰 카드 */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-lg px-6 py-3 transform hover:translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-main to-brand-accent/30 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-yellow-400 text-base drop-shadow-md">⭐</span>
                  </div>
                  <div>
                    <div className="font-medium text-lg">4.9/5</div>
                    <div className="text-sm text-brand-text/60">고객 만족도</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 텍스트 콘텐츠 */}
          <div className="text-center lg:text-left lg:col-start-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text tracking-wide">
              <span className="block tracking-wider">아름다운 피부,</span>
              <span className="block mt-3 text-brand-cta tracking-wider">건강한 미래</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-brand-text/80 leading-relaxed tracking-wide max-w-2xl">
              고운결피부과는 15년 경력의 전문 의료진과 최신 의료장비로
              <br className="hidden sm:block" />
              개인 맞춤형 피부 치료를 제공합니다.
            </p>
            
            {/* CTA 버튼들 */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/consultation"
                className="bg-brand-cta hover:bg-brand-accent text-brand-light px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                무료 상담 받기
              </Link>
              <Link
                href="/clinic"
                className="bg-white hover:bg-brand-main/10 text-brand-text px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                클리닉 둘러보기
              </Link>
            </div>
            
            {/* 신뢰 지표 */}
            <div className="mt-12 flex gap-8 text-sm text-text/70">
              <div className="flex items-center">
                <span className="text-brand-cta mr-2">•</span>
                15년+ 전문 경력
              </div>
              <div className="flex items-center">
                <span className="text-brand-cta mr-2">•</span>
                1만+ 만족 고객
              </div>
              <div className="flex items-center">
                <span className="text-brand-cta mr-2">•</span>
                개인 맞춤 치료
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 