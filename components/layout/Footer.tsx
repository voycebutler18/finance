import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-extrabold text-lg">Finance × Marketing</div>
            <p className="mt-2 text-sm text-muted-foreground">
              One team for growth and clean books. Websites, ads, bookkeeping, and ROI
              reporting that pays for itself.
            </p>
            <div className="mt-4">
              <Button asChild className="rounded-2xl">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="font-medium">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/packages" className="hover:underline">Packages</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/legal/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/legal/privacy" className="hover:underline">Privacy</Link></li>
              <li><a className="hover:underline" href="mailto:hello@example.com">Support</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Newsletter</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Get playbooks on ads, attribution, and clean bookkeeping.
            </p>
            {/* Replace with a real form later */}
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none"
              />
              <Button className="rounded-2xl">Join</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Finance × Marketing. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            Built with ❤️ for small businesses.
          </div>
        </div>
      </div>
    </footer>
  );
}
