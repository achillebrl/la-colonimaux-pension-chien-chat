"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#2c2016", color: "#f5f0e8" }}>
      {/* Top decorative band */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, #2d5c3f, #4a7c59, #c9a84c, #4a7c59, #2d5c3f)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Logo La Colo-nimaux"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                  }}
                >
                  La Colo-nimaux
                </p>
                <p
                  className="text-xs uppercase tracking-widest leading-none mt-0.5"
                  style={{ fontFamily: "var(--font-lato)", color: "#8aab8f" }}
                >
                  Pension Canine &amp; Féline
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 300,
                color: "rgba(245,240,232,0.6)",
              }}
            >
              Pension canine et féline en liberté, gérée par une éducatrice
              comportementaliste diplômée. Ambarès-et-Lagrave, Gironde.
            </p>

            <a
              href="https://www.facebook.com/Lacolonimaux/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-lato)", color: "#8aab8f" }}
            >
              <span className="text-base">🌐</span>
              <span>Suivez-nous sur Facebook</span>
            </a>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              className="text-lg italic mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                color: "#c9a84c",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "À Propos", href: "#apropos" },
                { label: "Nos Services", href: "#services" },
                { label: "Galerie Photo", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{
                      fontFamily: "var(--font-lato)",
                      color: "rgba(245,240,232,0.55)",
                    }}
                  >
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs"
                      style={{ color: "#4a7c59" }}
                    >
                      ✦
                    </span>
                    <span className="group-hover:text-cream transition-colors duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4
              className="text-lg italic mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                color: "#c9a84c",
              }}
            >
              Nous contacter
            </h4>
            <div className="space-y-4">
              <a
                href="tel:0626690774"
                className="flex items-center gap-3 group transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                <span className="text-base" style={{ color: "#4a7c59" }}>
                  📞
                </span>
                <span
                  className="text-sm group-hover:text-cream transition-colors duration-200"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  06 26 69 07 74
                </span>
              </a>

              <a
                href="mailto:la.colo.nimaux@gmail.com"
                className="flex items-center gap-3 group transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                <span className="text-base" style={{ color: "#4a7c59" }}>
                  ✉️
                </span>
                <span
                  className="text-sm group-hover:text-cream transition-colors duration-200"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  la.colo.nimaux@gmail.com
                </span>
              </a>

              <div
                className="flex items-start gap-3"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                <span
                  className="text-base mt-0.5 flex-shrink-0"
                  style={{ color: "#4a7c59" }}
                >
                  📍
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  85 Avenue de Jourdane
                  <br />
                  33440 Ambarès-et-Lagrave
                </span>
              </div>
            </div>

            {/* Tariff note */}
            <div
              className="mt-8 p-4 rounded-sm"
              style={{
                background: "rgba(74,124,89,0.1)",
                border: "1px solid rgba(74,124,89,0.2)",
              }}
            >
              <p
                className="text-xs uppercase tracking-wide mb-1"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 600,
                  color: "#8aab8f",
                }}
              >
                Tarifs
              </p>
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 300,
                  color: "rgba(245,240,232,0.6)",
                }}
              >
                Chiens : 22 € / jour · Chats : 14 € / jour
              </p>
              <p
                className="text-xs mt-1 italic"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "rgba(245,240,232,0.4)",
                }}
              >
                Toute période de 24h commencée est due
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-lato)",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            © {year} La Colo-nimaux — Vanessa Martin. Tous droits réservés.
          </p>
          <p
            className="text-xs italic"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.25)",
            }}
          >
            Fait avec ❤️ pour les animaux
          </p>
        </div>
      </div>
    </footer>
  );
}
