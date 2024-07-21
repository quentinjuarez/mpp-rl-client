<template>
  <div class="flex w-full items-center justify-between gap-8 p-2 transition-all hover:bg-white/10">
    <div class="flex w-full items-center">
      <TeamLabel :team="props.match.blue?.team.team" class="w-[calc(50%-36px)]" />
      <ScoreForecast :match="props.match" />
      <TeamLabel :team="props.match.orange?.team.team" class="w-[calc(50%-36px)]" reverse />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  match: RLMatch
}>()
</script>
