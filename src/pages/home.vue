<template>
  <h1>Welcome {{ store.user?.username }}</h1>
</template>

<script setup lang="ts">
const store = useStore()
</script>
