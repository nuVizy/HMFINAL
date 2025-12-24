import { useEffect } from "react";
import { site } from "../content/site";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
}

const upsertMeta = (name: string, content: string, isProperty = false) => {
  const selector = isProperty ? `meta[property='${name}']` : `meta[name='${name}']`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (isProperty) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const Seo = ({ title, description, image, canonicalPath }: SeoProps) => {
  useEffect(() => {
    // Avoid overly repetitive / boilerplate titles (can be rewritten by search engines).
    // If the caller already included the brand, don't append it again.
    const fullTitle = title.toLowerCase().includes(site.name.toLowerCase())
      ? title
      : `${title} | ${site.name}`;

    document.title = fullTitle;
    upsertMeta("description", description);
    upsertMeta("og:title", fullTitle, true);
    upsertMeta("og:description", description, true);
    upsertMeta("og:type", "website", true);

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = origin ? `${origin}${window.location.pathname}` : undefined;
    if (url) {
      upsertMeta("og:url", url, true);
    }

    if (origin) {
      const canonical = canonicalPath ? `${origin}${canonicalPath}` : url;
      if (canonical) upsertLink("canonical", canonical);
    }

    if (image) {
      upsertMeta("og:image", image, true);
    }

    // Twitter card (used by X/Twitter, Slack, etc.)
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", fullTitle);
    upsertMeta("twitter:description", description);
    if (image) upsertMeta("twitter:image", image);
    const jsonLdId = "localbusiness-jsonld";
    const existing = document.getElementById(jsonLdId);
    const payload = {
      "@context": "https://schema.org",
      // Catering isn't a dedicated Schema.org type; use LocalBusiness plus a food-related type.
      "@type": ["LocalBusiness", "FoodEstablishment"],
      name: site.name,
      description: site.description,
      url: origin || undefined,
      image: image || undefined,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressLocality: "Paphos",
        addressCountry: "CY"
      },
      telephone: site.contact.phone,
      email: site.contact.email
    };

    const script = existing ?? document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.id = jsonLdId;
    script.textContent = JSON.stringify(payload);
    if (!existing) {
      document.head.appendChild(script);
    }
  }, [title, description, image, canonicalPath]);

  return null;
};

export default Seo;
