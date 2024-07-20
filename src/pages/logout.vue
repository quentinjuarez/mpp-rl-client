<template>
  <div class="mx-auto mt-8 max-w-screen-sm space-y-4 px-6"></div>
</template>

<script setup lang="ts">
const store = useStore()

onMounted(async () => {
  await store.logout()
})
</script>
