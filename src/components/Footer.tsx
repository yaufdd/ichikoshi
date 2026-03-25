export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#111827] border-t border-white/5 py-12"
      aria-label="フッター"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          {/* Company */}
          <div>
            <div className="text-white font-bold text-lg mb-3">
              一越株式会社
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              不動産・事業の売買仲介を専門とする企業。
              <br />
              情報提供者に成約報酬をお支払いします。
            </p>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              会社情報
            </h3>
            <dl className="space-y-2 text-sm">
              {[
                ["所在地", "東京都____"],
                ["宅建業免許", "____知事（__）第______号"],
                ["営業時間", "平日 9:00〜18:00"],
                ["メール", "info@ichikoshi.co.jp"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="text-white/30 flex-shrink-0 w-24">{label}</dt>
                  <dd className="text-white/60">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              リンク
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "情報提供フォーム", href: "#form" },
                { label: "よくあるご質問", href: "#faq" },
                { label: "プライバシーポリシー", href: "/privacy" },
                { label: "特定商取引法に基づく表記", href: "/tokusho" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {currentYear} 一越株式会社. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            宅地建物取引業免許：____知事（__）第______号
          </p>
        </div>
      </div>
    </footer>
  );
}
