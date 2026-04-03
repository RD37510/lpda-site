import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ScrollVideoHero from "./components/ScrollVideoHero";

const services = [
  {
    title: "Détailing extérieur signature",
    description:
      "Lavage minutieux, décontamination et correction des micro-rayures pour retrouver un éclat showroom.",
    tag: "Éclat & Brillance",
    image:
      "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-NETTOYAGE-3.png",
    alt: "Détailing extérieur avec finition brillante",
  },
  {
    title: "Protection céramique & PPF",
    description:
      "Traitements hydrophobes, céramiques longue durée et films PPF pour une carrosserie protégée.",
    tag: "Bouclier longue durée",
    image:
      "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-protection.png",
    alt: "Application de protection céramique",
  },
  {
    title: "Intérieur premium",
    description:
      "Nettoyage approfondi, soin cuir/textile et remise à neuf des surfaces pour un habitacle impeccable.",
    tag: "Confort & Pureté",
    image:
      "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-CARROSERIE.png",
    alt: "Soin intérieur premium",
  },
];

const testimonials = [
  {
    quote:
      "RDV rapide, accueil impeccable et une finition miroir. On récupère la voiture comme neuve.",
    author: "Charlotte — Porsche 911",
  },
  {
    quote:
      "Le traitement céramique fait vraiment la différence, la carrosserie est protégée et facile à nettoyer.",
    author: "Alexandre — Tesla Model S",
  },
];

const processSteps = [
  {
    title: 'Diagnostic & devis',
    description: 'Inspection détaillée, identification des défauts et devis clair avant intervention.',
  },
  {
    title: 'Préparation & traitement',
    description: 'Lavage technique, correction, pose des protections et finition au détail.',
  },
  {
    title: 'Restitution & suivi',
    description: 'Photos avant/après, conseils d’entretien et suivi des protections.',
  },
];

const portfolio = [
  {
    title: 'Avant / Après',
    detail: 'Comparatifs visuels des corrections de vernis et des finitions miroir.',
    metric: 'Snapshot',
  },
  {
    title: 'Protection céramique',
    detail: 'Couches hydrophobes durables pour préserver la brillance au quotidien.',
    metric: '9-24 mois',
  },
  {
    title: 'Habitacle premium',
    detail: 'Nettoyage intérieur profond, soins cuir et neutralisation des odeurs.',
    metric: 'Full care',
  },
];

const portfolioGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-scaled.jpg",
    alt: "Correction et protection carrosserie",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-1-scaled.jpg",
    alt: "Pose de film PPF",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/male-painter-overalls-doing-his-work-car-shop-1-scaled.jpg",
    alt: "Finition et polissage",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/yyedd.png",
    alt: "Habitacle premium",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fwxdgh.png",
    alt: "Finition extérieure",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/xghjxcghj.png",
    alt: "Protection longue durée",
  },
];

const seoChecks = [
  'Diagnostic personnalisé avant chaque intervention',
  'Devis clair et planning sur-mesure',
  'Photos avant/après et conseils d’entretien',
  'Produits premium certifiés et garantie sur les protections',
  'Suivi après prestation pour maintenir l’éclat',
];

const atelierGallery = [
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-scaled.jpg",
    alt: "Atelier detailing avec véhicule en protection",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-1-scaled.jpg",
    alt: "Pose de film de protection carrosserie",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/male-painter-overalls-doing-his-work-car-shop-1-scaled.jpg",
    alt: "Technicien en préparation esthétique automobile",
  },
];

const expertiseGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/yyedd.png",
    alt: "Finition intérieure et detailing premium",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fwxdgh.png",
    alt: "Correction de vernis et reflets miroir",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/xghjxcghj.png",
    alt: "Protection carrosserie longue durée",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fhyu.png",
    alt: "Nettoyage méticuleux des surfaces intérieures",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fdfgdh.png",
    alt: "Soin extérieur et traitement protecteur",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-NETTOYAGE-3.png",
    alt: "Service lavage et décontamination",
  },
];

