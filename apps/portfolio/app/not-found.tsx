import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@portfolio/ui/components/button";

// Global 404 Not Found page - English only, without redirects
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        [404] / Not found
      </p>

      <h1 className="mt-6 font-heading text-7xl font-extrabold tracking-tight text-primary md:text-9xl">
        404
      </h1>

      <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Page not found
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild variant="theme-primary" size="hero" className="mt-8 w-fit">
        <Link href="/">
          <Home className="h-4 w-4" />
          Go to Home
        </Link>
      </Button>
    </main>
  );
}
