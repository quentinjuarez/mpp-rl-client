<template>
  <RouterLink
    :to="{
      name: 'match',
      params: { id: props.match._id }
    }"
    class="flex w-full items-center justify-between gap-8 p-2 transition-all hover:bg-white/10"
  >
    <div class="flex w-full items-center">
      <TeamLabel :team="props.match.blue?.team.team" class="w-[calc(50%-36px)]" />
      <div class="flex w-18 flex-none justify-center gap-2">
        <Tag
          :value="String(props.match.blue?.score || 0)"
          severity="info"
          :class="{
            border: props.match.blue?.winner
          }"
        />
        <span>-</span>
        <Tag
          :value="String(props.match.orange?.score || 0)"
          severity="warn"
          :class="{
            border: props.match.blue?.winner === false
          }"
        />
      </div>
      <TeamLabel :team="props.match.orange?.team.team" class="w-[calc(50%-36px)]" reverse />
    </div>
    <Icon name="chevron-right" class="!text-xl" />
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  match: RLMatch
}>()
</script>
