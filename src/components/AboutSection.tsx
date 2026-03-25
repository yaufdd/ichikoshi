export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#fafaf8]"
      aria-label="一越株式会社について"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — why we pay */}
          <div>
            <span className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase">
              一越株式会社について
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mt-3 mb-8">
              なぜ情報提供者に
              <br />
              報酬をお支払いするのか
            </h2>

            <div className="space-y-5 text-[#1a1a2e]/80 text-base leading-relaxed">
              <p>
                不動産や事業の売買において、最も難しいのは
                「売りたい人」と「買いたい人」を繋げることです。
              </p>
              <p>
                広告では届かない案件、表に出ていない物件——
                そういった情報は、人と人とのつながりの中にあります。
              </p>
              <p>
                一越は、その「つながり」に正当な価値があると考えています。
                だからこそ、情報をお寄せいただいた方に成約報酬をお支払いしています。
              </p>
            </div>

            {/* Legal note */}
            <div className="mt-8 border-l-2 border-[#c8973a] pl-4">
              <p className="text-[#6b7280] text-xs leading-relaxed">
                報酬のお支払いは宅地建物取引業法および関連法令に基づき
                適法に行われます。
              </p>
            </div>
          </div>

          {/* Right — company info */}
          <div
            className="bg-[#f5f5f0] border border-[#e5e7eb] p-8"
            style={{ borderRadius: "4px" }}
          >
            <h3 className="text-[#1a1a2e] font-bold text-lg mb-6">
              会社概要
            </h3>

            <dl className="space-y-4">
              {[
                { label: "会社名", value: "一越株式会社" },
                { label: "設立", value: "____年" },
                {
                  label: "宅地建物取引業免許",
                  value: "____知事（__）第______号",
                },
                { label: "所在地", value: "東京都____" },
                { label: "対応エリア", value: "全国" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-4 pb-4 border-b border-[#e5e7eb] last:border-0 last:pb-0"
                >
                  <dt className="text-[#6b7280] text-sm">{item.label}</dt>
                  <dd className="text-[#1a1a2e] text-sm font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e7eb]">
              {[
                { num: "____", unit: "年", label: "設立" },
                { num: "____", unit: "件", label: "取扱実績" },
                { num: "全国", unit: "", label: "対応エリア" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#1b3a6b]">
                    {s.num}
                    <span className="text-sm font-normal">{s.unit}</span>
                  </div>
                  <div className="text-xs text-[#6b7280] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
