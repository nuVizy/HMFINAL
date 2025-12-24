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

      {/* Team (collage, not cards) */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Team</p>
            <h2 className="hm-display mt-5 text-4xl font-semibold leading-[0.95] text-ink md:text-5xl">
              The people behind the plates.
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-12 gap-4">
            {site.team.map((m, idx) => (
              <FadeIn key={m.name} delay={idx * 0.04} className={idx === 0 ? "col-span-12 md:col-span-6" : "col-span-6 md:col-span-3"}>
                <div className="overflow-hidden bg-ink">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    className="h-[240px] w-full object-cover sm:h-[280px] md:h-[340px]"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{m.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold">{m.role}</p>
                <p className="mt-2 text-xs text-ink/65">{m.bio}</p>
              </FadeIn>
            ))}
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
