"use client";

import { useState } from "react";

const faqs = [
  {
    q: "自分の物件ではなく、知人の物件でも報酬対象になりますか？",
    a: "はい、なります。情報提供者様が所有者である必要はありません。「売りたいと言っていた」という伝聞情報でも対象です。",
  },
  {
    q: "報酬の金額はいくらですか？",
    a: "成約金額・物件の種類・情報の詳細度によって異なります。情報をいただいた後、担当者から個別にご案内いたします。まずはお気軽にご連絡ください。",
  },
  {
    q: "情報を送った後、自分が何かしなければなりませんか？",
    a: "基本的にはありません。追加で確認が必要な場合のみご連絡することがあります。交渉・契約はすべて弊社が対応します。",
  },
  {
    q: "売主がまだ売ると決めていない段階でも大丈夫ですか？",
    a: "大丈夫です。「検討中」「迷っている」という段階の情報でもお送りください。弊社が適切なアプローチを検討します。",
  },
  {
    q: "個人情報の取り扱いはどうなりますか？",
    a: "弊社プライバシーポリシーに従い厳重に管理します。情報提供者様の名前・連絡先を売主・買主に開示することはありません。",
  },
  {
    q: "海外在住でも大丈夫ですか？",
    a: "対応可能です。報酬のお支払い方法についてもご相談いただけます。まずはフォームよりご連絡ください。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e7eb] last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-8 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="flex items-start gap-3">
          <span className="text-[#c8973a] font-bold text-sm mt-0.5 flex-shrink-0">
            Q
          </span>
          <span className="text-[#1a1a2e] font-medium text-sm leading-relaxed group-hover:text-[#1b3a6b] transition-colors">
            {q}
          </span>
        </span>
        <svg
          className={`w-5 h-5 text-[#6b7280] flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="pb-6 pl-7">
          <p className="text-[#6b7280] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-36 lg:py-48 bg-[#f5f5f0]"
      aria-label="よくあるご質問"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a2e] mt-4 tracking-tight">
            よくあるご質問
          </h2>
        </div>

        {/* FAQ list */}
        <div
          className="bg-white border border-[#e5e7eb] px-10"
          style={{ borderRadius: "4px" }}
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
