import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PDF_URLS } from "./constants";
import type { Language } from "@/hooks/useLanguage";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function openPdfInNewTab(language: Language = "en"): void {
	const pdfURL = PDF_URLS[language];
	window.open(pdfURL, "_blank");
}

// Deprecated: Use openPdfInNewTab instead
export function goToPdf(lang: Language = "en"): void {
	openPdfInNewTab(lang);
}
