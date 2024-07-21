<template>
  <div class="sticky inset-y-0 left-0 h-screen w-16 bg-neutral-950">
    <div class="flex h-full flex-col justify-between py-4">
      <div>
        <div class="flex justify-center">
          <RouterLink
            to="/"
            class="size-8 rounded-full bg-purple-500 text-center leading-8 text-white transition-shadow hover:ring hover:ring-white"
          >
            <Icon name="home" />
          </RouterLink>
        </div>
      </div>

      <div>
        <UserMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
