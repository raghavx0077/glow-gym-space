import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense, lazy, useState } from "react";
import { Dumbbell, Flame, Zap, Trophy, Check, Star, Instagram, Twitter, Youtube, ArrowRight, Menu } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import gymHero from "@/assets/gym-hero.jpg";

const Dumbbell3D = lazy(() => import("./Dumbbell3D"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <Dumbbell className="h-5 w-5 text-flame" />
          <span>IRON<span className="text-gradient">FORGE</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#trainers" className="hover:text-foreground transition">Trainers</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
        <a href="#pricing" className="rounded-full bg-gradient-flame px-5 py-2 text-sm font-semibold text-primary-foreground glow transition hover:scale-105">
          Join now
        </a>
        <Menu className="h-5 w-5 md:hidden" />
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute inset-0 -z-10">
        <img src={gymHero} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
            <Flame className="h-3.5 w-3.5 text-flame" />
            <span className="text-muted-foreground">Premium training, redefined</span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Forge the <span className="text-gradient">strongest</span> version of you.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            World-class coaches, science-backed programs, and a community built to push your limits. Train where champions are made.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-3.5 font-semibold text-primary-foreground glow transition hover:scale-105">
              Start training <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#trainers" className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:bg-white/10">
              Meet trainers
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "12K+", l: "Members" },
              { v: "50+", l: "Coaches" },
              { v: "4.9★", l: "Rated" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[480px] w-full lg:h-[560px]">
          <div className="absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: "var(--gradient-flame)", opacity: 0.25 }} />
          <Suspense fallback={<div className="flex h-full items-center justify-center text-muted-foreground">Loading...</div>}>
            <Dumbbell3D />
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Flame, title: "Elite programming", desc: "Periodized blocks engineered by sport scientists for measurable gains." },
    { icon: Zap, title: "Smart equipment", desc: "Sensor-tracked weights and AI form analysis on every set." },
    { icon: Trophy, title: "Coaching that wins", desc: "Olympic and pro-level coaches available 1:1 or in small groups." },
  ];
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-flame">Built for performance</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Everything you need to break through.</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-flame opacity-0 blur-3xl transition group-hover:opacity-40" />
            <f.icon className="h-10 w-10 text-flame" />
            <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Trainers() {
  const trainers = [
    { name: "Marcus Vale", role: "Strength & Power", img: trainer1, tag: "Powerlifting" },
    { name: "Elena Cruz", role: "Conditioning Lead", img: trainer2, tag: "HIIT / Mobility" },
    { name: "Kai Brennan", role: "Hypertrophy Coach", img: trainer3, tag: "Bodybuilding" },
  ];
  return (
    <section id="trainers" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-flame">The team</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Coaches who've been there.</h2>
        </div>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="glass mb-3 inline-block rounded-full px-3 py-1 text-xs text-flame">{t.tag}</div>
              <h3 className="font-display text-2xl font-bold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: 49, desc: "Access the floor, build the habit.", features: ["Full gym access", "Locker & sauna", "Open group classes"], featured: false },
    { name: "Performance", price: 129, desc: "Train smarter with a coach.", features: ["Everything in Starter", "2x weekly coaching", "Custom program", "Body composition scan"], featured: true },
    { name: "Elite", price: 249, desc: "Bespoke 1:1 transformation.", features: ["Everything in Performance", "Unlimited 1:1 coaching", "Nutrition strategy", "Recovery & physio"], featured: false },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-flame">Membership</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Pick your level.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">No contracts. Cancel anytime. First week always free.</p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className={`glass relative rounded-3xl p-8 ${p.featured ? "ring-2 ring-flame glow" : ""}`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-flame px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </div>
            )}
            <h3 className="font-display text-2xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold">${p.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-flame/15">
                    <Check className="h-3 w-3 text-flame" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-full py-3 font-semibold transition ${p.featured ? "bg-gradient-flame text-primary-foreground hover:scale-[1.02]" : "glass hover:bg-white/10"}`}>
              Get {p.name}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Down 22 lbs and added 80 lbs to my deadlift in 6 months. The coaching is unreal.", name: "Jordan M.", role: "Member, 2 yrs" },
    { quote: "The community alone is worth it. I've never been pushed this hard or had this much fun.", name: "Priya S.", role: "Member, 1 yr" },
    { quote: "I came back from a knee injury stronger than before. Their physio integration is next level.", name: "Devon R.", role: "Member, 3 yrs" },
  ];
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-flame">Proof</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Real members. Real results.</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex gap-1 text-flame">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-5 text-foreground">"{t.quote}"</p>
            <div className="mt-6 border-t border-border pt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent. We'll be in touch within 24h.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-flame opacity-20 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-flame">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Ready to start?</h2>
            <p className="mt-4 text-muted-foreground">Book your free intro session. We'll match you with the right coach and walk you through the facility.</p>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <div>1240 Forge Street · Brooklyn, NY</div>
              <div>Open 5am – 11pm · 7 days</div>
              <div>hello@ironforge.gym</div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <input name="name" placeholder="Your name" maxLength={100} className="glass w-full rounded-2xl px-5 py-3.5 outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-flame" />
            <input name="email" type="email" placeholder="Email" maxLength={255} className="glass w-full rounded-2xl px-5 py-3.5 outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-flame" />
            <textarea name="message" placeholder="Tell us about your goals" rows={5} maxLength={1000} className="glass w-full resize-none rounded-2xl px-5 py-3.5 outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-flame" />
            <button disabled={loading} className="group w-full rounded-full bg-gradient-flame py-3.5 font-semibold text-primary-foreground glow transition hover:scale-[1.02] disabled:opacity-60">
              {loading ? "Sending..." : "Book my free session"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <Dumbbell className="h-5 w-5 text-flame" />
          IRON<span className="text-gradient">FORGE</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Ironforge Athletics. All rights reserved.</p>
        <div className="flex gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-flame" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 hover:text-flame" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4 hover:text-flame" /></a>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
