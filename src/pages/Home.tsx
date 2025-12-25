import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Seo from "../components/Seo";
import { useEnquiry } from "../components/EnquiryContext";
import { site } from "../content/site";
import { FadeIn, Stagger, StaggerItem } from "../components/ui/Motion";

const Home = () => {
  const { openModal } = useEnquiry();
  const reduce = useReducedMotion();

  const [activeService, setActiveService] = useState(0);
  const services = site.services;

  const heroStats = useMemo(
    () => [
      { label: "Weddings", value: "Full service" },
      { label: "Private villas", value: "Chef-led" },
      { label: "Events", value: "Seamless" },
    ],
    []
  );

  const featuredCollage = useMemo(
    () => [site.gallery[0], site.gallery[1], site.gallery[2], site.gallery[5]],
    []
  );

  return (
    <div className="-mt-20 md:-mt-24">
      <Seo
        title="Luxury catering in Cyprus for weddings, villas & private events"
        description="Hungry Monkey delivers luxury catering and private dining across Cyprus — weddings, villa dinners, cocktail parties, aviation catering and curated event production."
        image={site.hero.image}
        canonicalPath="/"
      />

      {/* HERO (dark, type-first, reference-inspired) */}
      <section className="relative min-h-[100svh] bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={site.hero.image}
            alt="Luxury catering in Cyprus"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />
          <div className="absolute inset-0 hm-noise opacity-35" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-28 pt-28 sm:px-6 md:pb-16 md:pt-32">
          <div className="grid flex-1 place-items-center">
            <div className="w-full">
              <div className="hidden items-center justify-between text-[11px] uppercase tracking-[0.35em] text-cream/70 md:flex">
                <span>Serving Cyprus</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 bg-gold" /> Premium catering
                </span>
                <span>By Hungry Monkey</span>
              </div>

              <motion.h1
                className="hm-display mt-10 text-center text-6xl font-semibold leading-[0.82] tracking-[-0.02em] text-cream sm:text-7xl md:mt-12 md:text-[112px]"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {"Flavors"}
                <br />
                {"that stay"}
              </motion.h1>

              <motion.div
                className="mx-auto mt-8 max-w-2xl text-center"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              >
                <p className="text-base text-cream/85 sm:text-lg">
                  {site.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="w-full border border-cream/50 bg-cream px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-cream/90 sm:w-auto"
                  >
                    {site.hero.primaryCta}
                  </button>

                  <Link
                    to="/services"
                    className="w-full border border-cream/35 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-cream/70 sm:w-auto"
                  >
                    View menu
                  </Link>
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

          {/* Mobile hint bar (reference-style) */}
          <div className="absolute inset-x-0 bottom-0 hidden border-t border-cream/15 bg-ink/60 px-4 py-4 backdrop-blur md:block">
            <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] uppercase tracking-[0.35em] text-cream/70 sm:px-6">
              <span>Weddings • Villas • Events</span>
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE ARCHITECTURE (less "cards", more moments) */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">How we work</p>
              <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                A calm process. A bold result.
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                We design the menu, staffing and service rhythm as one system — so your guests remember the feeling,
                not the logistics.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <FadeIn className="lg:col-span-5">
              <div className="space-y-8">
                {[{
                  title: "Menu design",
                  body: "Seasonal, local-first menus built around your event flow and venue constraints.",
                }, {
                  title: "Service direction",
                  body: "A disciplined team and a calm tempo — cocktail hour to final pour.",
                }, {
                  title: "Production",
                  body: "We handle vendors, timing and on-site coordination so it all lands effortlessly.",
                }].map((item) => (
                  <div key={item.title} className="border-l border-line pl-5">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{item.title}</p>
                    <p className="mt-3 text-sm text-ink/70 md:text-base">{item.body}</p>
                  </div>
                ))}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                  >
                    About the team <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                  >
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 overflow-hidden bg-ink">
                  <img
                    src={featuredCollage[0]}
                    alt="Catering presentation"
                    loading="lazy"
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                </div>
                <div className="col-span-7 overflow-hidden bg-ink">
                  <img
                    src={featuredCollage[1]}
                    alt="Canapés and cocktail hour"
                    loading="lazy"
                    className="h-[220px] w-full object-cover sm:h-[260px]"
                  />
                </div>
                <div className="col-span-5 overflow-hidden bg-ink">
                  <img
                    src={featuredCollage[2]}
                    alt="Private dining setup"
                    loading="lazy"
                    className="h-[220px] w-full object-cover sm:h-[260px]"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FULL-BLEED STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-12 gap-3">
            {site.gallery.slice(0, 6).map((src, i) => (
              <div
                key={src}
                className={
                  i === 0
                    ? "col-span-12 overflow-hidden md:col-span-6"
                    : i === 1
                      ? "col-span-6 overflow-hidden md:col-span-3"
                      : i === 2
                        ? "col-span-6 overflow-hidden md:col-span-3"
                        : "col-span-4 overflow-hidden md:col-span-2"
                }
              >
                <img
                  src={src}
                  alt="Hungry Monkey catering gallery"
                  loading="lazy"
                  className="h-[160px] w-full object-cover sm:h-[200px] md:h-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES AS AN INTERACTION (list -> image) */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.4em] text-gold">Services</p>
                <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                  Pick the experience.
                </h2>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  Tap a service to preview the vibe, then open an enquiry and we’ll shape the details.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70 hover:text-ink"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* List */}
            <div className="lg:col-span-5">
              <Stagger className="space-y-1">
                {services.map((s, idx) => {
                  const active = idx === activeService;
                  return (
                    <StaggerItem key={s.id}>
                      <button
                        type="button"
                        onClick={() => setActiveService(idx)}
                        onMouseEnter={() => setActiveService(idx)}
                        className={
                          "w-full border-l px-4 py-4 text-left transition-colors " +
                          (active
                            ? "border-gold bg-ink/5"
                            : "border-line hover:border-ink/40 hover:bg-ink/5")
                        }
                      >
                        <p className="hm-display text-2xl font-semibold leading-[0.95] text-ink">
                          {s.name}
                        </p>
                        <p className="mt-2 text-sm text-ink/70">{s.description}</p>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.3em] text-ink/60">
                          {s.bullets.slice(0, 2).map((b) => (
                            <span key={b} className="inline-flex items-center gap-2">
                              <span className="h-1 w-1 bg-gold" /> {b}
                            </span>
                          ))}
                        </div>
                      </button>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                >
                  Start an enquiry <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                >
                  Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden bg-ink">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={services[activeService].image}
                    src={services[activeService].image}
                    alt={services[activeService].name}
                    loading="lazy"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                    initial={reduce ? false : { opacity: 0.35, scale: 1.02 }}
                    animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0.35, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-cream/70">Featured</p>
                  <p className="hm-display mt-3 text-3xl font-semibold leading-[0.95] text-cream">
                    {services[activeService].name}
                  </p>
                  <p className="mt-3 max-w-xl text-sm text-cream/80">
                    {services[activeService].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF (no boxes) */}
      <section className="bg-sand py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-gold">Premium proof</p>
                <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                  Trusted by Cyprus’ finest.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-ink/70 md:text-base">
                HACCP certified, trusted for private aviation, and partnered with top venues across the island.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {site.badges.map((b) => (
              <FadeIn key={b.label}>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden bg-cream">
                    <img
                      src={b.image}
                      alt={b.label}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-ink/70">{b.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (bold typography) */}
      <section className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-gold">Reviews</p>
                <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-cream md:text-5xl">
                  What clients remember.
                </h2>
              </div>
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/70 hover:text-cream"
              >
                Read all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {site.testimonials.slice(0, 3).map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div className="border-l border-cream/15 pl-6">
                  <p className="hm-display text-2xl leading-[1.05] text-cream">
                    “{t.quote}”
                  </p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-cream/60">
                    {t.name} — {t.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (big + simple) */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Next</p>
              <h2 className="hm-display mt-5 text-5xl font-semibold leading-[0.9] text-ink md:text-6xl">
                Plan your next event.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
                Tell us the date, venue and guest count — we’ll come back with a direction, a menu outline and a clear next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                >
                  Start an enquiry <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                >
                  Contact details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-5">
              <div className="overflow-hidden bg-ink">
                <img
                  src={site.partners[0]?.images?.[0] ?? site.hero.image}
                  alt="Cyprus venue partner"
                  loading="lazy"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-ink/60">
                Partner highlight: {site.partners[0]?.name}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
