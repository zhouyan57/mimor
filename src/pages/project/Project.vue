<script setup lang="ts">
import { reactive } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectState as State } from './ProjectState'

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: async () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }

        await state.load()
      },
    }"
  >
    <template #title>
      <div>{{ $route.params.name }}</div>
    </template>

    <div>Project</div>
  </PageLayout>
</template>
