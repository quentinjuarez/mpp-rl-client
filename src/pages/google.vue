<template>
  <div class="m-auto flex size-20 h-screen items-center justify-center">
    <!-- LOADING SVG -->
    <svg
      class="animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const store = useStore()

onMounted(async () => {
  try {
    const { code } = route.query as { code?: string }
    if (!code) return router.push('/')

    const res = await store.loginGoogle({ code })

    if (res) router.push('/')

    return router.push('/')
  } catch (error) {
    console.error(error)
    router.push('/')
  }
})
</script>
