<template>
  <component
    :is="props.link ? 'RouterLink' : 'div'"
    :to="{ name: 'team', params: { slug: props.team.slug } }"
    class="flex items-center gap-2"
    :class="{
      'flex-row-reverse': props.reverse
    }"
  >
    <img :src="image" class="size-8 rounded bg-white/10 object-contain p-1" />
    <span class="truncate">{{ props.team.name }}</span>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    team?: RLTeam | RLEnrichedTeam
    reverse?: boolean
    link?: boolean
  }>(),
  {
    team: () => ({ name: 'TBD', image: undefined, region: undefined, _id: '-1' }) as RLTeam,
    reverse: false,
    link: false
  }
)

const image = computed(() => props.team.image || getRegion(props.team.region).flag)
</script>
