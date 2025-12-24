import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../content/site";
import { media } from "../content/media";
import { useEnquiry } from "./EnquiryContext";

const Header = () => {
  const location = useLocation();
  const { openModal } = useEnquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Close the overlay menu when navigating.
    setMenuOpen(false);
  }, [location.pathname]);

  const headerTone = useMemo(() => {
    // Match the reference: transparent + light-on-dark on hero, then compact cream bar.
    if (isHome && !scrolled) {
      return {
        wrap: "bg-transparent text-sand",
        hairline: "bg-transparent",
        logo: media.logos.light,
        link: "text-sand/80 hover:text-sand",
        linkActive: "text-sand",
        button: "border-sand/50 text-sand hover:bg-sand hover:text-ink",
        iconBtn: "border-sand/40 text-sand hover:border-sand",
      };
    }
    return {
      wrap: "bg-cream/95 text-ink backdrop-blur",
      hairline: "bg-line/80",
      logo: media.logos.dark,
      link: "text-ink/70 hover:text-ink",
      linkActive: "text-ink",
      button: "border-ink/20 text-ink hover:bg-ink hover:text-cream",
      iconBtn: "border-ink/15 text-ink hover:border-ink/30",
    };
  }, [isHome, scrolled]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerTone.wrap}`}>
        <div className={`h-px w-full ${headerTone.hairline}`} />

        <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 ${
          scrolled ? "md:py-3" : "md:py-5"
        }`}>
          {/* Left: logo + desktop nav */}
          <div className="flex items-center gap-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={headerTone.logo}
                alt={`${site.name} logo`}
                width={120}
                height={48}
                className="h-9 w-auto"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              {site.nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? headerTone.linkActive : headerTone.link}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Center: segmented switch (matches reference layout) */}
          <div className="hidden md:flex">
            <div className="flex overflow-hidden border border-current/25 bg-transparent text-xs uppercase tracking-[0.22em]">
              <Link
                to="/services"
                className={`px-5 py-2 transition-colors ${
                  location.pathname.startsWith("/services") ? "bg-current/10" : "hover:bg-current/5"
                }`}
              >
                Catering
              </Link>
              <Link
                to="/partners"
                className={`px-5 py-2 transition-colors ${
                  location.pathname.startsWith("/partners") ? "bg-current/10" : "hover:bg-current/5"
                }`}
              >
                Venues
              </Link>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className={`hidden border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors md:inline-flex ${
                headerTone.button
              }`}
            >
              Enquire
            </button>

            <button
              type="button"
              className={`border p-2 transition-colors md:hidden ${headerTone.iconBtn}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link
              to="/services"
              className={`hidden items-center gap-2 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors md:inline-flex ${
                headerTone.button
              }`}
            >
              Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-50 bg-ink text-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 hm-noise opacity-25" />
            <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 pb-28 pt-24 sm:px-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-cream/60">Navigate</p>

              <div className="mt-8 grid gap-5">
                {site.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `hm-display text-4xl leading-[0.95] ${
                        isActive ? "text-cream" : "text-cream/80"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto border-t border-cream/15 pt-6">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="w-full border border-cream/40 bg-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream"
                >
                  Start an enquiry
                </button>
                <p className="mt-3 text-xs text-cream/60">{site.contact.phone} • {site.contact.email}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile bottom dock (matches reference interaction pattern) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink"
          >
            Menu <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => openModal()}
            className="border border-ink/20 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream"
          >
            Enquire
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
