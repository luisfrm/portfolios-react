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
  ogImage:
    "https://r2-personal.luisrivas.site/portfolios/dnova-1.webp",
  r2Base: "https://r2-personal.luisrivas.site/portfolios",
} as const;

export function imageUrl(file: string): string {
  return `${site.r2Base}/${file}`;
}
