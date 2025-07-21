<script setup lang="ts">
import { FreelanceData } from '@/data/cv/Freelance.data'
import { ProjectsData } from '@/data/cv/Projects.data'
import { openLink } from '@/lib/utils'
import { ArrowUpRightIcon, DownloadIcon } from 'lucide-vue-next'
</script>

<template>
  <main id="cv" class="max-w-5xl p-10 antialiased w-full mx-auto">
    <div class="flex-1 flex md:flex-row sm:flex-col md:gap-20 sm:gap-10">
      <!-- Left Side -->
      <div class="flex flex-col gap-8">
        <!-- Hero -->
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <span class="text-3xl font-bold">Миша Гусев</span>
            <span class="text-xl">Младший Full-Stack Разработчик</span>
            <span class="text-sm">Мужчина, 23 года, 31 декабря 2001 г.</span>
          </div>
          <ul class="flex flex-col gap-2 font-medium">
            <li>
              Создаю масштабируемые REST API с использованием FastAPI, а также разрабатываю
              современные веб-приложения на Vue.js с TailwindCSS.
            </li>
            <li>
              Постоянно изучаю новые технологии и улучшаю качество кода через рефакторинг и
              документирование
            </li>
            <li>Готов применить свои навыки в сложных проектах.</li>
          </ul>
        </div>
        <!-- Freelance -->
        <div class="flex flex-col gap-4">
          <span class="font-bold text-xl">Фриланс</span>
          <div class="flex flex-col gap-5">
            <div
              class="flex flex-col gap-3"
              v-for="freelance in FreelanceData"
              :key="freelance.title"
            >
              <div class="flex flex-col gap-px">
                <span class="font-bold text-lg">{{ freelance.title }}</span>
                <span class="text-sm">{{ freelance.description }}</span>
                <span class="text-xs italic uppercase mt-1">{{ freelance.year }} г.</span>
              </div>
              <ul class="flex flex-col gap-2 list-disc ml-4">
                <li class="pl-1" v-for="(item, index) in freelance.developed" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Projects -->
        <div class="flex flex-col gap-4">
          <span class="font-bold text-xl">Собственные проекты</span>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3" v-for="project in ProjectsData" :key="project.title">
              <div class="flex flex-col gap-px">
                <div class="inline-flex gap-2 items-center">
                  <span class="font-bold text-lg">{{ project.title }}</span>
                  <span
                    class="font-medium text-sm text-neutral-400"
                    v-for="link in project.links"
                    :key="link"
                    >{{ link }}</span
                  >
                </div>
                <span class="text-sm">{{ project.description }}</span>
                <span class="text-xs italic uppercase mt-1">{{ project.year }}</span>
              </div>
              <ul class="flex flex-col gap-2 list-disc ml-4">
                <li class="pl-1" v-for="(item, index) in project.developed" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Education -->
        <div class="flex flex-col gap-4">
          <span class="font-bold text-xl">Образование</span>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-px">
                <span class="font-bold text-lg"
                  >Бакалавр, Информатика и вычислительная техника</span
                >
                <span class="text-base">
                  Пермский национальный исследовательский политехнический университет
                </span>
                <span class="text-xs italic uppercase mt-1">Сентябрь 2019 - Июль 2023</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Courses -->
        <div class="flex flex-col gap-4">
          <span class="font-bold text-xl">Курсы</span>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-px">
                <span class="font-bold text-lg">"Поколение Python": курс для начинающих</span>
                <span class="text-base"> Школа BEEGEEK </span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-px">
                <span class="font-bold text-lg">Программирование на Python</span>
                <span class="text-base"> Bioinformatics Institute </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col gap-5 w-lg">
        <div class="flex flex-col gap-10">
          <!-- Contacts -->
          <ul class="flex flex-col gap-1 w-full">
            <li class="inline-flex gap-1 items-center">
              <a class="hover:underline" href="mailto:misha@valory.su" target="_blank">
                misha@valory.su
              </a>
              <ArrowUpRightIcon class="size-4" />
            </li>
            <li class="inline-flex gap-1 items-center">
              <a class="hover:underline" href="https://t.me/haxgun" target="_blank">
                t.me/haxgun
              </a>
              <ArrowUpRightIcon class="size-4" />
            </li>
            <li class="inline-flex gap-1 items-center">
              <a class="hover:underline" href="https://github.com/haxgun" target="_blank">
                github.com/haxgun
              </a>
              <ArrowUpRightIcon class="size-4" />
            </li>
            <li class="inline-flex gap-1 items-center">
              <a class="hover:underline" href="https://haxgun.ru" target="_blank">haxgun.ru</a>
            </li>
            <li>Пермь</li>
          </ul>

          <!-- Skills -->
          <div class="flex flex-col gap-3">
            <div class="font-bold text-xl">Навыки</div>
            <ul class="flex flex-col list-disc ml-3 gap-2">
              <li>HTML5, CSS, SCSS, SASS, TailwindCSS</li>
              <li>JavaScript, TypeScript</li>
              <li>Python, Async/Await</li>
              <li>Windows, macOS, Linux</li>
            </ul>
          </div>
          <!-- Languages -->
          <div class="flex flex-col gap-3">
            <div class="font-bold text-xl">Языки</div>
            <ul class="flex flex-col list-disc ml-3 gap-2">
              <li>Английский язык - B1</li>
              <li>Русский - Родной</li>
            </ul>
          </div>
          <!-- Instruments -->
          <div class="flex flex-col gap-3">
            <div class="font-bold text-xl">Инструменты</div>
            <ul class="flex flex-col list-disc ml-3 gap-2">
              <li>Git, GitHub</li>
              <li>Figma, Photoshop</li>
              <li>PyCharm, VSCode, Zed code</li>
              <li>Django, DRF, FastAPI, Flask</li>
              <li>Vue 3, Nuxt 3 и 4</li>
              <li>Redis, PostgreSQL, SQLite, SQLModel, SQLAlchemy ORM</li>
              <li>aiogram, pyrogram, aiohttp, pycord</li>
              <li>Docker, Docker Compose, Nginx</li>
              <li>Bash, Zsh</li>
            </ul>
          </div>
          <!-- Hobbies -->
          <div class="flex flex-col gap-3">
            <div class="font-bold text-xl">Хобби</div>
            <ul class="flex flex-col list-disc ml-3 gap-2">
              <li>Баскетбол (активное участие в местных турнирах)</li>
              <li>Чтение технической литературы и художественных произведений</li>
              <li>Прослушивание музыки различных жанров</li>
              <li>Изучение новых технологий и фреймворков</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="inline-flex gap-1 fixed top-5 right-5 bg-neutral-200/25 rounded-xl p-1.5">
        <button
          @click="openLink('https://drive.google.com/file/d/1Lkq-FMPODoL7mP0x5DOlYNpKE0Uoct8X')"
          class="text-sm rounded-lg hover:bg-neutral-200/50 hover:text-zinc-700 dark:hover:text-white transition-colors duration-200 capitalize inline-flex gap-2 items-center justify-center py-2 px-3"
        >
          <DownloadIcon :size="16" />
          Скачать PDF
        </button>
      </div>
    </div>
  </main>
</template>
