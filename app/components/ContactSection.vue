<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { contactSchema, type ContactSchema } from "~~/shared/schemas/contact";

const config = useRuntimeConfig();

const state = reactive<ContactSchema>({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  isSubmitting.value = true;

  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: event.data,
    });

    toast.add({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
      color: "success",
      icon: "i-lucide-check-circle",
    });

    // Reset form
    state.name = "";
    state.email = "";
    state.message = "";
  } catch (error: any) {
    toast.add({
      title: "Error",
      description: error.data?.message || "Failed to send message. Please try again.",
      color: "error",
      icon: "i-lucide-alert-circle",
    });
  } finally {
    isSubmitting.value = false;
  }
}

function openWhatsApp() {
  const name = state.name || "Customer";
  const message = encodeURIComponent(`I am ${name}\n\n${state.message}`);
  const whatsappUrl = `https://wa.me/${config.public.whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}
</script>

<template>
  <section id="contact-us" class="py-20 sm:py-28 gradient-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6" />
        <p class="text-lg text-white/70 max-w-2xl mx-auto">Choose how you'd like to connect with us</p>
      </div>

      <!-- Two Column Layout -->
      <div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Meeting Booking Card -->
        <div class="glass rounded-2xl p-6 sm:p-8 flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-amber-500/20 rounded-xl">
              <UIcon name="i-lucide-calendar" class="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Schedule a Consultation</h3>
              <p class="text-white/60 text-sm">Book a time that works for you</p>
            </div>
          </div>

          <div class="flex-1 flex flex-col justify-center">
            <div class="text-center py-8">
              <div class="p-6 bg-amber-500/10 rounded-2xl w-fit mx-auto mb-6">
                <UIcon name="i-lucide-calendar-check" class="w-16 h-16 text-amber-400" />
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">Free Security Consultation</h4>
              <p class="text-white/60 mb-6 max-w-xs mx-auto">
                Discuss your security needs with our experts and get a customized solution
              </p>
              <MeetingBooking />
            </div>
          </div>

          <div class="mt-auto pt-6 border-t border-white/10">
            <div class="flex items-center justify-center gap-6 text-sm text-white/50">
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="w-4 h-4" />
                30 min call
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="i-lucide-video" class="w-4 h-4" />
                Video or Phone
              </span>
            </div>
          </div>
        </div>
        <!-- Contact Form Card -->
        <div class="glass rounded-2xl p-6 sm:p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-amber-500/20 rounded-xl">
              <UIcon name="i-lucide-mail" class="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Send us a Message</h3>
              <p class="text-white/60 text-sm">We'll respond within 24 hours</p>
            </div>
          </div>

          <UForm :schema="contactSchema" :state="state" class="space-y-5" @submit="onSubmit">
            <UFormField label="Your Name (Optional)" name="name">
              <UInput v-model="state.name" placeholder="John Doe" icon="i-lucide-user" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Your Email" name="email" required>
              <UInput
                v-model="state.email"
                type="email"
                placeholder="someone@domain.com"
                icon="i-lucide-mail"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Your Message" name="message" required>
              <UTextarea
                v-model="state.message"
                placeholder="Write your message here..."
                :rows="4"
                autoresize
                :maxrows="8"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <div class="flex flex-col sm:flex-row gap-3 pt-2">
              <UButton
                type="submit"
                size="xl"
                color="primary"
                :loading="isSubmitting"
                icon="i-lucide-send"
                class="flex-1 flex items-center justify-center"
              >
                Send Email
              </UButton>
              <UButton
                type="button"
                size="xl"
                color="success"
                variant="outline"
                icon="i-simple-icons-whatsapp"
                class="flex-1 flex items-center justify-center"
                @click="openWhatsApp"
              >
                WhatsApp
              </UButton>
            </div>
          </UForm>
        </div>
      </div>

      <!-- Contact Info Cards -->
      <div class="grid sm:grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto">
        <div class="glass rounded-xl p-6 text-center">
          <div class="p-3 bg-amber-500/20 rounded-full w-fit mx-auto mb-4">
            <UIcon name="i-lucide-phone" class="w-6 h-6 text-amber-400" />
          </div>
          <h4 class="font-medium text-white mb-1">Call Us</h4>
          <a href="tel:+254720105825" class="text-white/70 hover:text-amber-400 transition-colors">
            +254 720 105 825
          </a>
        </div>

        <div class="glass rounded-xl p-6 text-center">
          <div class="p-3 bg-amber-500/20 rounded-full w-fit mx-auto mb-4">
            <UIcon name="i-lucide-mail" class="w-6 h-6 text-amber-400" />
          </div>
          <h4 class="font-medium text-white mb-1">Email Us</h4>
          <a href="mailto:info@lss.africa" class="text-white/70 hover:text-amber-400 transition-colors">
            info@lss.africa
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
