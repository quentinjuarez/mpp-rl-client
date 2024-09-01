<template>
  <div class="dark min-h-screen bg-neutral-900 font-custom selection:bg-blue selection:text-white">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
const { handleResize } = useScreen()

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>
