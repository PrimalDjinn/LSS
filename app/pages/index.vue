<script setup lang="ts">
definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Legionnaire Security Solutions - Premier Security Company in Kenya",
  ogTitle: "Legionnaire Security Solutions",
  description:
    "Premier security company based in Kenya providing cutting-edge security services in Mandera, Garissa, and Nairobi. We offer manned guarding, VIP protection, security consultancy, and more.",
  ogDescription:
    "Premier security company providing world-class security solutions in Kenya.",
  ogImage: "/images/design/banner.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section>
    <HeroSlider />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </section>
</template>
