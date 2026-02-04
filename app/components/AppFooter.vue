<script setup lang="ts">
const config = useRuntimeConfig();

const footerLinks = {
  company: [
    { label: "About Us", href: "#about-us" },
    { label: "Our Services", href: "#services" },
    { label: "Privacy Policy", href: "/about" },
  ],
  help: [
    { label: "FAQ", href: "/about" },
    { label: "Source Code", href: "https://github.com/kgarchie/lss", external: true },
  ],
};

const socialLinks = [
  {
    icon: "i-simple-icons-facebook",
    href: "https://www.facebook.com/profile.php?id=100068914802066",
    label: "Facebook",
  },
  { icon: "i-simple-icons-x", href: "#", label: "Twitter" },
  { icon: "i-simple-icons-instagram", href: "#", label: "Instagram" },
  { icon: "i-simple-icons-linkedin", href: "#", label: "LinkedIn" },
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-950 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Company Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.label">
              <NuxtLink :to="link.href" class="footer-link text-white/60 hover:text-amber-400 capitalize">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Get Help Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Get Help</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.help" :key="link.label">
              <NuxtLink
                :to="link.href"
                :target="link.external ? '_blank' : undefined"
                class="footer-link text-white/60 hover:text-amber-400"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Follow Us Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Follow Us</h4>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-slate-800 hover:bg-amber-500 rounded-lg transition-all duration-200 group"
            >
              <UIcon :name="social.icon" class="w-5 h-5 text-white/70 group-hover:text-slate-900 transition-colors" />
            </a>
          </div>
        </div>

        <!-- Find Us Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Find Us</h4>
          <a
            href="https://goo.gl/maps/3XZSxtFQzd6NfSqD9"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-start gap-3 group"
          >
            <div class="p-2 bg-slate-800 group-hover:bg-amber-500 rounded-lg transition-colors flex-shrink-0">
              <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-white/70 group-hover:text-slate-900" />
            </div>
            <p class="text-white/60 group-hover:text-amber-400 text-sm leading-relaxed transition-colors">
              {{ config.public.address }}
            </p>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0">
            <NuxtImg
              src="/images/design/banner.png"
              alt="Legionnaire Security Solutions"
              class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </NuxtLink>

          <!-- Copyright -->
          <p class="text-white/40 text-sm text-center">
            © {{ currentYear }} {{ config.public.companyName }}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
