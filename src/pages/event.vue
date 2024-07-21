<template>
  <div>
    <div v-if="!event" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else class="space-y-4">
      <h1 class="text-4xl font-bold">{{ event.name }}</h1>

      <div class="flex items-center gap-2">
        <p class="flex items-center gap-2">
          <img :src="region.flag" class="size-4 object-contain" /> <span>{{ region.label }}</span>
        </p>
        <p>-</p>
        <p>{{ formatDate(event.startDate) }}</p>
        <p>-</p>
        <p>{{ formatDate(event.endDate) }}</p>
      </div>
      <div>
        <h2 class="mb-2 text-xl font-bold">Prize</h2>
        <p v-if="event.prize">{{ event.prize.amount }} {{ event.prize.currency }}</p>
        <p v-else>No prize information available.</p>
      </div>
      <div>
        <h2 class="mb-2 text-xl font-bold">Tags</h2>
        <ul class="flex items-center gap-2">
          <li v-for="group in event.groups" :key="group">
            <Tag :value="group"></Tag>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-2 text-xl font-bold">Stages</h2>
        <div v-if="event.stages.length" class="space-y-2">
          <Card v-for="stage in event.stages" :key="stage._id">
            <template #title>
              {{ stage.name }}
            </template>
            <template #content>
              <p>{{ formatDate(stage.startDate) }} - {{ formatDate(stage.endDate) }}</p>
              <p>
                <a :href="stage.liquipedia" target="_blank" class="underline"> Liquipedia </a>
              </p>
              <p v-if="stage.qualifier">Qualifier: Yes</p>
              <p v-if="stage.prize">Prize: {{ stage.prize.amount }} {{ stage.prize.currency }}</p>
            </template>
          </Card>
        </div>
        <p v-else>No stage information available.</p>
      </div>
      <div v-if="event.participants">
        <h2 class="mb-2 text-xl font-bold">Participants</h2>
        <div v-if="event.participants.length === 0">
          <p>No participants yet.</p>
        </div>
        <div v-else class="flex flex-wrap gap-2">
          <div
            v-for="participant in event.participants"
            :key="participant.team._id"
            class="flex items-center gap-2"
          >
            <img
              :src="participant.team.image || getRegion(participant.team.region).flag"
              class="size-8 rounded bg-white object-contain p-1"
            />
            <span>{{ participant.team.name }}</span>
          </div>
        </div>
      </div>
      <div v-if="event.matches">
        <h2 class="mb-2 text-xl font-bold">Matches</h2>
        <!-- <div v-for="match in event.matches" :key="match._id">
          <p>{{ match.name }}</p>
        </div> -->
        <div v-if="event.matches.length === 0">
          <p>No matches yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getRegion from '@/utils/region'

const RLStore = useRLStore()

const { event } = storeToRefs(RLStore)

function formatDate(date: string): string {
  const browserLocale = navigator.language

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat(browserLocale, options).format(new Date(date))
}

const region = computed(() => {
  return getRegion(event.value?.region)
})
</script>
