<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { reactive, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectListItem from './ProjectListItem.vue'
import { ProjectListState as State } from './ProjectListState'
import ProjectListControl from './ProjectListControl.vue'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
  }),
)

watch(
  () => route.params.username,
  () => {
    state.update({
      username: route.params.username as string,
    })
  },
)
</script>

<template>
  <PageLayout :options="{ onInitialized: () => state.load() }">
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
        <div v-if="$app.auth.user?.username === $route.params.username">
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
      <div v-if="state.author" class="flex h-full flex-col pb-2">
        <Lang class="font-logo text-2xl font-bold">
          <template #zh>
            <div>
              {{ state.author.config?.name_zh || state.author.name }}
            </div>
          </template>
          <template #en>
            <div>
              {{ state.author.config?.name_en || state.author.name }}
            </div>
          </template>
        </Lang>

        <Link
          :href="`/authors/${state.author.username}`"
          class="overflow-x-auto whitespace-pre text-xl hover:underline"
        >
          {{ state.author.username }}
        </Link>
      </div>

      <Loading v-else class="text-xl">
        <Lang>
          <template #zh>项目作者中……</template>
          <template #en>Loading author...</template>
        </Lang>
      </Loading>

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
