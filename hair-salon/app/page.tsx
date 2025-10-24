'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Stylists", href: "#stylists" },
  { name: "Signature Looks", href: "#gallery" },
  { name: "Booking", href: "#booking" },
  { name: "Visit", href: "#contact" },
];

const services = [
  {
    name: "Luxe Signature Cut",
    description:
      "Tailored precision cut with a restorative cleanse, scalp massage, and bespoke finish.",
    duration: "75 min",
    price: "$120",
    accent: "from $120",
  },
  {
    name: "Radiant Color Atelier",
    description:
      "Dimensional color crafted with ammonia-free formulas, tonal gloss, and nurturing treatment.",
    duration: "2.5 hrs",
    price: "$245",
    accent: "balayage specialist",
  },
  {
    name: "Runway Styling Session",
    description:
      "Red-carpet styling featuring thermal artistry, couture finishing, and take-home care guide.",
    duration: "90 min",
    price: "$180",
    accent: "event ready",
  },
];

const experienceHighlights = [
  {
    title: "Holistic Consultation",
    detail:
      "We profile your lifestyle, facial architecture, and hair story before the first cut.",
  },
  {
    title: "Clean Beauty Rituals",
    detail:
      "Every product we partner with is vegan, cruelty-free, and formulated without sulfates or parabens.",
  },
  {
    title: "Refine Between Visits",
    detail:
      "Complimentary bang and neckline detailing within 21 days keeps your look freshly tailored.",
  },
];

const stylists = [
  {
    name: "Ava Sinclair",
    role: "Creative Director  -  Precision Cutting",
    bio: "Former runway stylist with a Paris pedigree, Ava sculpts modern silhouettes that grow in effortlessly.",
    image: "/images/stylist-ava.jpg",
  },
  {
    name: "Luca Bennett",
    role: "Color Visionary  -  Balayage Specialist",
    bio: "Luca's kinetic balayage and color melting techniques deliver luminous, low-maintenance dimension.",
    image: "/images/stylist-luca.jpg",
  },
  {
    name: "Noor Albright",
    role: "Texture Architect  -  Curl Whisperer",
    bio: "Noor champions natural textures with bespoke cutting patterns and intuitive curl education.",
    image: "/images/stylist-noor.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Every visit feels like a reset. My color looks expensive yet grows out softly between sessions.",
    name: "Harper W.",
    title: "Creative Producer",
  },
  {
    quote:
      "They redesigned my curls with a dry sculpting method I've never experienced-transformational.",
    name: "Jules R.",
    title: "Art Director",
  },
  {
    quote:
      "The consultation is so intentional. I leave energized, polished, and armed with tailored tips.",
    name: "Amelia K.",
    title: "Founder, Atelier Kin",
  },
];

