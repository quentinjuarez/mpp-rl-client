<template>
  <header class="sticky inset-x-0 top-0 h-18 w-full bg-neutral-950">
    <div class="mx-auto flex h-full max-w-screen-xl items-center justify-between px-6">
      <div class="flex items-center gap-4">
        <div class="flex justify-center">
          <RouterLink
            to="/"
            class="flex size-16 items-center justify-center rounded-full text-center"
          >
            <Icon name="home" class="!text-2xl" />
          </RouterLink>
        </div>

        <Tabs :value="focusRoute">
          <TabList>
            <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
              <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                <a
                  v-ripple
                  :href="href"
                  @click="navigate"
                  class="flex items-center gap-2 text-inherit"
                >
                  <i :class="tab.icon" />
                  <span>{{ tab.label }}</span>
                </a>
              </router-link>
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <div class="flex items-center gap-4">
        <Tag icon="pi pi-trophy" severity="success" :value="points"></Tag>

        <UserMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const store = useStore()
const route = useRoute()

const items = ref([
  { route: '/forecasts', label: 'Forecasts', icon: 'pi pi-chart-line' },
  { route: '/events', label: 'Events', icon: 'pi pi-calendar' },
  { route: '/matches', label: 'Matchs', icon: 'pi pi-trophy' },
  { route: '/leaderboard', label: 'Leaderboard', icon: 'pi pi-list' }
])

const mounted = ref(false)
const points = ref(0)

onMounted(async () => {
  points.value = await store.getForecastPoints()

  // fix initial focus route animation
  setTimeout(() => {
    mounted.value = true
  }, 500)
})

const focusRoute = computed(() => {
  if (!mounted.value) return ''
  const path = route.fullPath
  return items.value.find((item) => path.startsWith(item.route))?.route || ''
})
</script>

<style>
.p-tablist-tab-list {
  background: none !important;
  border: none !important;
}

.p-tab {
  border: none !important;
}
</style>
