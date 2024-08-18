<template>
  <div class="space-y-4">
    <!-- FORMATS -->
    <div class="flex justify-center">
      <SelectButton
        v-model="format"
        :options="formats"
        optionLabel="name"
        aria-labelledby="basic"
      />
    </div>

    <div class="flex items-center justify-center gap-2">
      <Button
        icon="pi pi-chevron-left"
        aria-label="Prev"
        size="small"
        @click="onStage('prev')"
        :disabled="prevDisabled"
      />
      <div>{{ stage }}</div>
      <Button
        icon="pi pi-chevron-right"
        aria-label="Next"
        size="small"
        @click="onStage('next')"
        :disabled="nextDisabled"
      />
    </div>

    <div class="space-y-2">
      <MatchItem
        v-for="(match, index) in displayMatches"
        :key="index"
        :match="match"
        :forecast="undefined"
      />

      <div v-if="!displayMatches.length" class="text-center text-neutral-400">No results found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()
const store = useStore()

// const { results } = storeToRefs(store)
const { matches, event } = storeToRefs(RLStore)

const displayMatches = computed(() => {
  return matches.value(formatName.value, stageName.value)
})

const formatName = ref(event.value?.formats[0]?.name || 'Swiss Stage')
const stageName = ref(event.value?.formats[0]?.stages[0]?.name || 'Round 1 Matches')

const formats = computed(() => {
  return (event.value?.formats || []).map((f) => ({ name: f.name }))
})

const format = computed({
  get: () => formats.value.find((f) => f.name === formatName.value),
  set: (value) => {
    formatName.value = value?.name || 'Swiss Stage'
    stageName.value =
      event.value?.formats.find((f) => f.name === value?.name)?.stages[0]?.name || 'Round 1 Matches'
  }
})

const stages = computed(() => {
  return event.value?.formats.find((f) => f.name === formatName.value)?.stages || []
})

const stage = computed(() => {
  return stageName.value
})

const prevDisabled = computed(() => {
  return stages.value.findIndex((s) => s.name === stageName.value) === 0
})

const nextDisabled = computed(() => {
  return stages.value.findIndex((s) => s.name === stageName.value) === stages.value.length - 1
})

const onStage = (direction: 'prev' | 'next') => {
  const index = stages.value.findIndex((s) => s.name === stageName.value)
  if (direction === 'prev') {
    stageName.value = stages.value[index - 1].name
  } else {
    stageName.value = stages.value[index + 1].name
  }
}
</script>
