<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
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
  <PageLayout mode="auth" :options="{ onInitialized: () => state.load() }">
    <Head v-if="$route.params.name">
      <title v-if="$app.lang.zh">{{ $route.params.name }} | 谜墨</title>
      <title v-else>{{ $route.params.name }} | Mimor</title>
    </Head>

    <template #title>
      <div class="font-sans">{{ $route.params.name }}</div>
    </template>

    <div v-if="state.project?.description" class="font-serif text-lg">
      {{ state.project.description }}
    </div>

    <ProjectFileList v-if="state.files" :state="state" :files="state.files" />
    <Loading v-else class="text-xl">
      <Lang>
        <template #zh>文件加载中……</template>
        <template #en>Loading files...</template>
      </Lang>
    </Loading>
  </PageLayout>
</template>
