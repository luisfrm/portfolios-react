import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function goToPdf () {
  const pdfURL = "https://drive.google.com/file/d/1t5MZ2PJZBJcREpQsmFFIOxVSnKuxKodF/view?usp=sharing"
  window.open(pdfURL, "_blank")
}