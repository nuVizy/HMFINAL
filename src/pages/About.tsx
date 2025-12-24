import Seo from "../components/Seo";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";

const About = () => {
  return (
    <div>
      <Seo
        title="About Hungry Monkey Catering"
        description="Meet the Michelin-led team behind Hungry Monkey and the standards that shape every Cyprus wedding, villa dinner and event."
        image={site.gallery[2]}
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Our story</p>
              <h1 className="hm-display mt-6 text-5xl font-semibold leading-[0.9] text-ink md:text-6xl">
                Hospitality with discipline — and warmth.
              </h1>
              <p className="mt-5 max-w-xl text-sm text-ink/70 md:text-base">
                Hungry Monkey was built for modern celebrations: Michelin-level focus, Cyprus ingredients,
                and a service pace that feels calm and considered.
              </p>

              <div className="mt-8 space-y-4 border-l border-line pl-5">
                <p className="text-sm text-ink/75">HACCP certified • Private aviation ready</p>
                <p className="text-sm text-ink/75">Island-wide delivery and on-site production</p>
                <p className="text-sm text-ink/75">Chef-led menus for weddings, villas and events</p>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-6">
              <div className="overflow-hidden bg-ink">
                <img
                  src={site.gallery[7]}
                  alt="Hungry Monkey team preparing a private dining experience"
                  loading="lazy"
                  className="h-[340px] w-full object-cover sm:h-[420px] md:h-[520px]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
<section className="bg-cream py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      {/* Image */}
      <FadeIn className="lg:col-span-6">
        <div className="overflow-hidden bg-ink">
          <img
            src="https://www.hungrymonkeycyprus.com/wp-content/uploads/2023/08/Makis-Ifigenia.jpg"
            alt="Makis & Ifigenia, founders of Hungry Monkey Catering"
            loading="lazy"
            decoding="async"
            className="h-[360px] w-full object-cover sm:h-[440px] md:h-[520px]"
          />
        </div>
      </FadeIn>

      {/* Copy */}
      <div className="lg:col-span-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Founders</p>
          <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
            The heart behind the company.
          </h2>

          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Makis &amp; Ifigenia
          </p>

          <div className="mt-7 space-y-4 text-sm leading-relaxed text-ink/70 md:text-base">
            <p>
              As the heart behind our catering company, we are driven by the passion to offer
              unparalleled service and remarkable hospitality to all our clients.
            </p>
            <p>
              We intricately manage every facet of your experience and take joy in extending a
              heartfelt reception. Our genuine intent to create a delightful event is unmistakable,
              setting us apart from other providers in the industry.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-between border border-ink/25 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/45"
            >
              Meet the founders
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-between bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
            >
              Start an enquiry
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</section>


      {/* Team (collage, not cards) */}
      <section className="bg-cream py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    <FadeIn>
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Team</p>
      <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
        The people behind the plates.
      </h2>
    </FadeIn>

    {/* Horizontal grid (mobile) -> standard grid (md+) */}
    <div className="mt-12 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-4 overflow-x-auto pb-2 sm:auto-cols-[48%] md:snap-none md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
        {site.team.map((m, idx) => (
          <FadeIn key={m.name} delay={idx * 0.04} className="snap-start">
            <div className="flex h-full flex-col">
              {/* Portrait, uniform sizing */}
              <div className="aspect-[3/4] overflow-hidden bg-ink">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-ink">{m.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold">
                  {m.role}
                </p>
                <p className="mt-2 text-xs text-ink/65">{m.bio}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Credibility */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Credibility</p>
              <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
                Michelin-led craft.
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                Executive Chef Asimakis Chaniotis brings Michelin-star leadership to our kitchen, shaping menus
                that balance Cyprus seasonality with modern technique.
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {[site.gallery[3], site.gallery[4], site.gallery[5]].map((src, i) => (
                  <div
                    key={src}
                    className={i === 0 ? "col-span-12 overflow-hidden bg-ink md:col-span-6" : "col-span-6 overflow-hidden bg-ink md:col-span-3"}
                  >
                    <img
                      src={src}
                      alt="Hungry Monkey catering" 
                      loading="lazy"
                      className="h-[200px] w-full object-cover sm:h-[240px]"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
