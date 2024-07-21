<template>
  <div class="mx-auto mt-8 max-w-screen-sm space-y-4 px-6">
    <h1 class="text-6xl">Register</h1>

    <div class="space-y-2">
      <div class="flex gap-2">
        <div class="flex w-full flex-col gap-2">
          <label for="firstName">
            <span>First name</span>
            <span class="ml-1 text-red-500">*</span>
          </label>
          <InputText
            id="firstName"
            v-model="firstName"
            :class="{
              'focus:!border-red-500': !firstNameValidation
            }"
            placeholder="John"
          />
        </div>
        <div class="flex w-full flex-col gap-2">
          <label for="lastName">
            <span>Last name</span>
            <span class="ml-1 text-red-500">*</span>
          </label>
          <InputText
            id="lastName"
            v-model="lastName"
            :class="{
              'focus:!border-red-500': !lastNameValidation
            }"
            placeholder="John"
          />
        </div>
      </div>

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
        />
      </div>

      <Button
        class="w-full"
        :disabled="disabled"
        :loading="loading"
        @click="onRegister"
        type="button"
      >
        Register
      </Button>

      <div class="flex flex-col">
        <Button :to="loginUrl" as="router-link" link>Already have an account? Login here</Button>
      </div>

      <Divider>OR</Divider>

      <Button class="w-full">Google</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isValidEmail, isValidPassword } from '@/utils/validators'

const store = useStore()
const router = useRouter()
const route = useRoute()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const textValidation = (text: string) => text.trim().length > 0

const firstNameValidation = computed(() => textValidation(firstName.value))
const lastNameValidation = computed(() => textValidation(lastName.value))

const emailValidation = computed(() => {
  return isValidEmail(email.value)
})

const passwordValidation = computed(() => {
  return isValidPassword(password.value)
})

const loading = ref(false)

const disabled = computed(
  () =>
    !firstNameValidation.value ||
    !lastNameValidation.value ||
    !emailValidation.value ||
    !passwordValidation.value
)

const onRegister = async () => {
  if (disabled.value) return

  loading.value = true

  const res = await store.register({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  })

  loading.value = false

  if (res) {
    router.push((route.query.redirect as string) || '/')
  }
}

const loginUrl = computed(() => {
  if (!route.query.redirect) return '/login'
  return `/login?redirect=${route.query.redirect}`
})
</script>
