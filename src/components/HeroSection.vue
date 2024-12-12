<script setup lang="ts">
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import TwitchIcon from '@/components/icons/TwitchIcon.vue'

import { ref, computed, onMounted, onUnmounted } from "vue";
import { cn } from "@/lib/utils";

const isDeveloper = ref(false);

const props = defineProps({
  gradientSize: { type: Number, default: 200 },
  gradientColor: { type: String, default: "#111111" },
  gradientOpacity: { type: Number, default: 0.8 },
  class: { type: String, default: "" },
  slotClass: String,
});

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

const handleKeyDown = (event) => {
  if (event.ctrlKey && event.altKey && (event.key === 'h' || event.key === 'р')) {
    isDeveloper.value = !isDeveloper.value; // Переключаем значение
  }
};

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
  window.addEventListener('keydown', handleKeyDown);
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
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
        <Transition mode="out-in">
          <div v-if="!isDeveloper" class="cursor-pointer flex-col items-center justify-center whitespace-nowrap">
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
          <div v-else class="cursor-pointer flex-col items-center justify-center whitespace-nowrap">
            <div class="title develop">
              <img class="logo" src="/logo.png" alt="">
            </div>
            <div class="flex-col items-center justify-center whitespace-nowrap content-center tools">
              <li class="social-icon">
                <a href="/outline" target="__blank">
                  Outline
                </a>
              </li>
              <li class="social-icon">
                <a href="/nekoray" target="__blank">
                  Nekoray
                </a>
              </li>
              <li class="social-icon">
                <a href="/aio" target="__blank">
                  Windows AIO
                </a>
              </li>
              <li class="social-icon">
                <a href="/spotify" target="__blank">
                  Spotify
                </a>
              </li>
              <li class="social-icon">
                <a href="/discord" target="__blank">
                  Discord
                </a>
              </li>
              <li class="social-icon">
                <a href="/notepad" target="__blank">
                  Notepad
                </a>
              </li>
              <li class="social-icon">
                <a href="/tools" target="__blank">
                  Tools
                </a>
              </li>
            </div>
          </div>
        </Transition>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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

  &.develop {
    display: flex;
    justify-content: center;

    .logo {
      width: 500px;
    }
  }
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

.tools {
  margin-top: 36px;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;

  a {
    color: #A00411;
    transition: color .2s;

    &:hover {
      color: #6b000a;
    }
  }


  li:not(:last-child)::after {
    content: " |";
    margin-left: 5px;
    color: #A00411;
  }

  .social-icon {
    color: #fff;
  }
}
</style>
