<template>
  <div
    :key="props.team._id"
    class="flex items-center gap-2"
    :class="{
      'flex-row-reverse': props.reverse
    }"
  >
    <img :src="image" class="size-8 rounded bg-white/10 object-contain p-1" />
    <span class="truncate">{{ props.team.name }}</span>
  </div>
</template>

<script setup lang="ts">
import getRegion from '@/utils/region'

const props = defineProps<{
  team: RLTeam
  reverse?: boolean
}>()

const image = computed(() => props.team.image || getRegion(props.team.region).flag)
</script>
