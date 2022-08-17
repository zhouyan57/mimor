<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import Link from '../../components/Link.vue'
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
      <div class="font-sans whitespace-pre flex flex-col overflow-x-auto">
        <div class="text-lg text-stone-600">{{ state.path }}</div>
      </div>
    </template>

    <div class="fonttext-lg whitespace-pre flex overflow-x-auto">
      <Link
        :href="`/projects/${state.project.name}`"
        class="hover:underline font-bold"
      >
        {{ state.project.name }}
      </Link>

      <div class="text-stone-600">/{{ state.path }}</div>
    </div>

    <div v-if="state.file">
      {{ state.file.content }}
    </div>
  </PageLayout>
</template>
