<template>
  <div class="relative">
    <NavBar />

    <div class="mx-auto mt-8 min-h-screen w-full max-w-screen-md px-6">
      <!-- RETURN BTN -->
      <Button
        v-if="route.query.from"
        icon="pi pi-chevron-left"
        label="Back"
        @click="onBack"
        class="mb-4"
      ></Button>

      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const onBack = () => {
  router.push(route.query.from as string)
}
</script>
