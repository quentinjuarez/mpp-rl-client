<template>
  <div class="relative flex">
    <NavBar />

    <div v-if="store.user" class="min-h-screen w-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()
</script>
