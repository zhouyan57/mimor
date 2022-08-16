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
        <template #zh>项目</template>
        <template #en>Projects</template>
      </Lang>
    </template>

    <div class="h-full flex flex-col">
      <div>TODO</div>
    </div>
  </PageLayout>
</template>
