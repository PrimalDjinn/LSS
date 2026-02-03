<script setup lang="ts">
const slides = [
  { src: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=1920&q=80', alt: 'Security personnel on patrol' },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80', alt: 'Professional security team' },
  { src: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1920&q=80', alt: 'VIP protection services' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80', alt: 'Security monitoring' }
]

const captions = [
  { title: 'Absolute Protection', description: 'Night security and strategic patrolling for complete peace of mind.', cta: 'Get a Consultation' },
  { title: 'Trained Excellence', description: 'Highly disciplined teams forged with endurance and tactical skill.', cta: 'Our Services' },
  { title: 'Reputable Force', description: 'Professional and reliable legions trusted by industry leaders.', cta: 'Who We Are' },
  { title: 'VIP Custody', description: 'Discreet and uncompromising personal protection for high-profile principals.', cta: 'Contact Us' }
]

const currentIndex = ref(0)
const currentCaption = computed(() => {
  const caption = captions[currentIndex.value]
  return caption || captions[0]
})

const onCarouselChange = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <section id="hero" class="relative h-dvh w-full overflow-hidden bg-slate-950">
    <!-- Carousel -->
    <UCarousel v-slot="{ item }" :items="slides" loop :autoplay="{ delay: 5000 }" :ui="{
      item: 'basis-full',
      container: 'h-full'
    }" class="h-full w-full" @change="onCarouselChange">
      <div class="relative w-full h-full">
        <img :src="item.src" :alt="item.alt"
          class="carousel-image absolute inset-0 w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
          loading="eager" />
        <!-- Advanced dynamic overlay -->
        <div class="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/40 to-transparent z-10" />
        <div class="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10" />
      </div>
    </UCarousel>

    <!-- Content Overlay -->
    <div class="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 lg:px-20">
      <div class="max-w-7xl mx-auto w-full">
        <div class="max-w-3xl">
          <Transition mode="out-in" enter-active-class="transition-all duration-700 ease-out"
            enter-from-class="opacity-0 translate-y-8 blur-sm" enter-to-class="opacity-100 translate-y-0 blur-0"
            leave-active-class="transition-all duration-300 ease-in" leave-from-class="opacity-100 translate-y-0 blur-0"
            leave-to-class="opacity-0 -translate-y-8 blur-sm">
            <div :key="currentIndex" class="space-y-6">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2">
                <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span class="text-amber-500 text-xs font-bold uppercase tracking-widest">Premium Service</span>
              </div>

              <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                {{ currentCaption?.title }}
              </h1>

              <p class="text-xl sm:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
                {{ currentCaption?.description }}
              </p>

              <div class="flex flex-wrap gap-4 pt-4">
                <UButton to="#contact-us" size="xl" color="primary" icon="i-lucide-shield"
                  class="font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all active:scale-95">
                  {{ currentCaption?.cta }}
                </UButton>

                <UButton to="#services" size="xl" variant="outline"
                  class="font-bold px-8 py-4 rounded-xl border-white/10 hover:bg-white/5 transition-all active:scale-95">
                  Explore Features
                </UButton>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
      <span class="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">Scroll to Explore</span>
      <div class="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1">
        <div class="w-1 h-2 bg-amber-500 rounded-full animate-bounce"></div>
      </div>
    </div>

    <!-- Hero blur accents -->
    <div
      class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none">
    </div>
  </section>
</template>

<style scoped>
.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

:deep(.carousel-item) {
  width: 100%;
}
</style>
