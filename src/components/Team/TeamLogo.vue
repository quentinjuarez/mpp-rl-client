<template>
  <component
    :is="props.link ? 'RouterLink' : 'button'"
    :to="{ name: 'team', params: { slug: props.team.slug } }"
    class="flex items-center gap-2"
    :class="{
      'flex-row-reverse': props.reverse
    }"
  >
    <div
      class="overflow-hidden rounded-full transition-all hover:scale-105"
      :class="{
        'scale-105': props.color === props.winner,
        'scale-95 opacity-20': props.color !== props.winner && props.winner !== undefined
      }"
    >
      <img :src="image" class="m-2 size-24 object-contain" />
    </div>
    <!-- <span class="truncate">{{ props.team.name }}</span> -->
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    team?: PSTeam
    color?: 'blue' | 'orange'
    winner?: 'blue' | 'orange'
    reverse?: boolean
    link?: boolean
  }>(),
  {
    team: () => ({ name: 'TBD', image_url: undefined, id: -1 }) as unknown as PSTeam,
    reverse: false,
    link: false
  }
)

const image = computed(() => props.team.image_url)
</script>
