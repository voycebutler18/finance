import React from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/Auth/SignupForm";


export default function SignupPage() {
const { user, loading } = useAuth();
const [params] = useSearchParams();
const plan = params.get("plan"); // e.g., /signup?plan=growth (optional)


if (loading) {
return (
<div className="min-h-[50vh] grid place-items-center text-muted-foreground">Loading…</div>
);
}


if (user) {
return <Navigate to="/dashboard" replace />;
}


return (
<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
<Card className="rounded-2xl">
<CardHeader>
<CardTitle className="text-2xl">Create your account</CardTitle>
</CardHeader>
<CardContent>
{/* If your SignupForm accepts props (e.g. defaultPlan), pass it here */}
{/* <SignupForm defaultPlan={plan ?? undefined} /> */}
<SignupForm />


<div className="mt-4 text-sm text-muted-foreground">
Already have an account? {" "}
<Link to="/login" className="underline">Sign in</Link>
</div>


<div className="mt-2 text-xs text-muted-foreground">
By continuing you agree to our {" "}
<Link to="/legal/terms" className="underline">Terms</Link> and {" "}
<Link to="/legal/privacy" className="underline">Privacy Policy</Link>.
</div>
</CardContent>
</Card>


<div className="mt-6 text-center">
<Button asChild variant="outline" className="rounded-2xl">
<Link to="/">← Back to home</Link>
</Button>
</div>
</div>
);
}
