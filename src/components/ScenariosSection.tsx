const scenarios = [
  {
    icon: "💬",
    text: "友人・知人が「そろそろ店を閉めようかな」と言っていた",
  },
  {
    icon: "🏢",
    text: "取引先のオーナーが物件の売却を検討していると聞いた",
  },
  {
    icon: "🏘️",
    text: "近所のビルや土地が長期間空いている",
  },
  {
    icon: "👨‍👩‍👧",
    text: "親族が相続した不動産をどうするか悩んでいる",
  },
  {
    icon: "🍜",
    text: "常連のお店が閉店・売却を考えていると聞いた",
  },
  {
    icon: "📋",
    text: "仕事柄、売却を検討している方と接することが多い",
  },
];

export default function ScenariosSection() {
  return (
    <section
      id="scenarios"
      className="py-36 lg:py-48 bg-[#fafaf8]"
      aria-label="対象となる方"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            こんな方が対象です
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a2e] mt-4 mb-6 tracking-tight">
            こんな情報をお待ちしています
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
            「売りたい人を知っている」という情報だけで構いません。
            <br />
            あなたが情報を提供するだけで、報酬の対象になります。
          </p>
        </div>

        {/* Scenarios grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e7eb] p-8 hover:border-[#1b3a6b] hover:shadow-lg transition-all duration-300 group"
              style={{ borderRadius: "4px" }}
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <p className="text-[#1a1a2e] text-base leading-relaxed">{s.text}</p>
              <div className="mt-6">
                <span className="text-xs font-semibold text-[#c8973a] bg-[#c8973a]/10 px-3 py-1 rounded">
                  対象です
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-[#6b7280] text-base">
            「確実に売るかどうか」はまだ決まっていなくても構いません。
            <br className="hidden sm:block" />
            情報の段階でご連絡ください。弊社が可能性を判断します。
          </p>
        </div>
      </div>
    </section>
  );
}
