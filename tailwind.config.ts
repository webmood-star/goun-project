import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-main': '#DCEBE6',      // 연한 민트 (메인 배경용)
        'brand-point': '#F4E9E0',     // 연한 피치 (부드러운 포인트용)
        'brand-accent': '#C1D2CA',    // 연한 세이지톤 (카드 배경/푸터용)
        'brand-cta': '#9CC5B5',       // CTA 버튼용 세이지
        'brand-text': '#2E2E2E',      // 본문 및 헤드라인용 고급스러운 진회색
        'brand-bg': '#FAFAFA',        // 전체 배경용 밝은 화이트
        'brand-dark': '#171717',      // 다크 모드용 텍스트
        'brand-light': '#ffffff',     // 라이트 모드용 텍스트
      }
    },
  },
  plugins: [],
}

export default config 