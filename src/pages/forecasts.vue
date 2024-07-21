<template>
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Forecasts</h1>
    <div class="space-y-1">
      <div class="space-y-2" v-for="(matches, day) in groupedMatches" :key="day">
        <h2 class="text-xl font-bold">{{ day }}</h2>
        <ForecastItem v-for="match in matches" :key="match._id" :match="match" />
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
