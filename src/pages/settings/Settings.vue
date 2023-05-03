<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import SettingsLoading from './SettingsLoading.vue'
import SettingsUser from './SettingsUser.vue'

const auth = useGlobalAuth()

const triedToLogin = ref(false)

onMounted(async () => {
  await loginByTokenIfNotAlready()

  triedToLogin.value = true
})
</script>

<template>
  <SettingsUser v-if="auth.user" :user="auth.user" />
  <SettingsLoading v-else-if="!triedToLogin" :options="{}" />
</template>
