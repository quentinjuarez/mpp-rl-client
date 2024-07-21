<template>
  <div class="dark min-h-screen font-custom selection:bg-violet-500 selection:text-white">
    <DesktopLayout />
  </div>
</template>

<script setup lang="ts">
import DesktopLayout from '@/layouts/DesktopLayout.vue'

const { handleResize } = useScreen()

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>
