<script setup lang="ts">
const coreValues = [
  { icon: "i-lucide-award", title: "Professionalism", desc: "Upholding the highest standards in every engagement." },
  {
    icon: "i-lucide-shield-check",
    title: "Integrity",
    desc: "Operating with transparency, honesty, and ethical conduct.",
  },
  {
    icon: "i-lucide-lightbulb",
    title: "Innovation",
    desc: "Leveraging advanced technologies and training for modern security solutions.",
  },
  {
    icon: "i-lucide-heart-handshake",
    title: "Commitment",
    desc: "Dedicated to safeguarding the interests of our clients at all times.",
  },
];
</script>

<template>
  <section id="about-us" class="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-px w-12 bg-amber-500/50"></div>
          <span class="text-amber-500 font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">Who Are We?</h2>
        <p class="text-white/60 text-lg max-w-xl">
          A premier security force dedicated to absolute protection and professional excellence.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <!-- Left Column: Video & About -->
        <div class="space-y-10 group">
          <!-- Video Player Component -->
          <UModal
            :ui="{
              body: 'grid grid-flow-col gap-2 max-sm:gap-1 scrollbar',
              content: 'sm:max-w-[unset] bg-gray-800/90 border-gray-800 w-[90vw]',
              overlay: 'bg-gray-800/80 backdrop-blur-xs',
            }"
          >
            <template #default>
              <VideoPlayer video="https://www.youtube.com/watch?v=Ff8Vnp2r95I" :autoplay="false" :imageMode="true" />
            </template>
            <template #content>
              <VideoPlayer video="https://www.youtube.com/watch?v=Ff8Vnp2r95I" :autoplay="true" />
            </template>
          </UModal>

          <!-- About Text -->
          <div class="glass glass-premium rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 blur-3xl rounded-full"></div>
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <UIcon name="i-lucide-building-2" class="w-5 h-5 text-amber-500" />
              </span>
              Company Overview
            </h3>
            <p class="text-white/70 leading-relaxed text-lg">
              Legionnaire Security Solutions is a premier security company based in Kenya, with operational presence in
              Mandera, Garissa, and Nairobi. We are committed to delivering cutting-edge, reliable, and adaptive
              security solutions designed to meet the evolving challenges of today's world.
            </p>
          </div>
        </div>

        <!-- Right Column: Mission, Vision, Values -->
        <div class="space-y-8">
          <div class="grid gap-6">
            <!-- Mission -->
            <UCard class="glass glass-premium transform transition-all duration-300 hover:-translate-y-1">
              <div class="flex gap-5">
                <div class="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <UIcon name="i-lucide-target" class="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p class="text-white/60 leading-relaxed">
                    To provide world-class security services that ensure safety, confidence, and peace of mind for our
                    clients through continuous investment in education and specialized skills.
                  </p>
                </div>
              </div>
            </UCard>

            <!-- Vision -->
            <UCard class="glass glass-premium transform transition-all duration-300 hover:-translate-y-1">
              <div class="flex gap-5">
                <div class="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <UIcon name="i-lucide-eye" class="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p class="text-white/60 leading-relaxed">
                    To be the leading provider of innovative security solutions in Kenya and beyond, setting the
                    benchmark for professionalism and integrity.
                  </p>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Core Values -->
          <div class="glass-dark rounded-3xl p-8 sm:p-10 border border-white/5">
            <h3 class="text-2xl font-bold text-white mb-8">Core Values</h3>
            <div class="grid sm:grid-cols-2 gap-8">
              <div v-for="value in coreValues" :key="value.title" class="group/value">
                <div class="flex items-center gap-3 mb-3">
                  <UIcon :name="value.icon" class="w-6 h-6 text-amber-500 group-hover/value:animate-pulse" />
                  <h4 class="font-bold text-white uppercase tracking-wider text-sm">{{ value.title }}</h4>
                </div>
                <p class="text-white/50 text-sm leading-relaxed">{{ value.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-premium {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.2);
}
</style>
