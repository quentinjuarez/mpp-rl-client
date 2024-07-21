<template>
  <div class="relative">
    <NavBar />

    <div v-if="store.user" class="mx-auto mt-8 min-h-screen w-full max-w-screen-md px-6">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()
</script>
