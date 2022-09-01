<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { PlayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectFileList from './ProjectFileList.vue'
import ProjectControl from './ProjectControl.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <PageLayout :options="{ onInitialized: () => state.load() }">
    <Head v-if="$route.params.name">
      <title v-if="$app.lang.zh">{{ $route.params.name }} | 谜墨</title>
      <title v-else>{{ $route.params.name }} | Mimor</title>
    </Head>

    <template #title>
      <div class="flex items-center justify-between">
        <div class="font-sans">{{ $route.params.name }}</div>
        <div>
          <Link
            :href="`/authors/${$route.params.username}/projects/${$route.params.name}?recall`"
          >
            <PlayIcon class="h-6 w-6 stroke-1" />
          </Link>
        </div>
      </div>
    </template>

    <div class="flex h-full flex-col justify-between">
      <div
        v-if="state.project?.description"
        class="max-h-max font-serif text-xl"
      >
        {{ state.project.description }}
      </div>

      <div class="h-full overflow-y-auto">
        <ProjectFileList
          v-if="state.sortedFiles"
          :state="state"
          :files="state.sortedFiles"
        />
        <Loading v-else class="text-xl">
          <Lang>
            <template #zh>文件加载中……</template>
            <template #en>Loading files...</template>
          </Lang>
        </Loading>
      </div>

      <ProjectControl :state="state" />
    </div>
  </PageLayout>
</template>
