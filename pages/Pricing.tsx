import React from "react";
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
