import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        {/* Hero image */}
        <div className="absolute inset-0 img-zoom-container">
          <Image
            src="/assets/hero.jpg"
            alt="La Colo-nimaux — Pension Canine & Féline"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/30 to-transparent" />
          {/* Left vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-bark/40 via-transparent to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute top-32 right-8 md:right-16 float-badge z-10">
          <div
            className="blob-shape w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center text-center"
            style={{ background: "rgba(74,124,89,0.9)", backdropFilter: "blur(8px)" }}
          >
            <span className="text-cream text-xs font-lato font-700 uppercase tracking-widest leading-tight">
              Diplômée<br />Comportementaliste
            </span>
            <div className="w-8 h-px bg-gold-light/60 my-1" />
            <span className="text-gold-light text-xs font-lato">Canin & Félin</span>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span
                className="text-gold text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Ambarès-et-Lagrave · Gironde
              </span>
            </div>

            {/* Main title */}
            <h1
              className="text-7xl md:text-9xl lg:text-[10rem] font-300 italic leading-none text-cream mb-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              La
              <br />
              <span className="font-600 not-italic" style={{ color: "#8aab8f" }}>
                Colo-nimaux
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-cream/70 mb-8 font-300 tracking-[0.1em] uppercase"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Pension Canine & Féline
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#services" className="btn-primary">
                <span>Découvrir nos services</span>
              </a>
              <a href="tel:0626690774" className="btn-outline" style={{ color: "#f5f0e8", borderColor: "rgba(245,240,232,0.4)" }}>
                <span style={{ color: "inherit" }}>06 26 69 07 74</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
          <span
            className="text-cream/50 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Défiler
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </section>

      {/* ─── INTRO BAND ────────────────────────────────────────────────── */}
      <section className="bg-forest py-8 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap">
          {[
            "Pension en Liberté",
            "✦",
            "Comportementaliste Diplômée",
            "✦",
            "Chats & Chiens",
            "✦",
            "Premiers Secours Canin & Félin",
            "✦",
            "Fleurs de Bach",
            "✦",
            "Ambarès-et-Lagrave",
            "✦",
          ].map((item, i) => (
            <span
              key={i}
              className="text-cream/80 text-sm uppercase tracking-[0.2em] flex-shrink-0"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {item}
            </span>
          ))}
          {/* Duplicate for seamless scroll feel */}
          {[
            "Pension en Liberté",
            "✦",
            "Comportementaliste Diplômée",
            "✦",
            "Chats & Chiens",
            "✦",
            "Premiers Secours Canin & Félin",
            "✦",
            "Fleurs de Bach",
            "✦",
            "Ambarès-et-Lagrave",
            "✦",
          ].map((item, i) => (
            <span
              key={`dup-${i}`}
              className="text-cream/80 text-sm uppercase tracking-[0.2em] flex-shrink-0"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── À PROPOS ──────────────────────────────────────────────────── */}
      <section id="apropos" className="py-24 md:py-36 gradient-mesh overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image col */}
            <div data-animate="fade-left" className="relative">
              {/* Background accent */}
              <div
                className="absolute -top-6 -left-6 w-full h-full rounded-sm"
                style={{ background: "rgba(74,124,89,0.1)", border: "1px solid rgba(74,124,89,0.15)" }}
              />
              {/* Photo */}
              <div className="relative img-zoom-container vintage-frame rounded-sm overflow-hidden aspect-[4/5]">
                <Image
                  src="/assets/about.jpg"
                  alt="Vanessa Martin — Éducatrice Comportementaliste"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Name badge */}
              <div
                className="absolute -bottom-5 -right-5 bg-bark text-cream py-4 px-6"
                style={{ boxShadow: "0 8px 32px rgba(44,32,22,0.25)" }}
              >
                <p
                  className="text-2xl font-400 italic"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#f5f0e8" }}
                >
                  Vanessa Martin
                </p>
                <p
                  className="text-xs uppercase tracking-[0.15em] mt-1"
                  style={{ fontFamily: "var(--font-lato)", color: "#8aab8f" }}
                >
                  Fondatrice & Comportementaliste
                </p>
              </div>
            </div>

            {/* Text col */}
            <div>
              <div data-animate data-delay="1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-forest" />
                  <span
                    className="text-forest text-xs uppercase tracking-[0.25em]"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    À propos
                  </span>
                </div>
                <h2
                  className="text-5xl md:text-6xl font-400 italic leading-tight text-bark mb-8"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Une passion au
                  <br />
                  <span className="text-forest font-600 not-italic">cœur du métier</span>
                </h2>
              </div>

              <div data-animate data-delay="2">
                <p
                  className="text-bark-light/80 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  Passionnée par les animaux depuis son plus jeune âge, Vanessa Martin a ouvert
                  une pension canine et féline au cœur de la Gironde.
                </p>
                <p
                  className="text-bark-light/80 text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  Souhaitant approfondir ses connaissances, elle a suivi une formation
                  d'Éducateur Comportementaliste Canin et Comportementaliste Félin — ce qui lui
                  permet chaque jour de mieux comprendre les animaux qu'elle garde et de
                  s'adapter à leurs besoins individuels.
                </p>
              </div>

              {/* USPs */}
              <div data-animate data-delay="3" className="space-y-3 mb-10">
                {[
                  { icon: "🎓", text: "Diplôme Comportementaliste Canin & Félin — Vox Animae" },
                  { icon: "🏥", text: "Premiers Secours Canin & Félin Niveau 1 — CFORA" },
                  { icon: "🌸", text: "Bien-être félin par les Fleurs de Bach" },
                  { icon: "📋", text: "Certificat de Capacité — Animaux de Compagnie" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-sm"
                    style={{ background: "rgba(74,124,89,0.05)", border: "1px solid rgba(74,124,89,0.1)" }}
                  >
                    <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span
                      className="text-sm text-bark-light"
                      style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div data-animate data-delay="4">
                <a href="#contact" className="btn-primary">
                  <span>Nous contacter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────────────── */}
      <section
        id="services"
        className="py-24 md:py-36 paw-pattern"
        style={{ background: "#f0ebe0" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          {/* Header */}
          <div className="text-center mb-20">
            <div data-animate className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-forest" />
              <span
                className="text-forest text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Nos services
              </span>
              <div className="w-12 h-px bg-forest" />
            </div>
            <h2
              data-animate
              data-delay="1"
              className="text-5xl md:text-7xl font-400 italic leading-tight text-bark"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Pension en
              <br />
              <span className="text-forest font-600 not-italic">toute liberté</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pension Canine */}
            <div data-animate="fade-left" data-delay="2" className="service-card bg-warm-white rounded-sm overflow-hidden">
              {/* Card header */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #2d5c3f 0%, #4a7c59 50%, #6a9e78 100%)" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-8xl mb-2">🐕</span>
                  <span
                    className="text-cream/60 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    Chiens bienvenus
                  </span>
                </div>
                {/* Diagonal accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{
                    background: "#faf7f2",
                    clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
                  }}
                />
                {/* Price badge */}
                <div
                  className="absolute top-4 right-4 bg-gold text-bark py-2 px-4"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  <p className="text-xs font-700 uppercase tracking-wider">À partir de</p>
                  <p className="text-2xl font-900 leading-tight">22€</p>
                  <p className="text-xs">/jour</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <div className="accent-line mb-6" />
                <h3
                  className="text-3xl font-600 text-bark mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Pension Canine
                </h3>
                <p
                  className="text-forest text-sm font-600 uppercase tracking-wider mb-6"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  22 € / jour · 38 € pour 2 chiens
                </p>

                <p
                  className="text-bark-light/75 leading-relaxed mb-6 text-base"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  Pension en liberté : les chiens vivent en groupe la journée et dorment en box
                  individuel la nuit. Une approche respectueuse des besoins sociaux de votre
                  compagnon.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    "Vie en groupe la journée",
                    "Box individuel la nuit",
                    "Nourriture fournie par le propriétaire",
                    "Vaccins obligatoires : Carré, Hépatite, Lepto, Parvo, Toux du Chenil",
                    "Femelles de +18 mois : stérilisation requise",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        className="text-forest mt-1 flex-shrink-0 text-xs"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        ✦
                      </span>
                      <span
                        className="text-bark-light/70 text-sm"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="tel:0626690774" className="btn-primary w-full flex justify-center">
                  <span>Réserver · 06 26 69 07 74</span>
                </a>
              </div>
            </div>

            {/* Pension Féline */}
            <div data-animate="fade-right" data-delay="3" className="service-card bg-warm-white rounded-sm overflow-hidden">
              {/* Card header */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #4a3728 0%, #6b5042 50%, #8a7260 100%)" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-8xl mb-2">🐈</span>
                  <span
                    className="text-cream/60 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    Chats bienvenus
                  </span>
                </div>
                {/* Diagonal accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{
                    background: "#faf7f2",
                    clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
                  }}
                />
                {/* Price badge */}
                <div
                  className="absolute top-4 right-4 bg-gold text-bark py-2 px-4"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  <p className="text-xs font-700 uppercase tracking-wider">À partir de</p>
                  <p className="text-2xl font-900 leading-tight">14€</p>
                  <p className="text-xs">/jour</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <div className="accent-line mb-6" />
                <h3
                  className="text-3xl font-600 text-bark mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Pension Féline
                </h3>
                <p
                  className="text-forest text-sm font-600 uppercase tracking-wider mb-6"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  14 € / jour · 20 € pour 2 chats
                </p>

                <p
                  className="text-bark-light/75 leading-relaxed mb-6 text-base"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  Chatterie de 12 box individuels, avec espace commun intérieur de 30m² et cour
                  extérieure de 60m². Respect des phases de repos et stimulation adaptée.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    "12 box individuels pour la nuit et le repos",
                    "Espace commun intérieur de 30m²",
                    "Cour extérieure de 60m²",
                    "Nourriture fournie par le propriétaire",
                    "Vaccins obligatoires : Typhus, Coryza et Leucose",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        className="text-forest mt-1 flex-shrink-0 text-xs"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        ✦
                      </span>
                      <span
                        className="text-bark-light/70 text-sm"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="tel:0626690774" className="btn-primary w-full flex justify-center">
                  <span>Réserver · 06 26 69 07 74</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tariff note */}
          <div data-animate data-delay="4" className="mt-8 text-center">
            <p
              className="text-bark-light/60 text-sm italic"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
            >
              Tarification par période de 24h — toute période commencée est due
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY US / ATOUTS ───────────────────────────────────────────── */}
      <section className="py-24 md:py-36 gradient-mesh overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          {/* Header */}
          <div className="mb-20">
            <div data-animate className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-forest" />
              <span
                className="text-forest text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Pourquoi nous choisir
              </span>
            </div>
            <h2
              data-animate
              data-delay="1"
              className="text-5xl md:text-6xl font-400 italic text-bark leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Un accueil
              <br />
              <span className="text-forest font-600 not-italic">unique & bienveillant</span>
            </h2>
          </div>

          {/* Grid of atouts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Comportementaliste Diplômée",
                desc: "Vanessa Martin est diplômée comportementaliste canin et félin (Vox Animae), garantissant une prise en charge adaptée au comportement de chaque animal.",
                icon: "🎓",
              },
              {
                num: "02",
                title: "Pension en Liberté",
                desc: "Les chiens vivent en groupe la journée, respectant leurs besoins sociaux naturels, avec un retour en box individuel pour une nuit sereine.",
                icon: "🌿",
              },
              {
                num: "03",
                title: "Chatterie Spacieuse",
                desc: "12 box individuels, un espace commun de 30m² et une cour extérieure de 60m² pour que vos chats s'épanouissent en toute sécurité.",
                icon: "🏡",
              },
              {
                num: "04",
                title: "Premiers Secours",
                desc: "Formation Premiers Secours Canin et Félin Niveau 1 (CFORA) — une réaction rapide et efficace en cas d'urgence.",
                icon: "❤️‍🩹",
              },
              {
                num: "05",
                title: "Fleurs de Bach",
                desc: "Connaissance du bien-être félin par les Fleurs de Bach (Nadine Gauthier) pour une approche comportementale globale et apaisante.",
                icon: "🌸",
              },
              {
                num: "06",
                title: "PECCRAM Certifiée",
                desc: "Programme d'Éducation à la Connaissance du Chien et au Risque d'Accident par Morsures — sécurité et pédagogie au cœur de la pratique.",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-animate
                data-delay={String((i % 3) + 1)}
                className="relative p-7 rounded-sm group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(74,124,89,0.12)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 text-6xl font-300 leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(74,124,89,0.08)",
                  }}
                >
                  {item.num}
                </span>

                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h4
                  className="text-xl font-600 text-bark mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-bark-light/70 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
                {/* Hover border */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-forest transition-all duration-500 group-hover:w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ───────────────────────────────────────────────────── */}
      <section
        id="galerie"
        className="py-24 md:py-36"
        style={{ background: "#2c2016" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <div data-animate className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-lato)", color: "#c9a84c" }}
              >
                Galerie
              </span>
              <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
            </div>
            <h2
              data-animate
              data-delay="1"
              className="text-5xl md:text-6xl font-400 italic leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", color: "#f5f0e8" }}
            >
              La vie à la
              <br />
              <span className="font-600 not-italic" style={{ color: "#8aab8f" }}>
                Colo-nimaux
              </span>
            </h2>
          </div>

          <div data-animate="scale-up" data-delay="2">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#f0ebe0" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div data-animate className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-px bg-forest" />
            <span
              className="text-forest text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Certifications & Formations
            </span>
            <div className="w-12 h-px bg-forest" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Comportementaliste Canin & Félin",
                org: "Vox Animae",
                desc: "Diplôme d'Éducateur Canin et Comportementaliste Félin",
              },
              {
                title: "Premiers Secours Canin & Félin Niv. 1",
                org: "CFORA",
                desc: "Formation aux gestes de premiers secours pour animaux",
              },
              {
                title: "Chien Sourd",
                org: "Julia Deubel & Canis'Family (Christine Barreau)",
                desc: "'Un chien est né dans un monde de silence' — éducation du chien sourd",
              },
              {
                title: "PECCRAM",
                org: "FIMAC Canin — Chantal Hazard",
                desc: "Programme d'Éducation à la Connaissance du Chien et au Risque d'Accident par Morsures",
              },
              {
                title: "Fleurs de Bach & Bien-être Félin",
                org: "Source & Végétale — Nadine Gauthier",
                desc: "Approche comportementale globale par les Fleurs de Bach",
              },
              {
                title: "Certificat de Capacité",
                org: "Préfecture",
                desc: "Relatif aux activités liées aux animaux de compagnie d'espèces domestiques",
              },
            ].map((cert, i) => (
              <div
                key={i}
                data-animate
                data-delay={String((i % 2) + 1)}
                className="flex gap-4 p-5 rounded-sm"
                style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(74,124,89,0.12)" }}
              >
                <div
                  className="w-1 flex-shrink-0 rounded-full self-stretch"
                  style={{ background: "linear-gradient(to bottom, #4a7c59, #c9a84c)" }}
                />
                <div>
                  <p
                    className="font-600 text-bark text-base"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {cert.title}
                  </p>
                  <p
                    className="text-forest text-xs uppercase tracking-wide mt-0.5 mb-1"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {cert.org}
                  </p>
                  <p
                    className="text-bark-light/65 text-sm"
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                  >
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 md:py-36 gradient-mesh overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div data-animate className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-forest" />
                <span
                  className="text-forest text-xs uppercase tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  Contact
                </span>
              </div>
              <h2
                data-animate
                data-delay="1"
                className="text-5xl md:text-6xl font-400 italic text-bark leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Prenez
                <br />
                <span className="text-forest font-600 not-italic">rendez-vous</span>
              </h2>

              <p
                data-animate
                data-delay="2"
                className="text-bark-light/75 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
              >
                Pour toute question ou réservation, n'hésitez pas à nous contacter par téléphone
                ou par email. Vanessa Martin sera ravie de vous renseigner sur les disponibilités
                et les conditions d'accueil.
              </p>

              {/* Contact details */}
              <div data-animate data-delay="3" className="space-y-4">
                {[
                  {
                    label: "Téléphone",
                    value: "06 26 69 07 74",
                    href: "tel:0626690774",
                    icon: "📞",
                  },
                  {
                    label: "Email",
                    value: "la.colo.nimaux@gmail.com",
                    href: "mailto:la.colo.nimaux@gmail.com",
                    icon: "✉️",
                  },
                  {
                    label: "Adresse",
                    value: "85 Avenue de Jourdane, 33440 Ambarès-et-Lagrave",
                    href: "https://maps.google.com/?q=85+Avenue+de+Jourdane+33440+Ambarès-et-Lagrave",
                    icon: "📍",
                  },
                  {
                    label: "Facebook",
                    value: "facebook.com/Lacolonimaux",
                    href: "https://www.facebook.com/Lacolonimaux/",
                    icon: "🌐",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-sm group transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(74,124,89,0.12)",
                    }}
                  >
                    <span className="text-2xl w-10 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <p
                        className="text-xs text-forest uppercase tracking-wider mb-0.5"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-bark font-400 group-hover:text-forest transition-colors duration-200"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — notice/info card */}
            <div data-animate="fade-right" data-delay="2">
              <div
                className="relative rounded-sm overflow-hidden p-8 md:p-10"
                style={{
                  background: "linear-gradient(135deg, #2d5c3f, #4a7c59)",
                  boxShadow: "0 32px 80px rgba(45,92,63,0.25)",
                }}
              >
                {/* Background paw prints */}
                <div
                  className="absolute inset-0 opacity-10 paw-pattern"
                  style={{ filter: "invert(1)" }}
                />

                <div className="relative z-10">
                  <span className="text-5xl mb-6 block">🏠</span>
                  <h3
                    className="text-3xl md:text-4xl font-400 italic text-cream mb-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Informations
                    <br />
                    pratiques
                  </h3>

                  <div className="space-y-4 mt-8">
                    {[
                      {
                        title: "Visite préalable",
                        desc: "Une visite de découverte est recommandée avant le premier séjour.",
                      },
                      {
                        title: "Vaccinations obligatoires",
                        desc: "Carnet de santé à jour exigé pour tous les animaux accueillis.",
                      },
                      {
                        title: "Nourriture habituelle",
                        desc: "Merci d'apporter la nourriture habituelle de votre animal pour son confort.",
                      },
                      {
                        title: "Chiens entiers",
                        desc: "Les chiens entiers peuvent être refusés selon leur comportement.",
                      },
                    ].map((info, i) => (
                      <div
                        key={i}
                        className="border-l-2 pl-4"
                        style={{ borderColor: "rgba(201,168,76,0.5)" }}
                      >
                        <p
                          className="text-gold-light font-600 text-sm uppercase tracking-wide mb-1"
                          style={{ fontFamily: "var(--font-lato)" }}
                        >
                          {info.title}
                        </p>
                        <p
                          className="text-cream/75 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                        >
                          {info.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(245,240,232,0.15)" }}>
                    <a
                      href="tel:0626690774"
                      className="flex items-center justify-center gap-3 py-4 px-6 w-full text-center rounded-sm"
                      style={{
                        background: "#c9a84c",
                        color: "#2c2016",
                        fontFamily: "var(--font-lato)",
                        fontWeight: 700,
                        fontSize: "0.8125rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span>📞</span>
                      <span>Appeler Vanessa</span>
                    </a>
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