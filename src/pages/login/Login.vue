<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { reactive, onBeforeMount } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import LoginStart from './LoginStart.vue'
import { LoginState as State } from './LoginState'
import LoginVerifying from './LoginVerifying.vue'

const state = reactive(new State())
const router = useRouter()

onBeforeMount(async () => {
  await app.guard.guestOnly(router)
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="$app.lang.zh">登录 | 谜墨</title>
      <title v-else>Login | Mimor</title>
    </Head>

    <div
      v-if="!state.verifying"
      class="flex h-full flex-col items-center py-2 md:pt-10 md:pr-20"
    >
      <LoginStart :state="state" />
    </div>

    <div
      v-else
      class="flex h-full flex-col items-center py-12 md:pt-10 md:pr-20"
    >
      <LoginVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
