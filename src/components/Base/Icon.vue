<template>
  <i class="pi" :class="['pi-' + props.name, { 'pi-spin': props.spin }]"></i>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  spin?: boolean
}>()
</script>
