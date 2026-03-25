const steps = [
  {
    number: "01",
    title: "情報を送る",
    description:
      "フォームから物件・事業の概要と情報提供者のご連絡先をお送りください。所要時間は約5分です。",
    note: "あなたへの負担：ゼロ",
  },
  {
    number: "02",
    title: "弊社が確認・調査",
    description:
      "担当者が内容を確認し、売主様への打診・交渉を進めます。あなたが売主・買主と直接やり取りする必要はありません。",
    note: "交渉はすべて一越が担当",
  },
  {
    number: "03",
    title: "売買成立",
    description:
      "一越が売主・買主の間に立ち、契約・決済・手続きをすべて対応します。",
    note: "法的手続きも一越が対応",
  },
  {
    number: "04",
    title: "報酬をお支払い",
    description:
      "成約が完了した時点で、成約金額に応じた報酬を情報提供者様にお支払いします。",
    note: "成約前は費用・手数料は一切かかりません",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      className="py-36 lg:py-48 bg-[#1a1a2e]"
      aria-label="報酬を受け取るまでの流れ"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            シンプルな仕組み
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">
            情報提供から報酬受け取りまで
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto leading-relaxed">
            4つのステップで完結します。
            <br />
            あなたはフォームを送るだけでいい。
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-white/8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="flex items-center justify-center w-28 h-28 rounded-full border border-[#c8973a]/25 bg-[#c8973a]/5 mb-8 relative z-10">
                  <span className="text-[#c8973a] text-3xl font-bold">{step.number}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-white/45 text-sm leading-loose mb-6">{step.description}</p>
                <div className="mt-auto">
                  <span className="text-xs text-[#c8973a] font-medium">✓ {step.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div
          className="mt-24 border border-white/8 bg-white/3 p-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
          style={{ borderRadius: "4px" }}
        >
          {[
            "情報提供者様が売主・買主と直接やり取りする必要はありません",
            "法的な手続きに関わる必要もありません",
            "情報を送った後は、弊社からの報告をお待ちいただくだけです",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-[#c8973a] mt-0.5 flex-shrink-0 text-lg">✓</span>
              <p className="text-white/60 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
