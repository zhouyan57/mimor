<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectFileState as State } from './ProjectFileState'

const route = useRoute()

const state = reactive(
  new State({
    path: formatParam(route.params.pathParts),
    project: {
      name: formatParam(route.params.name),
    },
  })
)

function formatParam(param: string | Array<string>): string {
  return typeof param === 'string' ? param : param.join('/')
}
</script>

<template>
  <PageLayout mode="auth" :options="{ onInitialized: () => state.load() }">
    <Head>
      <title v-if="$app.lang.zh">{{ state.path }} | 谜墨</title>
      <title v-else>{{ state.path }} | Mimor</title>
    </Head>

    <template #title>
      <div class="font-sans">{{ state.path }}</div>
    </template>

    <div>
      <div>{{ state.project.name }}</div>
      <div>{{ state.path }}</div>
    </div>
  </PageLayout>
</template>
