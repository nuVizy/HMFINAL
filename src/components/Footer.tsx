import { Link } from "react-router-dom";
import { site } from "../content/site";

const Footer = () => {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">{site.name}</p>
            <p className="hm-display mt-4 text-4xl font-semibold leading-[0.95] text-cream md:text-5xl">
              Catering, without the noise.
            </p>
            <p className="mt-4 max-w-xl text-sm text-cream/70 md:text-base">{site.description}</p>
            <div className="mt-6 grid gap-2 text-sm text-cream/75">
            <span>{site.contact.address}</span>
            <a href={`tel:${site.contact.phone}`} className="hover:text-cream">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-cream">
              {site.contact.email}
            </a>
          </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cream/60">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cream/60">Follow</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {site.contact.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="hover:text-cream">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/55">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
