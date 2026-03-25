const realEstate = [
  "マンション・アパート一棟",
  "収益物件・投資用物件",
  "商業ビル・テナントビル",
  "戸建て・土地",
  "工場・倉庫・事務所",
  "ホテル・旅館・民泊施設",
];

const businesses = [
  "飲食店（ラーメン・居酒屋・カフェ等）",
  "美容室・エステ・ネイルサロン",
  "小売店・ブランド品店",
  "医療・介護・福祉施設",
  "ECサイト・WEBメディア",
  "その他の継続事業",
];

export default function ObjectTypesSection() {
  return (
    <section
      id="objects"
      className="py-36 lg:py-48 bg-[#f5f5f0]"
      aria-label="対象となる物件・事業"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            対象物件・事業
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a2e] mt-4 mb-6 tracking-tight">
            対象となる物件・事業
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
            「売れるかどうかわからない」という情報でも構いません。
            <br />
            まずお送りください。弊社が可能性を判断します。
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Real estate */}
          <div
            className="bg-white border border-[#e5e7eb] overflow-hidden"
            style={{ borderRadius: "4px" }}
          >
            <div className="bg-[#1b3a6b] px-8 py-5">
              <h3 className="text-white font-semibold text-lg">不動産</h3>
            </div>
            <ul className="p-8 space-y-5">
              {realEstate.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8973a] flex-shrink-0" />
                  <span className="text-[#1a1a2e] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div
            className="bg-white border border-[#e5e7eb] overflow-hidden"
            style={{ borderRadius: "4px" }}
          >
            <div className="bg-[#1b3a6b] px-8 py-5">
              <h3 className="text-white font-semibold text-lg">
                事業・ビジネス
              </h3>
            </div>
            <ul className="p-8 space-y-5">
              {businesses.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8973a] flex-shrink-0" />
                  <span className="text-[#1a1a2e] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-[#6b7280] text-base mt-12">
          上記以外でも、まずはご相談ください。
          <br />
          対応エリア：全国（離島・過疎地域もご相談可）
        </p>
      </div>
    </section>
  );
}
