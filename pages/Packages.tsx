import React from "react";
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
