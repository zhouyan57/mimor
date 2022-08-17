<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import LoginStart from './LoginStart.vue'
import { LoginState as State } from './LoginState'
import LoginVerifying from './LoginVerifying.vue'

const state = reactive(new State())
</script>

<template>
  <PageLayout mode="guest">
    <Head>
      <title v-if="$app.lang.zh">登录 | 谜墨</title>
      <title v-else>Login | Mimor</title>
    </Head>

    <div
      v-if="!state.verifying"
      class="py-2 flex h-full flex-col items-center md:pt-10 md:pr-20"
    >
      <LoginStart :state="state" />
    </div>

    <div
      v-else
      class="py-12 flex h-full flex-col items-center md:pt-10 md:pr-20"
    >
      <LoginVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
