import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="メインビジュアル"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          unoptimized
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0d1f3c]/70" />
        {/* Gradient bottom — blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20 text-center text-white pt-28 pb-20">
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-12">
          <span className="w-10 h-px bg-[#c8973a]/60" />
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            情報提供報酬プログラム
          </span>
          <span className="w-10 h-px bg-[#c8973a]/60" />
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-10 leading-tight tracking-tight">
          その情報、
          <br />
          <span className="text-[#c8973a]">お金になります。</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white/75 max-w-2xl mx-auto mb-5 leading-relaxed font-light">
          不動産や事業の売却を考えている人を「知っている」だけで
          <br className="hidden sm:block" />
          報酬をお支払いします。
        </p>
        <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-16">
          あなた自身が所有者である必要はありません。
          <br />
          交渉・契約・手続きはすべて一越が担当します。
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#form"
            className="inline-flex items-center gap-3 bg-[#c8973a] hover:bg-[#b5832e] text-white font-bold text-lg px-12 py-5 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ borderRadius: "3px" }}
          >
            情報を送って報酬を受け取る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how"
            className="text-white/50 hover:text-white/80 text-sm underline underline-offset-4 transition-colors"
          >
            仕組みを確認する
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 text-white/30 text-sm">
          <span>✓ 情報提供に費用はかかりません</span>
          <span>✓ 所有者でなくてもOK</span>
          <span>✓ 個人情報は厳重に管理</span>
        </div>
      </div>
    </section>
  );
}
