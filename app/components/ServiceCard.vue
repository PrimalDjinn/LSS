<script setup lang="ts">
interface Service {
  image: string
  icon: string
  title: string
  shortTitle: string
  description: string
  fullDescription: string
}

const props = defineProps<{
  service: Service
}>()

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="service-card group relative glass-card rounded-3xl overflow-hidden shadow-2xl">
    <!-- Image -->
    <div class="relative h-56 overflow-hidden">
      <img :src="service.image" :alt="service.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <!-- Icon Badge -->
      <div
        class="absolute top-4 right-4 p-3 bg-amber-500 rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <UIcon :name="service.icon" class="w-7 h-7 text-slate-950" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-8">
      <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">
        {{ service.shortTitle }}
      </h3>

      <p class="text-white/60 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/80"
        :class="{ 'line-clamp-3': !isExpanded }">
        {{ isExpanded ? service.fullDescription : service.description }}
      </p>

      <!-- Expand Button -->
      <UButton variant="ghost" color="primary" size="md"
        :trailing-icon="isExpanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        class="font-semibold -ml-3 hover:bg-amber-500/10 active:scale-95 transition-all" @click="toggleExpand">
        {{ isExpanded ? 'Show Less' : 'Full Capability' }}
      </UButton>
    </div>

    <!-- Interactive Glow -->
    <div
      class="absolute inset-0 -z-10 bg-linear-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
</template>
