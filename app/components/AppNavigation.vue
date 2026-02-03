<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact-us" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > window.innerHeight * 0.8;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'h-[70px] glass-premium border-none! shadow-2xl'
        : 'h-[100px] bg-transparent',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/images/design/banner.png"
          alt="Legionnaire Security Solutions"
          class="h-14 sm:h-16 w-auto transition-transform duration-300"
          :class="{ 'scale-90': isScrolled }"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-6">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-white/80 hover:text-amber-400 transition-colors duration-200 font-medium"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div
          class="flex items-center gap-4 transition-all duration-300"
          :class="{ 'gap-2': isScrolled }"
        >
          <UButton
            to="#contact-us"
            icon="i-lucide-phone"
            variant="ghost"
            color="primary"
            size="lg"
            class="transition-transform duration-300"
            :class="{ 'scale-90': isScrolled }"
          />
          <UButton
            to="#contact-us"
            variant="solid"
            color="primary"
            class="transition-transform duration-300 font-bold px-6"
            :class="{ 'scale-90': isScrolled }"
          >
            Get Protected
          </UButton>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
        />
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        />
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg shadow-lg"
      >
        <ul class="flex flex-col p-4 gap-2">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block py-3 px-4 text-white/80 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="pt-4 border-t border-white/5">
            <UButton
              to="#contact-us"
              block
              color="primary"
              size="xl"
              class="font-bold rounded-xl shadow-lg shadow-amber-500/10"
              @click="closeMobileMenu"
            >
              Get Protected
            </UButton>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
