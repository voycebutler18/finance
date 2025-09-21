// finance/App.tsx
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/contexts/AuthContext";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Dash components
import EmailVerificationRequired from "@/components/Auth/EmailVerificationRequired";
import OnboardingFlow from "@/components/Dashboard/OnboardingFlow";
import FinancialDashboard from "@/components/Dashboard/FinancialDashboard";
import AdminDashboard from "@/components/Dashboard/AdminDashboard";

// Lazy-loaded pages
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Packages = lazy(() => import("@/pages/Packages"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const Terms = lazy(() => import("@/pages/legal/Terms"));
const Privacy = lazy(() => import("@/pages/legal/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Auth WRAPPERS (use these instead of raw form components)
const LoginPage = lazy(() => import("@/pages/auth/Login"));
const SignupPage = lazy(() => import("@/pages/auth/Signup"));

// Optional alias for /dashboard
const ClientDashboard = FinancialDashboard;

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
  children: JSX.Element;
  redirectTo?: string;
  requireVerified?: boolean;
}) {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;
  if (!user) return <Navigate to={redirectTo} replace />;

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
  children: JSX.Element;
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
              <Route path="/verify-email" element={<EmailVerificationRequired />} />

              {/* Onboarding (after signup) */}
              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <OnboardingFlow />
                  </ProtectedRoute>
                }
              />

              {/* Client Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <ClientDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Finance dashboard explicit route */}
              <Route
                path="/dashboard/finance"
                element={
                  <ProtectedRoute>
                    <FinancialDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Admin / Accountant area */}
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute>
                    <RoleRoute allow={["admin", "accountant", "owner"]}>
                      <AdminDashboard />
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
