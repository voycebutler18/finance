import React, { useState } from "react";
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
