import Link from "next/link";
import Image from "next/image";

const offerings = [
  {
    title: 'Préparation esthétique & detailing',
    detail: 'Nettoyage technique extérieur, shampouinage profond par extraction et assainissement complet.',
    duration: 'Programme sur-mesure',
  },
  {
    title: 'Protection & traitements de surface',
    detail: 'Traitements céramiques carrosserie/jantes, bouclier vitrage hydrophobe et cire showroom.',
    duration: 'Protection longue durée',
  },
  {
    title: 'Carrosserie rapide & vitrage',
    detail: 'Remplacement pare-brise, réparation d’impacts, rénovation d’optiques et calibration ADAS.',
    duration: 'Intervention ciblée',
  },
];

const servicePoles = [
  {
    title: 'Pôle 1 : Préparation Esthétique & Detailing',
    items: [
      'Nettoyage Technique Extérieur',
      'Shampouinage Profond par Extraction',
      'Rénovation & Soin des Cuirs',
      'Décontamination Mécanique (Barre d’Argile)',
      'Correction de Vernis (Polissage)',
      'Pressing des Plafonniers & Détails',
      'Assainissement de l’Habitacle',
    ],
  },
  {
    title: 'Pôle 2 : Protection & Traitements de Surface',
    items: [
      'Traitement Céramique Carrosserie',
      'Protection Céramique des Jantes',
      'Bouclier Vitrage Hydrophobe',
      'Pose de Film de Protection (PPF)',
      'Cire de Finition “Showroom”',
      'Teinture de Vitrages Homologuée',
      'Protection des Plastiques & Caoutchoucs',
    ],
  },
  {
    title: 'Pôle 3 : Carrosserie Rapide & Vitrage',
    items: [
      'Remplacement de Pare-Brise & Vitrages',
      'Réparation d’Impacts (Résine)',
      'Débosselage Sans Peinture (DSP)',
      'Rénovation d’Optiques de Phares',
      'Retouches Peinture de Précision',
      'Calibration des Systèmes ADAS',
      'Réparation Plastique & Pare-Chocs',
    ],
  },
];

const serviceGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-scaled.jpg",
    alt: "Préparation carrosserie en atelier detailing",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-1-scaled.jpg",
    alt: "Pose de protection PPF sur carrosserie",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/male-painter-overalls-doing-his-work-car-shop-1-scaled.jpg",
    alt: "Finition esthétique et polissage professionnel",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/yyedd.png",
    alt: "Détailing intérieur haut de gamme",
  },
];

const showcaseGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-SHAMP-4.png",
    alt: "Shampouinage et extraction profonde",
    label: "Shampoing premium",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-PAREBRISE.png",
    alt: "Traitement vitrage et pare-brise",
    label: "Vitrage protégé",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:683/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/SERVICE-LPDA-OPTIQUE.png",
    alt: "Rénovation des optiques de phares",
    label: "Optiques rénovées",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#030511] text-white">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-24">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">Nos services</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Expert en Protection Carrosserie, Traitement Céramique et Car Wash à Tours</h1>
          <p className="max-w-3xl text-sm text-white/70">
            Installé à Tours, notre centre redéfinit les standards de l’entretien esthétique et technique.
            Bien plus qu’un simple lavage, nous offrons une approche globale pour protéger, restaurer et
            sécuriser votre véhicule.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <article key={offering.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/40">
              <h2 className="text-2xl font-semibold text-white">{offering.title}</h2>
              <p className="mt-3 text-sm text-white/70">{offering.detail}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">{offering.duration}</div>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.4em] text-white transition hover:border-red-500 hover:text-red-500"
              >
                Découvrir
              </Link>
            </article>
          ))}
        </div>

        <section className="rounded-3xl border border-white/10 bg-black/50 px-8 py-10 shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">Notre Protocole : la rigueur en 4 étapes clés</h2>
            <p className="text-white/70">
              Chaque véhicule est inspecté, traité puis contrôlé sous lumière rasante avant restitution.
              Nous vérifions l’absence de traces, la clarté des vitres et la perfection des finitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/60">#Detailing</span>
              <span className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/60">#Céramique</span>
              <span className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/60">#Carrosserie</span>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">Showroom</p>
            <h2 className="text-3xl font-semibold text-white">Prestations mises en avant</h2>
            <p className="text-sm text-white/70">
              Quelques focus visuels sur nos services signatures, du vitrage aux finitions intérieures.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {showcaseGallery.map((item, index) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={620}
                  height={860}
                  className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">Prestations détaillées</p>
            <h2 className="text-3xl font-semibold text-white">Choisissez votre pôle d’intervention</h2>
            <p className="text-sm text-white/70">
              Sélectionnez les services adaptés à votre véhicule, puis planifions ensemble votre rendez-vous.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePoles.map((pole) => (
              <article key={pole.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{pole.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {pole.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-red-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">Illustrations</p>
            <h2 className="text-3xl font-semibold text-white">Le savoir-faire LPDA en images</h2>
            <p className="text-sm text-white/70">
              Découvrez les étapes clés de nos prestations : protection PPF, correction de vernis et
              finitions premium.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceGallery.map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={420}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}