<script setup lang="ts">
/// <reference types="@types/youtube" />
import { parseURL } from "ufo";

const props = defineProps<{
  video: string;
  autoplay?: boolean;
  imageMode?: boolean;
}>();

function getYTVideoId(link: string) {
  if (!link) {
    return undefined;
  }

  const lower = link.toLowerCase();
  if (
    !lower.startsWith("https://youtu") &&
    !lower.startsWith("https://www.youtu") &&
    !lower.startsWith("http://youtu") &&
    !lower.startsWith("http://www.youtu") &&
    !lower.startsWith("youtu")
  ) {
    return {
      type: "unknown",
      id: link,
    };
  }

  const url = parseURL(link, "https://");
  if (url.host === "youtu.be") {
    return {
      type: "youtube",
      id: url.pathname.replace("/", ""),
    };
  }
  const params = new URLSearchParams(url.search);
  const id = params.get("v");

  if (id) {
    return {
      type: "youtube",
      id,
    };
  }
}

const video_id = computed(() => getYTVideoId(props.video));
</script>

<template>
  <div
    v-if="video_id && video_id.type === 'youtube'"
    class="aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
  >
    <ScriptYouTubePlayer
      :video-id="video_id.id"
      :player-options="{
        playerVars: {
          autoplay: props.autoplay ? 1 : 0,
        },
      }"
      class="w-full h-full"
      :class="{
        'pointer-events-none': imageMode,
      }"
    >
      <template #awaitingLoad>
        <div class="absolute inset-0 flex items-center justify-center group cursor-pointer vignette">
          <div class="h-[48px] w-[68px] relative transition-transform duration-300 group-hover:scale-110">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              />
              <path d="M 45,24 27,14 27,34" fill="#fff" />
            </svg>
          </div>
        </div>
      </template>
    </ScriptYouTubePlayer>
  </div>
  <div v-else-if="video" class="aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
    <video class="w-full h-full object-cover" controls playsinline :autoplay preload="metadata">
      <source :src="video" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
/* Ensure video takes full space */
:deep(iframe) {
  width: 100% !important;
  height: 100% !important;
}

.vignette {
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
}
</style>
