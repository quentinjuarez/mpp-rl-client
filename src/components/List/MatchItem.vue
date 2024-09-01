<template>
  <RouterLink
    :to="{
      name: 'match',
      params: { slug: props.match.slug }
    }"
    class="flex w-full items-center justify-between gap-8 p-2 transition-all hover:bg-white/10"
    :class="{
      'bg-green-500/10 hover:!bg-green-500/20': props.forecast?.correct
    }"
  >
    <div class="flex w-full items-center">
      <TeamLabel :team="props.match.blue?.team.team" color="blue" class="w-[calc(50%-36px)]" />
      <div>
        <div class="flex w-18 flex-none justify-center gap-2">
          <Tag
            :value="String(props.match.blue?.score || 0)"
            severity="info"
            :class="{
              'border border-blue': props.match.blue?.winner
              // 'border-green-500':
              //   props.match.blue?.winner && props.forecast && props.forecast.correct,
              // 'border-red-500':
              //   props.match.blue?.winner && props.forecast && !props.forecast.correct
            }"
          />
          <span>-</span>
          <Tag
            :value="String(props.match.orange?.score || 0)"
            severity="warn"
            :class="{
              'border border-orange': props.match.orange?.winner
              // 'border-green-500':
              //   props.match.orange?.winner && props.forecast && props.forecast.correct,
              // 'border-red-500':
              //   props.match.orange?.winner && props.forecast && !props.forecast.correct
            }"
          />
        </div>

        <div class="text-center">
          <span class="text-xs">My forecast:</span>

          <div v-if="forecast" class="text-center text-sm">
            {{ forecast.blue }} - {{ forecast.orange }}
          </div>
          <div v-else class="text-center">-</div>
        </div>
      </div>
      <TeamLabel
        :team="props.match.orange?.team.team"
        color="orange"
        class="w-[calc(50%-36px)]"
        reverse
      />
    </div>
    <Icon name="chevron-right" class="!text-xl" />
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  match: RLMatch
  forecast?: Forecast
}>()
</script>
