<script setup lang="ts">
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectsState as State } from './ProjectsState'

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <template #title>
      <Lang>
        <template #zh>创建新项目</template>
        <template #en>Create a new project</template>
      </Lang>
    </template>

    <form class="flex w-full flex-col space-y-2">
      <input
        class="py-1 px-2 w-full"
        name="slug"
        type="text"
        value=""
        placeholder="project-slug"
      />

      <input
        class="py-1 px-2 w-full"
        name="name"
        type="text"
        value=""
        placeholder="Project name"
      />
    </form>
  </PageLayout>
</template>
