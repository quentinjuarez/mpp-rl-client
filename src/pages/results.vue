<template>
  <div class="space-y-4">
    <h1 class="flex items-center gap-4 text-4xl font-bold">
      <span>Results</span>
      <DatePicker
        class="*:!px-2 *:!py-0"
        v-model="date"
        showIcon
        :maxDate="now"
        @update:modelValue="onUpdate"
      />
    </h1>

    <div class="space-y-2">
      <div class="space-y-2" v-for="(matches, day) in groupedMatches" :key="day">
        <h2 class="text-xl font-bold">{{ day }}</h2>
        <MatchItem v-for="match in matches" :key="match._id" :match="match" />
      </div>

      <div v-if="!Object.keys(groupedMatches).length" class="text-center text-neutral-400">
        No results found
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

function groupMatchesByDay(matches: RLMatch[]) {
  return matches.reduce(
    (acc, match) => {
      const date = new Date(match.date).toLocaleDateString() // Get the date in YYYY-MM-DD format
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(match)
      return acc
    },
    {} as Record<string, RLMatch[]>
  )
}

const groupedMatches = computed(() => groupMatchesByDay(RLStore.matches))

const route = useRoute()
const router = useRouter()

const date = ref(route.query.date ? new Date(route.query.date as string) : new Date())

const now = ref(new Date())

const onUpdate = (value: Date | Date[] | (Date | null)[] | null | undefined) => {
  if (!value || Array.isArray(value)) return

  let date: string | undefined = new Date(value).toDateString()

  const now = new Date().toDateString()

  if (date === now) {
    date = undefined
  }
  router.push({
    query: {
      date
    }
  })
}
</script>
