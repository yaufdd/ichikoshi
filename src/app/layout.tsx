import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ichikoshi.co.jp"),
  title: {
    default: "不動産・事業情報の提供で報酬を受け取る | 一越株式会社",
    template: "%s | 一越株式会社",
  },
  description:
    "不動産や事業の売却を考えている方をご存知ですか？情報提供だけで報酬をお支払いします。所有者でなくてもOK。交渉・契約はすべて一越が担当します。",
  keywords: [
    "不動産情報提供",
    "事業売却情報",
    "紹介料",
    "情報提供報酬",
    "不動産仲介",
    "M&A",
    "事業承継",
    "物件情報",
    "一越株式会社",
    "報酬",
    "不動産売却",
  ],
  authors: [{ name: "一越株式会社" }],
  creator: "一越株式会社",
  publisher: "一越株式会社",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ichikoshi.co.jp",
    siteName: "一越株式会社",
    title: "不動産・事業情報の提供で報酬を受け取る | 一越株式会社",
    description:
      "不動産や事業の売却を考えている方をご存知ですか？情報提供だけで報酬をお支払いします。所有者でなくてもOK。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "一越株式会社 — 情報提供報酬プログラム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "不動産・事業情報の提供で報酬を受け取る | 一越株式会社",
    description:
      "情報提供だけで報酬をお支払いします。所有者でなくてもOK。交渉・契約はすべて一越が担当。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ichikoshi.co.jp",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "一越株式会社",
  url: "https://ichikoshi.co.jp",
  description:
    "不動産・事業の売買仲介を専門とする企業。情報提供者に成約報酬をお支払いします。",
  areaServed: "JP",
  serviceType: ["不動産仲介", "事業売買仲介", "情報提供報酬"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-warm-white text-navy">
        {children}
      </body>
    </html>
  );
}
