"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  objectType: z.string().min(1, "物件・事業の種類を選択してください"),
  prefecture: z.string().min(1, "都道府県を選択してください"),
  city: z.string().optional(),
  estimatedPrice: z.string().optional(),
  ownerStatus: z.string().min(1, "選択してください"),
  saleUrgency: z.string().optional(),
  name: z.string().min(1, "お名前を入力してください"),
  contact: z.string().min(1, "連絡先を入力してください"),
  contactMethod: z.string().min(1, "希望連絡方法を選択してください"),
  comment: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

type FormData = z.infer<typeof schema>;

const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
  "海外",
];

export default function FormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "物件・事業の種類": data.objectType,
          "都道府県": data.prefecture,
          "市区町村": data.city || "未記入",
          "概算金額": data.estimatedPrice || "未記入",
          "情報の種類": data.ownerStatus,
          "売却検討度": data.saleUrgency || "未記入",
          "お名前": data.name,
          "連絡先": data.contact,
          "希望連絡方法": data.contactMethod,
          "補足コメント": data.comment || "なし",
        }),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-white/15 bg-[#243554] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c8973a] transition-colors placeholder:text-white/30";
  const selectClass =
    "w-full border border-white/15 bg-[#243554] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c8973a] transition-colors";
  const labelClass = "block text-sm font-medium text-white/80 mb-1.5";
  const errorClass = "mt-1 text-xs text-red-500";

  return (
    <section
      id="form"
      className="py-36 lg:py-48 bg-[#1a1a2e]"
      aria-label="情報提供フォーム"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase">
            情報提供フォーム
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 tracking-tight">
            物件・事業情報をお送りください
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            記入は5分ほどで完了します。不明な点は空欄で構いません。
            <br />
            まず情報をお送りいただければ、担当者よりご連絡いたします。
          </p>
        </div>

        {status === "success" ? (
          <div
            className="bg-white/5 border border-[#c8973a]/30 p-10 text-center"
            style={{ borderRadius: "4px" }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-white font-bold text-xl mb-3">
              情報を受け付けました
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              通常2営業日以内に担当者よりご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Object type */}
            <div>
              <label htmlFor="objectType" className={labelClass}>
                物件・事業の種類{" "}
                <span className="text-[#c8973a] text-xs">必須</span>
              </label>
              <select
                id="objectType"
                {...register("objectType")}
                className={inputClass}
                style={{ borderRadius: "3px" }}
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <optgroup label="不動産">
                  <option>マンション・アパート一棟</option>
                  <option>収益物件・投資用物件</option>
                  <option>商業ビル・テナントビル</option>
                  <option>戸建て・土地</option>
                  <option>工場・倉庫・事務所</option>
                  <option>ホテル・旅館・民泊施設</option>
                  <option>その他の不動産</option>
                </optgroup>
                <optgroup label="事業・ビジネス">
                  <option>飲食店</option>
                  <option>美容室・エステ・サロン</option>
                  <option>小売店</option>
                  <option>医療・介護・福祉施設</option>
                  <option>ECサイト・WEBメディア</option>
                  <option>その他の事業</option>
                </optgroup>
              </select>
              {errors.objectType && (
                <p className={errorClass}>{errors.objectType.message}</p>
              )}
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prefecture" className={labelClass}>
                  都道府県{" "}
                  <span className="text-[#c8973a] text-xs">必須</span>
                </label>
                <select
                  id="prefecture"
                  {...register("prefecture")}
                  className={inputClass}
                  style={{ borderRadius: "3px" }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {prefectures.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
                {errors.prefecture && (
                  <p className={errorClass}>{errors.prefecture.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className={labelClass}>
                  市区町村
                </label>
                <input
                  id="city"
                  type="text"
                  {...register("city")}
                  placeholder="例：新宿区、渋谷区"
                  className={inputClass}
                  style={{ borderRadius: "3px" }}
                />
              </div>
            </div>

            {/* Price estimate */}
            <div>
              <label htmlFor="estimatedPrice" className={labelClass}>
                概算金額（わかる範囲で）
              </label>
              <select
                id="estimatedPrice"
                {...register("estimatedPrice")}
                className={inputClass}
                style={{ borderRadius: "3px" }}
                defaultValue=""
              >
                <option value="">わからない・未定</option>
                <option>1,000万円未満</option>
                <option>1,000万〜3,000万円</option>
                <option>3,000万〜5,000万円</option>
                <option>5,000万〜1億円</option>
                <option>1億〜3億円</option>
                <option>3億〜10億円</option>
                <option>10億円以上</option>
              </select>
            </div>

            {/* Owner status */}
            <div>
              <label htmlFor="ownerStatus" className={labelClass}>
                情報の種類{" "}
                <span className="text-[#c8973a] text-xs">必須</span>
              </label>
              <select
                id="ownerStatus"
                {...register("ownerStatus")}
                className={inputClass}
                style={{ borderRadius: "3px" }}
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option>自分が所有している物件・事業</option>
                <option>知人・友人が売却を検討している</option>
                <option>取引先・ビジネス関係者の情報</option>
                <option>その他の情報源</option>
              </select>
              {errors.ownerStatus && (
                <p className={errorClass}>{errors.ownerStatus.message}</p>
              )}
            </div>

            {/* Sale urgency */}
            <div>
              <label htmlFor="saleUrgency" className={labelClass}>
                売却の検討度合い
              </label>
              <select
                id="saleUrgency"
                {...register("saleUrgency")}
                className={inputClass}
                style={{ borderRadius: "3px" }}
                defaultValue=""
              >
                <option value="">わからない</option>
                <option>すぐにでも売りたい</option>
                <option>半年〜1年以内に検討</option>
                <option>まだ検討段階・相談したい</option>
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/40 text-xs mb-6">
                以下はあなたの連絡先です。情報提供者様の情報が売主・買主に開示されることはありません。
              </p>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className={labelClass}>
                  お名前{" "}
                  <span className="text-[#c8973a] text-xs">必須</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="山田 太郎"
                  className={inputClass}
                  style={{ borderRadius: "3px" }}
                />
                {errors.name && (
                  <p className={errorClass}>{errors.name.message}</p>
                )}
              </div>

              {/* Contact */}
              <div className="mb-4">
                <label htmlFor="contact" className={labelClass}>
                  連絡先（電話番号またはメールアドレス）{" "}
                  <span className="text-[#c8973a] text-xs">必須</span>
                </label>
                <input
                  id="contact"
                  type="text"
                  {...register("contact")}
                  placeholder="080-0000-0000 または example@mail.com"
                  className={inputClass}
                  style={{ borderRadius: "3px" }}
                />
                {errors.contact && (
                  <p className={errorClass}>{errors.contact.message}</p>
                )}
              </div>

              {/* Preferred contact method */}
              <div>
                <label htmlFor="contactMethod" className={labelClass}>
                  ご希望の連絡方法{" "}
                  <span className="text-[#c8973a] text-xs">必須</span>
                </label>
                <select
                  id="contactMethod"
                  {...register("contactMethod")}
                  className={inputClass}
                  style={{ borderRadius: "3px" }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>電話</option>
                  <option>メール</option>
                  <option>LINE</option>
                  <option>どちらでも可</option>
                </select>
                {errors.contactMethod && (
                  <p className={errorClass}>{errors.contactMethod.message}</p>
                )}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className={labelClass}>
                補足・コメント（任意）
              </label>
              <textarea
                id="comment"
                {...register("comment")}
                rows={4}
                placeholder="その他、気になることや詳細があればご記入ください"
                className={`${inputClass} resize-none`}
                style={{ borderRadius: "3px" }}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                {...register("privacy")}
                className="mt-0.5 w-4 h-4 accent-[#c8973a] flex-shrink-0"
              />
              <label htmlFor="privacy" className="text-white/60 text-xs leading-relaxed">
                <a
                  href="/privacy"
                  className="text-[#c8973a] underline hover:no-underline"
                  target="_blank"
                >
                  プライバシーポリシー
                </a>
                に同意して送信します
              </label>
            </div>
            {errors.privacy && (
              <p className={errorClass}>{errors.privacy.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#c8973a] hover:bg-[#b5832e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base py-4 transition-all duration-200 flex items-center justify-center gap-3"
              style={{ borderRadius: "3px" }}
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  送信中...
                </>
              ) : (
                <>
                  無料で情報を送る
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                送信に失敗しました。しばらく経ってから再度お試しください。
              </p>
            )}

            <p className="text-white/30 text-xs text-center">
              送信後、通常2営業日以内に担当者よりご連絡いたします。
              <br />
              情報をお送りいただいても、売主様への無断連絡は行いません。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
