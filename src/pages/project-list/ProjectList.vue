<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectListHead from './ProjectListHead.vue'
import ProjectListTitle from './ProjectListTitle.vue'
import ProjectListItem from './ProjectListItem.vue'
import ProjectListCreateTheFirstProject from './ProjectListCreateTheFirstProject.vue'
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
    <ProjectListHead :state="state" />

    <template #title>
      <ProjectListTitle :state="state" />
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state.author" class="flex flex-col pb-2">
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

      <div v-if="state.projects" class="flex h-full flex-col overflow-y-auto">
        <div class="flex h-full flex-col space-y-3 overflow-y-auto pb-2">
          <div v-for="project of state.sortedProjects" :key="project.name">
            <ProjectListItem :state="state" :project="project" />
          </div>

          <div
            v-if="
              state.sortedProjects === undefined ||
              state.sortedProjects.length === 0
            "
          >
            <div v-if="$app.auth.user?.username === $route.params.username">
              <ProjectListCreateTheFirstProject :state="state" />
            </div>
            <div v-else>
              <Lang class="text-xl text-stone-500">
                <template #zh>空的项目列表</template>
                <template #en>Empty project list.</template>
              </Lang>
            </div>
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
