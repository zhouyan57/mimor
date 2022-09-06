<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { PlayIcon, PencilIcon } from '@heroicons/vue/24/outline'
import Link from '../../components/Link.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import FileEditor from './FileEditor.vue'
import FileRecall from './FileRecall.vue'
import FileEdit from './FileEdit.vue'
import { FileState as State } from './FileState'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
    path: formatParam(route.params.pathParts),
    project: { name: route.params.name as string },
  }),
)

function formatParam(param: string | Array<string>): string {
  return typeof param === 'string' ? param : param.join('/')
}
</script>

<template>
  <PageLayout :options="{ onInitialized: () => state.load() }">
    <Head v-if="state.path">
      <title v-if="$app.lang.zh">{{ state.path }} | 谜墨</title>
      <title v-else>{{ state.path }} | Mimor</title>
    </Head>

    <template #title>
      <div class="flex w-full items-center space-x-2">
        <div
          class="flex w-full space-x-1 overflow-x-auto overflow-y-hidden whitespace-pre font-sans text-xl"
        >
          <Link
            :href="`/authors/${$route.params.username}`"
            class="hover:underline"
            >{{ $route.params.username }}</Link
          >

          <div>/</div>

          <Link
            :href="`/authors/${$route.params.username}/projects/${state.project.name}`"
            class="font-bold hover:underline"
          >
            {{ state.project.name }}
          </Link>

          <div class="font-normal">/{{ state.path }}</div>
        </div>

        <Link
          v-if="$route.query.recall !== undefined"
          mode="replace"
          :href="`/authors/${$route.params.username}/projects/${state.project.name}/files/${state.path}`"
        >
          <PencilIcon class="h-5 w-5 stroke-1" />
        </Link>
        <Link
          v-else
          mode="replace"
          :href="`/authors/${$route.params.username}/projects/${state.project.name}/files/${state.path}?recall`"
        >
          <PlayIcon class="h-5 w-5 stroke-1" />
        </Link>
      </div>
    </template>

    <FileRecall v-if="$route.query.recall !== undefined" :state="state" />
    <FileEdit v-if="$route.query.edit !== undefined" :state="state" />
    <FileEditor v-else :state="state" />
  </PageLayout>
</template>
