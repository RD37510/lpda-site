"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroHighlights = [
  { label: "RDV sous", value: "24h", detail: "retour personnalisé" },
  { label: "Atelier", value: "Tours", detail: "prise en charge locale" },
  { label: "Garantie", value: "12 mois", detail: "sur les protections" },
];

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const hasAutoScrolled = useRef(false);
  const scrollMultiplier = 2;

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) {
      return undefined;
    }

    let isReady = false;
    let ticking = false;

    const updateVideoTime = () => {
      ticking = false;

      if (!isReady || !video || !section) {
        return;
      }

      const sectionTop = section.offsetTop;
      const scrollDistance = window.innerHeight * scrollMultiplier;
      const sectionHeight = Math.max(scrollDistance, 1);
      const scrollY = window.scrollY;
      const rawProgress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
      video.currentTime = rawProgress * video.duration;
      const isNowComplete = rawProgress >= 1;
      setIsComplete(isNowComplete);

      if (!isNowComplete && rawProgress <= 0.05) {
        hasAutoScrolled.current = false;
      }

      if (isNowComplete && !hasAutoScrolled.current) {
        hasAutoScrolled.current = true;
        window.scrollTo({
          top: sectionTop + section.offsetHeight,
          behavior: "smooth",
        });
      }
    };

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVideoTime);
        ticking = true;
      }
    };

    const handleLoadedMetadata = () => {
      isReady = true;
      video.currentTime = 0;
      requestTick();
    };

    const handleScroll = () => {
      requestTick();
    };

    const handleResize = () => {
      requestTick();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    video.load();
    requestTick();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen">
      <div className="relative grid min-h-screen items-end">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className={`fixed inset-0 h-full w-full object-cover transition-opacity duration-1200 ${
            isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          src="https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/ANIMATION-FINAL-LPDA-1.mp4"
        />
        <div
          className={`fixed inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black transition-opacity duration-1200 ${
            isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-24 pt-32 text-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.5em] text-white/80">
              Expert en Protection Carrosserie, Traitement Céramique et Car Wash à Tours
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              L’expertise du détail au service de votre patrimoine automobile.
            </h1>
            <p className="text-base text-white/80">
              Installé à Tours, notre centre redéfinit les standards de l’entretien esthétique et technique.
              Bien plus qu’un simple lavage, nous offrons une approche globale pour protéger, restaurer et
              sécuriser votre véhicule.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-10 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-red-500/30 transition hover:scale-[1.02]"
            >
              Réserver
            </Link>
            <Link
              className="rounded-full border border-white/30 px-10 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:border-red-500 hover:text-red-500"
              href="/services"
            >
              Voir les prestations
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {heroHighlights.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/20 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">{stat.label}</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="h-[200vh]" />
    </div>
  );
}