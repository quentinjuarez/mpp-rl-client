<template>
  <div class="w-fit rounded-lg p-1 transition-all duration-500 hover:bg-white/5" :class="bgStyles">
    <div class="flex items-center gap-4 rounded-md bg-black/75 p-4 md:gap-8">
      <TeamLogo :team="blueTeam" @click.stop="onClick('blue')" color="blue" :winner="winner" />
      <ScoreForecast
        :match="props.match"
        :winner="winner"
        :blue="blue"
        :orange="orange"
        :forecast="forecast"
        :maxScore="maxScore"
        :notPlanned="notPlanned"
        @update="debouncedUpdateForecast"
        @display="display = true"
      />
      <TeamLogo
        :team="orangeTeam"
        reverse
        @click.stop="onClick('orange')"
        color="orange"
        :winner="winner"
      />
    </div>
    <ForecastDialog v-if="display" :match="props.match" @close="display = false" />
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'

const props = defineProps<{
  match: PSMatch
}>()

const display = ref(false)

const store = useStore()

const { forecasts } = storeToRefs(store)

const winner = ref<'blue' | 'orange'>()
const blue = ref<number>()
const orange = ref<number>()

const maxScore = computed(() => {
  const bestOf = props.match.number_of_games

  return (bestOf % 2) + Math.floor(bestOf / 2)
})

const forecast = computed(() => forecasts.value.find((f) => f.matchId === props.match.id))

onMounted(() => {
  if (!forecast.value) return

  blue.value = forecast.value.blue || 0
  orange.value = forecast.value.orange || 0

  winner.value =
    blue.value === maxScore.value ? 'blue' : orange.value === maxScore.value ? 'orange' : undefined
})

function onClick(side: 'blue' | 'orange') {
  if (side === winner.value || notPlanned.value) return

  winner.value = side

  const isSwitch =
    orange.value !== undefined && blue.value !== undefined && orange.value !== blue.value

  if (side === 'blue') {
    orange.value =
      blue.value !== undefined && blue.value !== maxScore.value ? blue.value : undefined
    blue.value = maxScore.value
  } else {
    blue.value =
      orange.value !== undefined && orange.value !== maxScore.value ? orange.value : undefined
    orange.value = maxScore.value
  }

  if (isSwitch) {
    updateForecast({ blue: String(blue.value), orange: String(orange.value) })
  }
}

const bgStyles = computed(() => {
  const classes = ['bg-blue-orange']

  if (winner.value) {
    classes.push(`bg-${winner.value}`)
  }
  return classes
})

const clampScore = (val: string, color: 'blue' | 'orange') => {
  if (val === '') return undefined

  return Math.min(Math.max(Number(val), 0), maxScore.value - (winner.value !== color ? 1 : 0))
}

const updateForecast = async (payload: { blue: string; orange: string }) => {
  blue.value = clampScore(payload.blue, 'blue')
  orange.value = clampScore(payload.orange, 'orange')

  // winner
  winner.value =
    blue.value === maxScore.value ? 'blue' : orange.value === maxScore.value ? 'orange' : undefined

  await store.createOrUpdateForecast({
    matchId: props.match.id,
    serieId: props.match.serie_id,
    tournamentId: props.match.tournament_id,
    date: props.match.begin_at,
    blue: Number(blue.value || 0),
    orange: Number(orange.value || 0)
  })
}

const debouncedUpdateForecast = debounce(updateForecast, 500)

const blueTeam = computed(() => {
  return props.match.opponents?.[0]?.opponent
})

const orangeTeam = computed(() => {
  return props.match.opponents?.[1]?.opponent
})

const notPlanned = computed(() => {
  return !blueTeam.value || !orangeTeam.value
})
</script>

<style scoped>
.bg-blue-orange {
  background: linear-gradient(135deg, #1778f7 0%, #1778f7 33%, #ff5b00 66%, #ff5b00 100%);
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
