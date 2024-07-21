<template>
  <h1 class="text-4xl font-bold">Welcome {{ store.me?.username }}</h1>
</template>

<script setup lang="ts">
const store = useStore()

onMounted(() => {
  store.getLeaderboard()
})
</script>
