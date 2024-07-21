<template>
  <div>{{ user }}</div>
</template>

<script setup lang="ts">
const store = useStore()

const { user } = storeToRefs(store)
</script>
