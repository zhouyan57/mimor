<script setup lang="ts">
import { onMounted } from 'vue'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectHead from './ProjectHead.vue'
import ProjectTitle from './ProjectTitle.vue'
import ProjectFileList from './ProjectFileList.vue'
import ProjectControl from './ProjectControl.vue'
import { ProjectState as State } from './ProjectState'

const { state } = defineProps<{ state: State }>()

onMounted(async () => {
  await state.load()
})
</script>

<template>
  <PageLayout>
    <ProjectHead :state="state" />

    <template #title>
      <ProjectTitle :state="state" />
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
