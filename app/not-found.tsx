import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Global 404 Not Found page - English only, without redirects
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="relative mb-6">
        <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto" aria-hidden="true" />
      </div>
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
        Page not found
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild variant="theme-primary" size="hero" className="mt-8">
        <Link href="/">
          <Home className="w-5 h-5" />
          Go to Home
        </Link>
      </Button>
    </main>
  );
}
