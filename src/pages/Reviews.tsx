import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";

const Reviews = () => {
  return (
    <div>
      <Seo
        title="Catering reviews in Cyprus"
        description="Read testimonials from wedding, villa and corporate hosts who chose Hungry Monkey for premium catering in Cyprus."
        image={site.testimonials[0].image}
        canonicalPath="/reviews"
      />

      {/* Header */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Reviews</p>
            <h1 className="hm-display mt-6 text-5xl font-semibold leading-[0.9] text-ink md:text-6xl">
              Loved by hosts across Cyprus.
            </h1>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-gold">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-ink/60">
                5.0 average rating from private and corporate hosts
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {site.testimonials.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 0.05}>
                <div className="border-l border-cream/15 pl-6">
                  <p className="hm-display text-2xl leading-[1.05] text-cream">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold text-cream">{t.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cream/60">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 border-t border-cream/15 pt-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h2 className="hm-display text-4xl font-semibold leading-[0.95] text-cream md:text-5xl">
                    Ready to host something extraordinary?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm text-cream/70 md:text-base">
                    Tell us the date, venue and guest count — we’ll propose a direction and a clear next step.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between border border-cream/25 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-cream/40"
                  >
                    Contact the team
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
