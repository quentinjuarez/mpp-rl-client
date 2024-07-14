<template>
  <div class="mx-auto mt-8 max-w-screen-sm space-y-4 px-6">
    <h1 class="text-6xl">Login</h1>

    <div class="space-y-2">
      <div class="flex flex-col gap-2">
        <label for="email">
          <span>Email</span>
          <span class="ml-1 text-red-500">*</span>
        </label>
        <InputText
          id="email"
          v-model="email"
          type="email"
          :class="{
            'focus:!border-red-500': emailValidation
          }"
          placeholder="john.doe@gmail.com"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">
          <span>Password</span>
          <span class="ml-1 text-red-500">*</span>
        </label>
        <Password
          class="*:w-full"
          id="password"
          v-model="password"
          toggleMask
          :feedback="false"
          :class="{
            'focus:*:!border-red-500': passwordValidation
          }"
        />
      </div>

      <Button
        class="w-full"
        :disabled="emailValidation || passwordValidation"
        :loading="loading"
        @click="onLogin"
        type="button"
      >
        Login
      </Button>

      <div class="flex flex-col">
        <Button to="/register" as="router-link" link>Don't have an account? Register here</Button>
      </div>

      <Divider>OR</Divider>

      <Button class="w-full">Google</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const emailValidation = computed(() => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  return !regex.test(email.value)
})

const passwordValidation = computed(() => password.value.length < 8)

const loading = ref(false)

const onLogin = () => {
  if (emailValidation.value || passwordValidation.value) return

  loading.value = true
}
</script>

<style>
.p-divider-content {
  background-color: #121212 !important;
}
</style>
