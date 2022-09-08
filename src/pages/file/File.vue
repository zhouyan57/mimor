<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import FileHead from './FileHead.vue'
import FileTitle from './FileTitle.vue'
import FileEditor from './FileEditor.vue'
import FileRecall from './FileRecall.vue'
import FileConfig from './FileConfig.vue'
import { FileState as State } from './FileState'
import { formatParam } from '../../utils/formatParam'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
    path: formatParam(route.params.pathParts),
    project: { name: route.params.name as string },
  }),
)
</script>

<template>
  <PageLayout :options="{ onInitialized: () => state.load() }">
    <FileHead :state="state" />

    <template #title>
      <FileTitle :state="state" />
    </template>

    <FileRecall v-if="$route.query.recall !== undefined" :state="state" />
    <FileConfig v-else-if="$route.query.config !== undefined" :state="state" />
    <FileEditor v-else :state="state" />
  </PageLayout>
</template>
