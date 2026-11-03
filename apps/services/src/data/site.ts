export const site = {
  name: "Luis Rivas",
  url: "https://servicios.luisrivas.site",
  email: "luisfrm1610@gmail.com",
  phone: "+58 4124722407",
  whatsapp: "https://wa.me/584124722407",
  portfolio: "https://luisrivas.work",
  github: "https://github.com/luisfrm/",
  linkedin: "https://www.linkedin.com/in/luisrivasm/",
  formEndpoint: "https://formspree.io/f/mvgqkavr",
  ogImage: {
    es: "https://servicios.luisrivas.site/og-image-es.png",
    en: "https://servicios.luisrivas.site/og-image-en.png",
  },
  r2Base: "https://r2-personal.luisrivas.site/portfolios",
} as const;

export function imageUrl(file: string): string {
  return `${site.r2Base}/${file}`;
}
