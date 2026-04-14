import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a2e1f] overflow-hidden">
      {/* Top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a7c59] to-transparent" />

      {/* Decorative paw print */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] select-none pointer-events-none text-[20rem] leading-none">
        🐾
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#4a7c59]/20 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="La Colo-nimaux"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p
                  className="text-[#f7f3ec] text-xl leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                >
                  La Colo-nimaux
                </p>
                <p
                  className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  Pension Canine & Féline
                </p>
              </div>
            </div>
            <p
              className="text-[#a8c5b0]/70 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
            >
              Pension canine et féline familiale à Ambarès-et-Lagrave, dirigée par Vanessa Martin, comportementaliste diplômée.
            </p>
            <a
              href="https://www.facebook.com/Lacolonimaux/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#a8c5b0] hover:text-[#c9a84c] transition-colors text-sm"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[#f7f3ec] text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "À Propos", href: "#a-propos" },
                { label: "Pension Canine", href: "#services" },
                { label: "Pension Féline", href: "#services" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#a8c5b0]/70 hover:text-[#a8c5b0] text-sm transition-colors"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[#f7f3ec] text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0626690774"
                  className="flex items-center gap-3 text-[#a8c5b0]/70 hover:text-[#a8c5b0] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#4a7c59]">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                  06.26.69.07.74
                </a>
              </li>
              <li>
                <a
                  href="mailto:la.colo.nimaux@gmail.com"
                  className="flex items-center gap-3 text-[#a8c5b0]/70 hover:text-[#a8c5b0] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#4a7c59]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  la.colo.nimaux@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#a8c5b0]/70 text-sm" style={{ fontFamily: "var(--font-raleway)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#4a7c59] mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>85 Avenue de Jourdane<br />33440 Ambarès-et-Lagrave</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#4a7c59]/20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#a8c5b0]/40 text-xs"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            © {currentYear} La Colo-nimaux — Tous droits réservés
          </p>
          <p
            className="text-[#a8c5b0]/40 text-xs flex items-center gap-2"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Fait avec
            <span className="text-[#4a7c59]">♥</span>
            pour vos animaux
          </p>
        </div>
      </div>
    </footer>
  );
}