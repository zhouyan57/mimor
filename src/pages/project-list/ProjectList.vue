<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectListItem from './ProjectListItem.vue'
import { ProjectListState as State } from './ProjectListState'
import ProjectListControl from './ProjectListControl.vue'

const state = reactive(new State())
</script>

<template>
  <PageLayout mode="auth" :options="{ onInitialized: () => state.load() }">
    <Head>
      <title v-if="$app.lang.zh">项目 | 谜墨</title>
      <title v-else>Projects | Mimor</title>
    </Head>

    <template #title>
      <div class="flex items-center space-x-2">
        <Lang>
          <template #zh>项目</template>
          <template #en>Projects</template>
        </Lang>
        <div>
          <Link
            :href="`/authors/${$route.params.username}/new-project`"
            :title="$app.lang.zh ? '创建新项目' : 'Create a new project.'"
          >
            <PlusIcon
              class="h-6 w-6 rounded-full border border-stone-500 p-1 text-stone-500 hover:bg-stone-100"
            />
          </Link>
        </div>
      </div>
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state.projects" class="flex h-full flex-col">
        <div class="flex h-full flex-col space-y-3 overflow-y-auto pb-2">
          <div v-for="project of state.sortedProjects" :key="project.name">
            <ProjectListItem :state="state" :project="project" />
          </div>
        </div>

        <ProjectListControl :state="state" />
      </div>

      <Loading v-else class="text-xl">
        <Lang>
          <template #zh>项目加载中……</template>
          <template #en>Loading projects...</template>
        </Lang>
      </Loading>
    </div>
  </PageLayout>
</template>
