<template>
  <footer
    class="sticky inset-x-0 bottom-0 z-50 h-18 w-full border-t border-neutral-700 bg-neutral-900 md:hidden"
  >
    <Tabs :value="focusRoute" class="px-12">
      <TabList>
        <Tab
          v-for="tab in items"
          :key="tab.label"
          :value="tab.route"
          @click="handleClick(tab.route)"
          class="!px-4"
        >
          <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
            <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
              <i :class="tab.icon" />
            </a>
          </router-link>
        </Tab>
      </TabList>
    </Tabs>
  </footer>
</template>

<script setup lang="ts">
const store = useStore()
const RLStore = useRLStore()
const route = useRoute()
const router = useRouter()

const items = ref([
  { route: '/forecasts', label: 'Forecasts', icon: 'pi pi-chart-line' },
  // {
  //   route: `/current-event`,
  //   label: 'Curent event',
  //   icon: 'pi pi-calendar'
  // },
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
  height: 68px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.p-tab {
  border: none !important;
}
</style>
