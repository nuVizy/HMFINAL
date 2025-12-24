import { useState } from "react";
import Seo from "../components/Seo";
import { site } from "../content/site";
import { FadeIn } from "../components/ui/Motion";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const emptyForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.email.trim()) nextErrors.email = "Enter a valid email.";
    if (!form.phone.trim()) nextErrors.phone = "Enter a phone number.";
    if (!form.service) nextErrors.service = "Select a service.";
    if (!form.date) nextErrors.date = "Select a date.";
    if (!form.message.trim()) nextErrors.message = "Share a short brief.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    // Placeholder: swap for your CRM / Formspree / backend.
    console.log("Contact form submitted", form);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <div>
      <Seo
        title="Contact Hungry Monkey Catering"
        description="Enquire about luxury catering in Cyprus — weddings, private villas, corporate events and private aviation. Tell us your date, venue and guest count."
        image={site.gallery[1]}
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={site.gallery[1]}
            alt="Hungry Monkey catering contact"
            className="h-full w-full object-cover opacity-70"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
            <h1 className="hm-display mt-6 max-w-3xl text-5xl font-semibold leading-[0.9] text-cream md:text-6xl">
              Let’s plan your next event.
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-cream/70 md:text-base">
              Share the date, guest count and venue (if confirmed). We’ll reply with a clear direction and next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + details */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {submitted ? (
                <FadeIn>
                  <div className="border-l border-line pl-6">
                    <p className="hm-display text-3xl font-semibold leading-[0.95] text-ink">
                      Message received.
                    </p>
                    <p className="mt-3 text-sm text-ink/70">
                      This form currently logs to the console. Connect your preferred form handler when ready.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                    >
                      Send another message
                    </button>
                  </div>
                </FadeIn>
              ) : (
                <FadeIn>
                  <form className="grid gap-6" onSubmit={handleSubmit}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <label className="grid gap-2 text-sm font-medium text-ink">
                        Name <span className="text-ink/50">*</span>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(event) => setForm({ ...form, name: event.target.value })}
                          className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                        />
                        {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
                      </label>

                      <label className="grid gap-2 text-sm font-medium text-ink">
                        Email <span className="text-ink/50">*</span>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(event) => setForm({ ...form, email: event.target.value })}
                          className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                        />
                        {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
                      </label>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <label className="grid gap-2 text-sm font-medium text-ink">
                        Phone <span className="text-ink/50">*</span>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(event) => setForm({ ...form, phone: event.target.value })}
                          className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                        />
                        {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
                      </label>

                      <label className="grid gap-2 text-sm font-medium text-ink">
                        Service <span className="text-ink/50">*</span>
                        <select
                          value={form.service}
                          onChange={(event) => setForm({ ...form, service: event.target.value })}
                          className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                        >
                          <option value="">Select a service</option>
                          {site.services.map((service) => (
                            <option key={service.id} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                        {errors.service && <span className="text-xs text-red-600">{errors.service}</span>}
                      </label>
                    </div>

                    <label className="grid gap-2 text-sm font-medium text-ink">
                      Event date <span className="text-ink/50">*</span>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(event) => setForm({ ...form, date: event.target.value })}
                        className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                      />
                      {errors.date && <span className="text-xs text-red-600">{errors.date}</span>}
                    </label>

                    <label className="grid gap-2 text-sm font-medium text-ink">
                      Brief <span className="text-ink/50">*</span>
                      <textarea
                        value={form.message}
                        onChange={(event) => setForm({ ...form, message: event.target.value })}
                        rows={6}
                        className="border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                      />
                      {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
                    </label>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-between border border-ink/20 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-ink/90"
                    >
                      Send enquiry
                    </button>

                    <p className="text-xs text-ink/60">
                      Let's Talk
                    </p>
                  </form>
                </FadeIn>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-10">
                <FadeIn>
                  <div className="border-l border-line pl-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact details</p>
                    <p className="mt-4 text-sm text-ink/70">{site.contact.address}</p>
                    <a href={`tel:${site.contact.phone}`} className="mt-4 block text-sm text-ink">
                      {site.contact.phone}
                    </a>
                    <a href={`mailto:${site.contact.email}`} className="mt-2 block text-sm text-ink">
                      {site.contact.email}
                    </a>
                    <a
                      href={site.contact.mapsUrl}
                      className="mt-8 inline-flex items-center justify-between border border-ink/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-ink/40"
                    >
                      Directions
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.08}>
                  <div className="border-l border-line pl-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-gold">Social</p>
                    <div className="mt-4 space-y-3 text-sm text-ink/70">
                      {site.contact.socials.map((social) => (
                        <a key={social.label} href={social.href} className="block hover:text-ink">
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
