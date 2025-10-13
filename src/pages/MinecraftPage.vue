<script lang="ts" setup>
import { onMounted, type Ref, ref } from 'vue'
import { useTitle, useFavicon } from '@vueuse/core'
import { Dialog, VideoBackground, Button } from '@/components/minecraft'
import type { IMinecraftLink } from '@/types/links.type'

const serverModal: Ref<boolean> = ref(false)
const minePiModal: Ref<boolean> = ref(false)

const title = useTitle()
title.value = 'Курс "Программирование в Minecraft"'

const links: Array<IMinecraftLink> = [
  {
    name: 'Python',
    url: 'https://www.python.org/'
  },
  {
    name: 'Minecraft',
    url: 'https://nightly.link/UltimMC/Launcher/workflows/main/develop/mmc-cracked-win32.zip'
  },
]

onMounted(() => {
  useFavicon('/minecraft/favicon.webp')
}
)
</script>

<template>
  <VideoBackground video-src="/minecraft/video.mp4" image="/minecraft/background.webp">
    <div class="z-10 flex flex-col gap-12 items-center justify-center max-w-2/3">
      <img defer src="/minecraft/course_logo.webp" alt="course_logo"
        class="mt-[8%] select-none pointer-events-none size-[70%]">
      <div
        class="flex items-center justify-center flex-wrap gap-5 w-fit bg-[#171615] border-0 border-t-5 border-[#3D3938] p-5">
        <Dialog v-model="serverModal" title="Сервера"
          description="Выберите версию сервера, на котором хотите практиковаться">
          <Button href="https://drive.google.com/file/d/1X0JG-sNaL-3P9TwY63I9EBaHMJB1MJFM/view?usp=sharing">
            <span>Версия 1.11.2</span>
          </Button>
          <Button href="https://drive.google.com/file/d/1yeGIIKUzATAwhrR1TGHuvsQSSd8tEoO-/view?usp=sharing">
            <span>Версия 1.16.5</span>
          </Button>
        </Dialog>
        <Button as="button" @click="() => { serverModal = true }">
          <span>Сервера</span>
        </Button>
        <Dialog v-model="minePiModal" title="MinePi"
          description="Выберите версию библиотеки исходя из версии Python. Проверить версию Python можно в терминале командой &quot;python --version&quot;">
          <Button as="a" href="https://github.com/py3minepi/py3minepi/archive/refs/heads/master.zip">
            <span>Меньше 3.9 </span>
          </Button>
          <Button as="a" href="https://github.com/haxgun/py3minepi-reload/archive/refs/heads/master.zip">
            <span>Больше или равно 3.9</span>
          </Button>
        </Dialog>
        <Button as="button" @click="() => { minePiModal = true }" class="MCButton">
          <span>MinePi</span>
        </Button>
        <Button as="a" v-for="link in links" :key="link.url" :href="link.url">
          <span>{{ link.name }}</span>
        </Button>
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
