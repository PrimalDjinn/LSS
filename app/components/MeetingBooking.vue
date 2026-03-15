<script setup lang="ts">
const button = useTemplateRef("button");

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
  const config = useRuntimeConfig();
  onLoaded((calendar) => {
    calendar.schedulingButton.load({
      url: config.public.googleCalendarBookLink,
      color: "#f59e0b", // Amber-500 to match theme
      label: "",
      target: button.value,
    });

    button.value?.nextElementSibling?.classList.add("hidden");
  });
});

const toast = useToast();
function onClick() {
  if (button.value) {
    const target = button.value.nextElementSibling as HTMLButtonElement;
    target?.click();
  } else {
    toast.add({
      title: "Oops, a fatal UI error occurred",
      description: "Please try other contact methods listed",
      color: "error",
    });
  }
}
</script>

<template>
  <div class="w-full">
    <Link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
    <button ref="button" class="hidden">Fake Button</button>
    <UButton
      icon="i-lucide-calendar"
      color="primary"
      variant="outline"
      size="xl"
      block
      class="font-bold"
      @click="onClick"
    >
      Book a Meeting
    </UButton>
  </div>
</template>
