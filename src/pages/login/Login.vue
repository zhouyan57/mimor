<script setup lang="ts">
import { reactive } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import LoginStart from './LoginStart.vue'
import { LoginState as State } from './LoginState'
import LoginVerifying from './LoginVerifying.vue'

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: async () => {
        if ($app.auth.user) {
          $router.replace('/projects')
        }
      },
    }"
  >
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
