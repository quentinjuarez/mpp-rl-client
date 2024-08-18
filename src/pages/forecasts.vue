<template>
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Forecasts</h1>

    <div v-if="RLStore.loading" class="text-center text-neutral-400">Loading...</div>

    <div v-else class="space-y-2">
      <div class="space-y-2" v-for="(matches, day) in groupedMatches" :key="day">
        <h2 class="text-xl font-bold">{{ day }}</h2>
        <ForecastItem v-for="match in matches" :key="match._id" :match="match" />
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
</script>
