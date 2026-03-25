"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20 h-16 flex items-center justify-between">
        <div className="text-white font-bold text-lg tracking-wide">
          一越株式会社
        </div>
        <a
          href="#form"
          className="hidden sm:inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#b5832e] text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
          style={{ borderRadius: "3px" }}
        >
          情報を送る
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
