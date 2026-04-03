import Image from "next/image";

const milestones = [
  { year: '2014', title: 'Ouverture', detail: "L’atelier LPDA ouvre ses portes à Tours pour les passionnés d’automobile." },
  { year: '2018', title: 'Spécialisation detailing', detail: 'Déploiement des soins esthétiques premium et protections hydrophobes.' },
  { year: '2022', title: 'Produits certifiés', detail: 'Sélection de marques premium pour des résultats durables.' },
  { year: '2025', title: 'Expérience client', detail: 'Prise de RDV simplifiée, reporting photo et suivi après prestation.' },
];

const values = [
  { title: 'Transparence', description: 'Chaque véhicule reçoit un diagnostic clair et un devis détaillé.', icon: '✔️' },
  { title: 'Précision', description: 'Corrections ciblées, finitions au détail et protection longue durée.', icon: '🎯' },
  { title: 'Accompagnement', description: 'Prise de RDV rapide, suivi personnalisé et conseils d’entretien.', icon: '🤝' },
];

const studioGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fwxdgh.png",
    alt: "Finition carrosserie signature",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/xghjxcghj.png",
    alt: "Détails premium et protection durable",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fhyu.png",
    alt: "Nettoyage intérieur minutieux",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:1024/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/fdfgdh.png",
    alt: "Protection céramique haute brillance",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030511] text-white">
      <div className="mx-auto max-w-6xl space-y-16 px-6 py-24">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">À propos</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">L’atelier dédié au detailing automobile</h1>
          <p className="max-w-3xl text-white/80">
            Depuis 2014, LPDA sublime les véhicules avec des protocoles de detailing premium. Chaque
            surface est traitée avec soin, de la correction de vernis à la protection céramique.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {values.map((card) => (
            <article key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-2xl">{card.icon}</div>
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-2 text-sm text-white/70">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">L’atelier en détails</p>
            <h2 className="text-3xl font-semibold text-white">Illustrations du studio LPDA</h2>
            <p className="max-w-3xl text-sm text-white/70">
              Ambiances, finitions et savoir-faire : des images pour ressentir notre exigence au quotidien.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {studioGallery.map((item) => (
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

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">Chronologie</p>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 px-6 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{milestone.year}</p>
                  <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-white/70 md:mt-0">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}