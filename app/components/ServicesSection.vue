<script setup lang="ts">
const services = [
  {
    image: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&q=80',
    icon: 'i-lucide-shield',
    title: 'Manned Guarding, Patrol & QRF',
    shortTitle: 'Manned Guarding',
    description: 'Professional, well-trained guards supported by rapid response units to ensure continuous protection.',
    fullDescription: 'Our security guards undergo rigorous training and are equipped with the latest technology. Our Quick Response Force (QRF) teams are strategically positioned to provide immediate backup when needed, ensuring 24/7 protection for your premises.'
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    icon: 'i-lucide-user-check',
    title: 'Close Protection (VIP Security)',
    shortTitle: 'VIP Security',
    description: 'Discreet and highly trained personnel providing personal security for executives, diplomats, and high-profile individuals.',
    fullDescription: 'Our Close Protection Officers are former military and law enforcement professionals. They are trained in executive protection, threat assessment, secure transportation, and emergency response protocols.'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    icon: 'i-lucide-clipboard-check',
    title: 'Security Consultancy & Risk Assessment',
    shortTitle: 'Consultancy',
    description: 'Comprehensive security audits, threat analysis, and tailored risk mitigation strategies.',
    fullDescription: 'We provide in-depth security assessments including physical security audits, vulnerability analysis, threat intelligence, and customized security plans to address your specific needs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    icon: 'i-lucide-users',
    title: 'Event & Crowd Control Management',
    shortTitle: 'Event Security',
    description: 'End-to-end security planning and execution for events of all sizes, ensuring safety and order.',
    fullDescription: 'From intimate gatherings to large-scale events, our team provides complete security coverage including access control, crowd management, VIP protection, and emergency evacuation planning.'
  },
  {
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    icon: 'i-lucide-cctv',
    title: 'Electronic Surveillance & Access Control',
    shortTitle: 'Surveillance',
    description: 'Installation and management of CCTV systems, alarm monitoring, and access control solutions.',
    fullDescription: 'We design, install, and maintain state-of-the-art surveillance systems including IP cameras, facial recognition, intrusion detection, and integrated access control systems with 24/7 monitoring capabilities.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    icon: 'i-lucide-graduation-cap',
    title: 'Training & Capacity Building',
    shortTitle: 'Training',
    description: 'Specialized security training programs designed to enhance skills, readiness, and operational effectiveness.',
    fullDescription: 'Our certified instructors deliver comprehensive training programs including basic security guard training, executive protection courses, first aid, fire safety, and specialized tactical training.'
  }
]
</script>

<template>
  <section id="services" class="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-0 right-0 w-[30%] h-[30%] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none">
    </div>
    <div class="absolute bottom-0 left-0 w-[20%] h-[20%] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-px w-12 bg-amber-500/50"></div>
          <span class="text-amber-500 font-semibold tracking-wider uppercase text-sm">Specialized Units</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
          Our Services
        </h2>
        <p class="text-white/60 text-lg max-w-xl">
          Mission-critical security solutions engineered for maximum impact and reliability.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ServiceCard v-for="service in services" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>
