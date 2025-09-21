// finance/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleSlash2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-4 h-14 w-14 grid place-items-center rounded-2xl border">
          <CircleSlash2 className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild className="rounded-2xl">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Error code: <span className="font-mono">404</span>
        </p>
      </div>
    </div>
  );
}
