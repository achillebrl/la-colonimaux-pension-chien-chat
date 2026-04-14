import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="accueil" />

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="La Colo-nimaux — Pension canine et féline"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f]/90 via-[#1a2e1f]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1f]/60 via-transparent to-transparent" />
        </div>

        {/* Floating botanical ornament */}
        <div className="absolute top-1/4 right-[8%] opacity-20 float-anim hidden lg:block">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
            <path d="M60 10 Q80 30 70 60 Q60 90 40 80 Q20 70 30 40 Q40 10 60 10Z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
            <path d="M60 10 Q40 30 50 60 Q60 90 80 80 Q100 70 90 40 Q80 10 60 10Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <line x1="60" y1="10" x2="60" y2="130" stroke="#c9a84c" strokeWidth="1"/>
            <path d="M40 50 Q60 45 80 50" stroke="#c9a84c" strokeWidth="0.8" fill="none"/>
            <path d="M35 70 Q60 63 85 70" stroke="#c9a84c" strokeWidth="0.8" fill="none"/>
          </svg>
        </div>

        {/* Paw print pattern — scattered */}
        <div className="absolute top-[15%] left-[5%] opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="#d4e8da">
            <circle cx="40" cy="30" r="8"/>
            <circle cx="65" cy="20" r="6"/>
            <circle cx="85" cy="30" r="7"/>
            <ellipse cx="62" cy="60" rx="18" ry="22"/>
            <circle cx="120" cy="110" r="10"/>
            <circle cx="148" cy="98" r="7"/>
            <circle cx="168" cy="110" r="8"/>
            <ellipse cx="144" cy="138" rx="20" ry="24"/>
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full pb-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div
              className="hero-animate hero-animate-1 inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span
                className="text-[#c9a84c] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Ambarès-et-Lagrave · Gironde
              </span>
            </div>

            {/* Main title */}
            <h1
              className="hero-animate hero-animate-2 text-[#f7f3ec] leading-[0.9] mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(4rem, 12vw, 11rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              La Colo-
              <span className="italic text-[#a8c5b0]">nimaux</span>
            </h1>

            {/* Tagline script */}
            <p
              className="hero-animate hero-animate-3 text-[#c9a84c] mb-8"
              style={{
                fontFamily: "var(--font-satisfy)",
                fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
              }}
            >
              Pension Canine & Féline
            </p>

            {/* Description & CTA */}
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row items-start gap-6">
              <p
                className="text-[#d4e8da]/80 max-w-md text-base leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
              >
                Un cadre familial et bienveillant pour vos compagnons, dirigé par une comportementaliste diplômée.
              </p>
              <a
                href="#services"
                className="shrink-0 inline-flex items-center gap-3 bg-[#4a7c59] hover:bg-[#2f5038] text-[#f7f3ec] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
              >
                Découvrir
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-[#f7f3ec] text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-[#f7f3ec] animate-pulse" />
        </div>

        {/* Contact strip */}
        <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-6 bg-[#4a7c59]/90 backdrop-blur-sm px-8 py-4">
          <a
            href="tel:0626690774"
            className="flex items-center gap-2 text-[#f7f3ec] hover:text-[#c9a84c] transition-colors text-sm tracking-wide"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
            </svg>
            06.26.69.07.74
          </a>
          <div className="w-px h-5 bg-[#f7f3ec]/30" />
          <a
            href="mailto:la.colo.nimaux@gmail.com"
            className="flex items-center gap-2 text-[#f7f3ec] hover:text-[#c9a84c] transition-colors text-sm tracking-wide"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            la.colo.nimaux@gmail.com
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE STRIP
      ═══════════════════════════════════════ */}
      <div className="bg-[#4a7c59] overflow-hidden py-4 relative z-10">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              {[
                "🐾 Pension en Liberté",
                "✦ Comportementaliste Diplômée",
                "🐱 Chatterie 90m²",
                "✦ Premiers Secours Canin & Félin",
                "🌿 Bien-être & Fleurs de Bach",
                "✦ Cadre Familial",
                "🐕 Vie en Groupe",
                "✦ Certifiée Capacitaire",
              ].map((item, j) => (
                <span
                  key={j}
                  className="text-[#f7f3ec] text-sm tracking-widest uppercase whitespace-nowrap"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════ */}
      <section id="a-propos" className="relative py-28 md:py-40 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[#f7f3ec]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#4a7c59 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image column */}
            <div
              className="relative"
              data-animate="fade-left"
            >
              {/* Decorative bg shape */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#4a7c59]/10 to-[#c9a84c]/10 rounded-[40px] -z-10" />

              {/* Main photo */}
              <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden photo-frame">
                <Image
                  src="/assets/about.jpg"
                  alt="Vanessa Martin — La Colo-nimaux"
                  fill
                  className="object-cover"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f5038]/30 to-transparent" />
              </div>

              {/* Floating credential card */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-[#2f5038] text-[#f7f3ec] p-5 md:p-6 max-w-[220px] shadow-2xl">
                <div
                  className="text-[#c9a84c] text-3xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Diplômée
                </div>
                <p
                  className="text-[#a8c5b0] text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                >
                  Comportementaliste Canin & Félin — Vox Animae
                </p>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                  ))}
                </div>
              </div>

              {/* Paw decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4a7c59] flex items-center justify-center text-xl shadow-lg">
                🐾
              </div>
            </div>

            {/* Text column */}
            <div className="lg:pl-8">
              {/* Section label */}
              <div
                data-animate
                data-delay="100"
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-[#4a7c59]" />
                <span
                  className="text-[#4a7c59] tracking-[0.25em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                >
                  À Propos
                </span>
              </div>

              <h2
                data-animate
                data-delay="200"
                className="botanical-line text-[#3d2b1f] leading-tight mb-10"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 600,
                }}
              >
                Une passion
                <br />
                <span className="italic text-[#4a7c59]">au service</span>
                <br />
                de vos animaux
              </h2>

              <div
                data-animate
                data-delay="300"
                className="space-y-4 mb-10"
              >
                <p
                  className="text-[#3d2b1f]/80 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
                >
                  Passionnée par les animaux depuis mon plus jeune âge, j'ai fait le choix de travailler avec eux. J'ai donc ouvert une pension canine et féline.
                </p>
                <p
                  className="text-[#3d2b1f]/80 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
                >
                  Ayant toujours eu envie d'en apprendre plus sur eux, j'ai suivi une formation d'Éducateur Comportementaliste Canin et Comportementaliste Félin. Ceci me permet tous les jours de comprendre les animaux que je garde, de m'ajuster à eux.
                </p>
                <p
                  className="text-[#4a7c59] text-xl italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                >
                  — Vanessa Martin
                </p>
              </div>

              {/* Certifications */}
              <div data-animate data-delay="400">
                <p
                  className="text-[#3d2b1f] text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                >
                  Formations & Certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Capacitaire",
                    "Premiers Secours N.1",
                    "PECCRAM",
                    "Fleurs de Bach",
                    "Chien Sourd",
                    "Comportementaliste Canin",
                    "Comportementaliste Félin",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="cert-pill px-3 py-1.5 text-[#4a7c59] text-xs rounded-full"
                      style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════ */}
      <section id="services" className="relative py-28 md:py-40 overflow-hidden">
        {/* Dark forest background */}
        <div className="absolute inset-0 bg-[#1e3526]" />

        {/* Mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a7c59]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-[80px]" />
        </div>

        {/* Geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a8c5b0' stroke-width='0.5'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          {/* Section header */}
          <div className="text-center mb-20">
            <div
              data-animate
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-[#c9a84c]" />
              <span
                className="text-[#c9a84c] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
              >
                Nos Services
              </span>
              <div className="w-12 h-px bg-[#c9a84c]" />
            </div>
            <h2
              data-animate
              data-delay="200"
              className="text-[#f7f3ec] leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 600,
              }}
            >
              L'hébergement{" "}
              <span className="italic text-[#a8c5b0]">idéal</span>
              <br />
              pour chaque animal
            </h2>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pension Canine */}
            <div
              data-animate="fade-left"
              data-delay="200"
              className="service-card group relative bg-gradient-to-br from-[#2f5038] to-[#243d2b] border border-[#4a7c59]/30 overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#4a7c59] to-[#c9a84c]" />

              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#4a7c59]/20 border border-[#4a7c59]/40 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#4a7c59]/40 transition-colors">
                  🐕
                </div>

                <h3
                  className="text-[#f7f3ec] mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.2rem",
                    fontWeight: 600,
                  }}
                >
                  Pension Canine
                </h3>

                {/* Price */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span
                    className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] px-4 py-1.5 text-sm"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                  >
                    22 € / jour · 1 chien
                  </span>
                  <span
                    className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] px-4 py-1.5 text-sm"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                  >
                    38 € / jour · 2 chiens
                  </span>
                </div>

                <p
                  className="text-[#a8c5b0] text-base leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
                >
                  Pension en liberté : les chiens vivent en groupe la journée et dorment en box individuel la nuit. Un environnement stimulant qui respecte leurs besoins de socialisation et d'exercice.
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Vie en groupe la journée",
                    "Box individuel la nuit",
                    "Chiens ok congénères & humains requis",
                    "Nourriture fournie par le propriétaire",
                    "Vaccins obligatoires : Carré, Hépatite, Lepto, Parvo, Toux du Chenil",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#d4e8da]/80 text-sm"
                      style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                    >
                      <span className="text-[#4a7c59] mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-[#4a7c59]/20">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8cc8a] text-sm tracking-widest uppercase transition-colors group-hover:gap-4"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                  >
                    Nous contacter
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M0 4H12M9 1L12 4L9 7" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Pension Féline */}
            <div
              data-animate="fade-right"
              data-delay="300"
              className="service-card group relative bg-gradient-to-br from-[#3a2d1a] to-[#2a2010] border border-[#c9a84c]/20 overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8cc8a]" />

              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#c9a84c]/30 transition-colors">
                  🐱
                </div>

                <h3
                  className="text-[#f7f3ec] mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.2rem",
                    fontWeight: 600,
                  }}
                >
                  Pension Féline
                </h3>

                {/* Price */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span
                    className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] px-4 py-1.5 text-sm"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                  >
                    14 € / jour · 1 chat
                  </span>
                  <span
                    className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] px-4 py-1.5 text-sm"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 500 }}
                  >
                    20 € / jour · 2 chats
                  </span>
                </div>

                <p
                  className="text-[#e8cc8a]/80 text-base leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
                >
                  Chatterie de 12 box individuels pour la nuit et les phases de repos. Espace commun intérieur de 30 m² et cour extérieure de 60 m² pour l'épanouissement de vos félins.
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {[
                    "12 box individuels",
                    "Espace commun intérieur 30 m²",
                    "Cour extérieure 60 m²",
                    "Nourriture fournie par le propriétaire",
                    "Vaccins obligatoires : Typhus, Coryza, Leucose",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#e8cc8a]/70 text-sm"
                      style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                    >
                      <span className="text-[#c9a84c] mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-[#c9a84c]/15">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8cc8a] text-sm tracking-widest uppercase transition-colors group-hover:gap-4"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                  >
                    Nous contacter
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M0 4H12M9 1L12 4L9 7" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability notice */}
          <div
            data-animate
            data-delay="400"
            className="mt-12 p-6 border border-[#c9a84c]/30 bg-[#c9a84c]/5 flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <div className="text-[#c9a84c] text-2xl shrink-0">⚠️</div>
            <div>
              <p
                className="text-[#c9a84c] font-semibold mb-1"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Période de fermeture : 27 Avril au 3 Mai 2026
              </p>
              <p
                className="text-[#a8c5b0] text-sm"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
              >
                Pension Canine complète du 26/7 au 23/8 · Pension Féline complète du 25/7 au 16/8. Toute période de 24h commencée est due.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US — USP SECTION
      ═══════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#f0ebe2]" />
        {/* Large decorative text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-[#4a7c59]/[0.04] whitespace-nowrap select-none pointer-events-none"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Bien-être
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
            <div>
              <div
                data-animate
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-[#4a7c59]" />
                <span
                  className="text-[#4a7c59] tracking-[0.25em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                >
                  Nos Engagements
                </span>
              </div>
              <h2
                data-animate
                data-delay="200"
                className="text-[#3d2b1f] leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 600,
                }}
              >
                Pourquoi nous
                <br />
                <span className="italic text-[#4a7c59]">faire confiance</span> ?
              </h2>
            </div>
            <div data-animate data-delay="300">
              <p
                className="text-[#3d2b1f]/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
              >
                Chaque animal qui nous est confié bénéficie d'une attention individualisée, d'un cadre adapté à sa nature, et d'une prise en charge par une professionnelle formée et certifiée.
              </p>
            </div>
          </div>

          {/* USP grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Diplôme comportementaliste",
                desc: "Comportementaliste Canin et Félin diplômée Vox Animae pour une compréhension profonde de chaque animal.",
                delay: "100",
              },
              {
                icon: "🐾",
                title: "Pension en liberté",
                desc: "Les chiens vivent en groupe la journée pour une socialisation naturelle et un cadre familial épanouissant.",
                delay: "200",
              },
              {
                icon: "🏡",
                title: "Grande chatterie",
                desc: "Espace commun intérieur de 30 m² et cour extérieure de 60 m² pour le plein épanouissement des chats.",
                delay: "300",
              },
              {
                icon: "🚑",
                title: "Premiers secours",
                desc: "Formée aux premiers secours canin et félin (niveau 1 — CFORA) pour une prise en charge sécurisée en urgence.",
                delay: "400",
              },
              {
                icon: "🌸",
                title: "Fleurs de Bach",
                desc: "Approche bien-être intégrant les remèdes de Fleurs de Bach pour accompagner le stress des chats.",
                delay: "500",
              },
              {
                icon: "🤫",
                title: "Chien sourd",
                desc: "Formée à l'éducation des chiens sourds pour accueillir tous les profils avec bienveillance et expertise.",
                delay: "600",
              },
            ].map((usp) => (
              <div
                key={usp.title}
                data-animate="scale-up"
                data-delay={usp.delay}
                className="group relative bg-white hover:bg-[#4a7c59] p-8 transition-colors duration-500 cursor-default"
              >
                <div className="text-3xl mb-5">{usp.icon}</div>
                <h3
                  className="text-[#3d2b1f] group-hover:text-[#f7f3ec] mb-3 transition-colors"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {usp.title}
                </h3>
                <p
                  className="text-[#3d2b1f]/60 group-hover:text-[#d4e8da] text-sm leading-relaxed transition-colors"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                >
                  {usp.desc}
                </p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════ */}
      <section id="galerie" className="relative py-28 md:py-40 overflow-hidden bg-[#1e3526]">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a7c59] via-[#c9a84c] to-[#4a7c59]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div
                data-animate
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-[#c9a84c]" />
                <span
                  className="text-[#c9a84c] tracking-[0.25em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                >
                  Galerie Photo
                </span>
              </div>
              <h2
                data-animate
                data-delay="200"
                className="text-[#f7f3ec] leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 600,
                }}
              >
                La vie à la{" "}
                <span className="italic text-[#a8c5b0]">Colo-nimaux</span>
              </h2>
            </div>
            <div data-animate data-delay="300">
              <a
                href="https://www.facebook.com/Lacolonimaux/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8cc8a] text-sm tracking-widest uppercase transition-colors"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
              >
                Voir sur Facebook
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M0 4H12M9 1L12 4L9 7" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div data-animate data-delay="200">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS SECTION
      ═══════════════════════════════════════ */}
      <section className="relative py-20 bg-[#f7f3ec] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div
            data-animate
            className="text-center mb-12"
          >
            <span
              className="text-[#4a7c59] tracking-[0.25em] text-xs uppercase"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
            >
              Certifications & Formations
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Diplôme Comportementaliste Canin & Félin / Éducateur Canin",
                org: "Vox Animae",
              },
              {
                title: "Certificat de Capacité",
                org: "Animaux de compagnie d'espèces domestiques",
              },
              {
                title: "Premiers Secours Canin & Félin Niveau 1",
                org: "CFORA",
              },
              {
                title: "Formation PECCRAM",
                org: "Programme d'Éducation à la Connaissance du Chien — FIMAC Canin",
              },
              {
                title: "Le bien-être du chat par les Fleurs de Bach",
                org: "Source & Végétale (Nadine Gauthier)",
              },
              {
                title: "Éducation du chien sourd",
                org: "Education & comportement du chien (Julia Deubel) · Canis'Family",
              },
            ].map((cert, i) => (
              <div
                key={cert.title}
                data-animate="scale-up"
                data-delay={String((i + 1) * 100)}
                className="cert-pill p-5 rounded-sm"
              >
                <div
                  className="text-[#3d2b1f] font-semibold mb-1 text-sm leading-snug"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {cert.title}
                </div>
                <div
                  className="text-[#4a7c59] text-xs"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                >
                  {cert.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#2f5038]" />

        {/* Botanical corner decorations */}
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path d="M300 0 Q200 100 150 150 Q100 200 0 300" stroke="#c9a84c" strokeWidth="1"/>
            <path d="M300 50 Q220 130 180 180 Q140 230 50 300" stroke="#c9a84c" strokeWidth="0.5"/>
            <circle cx="270" cy="30" r="15" stroke="#a8c5b0" strokeWidth="0.5" fill="none"/>
            <circle cx="240" cy="60" r="10" stroke="#a8c5b0" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 rotate-180">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path d="M300 0 Q200 100 150 150 Q100 200 0 300" stroke="#c9a84c" strokeWidth="1"/>
            <path d="M300 50 Q220 130 180 180 Q140 230 50 300" stroke="#c9a84c" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <div
                data-animate
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-[#c9a84c]" />
                <span
                  className="text-[#c9a84c] tracking-[0.25em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 600 }}
                >
                  Contact
                </span>
              </div>

              <h2
                data-animate
                data-delay="200"
                className="text-[#f7f3ec] leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 600,
                }}
              >
                Réservez votre
                <br />
                <span className="italic text-[#a8c5b0]">séjour</span>
              </h2>

              <p
                data-animate
                data-delay="300"
                className="text-[#a8c5b0] text-lg leading-relaxed mb-12"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
              >
                N'hésitez pas à nous contacter pour vérifier les disponibilités, poser vos questions ou organiser une visite de la pension.
              </p>

              {/* Contact cards */}
              <div
                data-animate
                data-delay="400"
                className="space-y-4"
              >
                <a
                  href="tel:0626690774"
                  className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 hover:border-[#4a7c59] hover:bg-[#4a7c59]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#a8c5b0] group-hover:bg-[#4a7c59] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#a8c5b0] text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Téléphone
                    </p>
                    <p
                      className="text-[#f7f3ec] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                    >
                      06.26.69.07.74
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:la.colo.nimaux@gmail.com"
                  className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 hover:border-[#4a7c59] hover:bg-[#4a7c59]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#a8c5b0] group-hover:bg-[#4a7c59] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#a8c5b0] text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-[#f7f3ec] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                    >
                      la.colo.nimaux@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 p-5 bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#a8c5b0] shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#a8c5b0] text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Adresse
                    </p>
                    <p
                      className="text-[#f7f3ec] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                    >
                      85 Avenue de Jourdane
                    </p>
                    <p
                      className="text-[#a8c5b0] text-sm"
                      style={{ fontFamily: "var(--font-raleway)", fontWeight: 300 }}
                    >
                      33440 Ambarès-et-Lagrave
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/Lacolonimaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 hover:border-[#4a7c59] hover:bg-[#4a7c59]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4a7c59]/20 flex items-center justify-center text-[#a8c5b0] group-hover:bg-[#4a7c59] transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#a8c5b0] text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Facebook
                    </p>
                    <p
                      className="text-[#f7f3ec] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                    >
                      La Colo-nimaux
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Map placeholder + signature */}
            <div
              data-animate="fade-right"
              data-delay="300"
              className="space-y-6"
            >
              {/* Map embed placeholder */}
              <div className="relative overflow-hidden rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.1234!2d-0.4987!3d44.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s85+Avenue+de+Jourdane%2C+33440+Ambares-et-Lagrave!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0, filter: "grayscale(40%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Colo-nimaux — Carte"
                />
                <div className="absolute inset-0 pointer-events-none border border-[#4a7c59]/30" />
              </div>

              {/* Signature block */}
              <div className="bg-white/5 border border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4a7c59] flex items-center justify-center text-[#f7f3ec] text-lg font-bold shrink-0" style={{ fontFamily: "var(--font-cormorant)" }}>
                    V
                  </div>
                  <div>
                    <p
                      className="text-[#f7f3ec] text-xl mb-1"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                    >
                      Vanessa Martin
                    </p>
                    <p
                      className="text-[#a8c5b0] text-sm mb-4"
                      style={{ fontFamily: "var(--font-raleway)", fontWeight: 400 }}
                    >
                      Fondatrice · Comportementaliste Diplômée
                    </p>
                    <p
                      className="text-[#d4e8da]/70 text-sm italic leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.1rem" }}
                    >
                      "Chaque animal mérite d'être compris dans sa singularité. Mon engagement quotidien est de leur offrir un séjour serein, adapté à leurs besoins et à leur caractère."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}