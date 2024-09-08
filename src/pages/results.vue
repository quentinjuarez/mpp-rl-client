<template>
  <div class="space-y-4 pb-4">
    <h1 class="text-4xl font-bold">Results</h1>

    <div v-if="loading || store.loading" class="text-center text-neutral-400">Loading...</div>

    <div v-else class="mx-auto flex flex-col items-center space-y-4">
      <!-- Calendar list -->
      <div class="sticky top-18 z-10 flex items-center space-x-2 bg-neutral-900 px-4 py-2">
        <Button icon="pi pi-chevron-left" @click="prevDay"></Button>

        <!-- <button @click="prevDay" class="rounded bg-neutral-700 p-2">Prev</button> -->
        <div class="flex max-w-[calc(100vw-128px)] space-x-2 overflow-auto md:max-w-[400px]">
          <button
            v-for="day in days"
            :key="day.getTime()"
            @click="focusDay = new Date(day)"
            class="flex flex-col items-center gap-1 rounded px-2 py-1 transition-colors hover:bg-white/10"
            :class="[{ '!bg-blue text-white': isFocusedDay(day) }]"
          >
            <span class="text-xs text-neutral-300">{{ getDay(day) }}</span>
            <span class="text-center text-xl">{{ day.getDate() }}</span>
            <p></p>
          </button>
        </div>
        <Button icon="pi pi-chevron-right" @click="nextDay"></Button>
      </div>

      <div v-if="focusMatches.length" class="space-y-2">
        <ForecastItem v-for="match in focusMatches" :key="match.id" :match="match" />
      </div>

      <div v-else class="text-center text-neutral-400">No results found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()
const store = useStore()

const matches = ref<PSMatch[]>([])
const loading = ref(false)

const route = useRoute()

onMounted(async () => {
  if (route.query.d) {
    focusDay.value = new Date(route.query.d as string)
  }

  loading.value = true
  const res = await RLStore.getPastMatches()
  loading.value = false
  if (res) {
    matches.value = res
  }
})

const focusMatches = computed(() => {
  const day = focusDay.value.toISOString().split('T')[0]

  const array = matches.value.filter((match) => {
    // console.log(day === match.begin_at.split('T')[0])
    return day === match.begin_at.split('T')[0]
  })

  return array
})

const focusDay = ref<Date>(new Date())

const days = computed(() => {
  const now = new Date()
  const daysArray = []

  for (let i = 0; i < 30; i++) {
    const day = new Date(now)
    day.setDate(now.getDate() + i)
    daysArray.push(day)
  }

  return daysArray
})

function isFocusedDay(day: Date): boolean {
  return formatDate(focusDay.value) === formatDate(day)
}

function prevDay() {
  const currentIndex = days.value.findIndex((day) => formatDate(focusDay.value) === formatDate(day))
  if (currentIndex > 0) {
    focusDay.value = days.value[currentIndex - 1]
  }
}

function nextDay() {
  const currentIndex = days.value.findIndex((day) => formatDate(focusDay.value) === formatDate(day))
  if (currentIndex < days.value.length - 1) {
    focusDay.value = days.value[currentIndex + 1]
  }
}

const router = useRouter()

watch(focusDay, () => {
  router.replace({ query: { d: focusDay.value.toISOString().split('T')[0] } })
})

const getDay = (date: Date): string => {
  const browserLocale = navigator.language

  return `${date.toLocaleDateString(browserLocale, {
    weekday: 'long'
  })}`
}
</script>
