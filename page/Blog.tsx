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
