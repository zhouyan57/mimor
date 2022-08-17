<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectState as State } from './ProjectState'

const route = useRoute()

const state = reactive(
  new State({
    name: route.params.name as string,
  })
)
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

    <div v-if="state.project">
      <div v-if="state.project.description">
        {{ state.project.description }}
      </div>
    </div>
  </PageLayout>
</template>
