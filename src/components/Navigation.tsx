"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#a-propos" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#galerie" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1e3526]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#4a7c59]/20 flex items-center justify-center shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo La Colo-nimaux"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <span
                className="text-[#f7f3ec] block leading-tight group-hover:text-[#a8c5b0] transition-colors"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                }}
              >
                La Colo-nimaux
              </span>
              <span
                className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase leading-none"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Pension Canine &amp; Féline
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[#f7f3ec]/80 hover:text-[#f7f3ec] text-sm tracking-wide transition-colors group"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:0626690774"
              className="ml-4 bg-[#4a7c59] hover:bg-[#2f5038] text-[#f7f3ec] px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
            >
              06.26.69.07.74
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#f7f3ec] p-2 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col justify-center gap-1.5 w-6 h-6">
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1e3526]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Decorative blur orb */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#4a7c59]/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#f7f3ec] hover:text-[#c9a84c] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2.5rem",
                fontWeight: 500,
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col items-center gap-3 border-t border-[#4a7c59]/30 pt-6 w-full">
            <a
              href="tel:0626690774"
              className="text-[#c9a84c] text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
              onClick={() => setMenuOpen(false)}
            >
              06.26.69.07.74
            </a>
            <a
              href="mailto:la.colo.nimaux@gmail.com"
              className="text-[#a8c5b0] text-sm hover:text-[#c9a84c] transition-colors"
              style={{ fontFamily: "var(--font-raleway)" }}
              onClick={() => setMenuOpen(false)}
            >
              la.colo.nimaux@gmail.com
            </a>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-5 right-6 text-[#f7f3ec] hover:text-[#c9a84c] transition-colors text-4xl leading-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          &times;
        </button>
      </div>
    </>
  );
}
