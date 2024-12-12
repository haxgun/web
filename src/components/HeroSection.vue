<script setup lang="ts">
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import TwitchIcon from '@/components/icons/TwitchIcon.vue'

import { ref, computed, onMounted } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  gradientSize: { type: Number, default: 200 },
  gradientColor: { type: String, default: "#262626" },
  gradientOpacity: { type: Number, default: 0.8 },
  class: { type: String, default: "" },
  slotClass: String,
});

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
});

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(0, 0, 0, 0) 70%
  )`;
});
</script>

<template>
  <section id="hero" class="hero">
    <div
      :class="[
        'group relative flex size-full overflow-hidden bg-neutral-950 ',
        $props.class,
      ]"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div :class="cn('content-center w-full z-10', props.slotClass)">
        <div class="cursor-pointer flex-col items-center justify-center whitespace-nowrap">
          <div class="title">HAXGUN</div>
          <div class="subtitle">Little bit of a fullstack developer</div>
          <a href="mailto:haxgun@vk.com" class="email">haxgun@vk.com</a>
          <div class="flex-col items-center justify-center whitespace-nowrap content-center social">
            <li class="social-icon content-center">
              <a href="https://www.twitch.tv/magicxcmd" target="__blank">
                <TwitchIcon />
              </a>
            </li>
            <li class="social-icon">
              <a href="https://t.me/haxgun" target="__blank">
                <TelegramIcon />
              </a>
            </li>
            <li class="social-icon">
              <a href="https://github.com/haxgun" target="__blank">
                <GithubIcon />
              </a>
            </li>
          </div>
        </div>
      </div>
      <div
        class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        :style="{
          background: backgroundStyle,
          opacity: gradientOpacity,
        }"
      ></div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: hsl(0, 0%, 7%);
}

.title {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 5px;
  color: hsl(0, 0%, 100%);
}

.subtitle {
  font-size: 1em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
}

.email {
  margin-top: 5px;
  font-size: 1em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition:
    color 0.2s,
    box-shadow 0.2s;
  padding: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;

  &:hover {
    color: #16171b;
    box-shadow: inset 0 -32px 0 0 #fff;
  }
}

.social {
  margin-top: 36px;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
}
</style>
