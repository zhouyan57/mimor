<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { PlayIcon, PencilIcon } from '@heroicons/vue/24/outline'
import Link from '../../components/Link.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import FileEditor from './FileEditor.vue'
import FileRecall from './FileRecall.vue'
import { FileState as State } from './FileState'

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
    <Head v-if="state.path">
      <title v-if="$app.lang.zh">{{ state.path }} | 谜墨</title>
      <title v-else>{{ state.path }} | Mimor</title>
    </Head>

    <template #title>
      <div class="flex w-full items-center space-x-2">
        <div
          class="flex w-full overflow-x-auto overflow-y-hidden whitespace-pre font-sans text-xl"
        >
          <Link
            :href="`/projects/${state.project.name}`"
            class="font-bold hover:underline"
          >
            {{ state.project.name }}
          </Link>

          <div class="text-stone-600">/{{ state.path }}</div>
        </div>

        <Link
          v-if="$route.query.recall !== undefined"
          mode="replace"
          :href="`/projects/${state.project.name}/files/${state.path}`"
        >
          <PencilIcon class="h-5 w-5 stroke-1" />
        </Link>
        <Link
          v-else
          mode="replace"
          :href="`/projects/${state.project.name}/files/${state.path}?recall`"
        >
          <PlayIcon class="h-5 w-5 stroke-1" />
        </Link>
      </div>
    </template>

    <FileRecall v-if="$route.query.recall !== undefined" :state="state" />
    <FileEditor v-else :state="state" />
  </PageLayout>
</template>
