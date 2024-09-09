<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-2">
      <label for="username">
        <span>Username</span>
      </label>

      <InputText class="w-full" id="username" autocomplete="off" :value="username" disabled />
    </div>
    <div class="flex flex-col gap-2">
      <label for="username">
        <span>Forecasts</span>
      </label>
      <div class="flex flex-col items-center gap-2">
        <ForecastItem v-for="match in matches" :key="match.id" :match="match" />
      </div>
      <div v-if="!matches.length" class="text-center text-neutral-400">No forecasts found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()

const { user, forecasts } = storeToRefs(store)

const username = computed(() => {
  return user.value?.username
})

const matches = computed(() => {
  return forecasts.value.map(({ match }) => match) as PSMatch[]
})
</script>
