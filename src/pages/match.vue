<template>
  <div>
    <div v-if="!match" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else class="space-y-4">
      <h1 class="flex justify-between text-4xl font-bold">
        <TeamLabel link :team="match.blue?.team.team" class="w-[calc(50%-8px)]" />
        <span class="w-4 text-center">-</span>
        <TeamLabel link :team="match.orange?.team.team" class="w-[calc(50%-8px)]" reverse />
      </h1>

      <h2 class="text-2xl font-bold">
        <RouterLink
          :to="{
            name: 'event',
            params: {
              slug: match.event.slug
            }
          }"
        >
          {{ match.event.name }}
        </RouterLink>
      </h2>

      <div class="flex items-center gap-2">
        <p>{{ match.format.type }} of {{ match.format.length }}</p>
        <p>-</p>
        <p>{{ formatDate(match.date) }}</p>
      </div>
      <div>
        <h2 class="mb-2 text-xl font-bold">Games</h2>
        <div v-if="match.games.length" class="space-y-2">
          <Card v-for="game in match.games" :key="game._id">
            <template #title>
              <div class="flex w-18 flex-none justify-center gap-2">
                <Tag
                  :value="String(game.blue || 0)"
                  severity="info"
                  :class="{
                    border: game.blue > game.orange
                  }"
                />
                <span>-</span>
                <Tag
                  :value="String(game.orange || 0)"
                  severity="warn"
                  :class="{
                    border: game.orange > game.blue
                  }"
                />
              </div>
            </template>
          </Card>
        </div>
        <p v-else>No game information available.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

const { match } = storeToRefs(RLStore)

function formatDate(date: string): string {
  const browserLocale = navigator.language

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat(browserLocale, options).format(new Date(date))
}
</script>
