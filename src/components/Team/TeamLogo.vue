<template>
  <component
    :is="props.link ? 'RouterLink' : 'button'"
    :to="{ name: 'team', params: { slug: props.team.slug } }"
    class="flex flex-col items-center gap-2"
  >
    <div
      class="overflow-hidden rounded-full transition-all"
      :class="{
        'hover:scale-105': props.team.acronym !== 'TBD',
        'scale-105': props.color === props.winner,
        'scale-95 opacity-20': props.color !== props.winner && props.winner !== undefined
      }"
    >
      <img :src="props.team.image_url" class="m-2 size-24 object-contain" />
    </div>
    <span class="truncate text-sm text-neutral-200">{{ props.team.acronym }}</span>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    team?: PSTeam
    color?: 'blue' | 'orange'
    winner?: 'blue' | 'orange'
    link?: boolean
  }>(),
  {
    team: () =>
      ({
        acronym: 'TBD',
        image_url: 'https://img.icons8.com/?size=100&id=hQSBVk8KAnp1&format=png&color=000000',
        id: -1
      }) as unknown as PSTeam,
    link: false
  }
)
</script>
