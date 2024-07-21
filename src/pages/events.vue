<template>
  <div class="space-y-1">
    <EventItem v-for="event in RLStore.events" :key="event._id" :event="event" />
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

onMounted(() => {
  RLStore.getEvents()
})
</script>
