<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectFileList from './ProjectFileList.vue'
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
    <Head>
      <title>{{ $route.params.name }} | 谜墨</title>
    </Head>

    <template #title>
      <div class="font-sans">{{ $route.params.name }}</div>
    </template>

    <div v-if="state.project?.description" class="font-serif text-lg">
      {{ state.project.description }}
    </div>

    <ProjectFileList v-if="state.files" :state="state" :files="state.files" />
  </PageLayout>
</template>
