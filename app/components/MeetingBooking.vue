<script setup lang="ts">
const button = ref<HTMLButtonElement | null>(null);

declare global {
  interface Window {
    calendar: {
      schedulingButton: {
        load: (obj: any) => void;
      };
    };
  }
}

const { onLoaded } = useScript(
  {
    src: "https://calendar.google.com/calendar/scheduling-button-script.js",
    async: true,
    crossorigin: false,
  },
  {
    use() {
      return window.calendar;
    },
  },
);

onMounted(() => {
  onLoaded((calendar) => {
    calendar.schedulingButton.load({
      url: useRuntimeConfig().public.googleCalendarBookLink,
      color: "#f59e0b", // Amber-500 to match theme
      label: "",
      target: button.value,
    });

    // Hide Google's default button and use our styled one
    const target = button.value?.nextElementSibling as HTMLButtonElement;
    target?.classList.add("hidden");
    button.value?.addEventListener("click", () => target?.click());
  });
});
</script>

<template>
  <div class="w-full">
    <Link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
    <UButton ref="button" icon="i-lucide-calendar" color="primary" variant="outline" size="xl" block class="font-bold">
      Book a Meeting
    </UButton>
  </div>
</template>
