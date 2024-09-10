<template>
  <div class="space-y-2" :id="String(props.match.id)">
    <div class="flex items-center justify-center gap-1 text-center text-neutral-400">
      <p>
        {{ time }}
      </p>
      <button
        class="flex size-5 items-center justify-center rounded-full bg-neutral-700"
        @click="emit('display')"
      >
        <Icon name="info" class="!text-sm text-neutral-400" />
      </button>
    </div>
    <div class="flex w-[153px] flex-none items-center justify-center gap-4" v-if="winner">
      <div
        id="blue"
        class="rounded-md border-2 border-neutral-200 bg-neutral-700 selection:bg-blue selection:text-white"
        :class="{
          '!border-red-500': blueError,
          '!border-blue': winner === 'blue'
        }"
      >
        <InputMask
          class="size-12 !border-none !bg-transparent !p-0.5 text-center"
          v-model="blueText"
          mask="9"
          placeholder="_"
          :invalid="blueError"
          :disabled="winner === 'blue' || props.readonly"
          :pt="{ input: { inputmode: 'numeric' } }"
          @keydown="handleUpdate"
        />
      </div>

      <Icon :name="error ? 'times' : 'check'" class="text-neutral-400" />

      <div
        id="orange"
        class="rounded-md border-2 border-neutral-200 bg-neutral-700 selection:bg-orange selection:text-white"
        :class="{
          '!border-red-500': orangeError,
          '!border-orange': winner === 'orange'
        }"
      >
        <InputMask
          class="size-12 !border-none !bg-transparent !p-0.5 text-center"
          v-model="orangeText"
          mask="9"
          placeholder="_"
          :invalid="orangeError"
          :disabled="winner === 'orange' || props.readonly"
          :pt="{ input: { inputmode: 'numeric' } }"
          @keydown="handleUpdate"
        />
      </div>
    </div>
    <div
      v-else
      class="w-[153px] text-center"
      :class="{
        'opacity-0': props.notPlanned || props.readonly
      }"
    >
      Choose a winner
    </div>

    <div class="text-center text-neutral-400">Best of {{ props.match.number_of_games }}</div>
    <!-- <div>Text {{ blueText }} - {{ orangeText }}</div>
    <div>Number {{ props.blue }} - {{ props.orange }}</div> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  match: PSMatch
  forecast?: Forecast
  winner?: 'blue' | 'orange'
  blue?: number
  orange?: number
  maxScore: number
  notPlanned?: boolean
  readonly?: boolean
}>()

const blueText = ref<string>(props.blue !== undefined ? String(props.blue) : '')
const orangeText = ref<string>(props.orange !== undefined ? String(props.orange) : '')

const orangeError = computed(() => {
  if (props.orange === undefined) return true

  return props.orange > props.maxScore
})

const blueError = computed(() => {
  if (props.blue === undefined) return true

  return props.blue > props.maxScore
})

const error = computed(() => {
  return orangeError.value || blueError.value
})

const emit = defineEmits<{
  (event: 'update', value: { blue: string; orange: string }): void
  (event: 'display'): void
}>()

const handleUpdate = () => {
  setTimeout(() => {
    blueText.value = preClampScore(blueText.value, 'blue')
    orangeText.value = preClampScore(orangeText.value, 'orange')

    emit('update', {
      blue: blueText.value,
      orange: orangeText.value
    })
  }, 50)
}

const preClampScore = (val: string, color: 'blue' | 'orange') => {
  if (val === '') return val

  return String(
    Math.min(Math.max(Number(val), 0), props.maxScore - (props.winner !== color ? 1 : 0))
  )
}

const time = computed(() => {
  const date = new Date(props.match.begin_at)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})

const focusInput = (targetId: string) => {
  setTimeout(() => {
    const test = document.getElementById(String(props.match.id))
    const input = test?.querySelector(`#${targetId}`)
    input?.querySelector('input')?.focus()
  }, 50)
}

watch(
  () => props.winner,
  (newValue) => {
    if (!newValue) return
    if (newValue === 'blue') {
      focusInput('orange')
    } else {
      focusInput('blue')
    }
  }
)

watch(
  () => props.blue,
  (newValue) => {
    blueText.value = newValue !== undefined ? String(newValue) : ''
  }
)

watch(
  () => props.orange,
  (newValue) => {
    orangeText.value = newValue !== undefined ? String(newValue) : ''
  }
)
</script>
