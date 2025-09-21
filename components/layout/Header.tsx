import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" className="font-extrabold tracking-tight text-lg md:text-xl">
            Finance × Marketing
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "text-sm transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}

          {!loading && !user && (
            <>
              <NavLink
                to="/login"
                className="text-sm text-foreground/60 hover:text-foreground/80"
              >
                Sign in
              </NavLink>
              <Button asChild className="rounded-2xl">
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}

          {!loading && user && (
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="rounded-2xl">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button onClick={signOut} className="rounded-2xl">
                Sign out
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "py-2 text-sm",
                    isActive ? "text-foreground font-medium" : "text-foreground/70",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            {!loading && !user && (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground/70"
                >
                  Sign in
                </NavLink>
                <Button asChild className="rounded-2xl">
                  <Link to="/signup" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </>
            )}

            {!loading && user && (
              <>
                <Button asChild variant="outline" className="rounded-2xl">
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                    signOut();
                  }}
                  className="rounded-2xl"
                >
                  Sign out
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
