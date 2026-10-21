import { notFound } from "next/navigation";

// Catch all unmatched routes under the [locale] segment and trigger notFound()
export default function CatchAll() {
  notFound();
}
