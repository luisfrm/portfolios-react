import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const pdf_es = "https://drive.google.com/file/d/1RAgnxrdfFGLuvQir7EuUsh_vxmVhDi9v/view?usp=sharing";

const pdf_en = "https://drive.google.com/file/d/1uZU-2QexviG9ET6u8dLI6f2R1topivXR/view?usp=sharing";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function goToPdf(lang = "en") {
	const pdfURL = lang === "en" ? pdf_en : pdf_es;
	window.open(pdfURL, "_blank");
}
