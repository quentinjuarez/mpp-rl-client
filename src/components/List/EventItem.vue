<template>
  <RouterLink
    :to="{
      name: 'event',
      params: { slug: props.event.slug }
    }"
    class="flex w-full items-center justify-between p-2 transition-all hover:bg-white/10"
  >
    <div>
      <h4 class="flex items-center gap-2 font-semibold">
        <img :src="props.event.image" alt="event image" class="size-8 rounded bg-white p-1" />
        <span>{{ props.event.name }}</span>
      </h4>
    </div>
    <Icon name="chevron-right" class="!text-xl" />
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  event: RLEvent
}>()
</script>
