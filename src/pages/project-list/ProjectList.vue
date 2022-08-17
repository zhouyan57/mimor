<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/outline'
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectListItem from './ProjectListItem.vue'
import { ProjectListState as State } from './ProjectListState'

const state = reactive(new State())
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
      <title v-if="$app.lang.zh">项目 | 谜墨</title>
      <title v-else>Projects | Mimor</title>
    </Head>

    <template #title>
      <div class="flex space-x-2 items-center">
        <Lang>
          <template #zh>项目</template>
          <template #en>Projects</template>
        </Lang>
        <div>
          <Link
            href="/new-project"
            :title="$app.lang.zh ? '创建新项目' : 'Create a new project.'"
          >
            <PlusIcon
              class="w-6 h-6 text-stone-500 border border-stone-400 hover:bg-stone-100 rounded-full p-1"
            />
          </Link>
        </div>
      </div>
    </template>

    <div class="h-full flex flex-col relative overflow-y-auto">
      <div v-if="state.projects" class="h-full space-y-3 overflow-y-auto pr-3">
        <div v-for="project of state.projects" :key="project.name">
          <ProjectListItem :state="state" :project="project" />
        </div>
      </div>
      <div v-else>
        <Lang>
          <template #zh>加载项目中…</template>
          <template #en>Loading projects...</template>
        </Lang>
      </div>

      <div class="absolute z-10 bottom-2 right-2">
        <Link
          href="/new-project"
          :title="$app.lang.zh ? '创建新项目' : 'Create a new project.'"
        >
          <PlusIcon
            class="w-8 h-8 text-stone-500 border border-stone-400 hover:bg-stone-100 rounded-full p-2 bg-white shadow"
          />
        </Link>
      </div>
    </div>
  </PageLayout>
</template>
