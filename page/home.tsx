import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  FileBarChart2,
  Globe,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              >
                Finance ⨉ Marketing that pays for itself—fast
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-lg text-muted-foreground"
              >
                We build high‑converting websites and ads while keeping your books clean, budgets tight, and decisions data‑driven. Starter $1,500/mo · Growth $3,000+/mo.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl">
                  <Link to="/services" className="flex items-center gap-2">
                    See Services <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Month‑to‑month, cancel anytime</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Launch in ~14 days</div>
                <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /> Weekly ROI reports</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Fake dashboard mock */}
              <div className="rounded-3xl border bg-card shadow-lg">
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="rounded-2xl">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2"><Megaphone className="h-4 w-4"/> Ad Spend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$3,250</div>
                        <p className="text-xs text-muted-foreground">Last 7 days</p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-2xl">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2"><Users className="h-4 w-4"/> Leads</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground">Qualified</p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-2xl">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2"><BarChart3 className="h-4 w-4"/> ROAS</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">4.3×</div>
                        <p className="text-xs text-muted-foreground">Return on ad spend</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <Card className="rounded-2xl">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2"><Calculator className="h-4 w-4"/> Bookkeeping Snapshot</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-muted-foreground">Net profit (MTD)</div>
                        <div className="text-3xl font-bold">$12,940</div>
                        <p className="text-xs text-muted-foreground">Cash‑basis • Auto‑categorized</p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-2xl">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2"><FileBarChart2 className="h-4 w-4"/> Weekly Report</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Top channel: TikTok Ads</li>
                          <li>CAC down 18% WoW</li>
                          <li>Run A/B on landing headline</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* glow */}
              <div className="absolute -inset-6 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-primary/20 via-purple-400/10 to-cyan-400/10 rounded-[48px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-xs">
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4"/>Global‑ready</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Secure & compliant</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4"/>Conversion‑first design</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">One team, both sides of growth</h2>
            <p className="mt-3 text-muted-foreground">We pair performance marketing with clean books and forecasting so you know what to spend—and where.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: "Website & Ads", desc: "High‑converting sites, landing pages, and campaigns across TikTok, Meta, and Google." },
              { icon: Calculator, title: "Bookkeeping", desc: "Monthly close, reconciliations, categorization, and cash‑flow clarity without the headache." },
              { icon: LineChart, title: "Reporting & ROI", desc: "Weekly dashboards and profit reports—know exactly what’s working and what to cut." },
            ].map((f, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <f.icon className="h-5 w-5" /> {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-primary/5 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { kpi: "14 days", label: "Typical launch" },
              { kpi: "4.0–6.0×", label: "ROAS on best campaigns" },
              { kpi: "$1.5k / $3k+", label: "Plans (mo)" },
              { kpi: "24/7", label: "Client portal" },
            ].map((m) => (
              <div key={m.kpi} className="rounded-2xl border bg-card p-6">
                <div className="text-3xl font-extrabold">{m.kpi}</div>
                <div className="text-xs mt-1 text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">How we get you profitable</h2>
              <p className="mt-3 text-muted-foreground">A simple, accountable workflow from kickoff to weekly reporting.</p>

              <ol className="mt-6 space-y-4">
                {[
                  { title: "Discovery & Targets", desc: "We define your ICP, budget, and profitability goals." },
                  { title: "Build & Integrate", desc: "We ship your site, tracking, and accounting stack." },
                  { title: "Launch & Optimize", desc: "Campaigns go live with rapid A/B testing." },
                  { title: "Report & Scale", desc: "Weekly ROI + profit reports guide the next spend." },
                ].map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/10 grid place-items-center text-xs font-bold">{i + 1}</div>
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <div className="text-sm text-muted-foreground">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex gap-3">
                <Button asChild className="rounded-2xl">
                  <Link to="/signup">Start in minutes</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <Link to="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">What clients say</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Testimonial quote="They launched our site and ads in two weeks. We went from zero to 120 leads in month one—and I finally understand my numbers." author="D. Ross, Home Services" />
                  <Testimonial quote="The weekly finance + marketing report is the cheat code. I know where every dollar goes." author="K. Martinez, E‑commerce" />
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Do you lock me into a contract?</AccordionTrigger>
                      <AccordionContent>We work month‑to‑month. Stay because it works, not because you have to.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How fast can we launch?</AccordionTrigger>
                      <AccordionContent>Most clients launch in ~14 days after onboarding and asset handoff.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What’s included at $1,500/mo?</AccordionTrigger>
                      <AccordionContent>Conversion‑focused site, analytics setup, bookkeeping (monthly close), and weekly summary. Growth adds paid ads management + deeper reporting.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border bg-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to get your first profitable month?</h3>
            <p className="mt-2 text-muted-foreground">Join Starter or Growth today and get your site, ads, and books working together.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-2xl border p-5">
      <p className="text-sm leading-relaxed">“{quote}”</p>
      <div className="mt-3 text-xs text-muted-foreground">— {author}</div>
    </div>
  );
}
