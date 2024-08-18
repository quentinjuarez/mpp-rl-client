<template>
  <div>
    <div class="text-center text-neutral-400">
      {{ time }}
    </div>
    <div class="flex w-[120px] flex-none items-center justify-center gap-2">
      <div id="blue" :style="blueStyle">
        <InputMask
          class="h-[36px] w-[48px] !bg-transparent !p-0.5 text-center"
          v-model="blue"
          mask="9"
          placeholder="0"
          :invalid="error"
          :class="{
            '!border-red-500': error
          }"
          @keydown="debouncedUpdateForecast"
        />
      </div>

      <span>-</span>

      <div id="orange" :style="orangeStyle">
        <InputMask
          class="h-[36px] w-[48px] !bg-transparent !p-0.5 text-center"
          v-model="orange"
          mask="9"
          placeholder="0"
          :invalid="error"
          :class="{
            '!border-red-500': error
          }"
          @keydown="debouncedUpdateForecast"
        />
      </div>
    </div>

    <div class="text-center text-neutral-400">Best of {{ props.match.format.length }}</div>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'

const props = defineProps<{
  match: RLMatch
}>()

const store = useStore()

const { forecasts } = storeToRefs(store)

const forecast = ref()
const blue = ref()
const orange = ref()

onMounted(() => {
  forecast.value = forecasts.value.find((f) => f.matchSlug === props.match._id)

  blue.value = forecast.value?.blue
  orange.value = forecast.value?.orange
})

const blueStyle = computed(() => ({
  borderRadius: 'var(--mpp-rl-inputtext-border-radius) !important',
  background: 'var(--mpp-rl-tag-info-background) !important',
  color: 'var(--mpp-rl-tag-info-color) !important'
}))

const orangeStyle = computed(() => ({
  borderRadius: 'var(--mpp-rl-inputtext-border-radius) !important',
  background: 'var(--mpp-rl-tag-warn-background) !important',
  color: 'var(--mpp-rl-tag-warn-color) !important'
}))

const maxScore = computed(() => {
  const bestOf = props.match.format.length

  return (bestOf % 2) + Math.floor(bestOf / 2)
})

const clampScores = (editing: string) => {
  blue.value = Math.min(Math.max(Number(blue.value || 0), 0), maxScore.value)
  orange.value = Math.min(Math.max(Number(orange.value || 0), 0), maxScore.value)

  if (blue.value === maxScore.value && orange.value === maxScore.value) {
    if (editing === 'blue') {
      orange.value = Math.min(Number(orange.value || 0), maxScore.value - 1)
    } else {
      blue.value = Math.min(Number(blue.value || 0), maxScore.value - 1)
    }
  }
}

const error = computed(() => {
  if (blue.value === undefined && orange.value === undefined) return false

  return Number(blue.value || 0) !== maxScore.value && Number(orange.value || 0) !== maxScore.value
})

const updateForecast = async (e: any) => {
  const targetParentId = e.target.parentElement.id

  clampScores(targetParentId)

  if (error.value) return

  const res = await store.createOrUpdateForecast({
    matchSlug: props.match._id,
    eventSlug: props.match.event._id,
    date: props.match.date,
    blue: Number(blue.value || 0),
    orange: Number(orange.value || 0)
  })

  if (res) {
    forecast.value = res
  }
}

const debouncedUpdateForecast = debounce(updateForecast, 500)

const time = computed(() => {
  const date = new Date(props.match.date)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})
</script>
