export default function Page() {
  const site = {
    brand: "Coach Al | Austin Personal Training",
    locationTag: "Austin • In-person & online",
    hero: {
      headlineTop: "Stronger. Looser. Pain-free.",
      headlineBottom: "Personal training built around your real life.",
      subcopy:
        "Evidence-informed coaching for busy professionals who want strength, mobility, and confidence—without living in the gym. Special focus on flexibility goals (splits), return-to-training after aches, and sustainable habits.",
      ctaConsultText: "Free 30-min consult",
      ctaProgramsText: "See programs",
    },
    contact: {
      phoneDisplay: "(512) 555-0134",
      phoneHref: "+15125550134",
      email: "coach@yourdomain.com",
      instagramHandle: "@coach_handle",
      instagramUrl: "#",
      calendlyUrl: "#",
      cityBlurb: "Central Austin",
    },
    bullets: [
      "NASM-CPT methods",
      "Strength + mobility combined",
      "Habit-first programming",
      "Austin & remote options",
    ],
    programs: [
      {
        title: "Strength & Hypertrophy",
        desc: "Progressive compound lifts + accessory work for muscle and power. Great for beginners to intermediate lifters.",
      },
      {
        title: "Mobility & Flexibility (Splits)",
        desc: "Active mobility + loaded stretching to safely build range. Front & side splits pathways included.",
      },
      {
        title: "Return-to-Training",
        desc: "Build back capacity after time off or aches with smart progressions and movement confidence.",
      },
      {
        title: "Conditioning for Busy Pros",
        desc: "Time-boxed sessions that hit cardio health without wrecking your calendar.",
      },
      {
        title: "Small-Group Training",
        desc: "Bring a friend—stay accountable and cut costs. Max 4 per group for coaching attention.",
      },
      {
        title: "Remote Coaching",
        desc: "App-based plans, video feedback, and weekly check-ins—wherever you are.",
      },
    ],
    pricing: [
      { name: "Kickstart", price: "$299", tag: "4 sessions / month", perks: ["60-min 1:1", "Personal plan", "Text check-ins"] },
      { name: "Momentum", price: "$549", tag: "8 sessions / month", perks: ["Everything in Kickstart", "Form video reviews", "Nutrition basics"] },
      { name: "Remote", price: "$179", tag: "Coaching only", perks: ["Weekly programming", "Video feedback", "Monthly call"] },
    ],
    testimonials: [
      { quote: "Hit my first real pull-up and 225 lb deadlift in 12 weeks—knees feel better than they have in years.", name: "Sarah T." },
      { quote: "Went from barely touching my toes to a clean front-split line. Workouts fit my travel schedule.", name: "Miguel R." },
      { quote: "I finally enjoy training again. The weekly tweaks kept my shoulder happy while still getting stronger.", name: "Devon K." },
    ],
    faq: [
      { q: "Where do sessions happen?", a: "Central Austin gym space or your preferred location. Remote coaching available anywhere." },
      { q: "Do I need experience?", a: "No. We’ll meet you exactly where you are and progress safely." },
      { q: "Can we focus on flexibility/splits?", a: "Yes—there’s a dedicated pathway blending active mobility and smart loading." },
      { q: "What’s the commitment?", a: "Month-to-month. Pause anytime with notice." },
    ],
  };

  // Edit text/pricing/contact in the `site` object above — no layout knowledge needed.
  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    "New Training Inquiry"
  )}&body=${encodeURIComponent(
    "Hi Coach Al,%0D%0A%0D%0AI'm interested in training. My goals are..."
  )}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">{site.brand}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#programs">Programs</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 transition px-4 py-2 text-sm font-semibold">
            Book free consult
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -z-10 inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-violet-300/80">{site.locationTag}</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
                {site.hero.headlineTop}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-300"> {site.hero.headlineBottom}</span>
              </h1>
              <p className="mt-4 text-neutral-300 max-w-prose">{site.hero.subcopy}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200 transition">{site.hero.ctaConsultText}</a>
                <a href="#programs" className="rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 transition">{site.hero.ctaProgramsText}</a>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300">
                {site.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="inline-block size-1.5 rounded-full bg-emerald-400"/>{b}</li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl bg-neutral-900/60 border border-neutral-800 shadow-2xl" />
              <p className="mt-3 text-xs text-neutral-400">(Drop your headshot or brand image here)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Programs built for outcomes</h2>
          <p className="mt-2 text-neutral-300">Choose the path that matches your goals. We adjust volume, intensity, and recovery to your life.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.programs.map((c) => (
              <div key={c.title} className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">Ask about this <span aria-hidden>→</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Assess", desc: "Movement screen + goal deep-dive. We identify quick wins and long-term targets." },
              { step: "02", title: "Plan", desc: "Personal plan that fits your week, equipment, and recovery." },
              { step: "03", title: "Train", desc: "Coached sessions + simple habit goals. Adjustments every week." },
            ].map((s) => (
              <div key={s.step} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="text-sm text-neutral-400">{s.step}</div>
                <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
          <p className="mt-2 text-neutral-300">Transparent, commitment-friendly options. (Placeholder pricing—update to your rates.)</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {site.pricing.map((p) => (
              <div key={p.name} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <div className="text-2xl font-bold">{p.price}<span className="text-sm font-normal text-neutral-400">/mo</span></div>
                </div>
                <div className="mt-1 text-sm text-neutral-400">{p.tag}</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2"><span className="inline-block size-1.5 rounded-full bg-emerald-400"/> {perk}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex rounded-2xl border border-neutral-700 px-4 py-2 font-semibold hover:border-neutral-500">Get started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Client wins</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {site.testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
                <blockquote className="text-sm text-neutral-200">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-xs text-neutral-400">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-4">
            {site.faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Book your free consult</h2>
          <p className="mt-2 text-neutral-300">
            Send a quick note and I’ll reply within 1 business day. Or call/text{" "}
            <a className="underline" href={`tel:${site.contact.phoneHref}`}>{site.contact.phoneDisplay}</a>.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
              <div>
                <label className="block text-sm text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2 outline-none focus:border-neutral-600" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2 outline-none focus:border-neutral-600" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-neutral-300">Primary goal</label>
                <select className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2 outline-none focus:border-neutral-600">
                  <option>Strength & muscle</option>
                  <option>Mobility / splits</option>
                  <option>Return-to-training</option>
                  <option>Conditioning & health</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-300">Anything else?</label>
                <textarea className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2 outline-none focus:border-neutral-600" rows={4} placeholder="Injuries, schedule, preferences…" />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <a href={mailto} className="text-center rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200 transition">Email inquiry</a>
                <a href={site.contact.calendlyUrl} className="text-center rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500">Open Calendly</a>
              </div>
              <p className="text-xs text-neutral-500">Buttons above use your email/Calendly links from the config at the top.</p>
            </form>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="text-sm text-neutral-400">Prefer to book directly?</div>
              <a href={site.contact.calendlyUrl} className="mt-2 inline-flex rounded-2xl border border-neutral-700 px-4 py-2 font-semibold hover:border-neutral-500">Open Calendly</a>
              <div className="mt-6 text-sm text-neutral-300 space-y-2">
                <div>📍 {site.contact.cityBlurb}</div>
                <div>✉️ <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div>
                <div>📸 <a className="underline" href={site.contact.instagramUrl}>{site.contact.instagramHandle}</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-10 text-sm text-neutral-400">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>© {new Date().getFullYear()} Coach Al Training. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
