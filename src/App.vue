<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import { useGlobalLang } from './components/lang/useGlobalLang'
import { loginByToken } from './reactives/loginByToken'
import { useGlobalAuth } from './reactives/useGlobalAuth'
import { useGlobalToken } from './reactives/useGlobalToken'

const lang = useGlobalLang()
const auth = useGlobalAuth()
const token = useGlobalToken()

const report = {
  errorMessage: '',
}

onMounted(async () => {
  if (!token.name) {
    return
  }

  if (auth.username) {
    auth.isLoadingUser = true

    try {
      await loginByToken({ username: auth.username }, report)
    } catch (_error) {}

    auth.isLoadingUser = false
  }
})
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨</title>
    <title v-else>Mimor</title>
  </Head>

  <RouterView />
</template>
