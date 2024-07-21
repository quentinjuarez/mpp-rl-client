<template>
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Profile</h1>

    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Personal Information</h2>
      <div class="flex gap-2">
        <div class="flex w-full flex-col gap-2">
          <label for="firstName">
            <span>First name</span>
          </label>
          <InputText id="firstName" v-model="firstName" disabled />
        </div>
        <div class="flex w-full flex-col gap-2">
          <label for="lastName">
            <span>Last name</span>
          </label>
          <InputText id="lastName" v-model="lastName" disabled />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label for="email">
          <span>Email</span>
        </label>
        <InputText id="email" v-model="email" type="email" disabled autocomplete="email" />
      </div>
    </div>

    <Divider></Divider>

    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Account Information</h2>

      <div class="flex flex-col gap-2">
        <label for="username">
          <span>Username</span>
          <span class="ml-1 text-red-500">*</span>
        </label>

        <IconField>
          <InputText
            class="w-full"
            id="username"
            autocomplete="off"
            v-model="username"
            :class="{
              'focus:!border-neutral-500': notChangedUsername,
              'focus:!border-red-500': !usernameValidation || !usernameIsAvailable,
              'focus:!border-green-500': usernameIsAvailable && usernameValidation
            }"
            placeholder="Enter your username"
            @update:modelValue="checkUsernameDebounced"
          />
          <InputIcon
            :class="{
              'opacity-0': !loadingCheckUsername
            }"
            class="pi pi-spin pi-spinner"
          />
        </IconField>
      </div>

      <Button
        class="w-full"
        type="button"
        :disabled="disabledUsername || !usernameIsAvailable"
        @click="updateUsername"
      >
        Update username
      </Button>
    </div>

    <Divider></Divider>

    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Change Password</h2>
      <div class="flex flex-col gap-2">
        <label for="old-password">
          <span>Old password</span>
          <span class="ml-1 text-red-500">*</span>
        </label>
        <Password
          class="*:w-full"
          id="old-password"
          v-model="oldPassword"
          toggleMask
          :feedback="false"
          :class="{
            'focus:*:!border-red-500': !oldPasswordValidation
          }"
          placeholder="Enter your old password"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="new-password">
          <span>New password</span>
          <span class="ml-1 text-red-500">*</span>
        </label>
        <Password
          class="*:w-full"
          id="new-password"
          v-model="newPassword"
          toggleMask
          :feedback="false"
          :class="{
            'focus:*:!border-red-500': !newPasswordValidation
          }"
          placeholder="Enter your new password"
        />
      </div>

      <Button class="w-full" type="button" :disabled="disabledPassword" @click="updatePassword">
        Update password
      </Button>
    </div>

    <Divider></Divider>

    <Button as="router-link" to="/logout" class="mb-auto w-full" severity="danger">Logout</Button>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'
const store = useStore()

const { firstName, lastName, email } = store.me!

const username = ref(store.me!.username)

const usernameValidation = computed(() => isValidUsername(username.value))

const disabledUsername = computed(
  () => !usernameValidation.value || username.value === store.me!.username
)

const notChangedUsername = computed(() => username.value === store.me!.username)

const usernameIsAvailable = ref(true)
const loadingCheckUsername = ref(false)

const checkUsername = async () => {
  if (!usernameValidation.value) return

  loadingCheckUsername.value = true
  usernameIsAvailable.value = await store.checkUsername(username.value)
  loadingCheckUsername.value = false
}

const checkUsernameDebounced = debounce(checkUsername, 500)

const updateUsername = async () => {
  if (disabledUsername.value) return

  await store.updateMe({
    username: username.value
  })
}

const oldPassword = ref('')
const newPassword = ref('')

const oldPasswordValidation = computed(() => isValidPassword(oldPassword.value))
const newPasswordValidation = computed(() => isValidPassword(newPassword.value))

const disabledPassword = computed(
  () => !oldPasswordValidation.value || !newPasswordValidation.value
)

const updatePassword = async () => {
  if (disabledPassword.value) return

  await store.updatePassword({
    oldPassword: oldPassword.value,
    newPassword: newPassword.value
  })
}
</script>
