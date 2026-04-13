"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#galerie" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(245,240,232,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(74,124,89,0.12)"
            : "none",
          boxShadow: scrolled
            ? "0 4px 32px rgba(44,32,22,0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="La Colo-nimaux"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <p
                  className="font-600 leading-none transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    color: scrolled ? "#2c2016" : "#f5f0e8",
                  }}
                >
                  La Colo-nimaux
                </p>
                <p
                  className="text-xs uppercase tracking-widest leading-none mt-0.5"
                  style={{
                    fontFamily: "var(--font-lato)",
                    color: scrolled ? "#4a7c59" : "rgba(245,240,232,0.65)",
                  }}
                >
                  Pension Canine & Féline
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm uppercase tracking-[0.12em] transition-colors duration-200 group"
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 600,
                    color: scrolled ? "#4a3728" : "rgba(245,240,232,0.85)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "#4a7c59" }}
                  />
                </a>
              ))}

              <a
                href="tel:0626690774"
                className="ml-4 btn-primary text-xs"
                style={{ padding: "0.625rem 1.5rem" }}
              >
                <span>06 26 69 07 74</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-6 h-0.5 transition-all duration-300"
                  style={{
                    background: scrolled ? "#2c2016" : "#f5f0e8",
                    transform:
                      mobileOpen
                        ? i === 0
                          ? "rotate(45deg) translate(4px, 4px)"
                          : i === 1
                          ? "scaleX(0)"
                          : "rotate(-45deg) translate(4px, -4px)"
                        : "none",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 nav-mobile-overlay md:hidden transition-all duration-400 flex flex-col"
        style={{
          background: "rgba(245,240,232,0.97)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {/* Logo in mobile menu */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-14 h-14">
              <Image
                src="/assets/logo.png"
                alt="La Colo-nimaux"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-400 italic text-bark transition-colors duration-200 hover:text-forest"
              style={{
                fontFamily: "var(--font-cormorant)",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            className="w-16 h-px mt-4"
            style={{ background: "linear-gradient(to right, transparent, #4a7c59, transparent)" }}
          />

          <a
            href="tel:0626690774"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            <span>06 26 69 07 74</span>
          </a>
        </div>
      </div>
    </>
  );
}