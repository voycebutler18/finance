import React from "react";
import LoginForm from "@/components/Auth/LoginForm";


export default function LoginPage() {
const { user, loading } = useAuth();
const location = useLocation();
const from = (location.state as any)?.from?.pathname || "/dashboard";


if (loading) {
return (
<div className="min-h-[50vh] grid place-items-center text-muted-foreground">Loading…</div>
);
}


if (user) {
return <Navigate to={from} replace />;
}


return (
<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
<Card className="rounded-2xl">
<CardHeader>
<CardTitle className="text-2xl">Welcome back</CardTitle>
</CardHeader>
<CardContent>
<LoginForm />
<div className="mt-4 text-sm text-muted-foreground">
Don’t have an account? {" "}
<Link to="/signup" className="underline">Create one</Link>
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
