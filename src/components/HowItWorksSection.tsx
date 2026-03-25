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
      className="py-24 lg:py-32 bg-[#1a1a2e]"
      aria-label="報酬を受け取るまでの流れ"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase">
            シンプルな仕組み
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-5">
            情報提供から報酬受け取りまで
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            4つのステップで完結します。
            <br />
            あなたはフォームを送るだけでいい。
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                {/* Number circle */}
                <div className="flex items-center justify-center w-24 h-24 rounded-full border border-[#c8973a]/30 bg-[#c8973a]/5 mx-auto mb-6 relative z-10">
                  <span className="text-[#c8973a] text-2xl font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm text-center leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="mt-auto">
                  <span className="block text-center text-xs text-[#c8973a] font-medium">
                    ✓ {step.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div
          className="mt-16 border border-white/10 bg-white/5 p-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{ borderRadius: "4px" }}
        >
          {[
            "情報提供者様が売主・買主と直接やり取りする必要はありません",
            "法的な手続きに関わる必要もありません",
            "情報を送った後は、弊社からの報告をお待ちいただくだけです",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#c8973a] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-white/70 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
