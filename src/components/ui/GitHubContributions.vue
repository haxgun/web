<script setup lang="ts">
import { GithubIcon } from '@/components/icons/socials'
import { type ContributionDay, type ContributionWeek, type ContributionsData } from '@/types/github'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{ username: string }>()

const contributionsData = ref<ContributionsData | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const hoveredDay = ref<ContributionDay | null>(null)

const totalContributions = computed(() => contributionsData.value?.totalContributions || 0)

const displayText = computed(() => {
  if (loading.value) return 'Загружаем…'
  if (error.value) return error.value
  if (hoveredDay.value) return formatDateForDisplay(hoveredDay.value.count, hoveredDay.value.date)
  return `${totalContributions.value.toLocaleString()} контрибуций за последний год`
})

function formatDateForDisplay(count: number, date: string): string {
  const formatted = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  })
  if (count === 0) return `Нет контрибуций ${formatted}`
  if (count === 1) return `1 контрибуция ${formatted}`
  if (count <= 4) return `${count} контрибуции ${formatted}`
  return `${count} контрибуций ${formatted}`
}

async function fetchRealContributions(user: string): Promise<ContributionsData> {
  const url = `https://github-contributions-api.jogruber.de/v4/${user}?y=last`
  const res = await fetch(url)
  if (!res.ok) throw new Error('GitHub API error')

  type ApiResp = { contributions: ContributionDay[] }
  const json: ApiResp = await res.json()

  const weeks: ContributionWeek[] = []
  let buf: ContributionDay[] = []

  json.contributions.forEach((day) => {
    buf.push(day)
    if (buf.length === 7) {
      weeks.push({ days: buf })
      buf = []
    }
  })
  if (buf.length) {
    while (buf.length < 7) buf.push({ date: '', count: 0, level: 0 })
    weeks.push({ days: buf })
  }

  const total = json.contributions.reduce((s, d) => s + d.count, 0)
  return { weeks, totalContributions: total }
}

function handleMouseEnter(day: ContributionDay) {
  hoveredDay.value = day
}
function handleMouseLeave() {
  hoveredDay.value = null
}

onMounted(async () => {
  loading.value = true
  try {
    contributionsData.value = await fetchRealContributions(props.username)
  } catch (e) {
    error.value = (e as Error).message
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="bg-white rounded-lg text-neutral-600 py-3 font-sans text-xs w-fit">
    <div
      class="inline-flex justify-between font-medium text-neutral-500 items-center text-sm w-full"
    >
      <span class="inline-flex gap-2 items-center">
        <GithubIcon :size="16" color="#737373" />
        <span>Активность на GitHub</span>
      </span>
      <span :class="{ 'text-red-400': error }">{{ displayText }}</span>
    </div>

    <div v-if="contributionsData && !loading" class="relative">
      <div class="flex gap-0.5 overflow-x-scroll py-3">
        <div
          v-for="(week, weekIndex) in contributionsData.weeks"
          :key="weekIndex"
          class="flex flex-col gap-0.5"
        >
          <div
            v-for="(day, dayIndex) in week.days"
            :key="dayIndex"
            class="size-[11.5px] rounded-[3px] cursor-pointer transition-all duration-100"
            :class="{
              'bg-neutral-100 hover:bg-neutral-200': day.level === 0,
              'bg-green-900 hover:bg-green-800': day.level === 1,
              'bg-green-700 hover:bg-green-600': day.level === 2,
              'bg-green-500 hover:bg-green-400': day.level === 3,
              'bg-green-400 hover:bg-green-300': day.level === 4,
              'hidden bg-transparent': day.date === '',
            }"
            @mouseenter="handleMouseEnter(day)"
            @mouseleave="handleMouseLeave"
          />
        </div>
      </div>
    </div>
    <div v-else class="py-3">
      <div class="grid grid-cols-53 gap-0.5">
        <div
          v-for="i in 371"
          :key="i"
          class="size-[11.5px] rounded-[3px] bg-neutral-100 animate-pulse"
        />
      </div>
    </div>
  </div>
</template>
