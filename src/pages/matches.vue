<template>
  <div class="space-y-1">
    <MatchItem v-for="match in RLStore.matches" :key="match._id" :match="match" />
  </div>
</template>

<script setup lang="ts">
const RLStore = useRLStore()
</script>
