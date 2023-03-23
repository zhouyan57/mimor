<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onBeforeMount, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import RegisterStart from './RegisterStart.vue'
import { RegisterState as State } from './RegisterState'
import RegisterVerifying from './RegisterVerifying.vue'

const state = reactive(new State())

const router = useRouter()

onBeforeMount(async () => {
  await app.guard.guestOnly(router)
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="$app.lang.zh">注册 | 谜墨</title>
      <title v-else>Register | Mimor</title>
    </Head>

    <div
      v-if="!state.verifying"
      class="flex h-full flex-col items-center py-2 md:pt-10 md:pr-20"
    >
      <RegisterStart :state="state" />
    </div>

    <div
      v-else
      class="flex h-full flex-col items-center py-12 md:pt-10 md:pr-20"
    >
      <RegisterVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
