import Seo from "../components/Seo";
import { useEnquiry } from "../components/EnquiryContext";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";
import { motion, useReducedMotion } from "framer-motion";

const Services = () => {
  const { openModal } = useEnquiry();
  const services = site.services ?? [];
  const reduce = useReducedMotion();

  const heroImg = site.gallery?.[0] ?? site.hero?.image ?? services?.[0]?.image;

  const heroStats = [
    { label: "Services", value: `${services.length}+ menus` },
    { label: "Coverage", value: "Island-wide (Cyprus)" },
    { label: "Standards", value: "Chef-led, HACCP-ready" },
  ];

  return (
    <div id="top">
      <Seo
        title="Catering services in Cyprus"
        description="Event catering, private chef experiences, cocktail parties, confectionery and private aviation menus — designed and delivered across Cyprus by Hungry Monkey."
        image={services?.[0]?.image ?? site.hero?.image}
        canonicalPath="/services"
      />

      {/* HERO (match Home hero style) */}
      <section className="relative min-h-[100svh] bg-ink text-cream">
        <div className="absolute inset-0">
          {heroImg ? (
            <img
              src={heroImg}
              alt="Hungry Monkey catering services in Cyprus"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/90" />
          <div className="absolute inset-0 hm-noise opacity-35" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-28 pt-28 sm:px-6 md:pb-16 md:pt-32">
          <div className="grid flex-1 place-items-center">
            <div className="w-full">
              {/* Menu-style micro header */}
              <div className="hidden items-center justify-between text-[11px] uppercase tracking-[0.35em] text-cream/70 md:flex">
                <span>Curated catering</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 bg-gold" /> Services & menus
                </span>
                <span>Serving Cyprus</span>
              </div>

              <motion.h1
                className="hm-display mt-10 text-center text-6xl font-semibold leading-[0.82] tracking-[-0.02em] text-cream sm:text-7xl md:mt-12 md:text-[112px]"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {"Services"}
                <br />
                {"& Menu"}
              </motion.h1>

              <motion.div
                className="mx-auto mt-8 max-w-2xl text-center"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              >
                <p className="text-base text-cream/85 sm:text-lg">
                  Choose a direction below — each service is built around timing, staffing, plating and venue flow.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="w-full border border-cream/50 bg-cream px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-cream/90 sm:w-auto"
                  >
                    Start an enquiry
                  </button>

                  <a
                    href="#menu"
                    className="w-full border border-cream/35 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-cream/70 sm:w-auto"
                  >
                    View menu
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-cream/15 pt-6 text-left">
                  {heroStats.map((s) => (
                    <div key={s.label}>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-cream/60">
                        {s.label}
                      </p>
                      <p className="mt-2 text-sm text-cream/90">{s.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky category rail (menu-style) */}
      <section id="menu" className="bg-cream">
        <div className="sticky top-20 z-30 border-y border-line bg-cream/95 backdrop-blur md:top-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="no-scrollbar flex items-center gap-6 overflow-x-auto py-4 text-[11px] uppercase tracking-[0.3em] text-ink/70">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="whitespace-nowrap hover:text-ink"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (alternating, no card chrome) */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => {
              const flip = idx % 2 === 1;
              return (
                <FadeIn key={service.id}>
                  <article
                    id={service.id}
                    className="grid gap-8 lg:grid-cols-12 lg:items-center"
                  >
                    <div
                      className={`overflow-hidden bg-ink lg:col-span-7 ${
                        flip ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        width={1200}
                        height={800}
                        className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px]"
                      />
                    </div>

                    <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
                        Service {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h2 className="hm-display mt-4 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                        {service.name}
                      </h2>
                      <p className="mt-4 text-sm text-ink/70 md:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3 border-l border-line pl-5">
                        {service.bullets.map((b) => (
                          <p key={b} className="text-sm text-ink/75">
                            {b}
                          </p>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => openModal(service.name)}
                          className="inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                        >
                          Enquire about {service.name}
                        </button>
                        <a
                          href="#top"
                          className="inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                        >
                          Back to top
                        </a>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">FAQ</p>
            <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
              Questions, answered.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "How far in advance should we book?",
                body: "We recommend 4–6 weeks for private dining and 3+ months for large celebrations and peak season weddings.",
              },
              {
                title: "Do you offer bespoke menus?",
                body: "Yes. Every menu is tailored around your guests, dietary needs, venue facilities and the rhythm of your event.",
              },
              {
                title: "Can you manage full event staffing?",
                body: "Absolutely. We provide chefs, wait staff, bartenders, setup crews and on-site coordination.",
              },
              {
                title: "Do you cater across the island?",
                body: "Yes — Paphos, Limassol, Larnaca, Nicosia and destination venues across Cyprus.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <details className="border-b border-line pb-6">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-ink">
                    {item.title}
                  </summary>
                  <p className="mt-3 text-sm text-ink/70">{item.body}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