const partnerLogos = [
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:150/h:150/q:mauto/rt:fill/g:ce/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/turtle-wax-logo-png-transparent.png",
    alt: "Logo Turtle Wax",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:150/h:150/q:mauto/rt:fill/g:ce/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/sonax-logo.png",
    alt: "Logo Sonax",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:150/h:150/q:mauto/rt:fill/g:ce/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/Meguiars-Logo-Vector-scaled-1.png",
    alt: "Logo Meguiar's",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:150/h:150/q:mauto/rt:fill/g:ce/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/Koch-Chemie-1.png",
    alt: "Logo Koch Chemie",
  },
  {
    src:
      "https://mlraba0m5wz3.i.optimole.com/w:150/h:150/q:mauto/rt:fill/g:ce/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/gyeon-logo-png_seeklogo-557262.png",
    alt: "Logo Gyeon",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050818] text-white">

      <main className="relative overflow-hidden">
        <ScrollVideoHero />

        <section className="mx-auto max-w-6xl space-y-10 px-6 py-24 opacity-0 animate-[fadeIn_1.4s_ease-out_0.3s_forwards]">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Nos pôles</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Un protocole de nettoyage profond et sécurisé</h2>
            <p className="mx-auto max-w-2xl text-sm text-white/80">
              Nettoyage manuel et haute pression, décontamination totale de l’habitacle et de l’extérieur,
              sans risque pour vos supports.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-red-500"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.6em] text-white/60">{service.tag}</div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/70">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400"
                >
                  Découvrir <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6 pb-10 pt-6">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Atelier</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">L’atelier en images</h2>
            <p className="mx-auto max-w-3xl text-sm text-white/70">
              Un aperçu des prestations et de la précision apportée à chaque préparation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {atelierGallery.map((item) => (
              <div
                key={item.src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6 py-24">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Savoir-faire</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Plus d’illustrations de nos interventions</h2>
            <p className="mx-auto max-w-3xl text-sm text-white/70">
              Des images supplémentaires pour illustrer notre niveau d’exigence, de la préparation intérieure
              à la protection céramique.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseGallery.map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-6 py-20">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Processus</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Un processus clair, de la prise de RDV à la restitution</h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Chaque étape est expliquée et validée avec vous pour garantir un résultat fidèle à vos
              attentes et à votre budget.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40"
              >
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="h-full w-full rounded-[32px] bg-gradient-to-br from-red-600/30 via-transparent to-rose-600/30 blur-3xl" />
          </div>
          <div className="relative space-y-6">
            <div className="space-y-3 text-center">
              <p className="text-xs uppercase tracking-[0.5em] text-red-400">Engagements qualité</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Des standards premium pour chaque intervention</h2>
              <p className="mx-auto max-w-3xl text-sm text-white/70">
                Nous travaillons avec des produits sélectionnés, des protocoles précis et un suivi
                client dédié. Votre voiture est traitée comme un véhicule de collection.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: 'Produits', value: 'Céramiques & soins premium' },
                { label: 'Processus', value: 'Diagnostic + detailing complet' },
                { label: 'Suivi', value: 'Conseils & contrôle post-prestation' },
              ].map((token) => (
                <div key={token.label} className="rounded-3xl border border-white/10 bg-black/40 p-5 text-sm text-white/70">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">{token.label}</p>
                  <p className="text-lg font-semibold text-white">{token.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-6 pb-24">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Produits</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Les marques premium que nous utilisons</h2>
          </div>
          <div className="grid items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 md:grid-cols-5">
            {partnerLogos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="h-12 w-auto opacity-80"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6 py-24">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Portfolio interactif</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Nos prestations en images</h2>
            <p className="mx-auto max-w-3xl text-sm text-white/70">
              Des exemples concrets de detailing, protections et rénovations pour vous projeter dans
              votre futur résultat.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.title}
                className="group space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500"
              >
                <div className="text-xs uppercase tracking-[0.5em] text-white/40">{item.metric}</div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-red-400">{item.title}</h3>
                <p className="text-sm text-white/70">{item.detail}</p>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-red-400"
                >
                  Cas client
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioGallery.map((item, index) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-gradient-to-b from-black/80 to-[#040615]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-red-500">Pourquoi nous ?</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Une signature d’atelier dédiée au détail</h2>
              <p className="text-white/75">
                Nous maîtrisons les technologies céramiques, les protocoles de lavage précis et les
                techniques de correction avancées. Chaque intervention est expliquée et documentée
                pour garantir une expérience transparente.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {['Photos avant/après', 'Conseils entretien', 'Garantie 12 mois'].map((line) => (
                  <div key={line} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/20 bg-white/5 p-8">
              {testimonials.map((testi) => (
                <blockquote key={testi.author} className="space-y-3 text-white/70">
                  <p className="text-sm leading-relaxed">“{testi.quote}”</p>
                  <footer className="text-xs uppercase tracking-[0.4em] text-white/60">{testi.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24" id="contacthome">
          <div className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-black/70 p-10 shadow-2xl shadow-black/80 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-red-500">Contact</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Planifier votre rendez-vous detailing</h2>
              <p className="max-w-2xl text-sm text-white/70">
                Réponse sous 24h, devis clair et prise en charge sur-mesure. Indiquez votre véhicule et
                vos attentes pour recevoir un accompagnement précis.
              </p>
              <div className="space-y-3 text-xs uppercase tracking-[0.5em] text-white/60">
                <div>contact@lepouvoirdelautomobile.fr</div>
                <div>+33 (0)2 47 00 00 00</div>
                <div>Atelier Tours • 18 rue du Chevalier</div>
              </div>
              <div className="space-y-2 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.4em] text-red-400">Ce que vous recevez</p>
                <ul className="space-y-1 text-white/70">
                  {seoChecks.map((check) => (
                    <li key={check} className="flex items-start gap-2">
                      <span className="mt-0.5 h-2 w-2 rounded-full bg-red-500" aria-hidden />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}