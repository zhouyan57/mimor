<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectConfig from './ProjectConfig.vue'
import ProjectHead from './ProjectHead.vue'
import ProjectNormal from './ProjectNormal.vue'
import ProjectRecall from './ProjectRecall.vue'
import { ProjectState as State } from './ProjectState'
import ProjectTitle from './ProjectTitle.vue'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
    name: route.params.name as string,
  }),
)

onMounted(async () => {
  await state.load()
})
</script>

<template>
  <ProjectRecall v-if="$route.query.recall !== undefined" :state="state" />

  <PageLayout v-else>
    <ProjectHead :state="state" />

    <template #title>
      <ProjectTitle :state="state" />
    </template>

    <ProjectConfig v-if="$route.query.config !== undefined" :state="state" />
    <ProjectNormal v-else :state="state" />
  </PageLayout>
</template>
