<template>
  <div class="space-y-4">
    <h1 class="flex items-center gap-4 text-4xl font-bold">
      <span>Results</span>
    </h1>

    <div v-if="RLStore.loading" class="text-center text-neutral-400">Loading...</div>

    <div v-else class="space-y-2">
      <div class="space-y-0" v-for="(matches, day) in groupedMatches" :key="day">
        <h2 class="mb-4 text-xl font-bold">{{ day }}</h2>
        <MatchItem
          v-for="match in matches"
          :key="match._id"
          :match="match"
          :forecast="results[match.slug]"
        />
      </div>

      <div v-if="!Object.keys(groupedMatches).length" class="text-center text-neutral-400">
        No results found
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()
const store = useStore()

const { results } = storeToRefs(store)

function groupMatchesByDay(matches: RLMatch[]) {
  return matches.reduce(
    (acc, match) => {
      const date = formatDate(match.date)
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
