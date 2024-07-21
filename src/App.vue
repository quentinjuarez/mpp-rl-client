<template>
  <div class="dark min-h-screen font-custom selection:bg-violet-500 selection:text-white">
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
