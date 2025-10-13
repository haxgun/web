<script lang="ts" setup>
import { onMounted, type Ref, ref } from 'vue'
import { useTitle, useFavicon } from '@vueuse/core'
import { Dialog, VideoBackground } from '@/components/minecraft'


interface Link {
  name: string
  url: string
}

const links: Array<Link> = [
  {
    name: 'Python',
    url: 'https://www.python.org/'
  },
  {
    name: 'Minecraft',
    url: 'https://nightly.link/UltimMC/Launcher/workflows/main/develop/mmc-cracked-win32.zip'
  },
]

const serverModal: Ref<boolean> = ref(false)
const minePiModal: Ref<boolean> = ref(false)

const title = useTitle()
title.value = 'Курс "Программирование в Minecraft"'

onMounted(() => {
  useFavicon('/minecraft/favicon.png')
}
)
</script>

<template>
  <VideoBackground video-src="/minecraft/video.mp4" image="/minecraft/background.png">
    <div class="z-10 flex flex-col gap-12 items-center justify-center max-w-2/3">
      <img defer src="/minecraft/course_logo.png" alt="course_logo"
        class="mt-[8%] select-none pointer-events-none size-[70%]">
      <div
        class="flex items-center justify-center flex-wrap gap-5 w-fit bg-[#171615] border-0 border-t-5 border-[#3D3938] p-5">
        <Dialog v-model="serverModal" title="Сервера"
          description="Выберите версию сервера, на котором хотите практиковаться">
          <a class="MCButton"
            href="https://drive.google.com/file/d/14VCg-mga7ES8eZagA1bcAUZORpHvh80A/view?usp=drive_link" target="_blank"
            rel="noopener">
            <span>Версия 1.11.2</span>
          </a>
          <a class="MCButton" href="https://drive.google.com/file/d/1E2VP5kZkfxYp4Fu3GtNYYjTD-SbE69i3/view?usp=sharing"
            target="_blank" rel="noopener">
            <span>Версия 1.16.5</span>
          </a>
        </Dialog>
        <button @click="() => { serverModal = true }" class="MCButton">
          <span>Сервера</span>
        </button>
        <Dialog v-model="minePiModal" title="MinePi"
          description="Выберите версию библиотеки исходя из версии Python. Проверить версию Python можно в терминале командой &quot;python --version&quot;">
          <a class="MCButton" href="https://github.com/py3minepi/py3minepi/archive/refs/heads/master.zip"
            target="_blank" rel="noopener">
            <span>Меньше 3.9 </span>
          </a>
          <a class="MCButton" href="https://github.com/haxgun/py3minepi-reload/archive/refs/heads/master.zip"
            target="_blank" rel="noopener">
            <span>Больше или равно 3.9</span>
          </a>
        </Dialog>
        <button @click="() => { minePiModal = true }" class="MCButton">
          <span>MinePi</span>
        </button>
        <a v-for="link in links" :key="link.url" class="MCButton" :href="link.url" target="_blank" rel="noopener">
          <span>{{ link.name }}</span>
        </a>
      </div>
    </div>

    <footer class="absolute bottom-3 w-1/2 text-center text-white mix-blend-color-dodge text-xs font-medium">
      НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕНО И НЕ
      СВЯЗАНО С
      MOJANG ИЛИ
      MICROSOFT.
      Minecraft® - торговая марка Mojang AB и Microsoft Corporation.
      Все права на бренд принадлежат правообладателям.
      Сайт предоставляет неофициальные инструменты сообщества.
      © 2025 haxgun
    </footer>
  </VideoBackground>
</template>


<style scoped>
.MCButton {
  background: #3c8527;
  box-shadow: inset 0 -6px 0 #2a641c, inset 0 6px 0 #52a535;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: .03em;
  text-transform: uppercase;

  cursor: pointer;

  border: 2px solid #262423;
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.25rem;
  min-width: 4.75rem;
  padding: .9375rem 1.75rem;
  padding-right: 1rem;
  text-decoration: none;
  text-align: center;

  -webkit-user-select: none;
  user-select: none;
  text-shadow: 0 2px 0 #505050;
}

.MCButton:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), #3c8527;
}

.MCButton:focus:active {
  box-shadow: 0 0 0 1px #ffffff;
}

.MCButton:active {
  background-color: #2a641c;
}

.MCButton:focus {
  outline: 2px solid #ffffff;
  outline-offset: -2px;
}

.MCButton::after {
  background-color: #ffffff;
  clip-path: polygon(0% 0%, 0% 25%, 14.286% 25%, 14.286% 50%, 28.572% 50%, 28.572% 75%, 42.858% 75%, 42.858% 100%, 57.142% 100%, 57.142% 75%, 71.428% 75%, 71.428% 50%, 85.714% 50%, 85.714% 25%, 100% 25%, 100% 0%, 85.714% 0%, 85.714% 25%, 71.428% 25%, 71.428% 50%, 57.142% 50%, 57.142% 75%, 42.858% 75%, 42.858% 50%, 28.572% 50%, 28.572% 25%, 14.286% 25%, 14.286% 0%);
  content: "";
  display: inline-block;
  flex-basis: 14px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 8px;
  transform: rotate(-90deg);
  width: 14px;
  margin-left: 10px;
}
</style>