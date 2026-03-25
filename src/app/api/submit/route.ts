import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      objectType,
      prefecture,
      city,
      estimatedPrice,
      ownerStatus,
      saleUrgency,
      name,
      contact,
      contactMethod,
      comment,
    } = data;

    const emailBody = `
新しい情報提供がありました。

━━━━━━━━━━━━━━━━━━━━━
【物件・事業情報】
━━━━━━━━━━━━━━━━━━━━━
種類:         ${objectType}
都道府県:     ${prefecture}
市区町村:     ${city || "未記入"}
概算金額:     ${estimatedPrice || "未記入"}
情報の種類:   ${ownerStatus}
売却検討度:   ${saleUrgency || "未記入"}

━━━━━━━━━━━━━━━━━━━━━
【情報提供者】
━━━━━━━━━━━━━━━━━━━━━
お名前:       ${name}
連絡先:       ${contact}
連絡方法:     ${contactMethod}

━━━━━━━━━━━━━━━━━━━━━
【補足コメント】
━━━━━━━━━━━━━━━━━━━━━
${comment || "なし"}
    `.trim();

    await resend.emails.send({
      from: "一越株式会社 <noreply@ichikoshi.co.jp>",
      to: process.env.NOTIFICATION_EMAIL ?? "info@ichikoshi.co.jp",
      subject: `【新規情報提供】${objectType} / ${prefecture}`,
      text: emailBody,
    });

    // Auto-reply to submitter if email provided
    const isEmail = contact.includes("@");
    if (isEmail) {
      await resend.emails.send({
        from: "一越株式会社 <noreply@ichikoshi.co.jp>",
        to: contact,
        subject: "情報提供を受け付けました | 一越株式会社",
        text: `${name} 様

この度は一越株式会社への情報提供、誠にありがとうございます。

お送りいただいた情報を確認し、通常2営業日以内に担当者よりご連絡いたします。
しばらくお待ちください。

なお、ご提供いただいた情報は弊社プライバシーポリシーに従い厳重に管理いたします。
情報提供者様の情報が売主・買主に開示されることはありません。

─────────────────────
一越株式会社
宅地建物取引業免許：____知事（__）第______号
Email: info@ichikoshi.co.jp
─────────────────────
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}
