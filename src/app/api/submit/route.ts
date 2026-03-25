import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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

    await transporter.sendMail({
      from: `"一越株式会社" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `【新規情報提供】${objectType} / ${prefecture}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}
