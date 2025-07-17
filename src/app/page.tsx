import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 여기에 메인 콘텐츠가 들어갈 예정입니다 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-text">
            고운결피부과에 오신 것을 환영합니다
          </h1>
          <p className="mt-4 text-lg text-brand-text/80">
            전문적이고 따뜻한 피부 관리를 만나보세요
          </p>
        </div>
      </main>
    </div>
  );
}
