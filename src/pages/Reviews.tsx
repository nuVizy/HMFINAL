import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";

type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  image?: string;
  rating?: number;
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=b5f95f7d9e172e18&rlz=1C5CHFA_enCY1033CY1033&hl=en-CY&biw=5120&bih=1288&sxsrf=AE3TifMmVkFsNWfRZZ0mIsLzdXWRQzXcfg:1766618495420&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2_cDQ0WEcFNS2EuVwu2xcdaURVTeYyf5v-TOxH1vKCdPkqqtuD9sI5bPKp9yLTxyEz7WsrAWBcnVuZVw_wNcdhSX2Ahsyiqc6z1o12-eg2tSnfMww%3D%3D&q=Hungry+Monkey+Catering+Reviews&sa=X&ved=2ahUKEwij7P3erteRAxVBgP0HHfbDJXkQ0bkNegQITBAE";

const GoogleGIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="g-clip">
        <path
          d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z"
          fill="none"
        />
      </clipPath>
    </defs>

    <g transform="translate(3 3)" clipPath="url(#g-clip)">
      <path d="M0,10.636V0L7.116,5.318Z" transform="translate(-0.837 3.682)" fill="#fbbc05" />
      <path
        d="M0,4.5,7.116,9.818l2.93-2.5,10.047-1.6V0H0Z"
        transform="translate(-0.837 -0.818)"
        fill="#ea4335"
      />
      <path
        d="M0,15.136,12.558,5.727l3.307.409L20.093,0V19.636H0Z"
        transform="translate(-0.837 -0.818)"
        fill="#34a853"
      />
      <path
        d="M14.651,15.136,1.674,5.318,0,4.091,14.651,0Z"
        transform="translate(4.605 3.682)"
        fill="#4285f4"
      />
    </g>
  </svg>
);

const Stars = ({ count = 5, className = "" }: { count?: number; className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`.trim()} aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4" fill="currentColor" stroke="currentColor" />
    ))}
  </div>
);

const truncate = (text: string, maxChars = 220) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxChars) return clean;
  return `${clean.slice(0, maxChars).trim()}…`;
};

const Reviews = () => {
  const fallbackImage = site.testimonials?.[0]?.image || site.hero.image;

  const extraTestimonials: Testimonial[] = [
    {
      name: "Karolina G.",
      role: "Event host",
      rating: 5,
      quote:
        "From the first email contact to the end of the event, complete professionalism was evident! From the very organizational stage, the team demonstrated a tremendous commitment, flexibility, and personalized approach to the client. The organizational meeting took place in an incredibly pleasant atmosphere, everything was thoroughly discussed and arranged, and communication was quick, efficient, and very friendly.\n\nDuring the event itself, the staff performed admirably - the smiling, discreet, and incredibly professional staff took care of every detail, even the smallest one. The food was simply amazing! Everything was fresh, beautifully presented, and refined with incredible flavor. The guests were delighted!\nI wholeheartedly recommend this company - working with you is a big pleasure! ❤️ I sincerely hope that we will have the opportunity to meet again on another project.",
    },
    {
      name: "Becky Jade",
      role: "Wedding at Liopetro",
      rating: 5,
      quote:
        "we had the pleasure of having the hungry monkey catering team when we had a our wedding at Liopetro last month!\n\nThe Food… was beyond fantastic.\n\nFor starters the reassurance we had as a gluten free girlie was fantastic - the chef and staff have a great knowledge of allergens which goes a long way. And I had more than enough options.\n\nWe had some vegetarian guests too and again knowledge and options were amazing.\n\nAll of our guests have said it’s some of the best food they’ve eaten!\n\nIt was honestly some of the best food we’ve ever eaten at a wedding - the only issue is we didn’t eat enough!!!",
    },
    {
      name: "Laura B",
      role: "Wedding party host",
      rating: 5,
      quote:
        "We are so happy to have chosen hungry monkeys for our wedding party! From the first contact to the last dish and the clean up, the communication was always warm, friendly and professional. Not to speak of the delicious food that all our guest still talk about days after the event. We sincerely hope that this was not the last time we’d had this absolutely perfect experience with the team of hungry monkeys!",
    },
    {
      name: "Thanos Antoniou",
      role: "Pre-wedding ceremony",
      rating: 5,
      quote:
        "We booked the catering for my brother's pre wedding ceremony. The staff were really helpful and professional and the food was simply amazing. Various choices from gourmet to streey food style. Totally recommend!",
    },
  ];

  const testimonials: Testimonial[] = [
    ...(site.testimonials ?? []).map((t: any) => ({
      name: t.name,
      role: t.role,
      quote: t.quote,
      rating: t.rating ?? 5,
      image: t.image || fallbackImage,
    })),
    ...extraTestimonials.map((t) => ({
      ...t,
      image: t.image || fallbackImage,
    })),
  ];

  return (
    <div>
      <Seo
        title="Catering reviews in Cyprus"
        description="Read testimonials from wedding, villa and corporate hosts who chose Hungry Monkey for premium catering in Cyprus."
        image={fallbackImage}
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
            <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-center">
              {/* Rating + badge */}
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center gap-4 text-gold">
                  <Stars count={5} />
                  <p className="text-[11px] uppercase tracking-[0.35em] text-ink/60">
                    5.0 average rating from private and corporate hosts
                  </p>

                  {/* Single Google badge (hero only) */}
                  <span className="inline-flex items-center gap-2 border border-ink/15 bg-white px-3 py-2 text-ink">
                    <span className="inline-flex h-6 w-6 items-center justify-center bg-white">
                      <GoogleGIcon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                      Google Reviews
                    </span>
                  </span>
                </div>
              </div>

              {/* Google button (before reviews) */}
              <div className="md:col-span-4 md:flex md:justify-end">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-between border border-ink/25 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/45 md:w-auto"
                >
                  View on Google
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Grid cards (uniform spacing + heights) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => {
              const isLong = t.quote.trim().length > 260;
              const roleIsVillaClient = !!t.role && /private villa client/i.test(t.role);
              const roleToShow = roleIsVillaClient ? "" : (t.role || "");

              return (
                <FadeIn key={`${t.name}-${idx}`} delay={idx * 0.04}>
                  <article className="flex h-full flex-col border border-cream/12 bg-ink/20 p-6">
                    {/* Top row: stars */}
                    <div className="flex items-center justify-between gap-4">
                      <Stars count={t.rating ?? 5} className="text-gold" />
                      <span className="text-[11px] uppercase tracking-[0.3em] text-cream/55">
                        Verified
                      </span>
                    </div>

                    {/* Quote excerpt keeps grid uniform */}
                    <div className="mt-5 flex-1">
                      <p className="hm-display text-xl leading-[1.15] text-cream md:text-2xl md:leading-[1.05]">
                        “{truncate(t.quote, 220)}”
                      </p>

                      {/* If long: dropdown box with full text */}
                      {isLong ? (
                        <details className="mt-5 border border-cream/12 bg-ink/30 p-4">
                          <summary className="cursor-pointer select-none text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/70">
                            Read full review
                          </summary>
                          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-cream/80">
                            {t.quote}
                          </p>
                        </details>
                      ) : null}
                    </div>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3 border-t border-cream/12 pt-5">
                      <img
                        src={t.image || fallbackImage}
                        alt={t.name}
                        loading="lazy"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-cream">{t.name}</p>
                        {roleToShow ? (
                          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cream/60">
                            {roleToShow}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
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
                    className="inline-flex w-full items-center justify-between border border-cream/25 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-cream/40 lg:w-auto"
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
