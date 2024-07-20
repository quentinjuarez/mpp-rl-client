<template>
  <div class="flex justify-center">
    <button
      @click="toggle"
      class="size-8 rounded-full bg-purple-500 text-center text-white transition-shadow hover:ring hover:ring-white"
    >
      {{ initial }}
    </button>

    <Popover ref="op">
      <div class="flex w-16 flex-col gap-4">
        <Button as="router-link" to="/logout">Logout</Button>
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
const store = useStore()

const initial = computed(() => store.user?.username[0].toUpperCase())

const op = ref()

const toggle = (event: Event) => {
  op.value.toggle(event)
}
</script>
