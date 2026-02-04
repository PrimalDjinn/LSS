import { defineNuxtConfig } from "nuxt/config";
import vue from "@vitejs/plugin-vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-02",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts"],

  image: {
    domains: ["images.unsplash.com"],
  },

  css: ["assets/css/main.css"],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || "",
    emailFrom: process.env.EMAIL_FROM || "Contact Form <info@lss.africa>",
    emailTo: process.env.EMAIL_TO || "",

    // Public (exposed to client)
    public: {
      whatsappNumber: process.env.WHATSAPP_NUMBER || "+254722000000",
      companyName: "Legionnaire Security Solutions",
      address: "Nairobi, Kenya",
      googleCalendarBookLink: process.env.GOOGLE_CALENDAR_BOOK_LINK || "",
    },
  },

  nitro: {
    preset: "cloudflare-module",
    rollupConfig: {
      plugins: [vue()],
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: "lss",
        workers_dev: false,
        routes: [
          {
            pattern: "lss.africa",
            zone_name: "lss.africa",
            custom_domain: true,
          },
        ],
        observability: {
          enabled: false,
          head_sampling_rate: 1,
          logs: {
            enabled: true,
            head_sampling_rate: 1,
            invocation_logs: true,
          },
        },
      },
    },
  },
});
