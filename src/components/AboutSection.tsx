const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "情報は厳重に保護",
    body: "情報提供者様のお名前・連絡先が売主・買主に開示されることはありません。すべての情報は弊社内でのみ取り扱います。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "費用は一切かかりません",
    body: "情報提供に費用・手数料は不要です。報酬は成約が完了した時点でのみ発生します。リスクゼロで参加できます。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "全国対応",
    body: "北海道から沖縄まで、離島・過疎地域も含め全国の物件・事業情報に対応しています。海外在住の方もご相談ください。",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-36 lg:py-48 bg-[#fafaf8]"
      aria-label="一越株式会社について"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

          {/* Right — value cards */}
          <div className="space-y-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-[#e5e7eb] p-8 flex items-start gap-6"
                style={{ borderRadius: "4px" }}
              >
                <div className="text-[#1b3a6b] flex-shrink-0 mt-0.5">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-[#1a1a2e] font-bold text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
