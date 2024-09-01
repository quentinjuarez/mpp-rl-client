<template>
  <div class="flex justify-center">
    <RouterLink
      to="/profile"
      class="size-8 rounded-full bg-blue text-center leading-8 text-white transition-shadow hover:ring hover:ring-white"
      :class="{ 'ring ring-white': isActive }"
    >
      <Icon name="user" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isActive = computed(() => route.fullPath === '/profile')
</script>
