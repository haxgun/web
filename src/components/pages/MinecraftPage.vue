<script lang="ts" setup>
import { Button, Dialog, VideoBackground } from '@/components/minecraft'
import { Code } from '@/components/ui'
import type { IMinecraftLink } from '@/types/links.type'
import { useFavicon } from '@vueuse/core'
import { onMounted, onUnmounted, type Ref, ref } from 'vue'

const serverModal: Ref<boolean> = ref(false)
const minePiModal: Ref<boolean> = ref(false)

const links: Array<IMinecraftLink> = [
  {
    name: 'Java',
    url: 'https://github.com/adoptium/temurin25-binaries/releases/download/jdk-25%2B36/OpenJDK25U-jre_x64_windows_hotspot_25_36.msi',
  },
  {
    name: 'Python',
    url: 'https://www.python.org/',
  },
  {
    name: 'Minecraft',
    url: 'https://nightly.link/UltimMC/Launcher/workflows/main/develop/mmc-cracked-win32.zip',
  },
]

onMounted(() => {
  useFavicon('/minecraft/favicon.webp')
  const link = document.querySelector("link[rel~='icon']")
  link?.setAttribute('data-locked', 'true')
})

onUnmounted(() => {
  const link = document.querySelector("link[rel~='icon']")
  link?.removeAttribute('data-locked')
})
</script>

<template>
  <VideoBackground video-src="/minecraft/video.mp4" image="/minecraft/background.webp">
    <div class="z-10 flex flex-col gap-12 items-center justify-center max-w-2/3">
      <img
        defer
        src="/minecraft/course_logo.webp"
        alt="course_logo"
        class="mt-[8%] select-none pointer-events-none size-[70%]"
      />
      <div
        class="flex items-center justify-center flex-wrap gap-5 w-fit bg-[#171615] border-0 border-t-5 border-[#3D3938] p-5"
      >
        <Dialog
          v-model="serverModal"
          title="Сервера"
          description="Выберите версию сервера, на котором хотите практиковаться"
        >
          <template #description>
            <span
              class="text-lg text-[#a0a0a0] text-center text-pretty whitespace-pre-line leading-relaxed mb-2"
            >
              Выберите версию Minecraft сервера, на котором хотите практиковаться
            </span>
          </template>

          <Button
            href="https://drive.google.com/file/d/1X0JG-sNaL-3P9TwY63I9EBaHMJB1MJFM/view?usp=sharing"
          >
            <span>1.11.2</span>
          </Button>
          <Button
            href="https://drive.google.com/file/d/1yeGIIKUzATAwhrR1TGHuvsQSSd8tEoO-/view?usp=sharing"
          >
            <span>1.16.5</span>
          </Button>
          <Button
            href="https://drive.google.com/file/d/1_Mhl8tci66DOS745U4184uaHkmWIK2CB/view?usp=sharing"
          >
            <span>1.21.10</span>
          </Button>
        </Dialog>
        <Button
          as="button"
          @click="
            () => {
              serverModal = true
            }
          "
        >
          <span>Сервера</span>
        </Button>
        <Dialog v-model="minePiModal" title="MinePi">
          <template #description>
            <span
              class="text-lg text-[#a0a0a0] text-center text-pretty whitespace-pre-line leading-relaxed"
            >
              Выберите версию библиотеки исходя из версии Python. Проверить версию Python можно в
              командной строке введя команду
            </span>
            <Code code="python --version" />
          </template>

          <Button
            as="a"
            href="https://github.com/py3minepi/py3minepi/archive/refs/heads/master.zip"
          >
            <span>Меньше 3.9 </span>
          </Button>
          <Button
            as="a"
            href="https://github.com/haxgun/py3minepi-reload/archive/refs/heads/master.zip"
          >
            <span>Больше или равно 3.9</span>
          </Button>
        </Dialog>
        <Button
          as="button"
          @click="
            () => {
              minePiModal = true
            }
          "
          class="MCButton"
        >
          <span>MinePi</span>
        </Button>
        <Button as="a" v-for="link in links" :key="link.url" :href="link.url">
          <span>{{ link.name }}</span>
        </Button>
      </div>
    </div>

    <footer
      class="absolute bottom-3 w-1/2 text-center text-white mix-blend-color-dodge text-xs font-medium"
    >
      НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕНО И НЕ СВЯЗАНО С MOJANG ИЛИ MICROSOFT.
      Minecraft® - торговая марка Mojang AB и Microsoft Corporation. Все права на бренд принадлежат
      правообладателям. Сайт предоставляет неофициальные инструменты сообщества. © 2025 haxgun
    </footer>
  </VideoBackground>
</template>
