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
            'focus:!border-red-500': !emailValidation
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
            'focus:*:!border-red-500': !passwordValidation
          }"
          placeholder="••••••••"
        />
      </div>

      <Button class="w-full" :disabled="disabled" :loading="loading" @click="onLogin" type="button">
        Login
      </Button>

      <div class="flex flex-col">
        <Button :to="registerUrl" as="router-link" link>
          Don't have an account? Register here
        </Button>
      </div>

      <Divider>OR</Divider>

      <Button class="w-full" :href="googleUrl" as="a">Google</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const store = useStore()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')

const emailValidation = computed(() => {
  return isValidEmail(email.value)
})

const passwordValidation = computed(() => {
  return isValidPassword(password.value)
})

const disabled = computed(() => {
  return !emailValidation.value || !passwordValidation.value
})

const loading = ref(false)

const onLogin = async () => {
  if (disabled.value) return

  loading.value = true

  const res = await store.login({
    email: email.value,
    password: password.value
  })

  loading.value = false

  if (res) {
    router.push((route.query.redirect as string) || '/')
  } else {
    show()
  }
}

const registerUrl = computed(() => {
  if (!route.query.redirect) return '/register'
  return `/register?redirect=${route.query.redirect}`
})

const googleUrl = computed(() => {
  return `${import.meta.env.VITE_APP_BACK_URL}/api/auth/google`
})

const toast = useToast()

const show = () => {
  toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials', life: 3000 })
}
</script>

<style>
.p-divider-content {
  background-color: #121212 !important;
}
</style>
