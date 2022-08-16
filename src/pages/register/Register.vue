<script setup lang="ts">
import { reactive } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import RegisterStart from './RegisterStart.vue'
import { RegisterState as State } from './RegisterState'
import RegisterVerifying from './RegisterVerifying.vue'

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
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
      <RegisterStart :state="state" />
    </div>

    <div
      v-else
      class="py-12 flex h-full flex-col items-center md:pt-10 md:pr-20"
    >
      <RegisterVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
