<template>
  <div class="space-y-1">
    <div class="space-y-2" v-for="(matches, day) in groupedMatches" :key="day">
      <h2 class="text-xl font-bold">{{ day }}</h2>
      <MatchItem v-for="match in matches" :key="match._id" :match="match" />
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

function groupMatchesByDay(matches: RLMatch[]) {
  return matches.reduce(
    (acc, match) => {
      const date = match.date.split('T')[0] // Get the date in YYYY-MM-DD format
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
