import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "一越株式会社のプライバシーポリシーです。",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#1a1a2e] mb-10 transition-colors"
        >
          ← トップページへ戻る
        </Link>

        <h1 className="text-3xl font-bold text-[#1a1a2e] mb-10">
          プライバシーポリシー
        </h1>

        <div className="prose prose-sm max-w-none text-[#1a1a2e] space-y-8">
          <section>
            <h2 className="text-lg font-bold mb-3">1. 個人情報の収集について</h2>
            <p className="text-[#6b7280] leading-relaxed">
              一越株式会社（以下「弊社」）は、情報提供フォームを通じてお名前・連絡先等の個人情報を収集します。
              収集した個人情報は、情報提供報酬の連絡および関連業務にのみ使用します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">2. 個人情報の第三者提供</h2>
            <p className="text-[#6b7280] leading-relaxed">
              弊社は、情報提供者様の個人情報を売主・買主その他の第三者に開示・提供することはありません。
              ただし、法令に基づく開示が必要な場合はこの限りではありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">3. 個人情報の管理</h2>
            <p className="text-[#6b7280] leading-relaxed">
              弊社は、個人情報の漏洩・滅失・毀損の防止のために適切なセキュリティ対策を実施します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">4. お問い合わせ</h2>
            <p className="text-[#6b7280] leading-relaxed">
              個人情報の取り扱いに関するお問い合わせは、info@ichikoshi.co.jp までご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
