<template>
  <div class="space-y-1">
    <div class="space-y-2" v-for="(events, day) in groupedEvents" :key="day">
      <h2 class="text-xl font-bold">{{ formatDate(day) }}</h2>
      <EventItem v-for="event in events" :key="event._id" :event="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()

function groupEventsByDay(events: RLEvent[]) {
  return events.reduce(
    (acc, event) => {
      const date = event.startDate.split('T')[0] // Get the date in YYYY-MM-DD format
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(event)
      return acc
    },
    {} as Record<string, RLEvent[]>
  )
}

const groupedEvents = computed(() => groupEventsByDay(RLStore.events))
</script>
