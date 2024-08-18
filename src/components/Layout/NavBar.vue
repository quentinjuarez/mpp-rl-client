<template>
  <header class="sticky inset-x-0 top-0 z-50 h-18 w-full bg-neutral-950">
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
            <Tab
              v-for="tab in items"
              :key="tab.label"
              :value="tab.route"
              @click="handleClick(tab.route)"
            >
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
        <Select
          v-model="RLStore.currentEvent"
          :options="events"
          optionLabel="name"
          optionValue="slug"
          placeholder="Select an event"
          class="w-full md:w-56"
        />
        <Tag icon="pi pi-trophy" severity="success" :value="points"></Tag>

        <UserMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const store = useStore()
const RLStore = useRLStore()
const route = useRoute()
const router = useRouter()

const items = ref([
  { route: '/forecasts', label: 'Forecasts', icon: 'pi pi-chart-line' },
  {
    route: `/current-event`,
    label: 'Curent event',
    icon: 'pi pi-calendar'
  },
  { route: '/results', label: 'Results', icon: 'pi pi-trophy' },
  { route: '/leaderboard', label: 'Leaderboard', icon: 'pi pi-list' }
])

const mounted = ref(false)
const points = ref(0)

onMounted(async () => {
  points.value = await store.getForecastPoints(RLStore.currentEvent)

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

const handleClick = (route: string) => {
  if (route === focusRoute.value) return
  router.push(route)
}

const events = ref([
  { name: 'RLCS 2024 World Championship', slug: '8b0a-rlcs-2024-world-championship' },
  { name: 'RLCS 2024 Split 2 Major', slug: 'e7ad-rlcs-2024-split-2-major' },
  { name: 'RLCS 2024 Split 1 Major', slug: 'e7ac-rlcs-2024-split-1-major' }
])

watch(
  () => RLStore.currentEvent,
  async () => {
    window.location.reload()
  }
)
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
