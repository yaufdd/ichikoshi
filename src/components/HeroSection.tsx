export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="メインビジュアル"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1b3a6b]">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20 text-center text-white pt-20">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-[#c8973a]" />
          <span className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase">
            情報提供報酬プログラム
          </span>
          <span className="w-8 h-px bg-[#c8973a]" />
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          その情報、
          <br className="hidden sm:block" />
          <span className="text-[#c8973a]">お金になります。</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          不動産や事業の売却を考えている人を「知っている」だけで
          <br className="hidden sm:block" />
          報酬をお支払いします。
        </p>
        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-12">
          あなた自身が所有者である必要はありません。
          <br />
          交渉・契約・手続きはすべて一越が担当します。
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#form"
            className="inline-flex items-center gap-3 bg-[#c8973a] hover:bg-[#b5832e] text-white font-bold text-lg px-10 py-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ borderRadius: "3px" }}
          >
            情報を送って報酬を受け取る
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#how"
            className="text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            仕組みを確認する
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
          <span>✓ 情報提供に費用はかかりません</span>
          <span>✓ 所有者でなくてもOK</span>
          <span>✓ 個人情報は厳重に管理</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
