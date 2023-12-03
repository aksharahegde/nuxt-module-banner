// import { META_TITLE, META_DESCRIPTION } from "~/constants/index";

export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: META_TITLE,
  //     htmlAttrs: { lang: "en" },
  //     meta: [
  //       { charset: "utf-8" },
  //       { name: "viewport", content: "width=device-width, initial-scale=1" },
  //       { hid: "description", name: "description", content: META_DESCRIPTION },
  //     ],
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  //   },
  // },
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
});
