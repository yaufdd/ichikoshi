export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#111827] border-t border-white/5 py-8"
      aria-label="フッター"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs">
          © {currentYear} 一越株式会社. All rights reserved.
        </p>
        <a
          href="mailto:info@ichikoshi.com"
          className="text-white/40 hover:text-white/70 text-xs transition-colors"
        >
          info@ichikoshi.com
        </a>
      </div>
    </footer>
  );
}
