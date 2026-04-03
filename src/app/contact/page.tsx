import Image from "next/image";

const contactGallery = [
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/car-wrapping-with-foil-car-service-1-scaled.jpg",
    alt: "Accueil client et prise en charge personnalisée",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/male-painter-overalls-doing-his-work-car-shop-1-scaled.jpg",
    alt: "Diagnostic en atelier detailing",
  },
  {
    src: "https://mlraba0m5wz3.i.optimole.com/w:1024/h:683/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/02/yyedd.png",
    alt: "Préparation intérieure avant restitution",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030511] text-white">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-24">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">Contact</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Prendre rendez-vous pour votre detailing</h1>
          <p className="text-white/70">
            Nous répondons sous 24h, validons votre besoin et planifions une intervention adaptée à votre véhicule.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Adresse</p>
            <p className="mt-2 font-semibold text-white">34 Rue des Artisans, 37100 Tours</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Téléphone</p>
            <p className="mt-2 font-semibold text-white">+33 (0)2 47 00 00 10</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">E-mail</p>
            <p className="mt-2 font-semibold text-white">contact@lepouvoirdelautomobile.fr</p>
          </div>
        </div>

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-black/70 p-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Visite & rendez-vous</h2>
            <p className="text-sm text-white/70">
              Les créneaux sont planifiés pour respecter la disponibilité de votre véhicule et nos experts dédiés. Mentionnez la marque, le modèle et votre besoin précis.
            </p>
            <div className="space-y-2 text-xs uppercase tracking-[0.4em] text-white/60">
              <p>Ouverture</p>
              <p>Ma-Ve 9h-18h • Sam 9h-14h</p>
            </div>
          </div>
          <form className="space-y-4">
            {['Nom complet', 'Téléphone', 'E-mail', 'Modèle / Immatriculation']
              .map((label) => (
                <label key={label} className="block text-xs uppercase tracking-[0.4em] text-white/60">
                  {label}
                  <input className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none" />
                </label>
              ))}
            <label className="block text-xs uppercase tracking-[0.4em] text-white/60">
              Message
              <textarea className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none" rows={4} />
            </label>
            <button className="w-full rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:scale-[1.01]">
              Envoyer la demande
            </button>
          </form>
        </div>

        <section className="space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">Visuels</p>
            <h2 className="text-3xl font-semibold text-white">Un aperçu avant votre rendez-vous</h2>
            <p className="text-sm text-white/70">
              Nos prises en charge et finitions premium, pour vous projeter dans votre future prestation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contactGallery.map((item, index) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={480}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}