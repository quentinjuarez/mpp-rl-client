<template>
  <div
    class="bg-blue-orange w-fit rounded-lg p-1 transition-all duration-500 hover:bg-white/5"
    :class="styles"
  >
    <div class="flex items-center gap-4 rounded-md bg-neutral-900 p-4">
      <TeamLabel :team="props.match.blue?.team.team" @click="onClick('blue')" />
      <ScoreForecast :match="props.match" />
      <TeamLabel :team="props.match.orange?.team.team" reverse @click="onClick('orange')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  match: RLMatch
}>()

const winner = ref<string>()

function onClick(side: 'blue' | 'orange') {
  winner.value = side
}

const styles = computed(() => {
  return winner.value ? `bg-${winner.value}` : ''
})
</script>

<style scoped>
.bg-blue-orange {
  background: linear-gradient(
    135deg,
    rgba(23, 120, 247, 1) 0%,
    rgba(23, 120, 247, 1) 33%,
    rgba(255, 91, 0, 1) 66%,
    rgba(255, 91, 0, 1) 100%
  );
  background-size: 300% 100%;
  background-position-x: 50%;
}

.bg-blue {
  /* Fully blue */
  background-position-x: left;
}

.bg-orange {
  /* Fully orange */
  background-position-x: right;
}
</style>