const gallery = [
  {
    image: "/images/gallery-style-1.jpg",
    caption: "Dimensional brunette with seamless face frame",
  },
  {
    image: "/images/gallery-style-2.jpg",
    caption: "Editorial silk press with mirror-gloss finish",
  },
  {
    image: "/images/gallery-style-3.jpg",
    caption: "Effortless glam waves with luxe volume",
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setIsSubmitted(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      (event.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-neutral-100">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="#top" className="text-lg font-semibold tracking-[0.3em]">
            LUXE&nbsp;AURA
          </Link>
          <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.25em] md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-rose-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="rounded-full border border-rose-200/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-rose-100 transition hover:border-rose-200 hover:bg-rose-200/10"
          >
            Book
          </a>
        </div>
      </header>

      <main id="top" className="relative isolate">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Luxe Aura hairstylist perfecting a client's look in a sunlit studio"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-32 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:px-8">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-100/90 backdrop-blur">
                Studio of modern hair artistry
              </span>
              <h1 className="text-4xl font-light leading-tight tracking-[0.08em] sm:text-5xl lg:text-6xl">
                Curated hair experiences that mirror your inner icon.
              </h1>
              <p className="text-base text-neutral-200 sm:text-lg">
                Luxe Aura Salon blends couture craftsmanship, mindful rituals,
                and progressive techniques to sculpt hair that moves with
                confidence. Step into a sanctuary crafted for luminous,
                effortless beauty.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="rounded-full bg-rose-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-900 transition hover:bg-rose-100"
                >
                  Reserve Seat
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:border-rose-200 hover:text-rose-200"
                >
                  Explore Menu
                </a>
              </div>
            </div>
            <div className="grid gap-5 text-sm text-neutral-200 sm:grid-cols-2 sm:text-base lg:grid-cols-1">
              {experienceHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-rose-100">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-200/90">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
                Elevated Services
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.1em] sm:text-4xl">
                Tailored rituals engineered for transformative shine.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-neutral-300">
              Every experience begins with sensory aromatics, mindful scalp
              therapy, and a bespoke finishing prescription for at-home care.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition hover:border-rose-200/60 hover:shadow-[0_0_35px_-10px_rgba(253,164,175,0.8)]"
              >
                <div className="absolute right-6 top-6 text-xs uppercase tracking-[0.35em] text-rose-200/80">
                  {service.accent}
                </div>
                <h3 className="text-xl font-semibold text-rose-50">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm text-neutral-200/80">
                  {service.description}
                </p>
                <dl className="mt-6 flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-neutral-300/90">
                  <div>
                    <dt className="text-neutral-400">Duration</dt>
                    <dd className="mt-1 text-rose-100">{service.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Investment</dt>
                    <dd className="mt-1 text-rose-100">{service.price}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section
          id="stylists"
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
                Meet the Collective
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.1em] sm:text-4xl">
                Artisans blending couture technique with soul.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-neutral-300">
              Continued education, trend forecasting, and global retreats keep
              our team at the pulse of hair innovation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {stylists.map((stylist) => (
              <article
                key={stylist.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-sm transition hover:border-rose-200/60 hover:bg-white/10"
              >
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-rose-50">
                      {stylist.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                      {stylist.role}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-300">{stylist.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
                Signature Looks
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.1em] sm:text-4xl">
                Editorial finishes engineered for real life.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-neutral-300">
              From luminous lived-in colorways to hyper-gloss finishes, explore
              our latest bespoke transformations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.image}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-sm text-neutral-200 opacity-0 transition group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-white text-neutral-900">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_minmax(0,1fr)] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-400">
                Devoted Voices
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.1em] text-neutral-900 sm:text-4xl">
                Loved by tastemakers across the city.
              </h2>
              <p className="mt-4 max-w-md text-sm text-neutral-600">
                Our community is built on word-of-mouth reverence. Hear from
                clients whose personal brands hinge on looking elevated yet
                effortless.
              </p>
            </div>
            <div className="grid gap-6">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 shadow-sm transition hover:border-rose-200"
                >
                  <p className="text-lg leading-relaxed text-neutral-900">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                    {testimonial.name} - {testimonial.title}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-900"
        >
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-rose-300 blur-3xl" />
            <div className="absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-purple-400 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_minmax(0,1fr)] lg:px-8">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
                Reserve Your Ritual
              </p>
              <h2 className="text-3xl font-light tracking-[0.1em] sm:text-4xl">
                Let{"'"}s curate a hair story tailored to your essence.
              </h2>
              <p className="max-w-md text-sm text-neutral-300">
                Share a few details and our concierge team will follow up within
                24 hours to finalize your visit, pair the perfect artist, and
                craft a pre-appointment regimen.
              </p>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-neutral-400/80">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-rose-100">
                    01
                  </span>
                  <span>Curated Matchmaking</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-rose-100">
                    02
                  </span>
                  <span>Luxury Amenities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-rose-100">
                    03
                  </span>
                  <span>Post-visit Rituals</span>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleBooking}
              className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.35em]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="hello@domain.com"
                    className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-[0.35em]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    placeholder="+1 (555) 123-4567"
                    className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="service"
                  className="text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  Desired Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="date"
                    className="text-xs font-semibold uppercase tracking-[0.35em]"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="time"
                    className="text-xs font-semibold uppercase tracking-[0.35em]"
                  >
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="notes"
                  className="text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Share inspiration, hair history, or sensitivities."
                  className="rounded-md border border-white/20 bg-black/30 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-rose-200 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-900 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
              {isSubmitted && (
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                  Request received - our concierge will reach out soon.
                </p>
              )}
            </form>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">
                Visit Luxe Aura
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.1em] sm:text-4xl">
                Nestled in the Design District, open Tuesday through Saturday.
              </h2>
              <div className="mt-8 grid gap-6 text-sm text-neutral-300">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                    Location
                  </h3>
                  <address className="mt-3 not-italic leading-relaxed">
                    1284 Mercer Avenue
                    <br />
                    Suite 201
                    <br />
                    Portland, OR 97209
                  </address>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                    Hours
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    Tue - Thu  -  9:00 AM - 7:00 PM
                    <br />
                    Fri  -  9:00 AM - 6:00 PM
                    <br />
                    Sat  -  8:00 AM - 4:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                    Concierge
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    <a
                      href="tel:+15035551234"
                      className="transition hover:text-rose-200"
                    >
                      +1 (503) 555-1234
                    </a>
                    <br />
                    <a
                      href="mailto:hello@luxeaura.studio"
                      className="transition hover:text-rose-200"
                    >
                      hello@luxeaura.studio
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Luxe Aura Salon location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.346578766403!2d-122.68178522364495!3d45.52554817107444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a04d8f9e3d1%3A0x92d27c2d2f375e32!2sPearl%20District%2C%20Portland%2C%20OR%2097209!5e0!3m2!1sen!2sus!4v1729750000000!5m2!1sen!2sus"
                loading="lazy"
                className="h-full min-h-[360px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs uppercase tracking-[0.35em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Luxe Aura Salon Copyright {new Date().getFullYear()}</span>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com"
              className="transition hover:text-rose-200"
            >
              Instagram
            </a>
            <a
              href="https://www.pinterest.com"
              className="transition hover:text-rose-200"
            >
              Pinterest
            </a>
            <a
              href="https://www.tiktok.com"
              className="transition hover:text-rose-200"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
