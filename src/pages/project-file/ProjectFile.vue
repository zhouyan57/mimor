<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectFileState as State } from './ProjectFileState'

const route = useRoute()

const state = reactive(
  new State({
    path: formatPath(route.params.pathParts),
    project: {
      name: route.params.name,
    },
  })
)

function formatPath(pathParts: string | Array<string>): string {
  return typeof pathParts === 'string' ? pathParts : pathParts.join('/')
}
</script>

<template>
  <PageLayout mode="auth" :options="{ onInitialized: () => state.load() }">
    <Head>
      <title v-if="$app.lang.zh">
        {{ state.path }} | 谜墨
      </title>
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
