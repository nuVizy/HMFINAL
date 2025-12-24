import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";

const Partners = () => {
  const partner = site.partners[0];

  return (
    <div>
      <Seo
        title="Venue partners in Cyprus"
        description="Explore our venue partners and hospitality collaborators across Cyprus — selected for seamless logistics, ambience and guest experience."
        image={partner.images[0]}
        canonicalPath="/partners"
      />

      {/* Hero */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Partners</p>
              <h1 className="hm-display mt-6 text-5xl font-semibold leading-[0.9] text-ink md:text-6xl">
                Venues that make the service feel effortless.
              </h1>
              <p className="mt-5 max-w-xl text-sm text-ink/70 md:text-base">
                We collaborate with Cyprus’ best venues so catering, staffing and timing stay clean — and your guests simply enjoy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                >
                  Plan with us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                >
                  See our menu
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-6">
              <div className="overflow-hidden bg-ink">
                <img
                  src={partner.images[0]}
                  alt={partner.name}
                  loading="lazy"
                  className="h-[340px] w-full object-cover sm:h-[420px] md:h-[520px]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-ink/60">
                Featured venue: {partner.name}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured partner */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <FadeIn className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Feature</p>
              <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                {partner.name}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">{partner.description}</p>
              <p className="mt-4 text-sm text-ink/70 md:text-base">{partner.story}</p>
            </FadeIn>

            <FadeIn className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {partner.images.map((image, index) => (
                  <div
                    key={image}
                    className={
                      index === 0
                        ? "col-span-12 overflow-hidden bg-ink md:col-span-7"
                        : index === 1
                          ? "col-span-6 overflow-hidden bg-ink md:col-span-5"
                          : "col-span-6 overflow-hidden bg-ink md:col-span-4"
                    }
                  >
                    <img
                      src={image}
                      alt={`${partner.name} imagery ${index + 1}`}
                      loading="lazy"
                      className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Expand */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">More partners</p>
            <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
              Built to expand.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">
              Add new partner profiles in <span className="font-mono text-xs">src/content/site.ts</span> — this page auto-updates.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {["Vineyard venues", "Luxury villas", "Corporate retreats"].map((label, idx) => (
              <FadeIn key={label} delay={idx * 0.06}>
                <div className="border-l border-line pl-5">
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-2 text-sm text-ink/70">
                    A clean profile: capacity, logistics notes, and a gallery.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
