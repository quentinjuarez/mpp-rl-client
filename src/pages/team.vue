<template>
  <div>
    <div v-if="RLStore.loading">Loading...</div>

    <div v-else-if="!RLStore.team">Not found</div>

    <div v-else class="space-y-4">
      <h1 class="text-4xl font-bold">
        <TeamLabel :team="RLStore.team" color="blue" />
      </h1>

      <div class="space-y-2">
        <h2 class="text-2xl font-bold">Players</h2>

        <div v-if="players" class="flex flex-col">
          <div v-for="player in players" :key="player._id" class="flex gap-2">
            <span class="font-bold">
              {{ player.tag }}
            </span>

            <span>
              {{ player.name }}
            </span>
          </div>
        </div>

        <h2 class="text-2xl font-bold">Coach</h2>
        <div v-if="coach">{{ coach.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

const coach = RLStore.team?.players.find((player) => player.coach)

const players = RLStore.team?.players.filter((player) => !player.coach)
</script>
