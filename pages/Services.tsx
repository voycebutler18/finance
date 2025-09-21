// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Megaphone, Calculator, LineChart, Globe, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Website & Landing Pages",
      points: [
        "Conversion‑first design with clear CTAs",
        "Speed + SEO best practices",
        "A/B test headlines & offers",
      ],
    },
    {
      icon: Rocket,
      title: "Paid Ads (TikTok, Meta, Google)",
      points: [
        "Rapid creative testing",
        "Event tracking & attribution",
        "ROAS and CAC optimization",
      ],
    },
    {
      icon: Calculator,
      title: "Bookkeeping",
      points: [
        "Monthly close & reconciliations",
        "Auto‑categorization & receipts",
        "Cash‑flow and tax‑ready books",
      ],
    },
    {
      icon: LineChart,
      title: "Reporting & Forecasts",
      points: [
        "Weekly ROI & profit reports",
        "Budget plans tied to goals",
        "Scale decisions with confidence",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Services built to pay for themselves</h1>
        <p className="mt-3 text-muted-foreground">One team handling your growth engine and your books—so you can move fast without losing the plot.</p>
      </header>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="rounded-2xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><s.icon className="h-5 w-5" /> {s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[{
          title: "Starter Implementation",
          desc: "We build your site, tracking, and bookkeeping foundation in two weeks.",
          bullets: ["Site + analytics + CRM hook", "Bookkeeping setup", "First creative batch"],
        },{
          title: "Growth Operations",
          desc: "Always‑on ads optimization and weekly ROI + profit reporting.",
          bullets: ["Ad management", "Creative iteration", "Budget & forecast updates"],
        },{
          title: "Compliance & Security",
          desc: "Best practices that keep your data safe and your books audit‑ready.",
          bullets: ["Access controls", "Backup & exports", "PBC (Prepared By Client) package"],
        }].map((b) => (
          <Card key={b.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> {b.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                {b.bullets.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="rounded-2xl"><Link to="/signup">Get Started</Link></Button>
        <Button asChild variant="outline" className="rounded-2xl"><Link to="/pricing" className="flex items-center gap-2">See Pricing <ArrowRight className="h-4 w-4"/></Link></Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4"/> Remote‑first, global‑ready</span>
        <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Secure & compliant</span>
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// src/pages/Pricing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$1,500/mo",
      description: "Everything you need to launch fast and stay organized.",
      features: [
        "Conversion‑focused website",
        "Analytics + event tracking",
        "Bookkeeping (monthly close)",
        "Weekly summary report",
        "Email support",
      ],
      cta: "Start Starter",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$3,000+/mo",
      description: "Scale with always‑on ads and deep ROI reporting.",
      features: [
        "Everything in Starter",
        "Paid ads management (TikTok/Meta/Google)",
        "Creative testing & iteration",
        "Weekly ROI + profit report",
        "Quarterly planning call",
      ],
      cta: "Start Growth",
      highlight: true,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Simple pricing, serious outcomes</h1>
        <p className="mt-3 text-muted-foreground">Month‑to‑month. Cancel anytime. Most clients launch in ~14 days.</p>
      </header>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {tiers.map((t) => (
          <Card key={t.name} className={`rounded-2xl ${t.highlight ? "border-primary" : ""}`}>
            <CardHeader>
              <CardTitle className="text-2xl">{t.name}</CardTitle>
              <CardDescription className="text-base">{t.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button asChild className="rounded-2xl">
                  <Link to="/signup">{t.cta}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <Link to="/packages" className="flex items-center gap-2">See full package <ArrowRight className="h-4 w-4"/></Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">Need something custom? <Link to="/contact" className="underline">Contact us</Link> for enterprise options.</p>
      </div>
    </div>
  );
}
export default Pricing;

// ------------------------------------------------------------
// src/pages/Packages.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Packages() {
  const pkg = [
    {
      name: "Starter ($1,500/mo)",
      items: [
        "Design & build 1 high‑converting site or landing page",
        "Analytics (GA4) + pixel + event tracking",
        "CRM/Zapier hook for leads",
        "Bookkeeping: monthly close & reconciliations",
        "Weekly summary report",
        "Email support",
      ],
    },
    {
      name: "Growth ($3,000+/mo)",
      items: [
        "Everything in Starter",
        "Paid ads management across TikTok/Meta/Google",
        "Creative testing (iterations every week)",
        "Weekly ROI + profit report",
        "Quarterly strategy call",
        "Priority support",
      ],
    },
    {
      name: "Add‑ons",
      items: [
        "Extra landing pages",
        "UGC/ad creative production",
        "Email/SMS lifecycle setup",
        "CFO‑lite monthly review",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center">What you get, line by line</h1>
      <p className="text-center mt-3 text-muted-foreground">Transparent inclusions so you know exactly what we deliver every month.</p>

      <div className="mt-10 space-y-6">
        {pkg.map((group) => (
          <Card key={group.name} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">{group.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {group.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mt-0.5"/> {it}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        <Button asChild className="rounded-2xl"><Link to="/signup">Start now</Link></Button>
        <Button asChild variant="outline" className="rounded-2xl"><Link to="/contact">Questions? Contact us</Link></Button>
      </div>
    </div>
  );
}
export default Packages;

// ------------------------------------------------------------
// src/pages/Contact.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setStatus("sending");
      // TODO: wire to Supabase function / webhook / email service
      await new Promise((res) => setTimeout(res, 900));
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Contact us</h1>
      <p className="text-center mt-2 text-muted-foreground">Tell us about your business and goals. We’ll reply within 1 business day.</p>

      <Card className="mt-8 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Get in touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Name</label>
                <Input required name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <Input required type="email" name="email" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="text-sm">Company (optional)</label>
              <Input name="company" placeholder="Company name" />
            </div>
            <div>
              <label className="text-sm">What do you need help with?</label>
              <Textarea required name="message" placeholder="Website, ads, bookkeeping, reporting…" rows={6} />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" className="rounded-2xl" disabled={status!=="idle"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
              </Button>
              <Button variant="outline" asChild className="rounded-2xl"><Link to="/pricing">See pricing</Link></Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// ------------------------------------------------------------
// src/pages/Blog.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const posts = [
    {
      slug: "launch-checklist",
      title: "Marketing + Finance Launch Checklist",
      excerpt: "Everything to put in place before you spend a dollar on ads.",
      tag: "Playbook",
      date: "Sep 2025",
    },
    {
      slug: "tiktok-ads-metrics",
      title: "TikTok Ads: Metrics That Actually Matter",
      excerpt: "Cut through vanity metrics and focus on CAC, ROAS, and payback.",
      tag: "Acquisition",
      date: "Sep 2025",
    },
    {
      slug: "bookkeeping-for-creators",
      title: "Bookkeeping for Creators and Solo Founders",
      excerpt: "Stay compliant, stay profitable, and buy back your time.",
      tag: "Finance",
      date: "Aug 2025",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Insights</h1>
        <p className="mt-3 text-muted-foreground">Short, tactical posts on growth, ads, and keeping clean books.</p>
      </header>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Card key={p.slug} className="rounded-2xl h-full">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">{p.date}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="secondary">{p.tag}</Badge>
                <Link to={`/blog/${p.slug}`} className="text-sm underline">Read</Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
