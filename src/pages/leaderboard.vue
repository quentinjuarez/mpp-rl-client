<template>
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Leaderboard</h1>
    <DataTable :value="leaderboard" stripedRows selectionMode="single" @row-select="onSelect">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
const store = useStore()

const { leaderboard } = storeToRefs(store)

const columns = [
  { field: 'username', header: 'Username' },
  { field: 'points', header: 'Points' }
]

const router = useRouter()

const onSelect = (event: any) => {
  router.push({
    name: 'user',
    params: { username: encodeURIComponent(event.data.username) }
  })
}
</script>
