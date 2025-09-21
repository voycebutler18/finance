// finance/App.tsx
import React, { Suspense, lazy, type ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/contexts/AuthContext";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ---- Lazy-loaded marketing pages ----
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Packages = lazy(() => import("@/pages/Packages"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const Terms = lazy(() => import("@/pages/legal/Terms"));
const Privacy = lazy(() => import("@/pages/legal/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// ---- Auth WRAPPERS (pages, not raw form components) ----
const LoginPage = lazy(() => import("@/pages/auth/Login"));
const SignupPage = lazy(() => import("@/pages/auth/Signup"));

// ---- Dashboard WRAPPERS (pages) ----
const DashboardIndex = lazy(() => import("@/pages/dashboard/Index"));       // /dashboard
const FinancePage = lazy(() => import("@/pages/dashboard/Finance"));        // /dashboard/finance
const AdminPage = lazy(() => import("@/pages/dashboard/Admin"));            // /dashboard/admin
const OnboardingPage = lazy(() => import("@/pages/dashboard/Onboarding"));  // /onboarding
const VerifyEmailPage = lazy(() => import("@/pages/dashboard/VerifyEmail")); // /verify-email

function Spinner() {
  return (
    <div className="min-h-[40vh] grid place-items-center text-sm text-muted-foreground">
      Loading…
    </div>
  );
}

type Role = "admin" | "accountant" | "client" | "marketer" | "owner";

function ProtectedRoute({
  children,
  redirectTo = "/login",
  requireVerified = true,
}: {
  children: ReactElement;
  redirectTo?: string;
  requireVerified?: boolean;
}) {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;
  if (!user) return <Navigate to={redirectTo} replace />;

  // Supabase v2: email_confirmed_at is present once verified
  const isVerified =
    (user as any)?.email_confirmed_at || (user as any)?.confirmed_at;

  if (requireVerified && !isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
}

function RoleRoute({
  children,
  allow,
}: {
  children: ReactElement;
  allow: Role[];
}) {
  const { user } = useAuth();
  const role: Role | undefined = (user as any)?.user_metadata?.role;
  if (!role || !allow.includes(role)) return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header /> {/* Make sure the CTA links to /signup */}
        <main className="flex-1">
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/* Public / Marketing */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />

              {/* Auth (wrappers) */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/verify-email" element={<VerifyEmailPage />} />

              {/* Onboarding (after signup) */}
              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <OnboardingPage />
                  </ProtectedRoute>
                }
              />

              {/* Client Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardIndex />
                  </ProtectedRoute>
                }
              />

              {/* Finance dashboard explicit route */}
              <Route
                path="/dashboard/finance"
                element={
                  <ProtectedRoute>
                    <FinancePage />
                  </ProtectedRoute>
                }
              />

              {/* Admin / Accountant area */}
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute>
                    <RoleRoute allow={["admin", "accountant", "owner"]}>
                      <AdminPage />
                    </RoleRoute>
                  </ProtectedRoute>
                }
              />

              {/* Legal */}
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
