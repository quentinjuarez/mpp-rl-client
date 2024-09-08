<template>
  <header
    class="sticky inset-x-0 top-0 z-50 h-18 w-full border-b border-neutral-700 bg-neutral-900"
  >
    <div class="mx-auto flex h-full max-w-screen-xl items-center justify-between px-6">
      <div class="flex items-center gap-2 md:gap-4">
        <div class="flex justify-center">
          <RouterLink
            to="/"
            class="flex h-full w-12 items-center justify-center rounded-full text-center md:w-16"
          >
            <Icon name="home" class="!text-2xl" />
          </RouterLink>
        </div>

        <Tabs :value="focusRoute" class="!hidden md:!flex">
          <TabList>
            <Tab
              v-for="tab in items"
              :key="tab.label"
              :value="tab.route"
              @click="handleClick(tab.route)"
              class="!px-4"
            >
              <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                <a
                  v-ripple
                  :href="href"
                  @click="navigate"
                  class="flex items-center gap-2 text-inherit"
                >
                  <i :class="tab.icon"></i>
                  <span class="hidden md:block">{{ tab.label }}</span>
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
const RLStore = useRLStore()
const route = useRoute()
const router = useRouter()

const items = ref([
  { route: '/forecasts', label: 'Forecasts', icon: 'pi pi-chart-line' },
  { route: '/results', label: 'Results', icon: 'pi pi-trophy' },
  { route: '/leaderboard', label: 'Leaderboard', icon: 'pi pi-list' }
])

const mounted = ref(false)
const points = ref(0)

onMounted(async () => {
  points.value = await store.getForecastPoints(RLStore.focusSerieId)

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
</script>

<style>
.p-tablist-tab-list {
  background: none !important;
  border: none !important;
  height: 68px;
}

.p-tab {
  border: none !important;
}
</style>
