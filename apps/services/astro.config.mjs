import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://servicios.luisrivas.site",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        ![
          "https://servicios.luisrivas.site/",
          "https://servicios.luisrivas.site/es/gracias/",
          "https://servicios.luisrivas.site/en/thanks/",
        ].includes(page),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
