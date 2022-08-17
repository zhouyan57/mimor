<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectFileState as State } from './ProjectFileState'

const state = reactive(new State())

function formatPath(pathParts: string | Array<string>): string {
  return typeof pathParts === 'string' ? pathParts : pathParts.join('/')
}
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
      <title v-if="$app.lang.zh">
        {{ formatPath($route.params.pathParts) }} | 谜墨
      </title>
      <title v-else>{{ formatPath($route.params.pathParts) }} | Mimor</title>
    </Head>

    <template #title>
      <div class="font-sans">{{ formatPath($route.params.pathParts) }}</div>
    </template>

    <div>
      <div>ProjectFile</div>
      <div>{{ $route.params.name }}</div>
      <div>{{ formatPath($route.params.pathParts) }}</div>
    </div>
  </PageLayout>
</template>
