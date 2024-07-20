<template>
  <div class="relative flex">
    <NavBar />

    <div v-if="store.user" class="min-h-screen w-full text-center">
      <h1>Welcome {{ store.user.username }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()
</script>
