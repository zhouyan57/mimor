<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import ProjectFileList from './ProjectFileList.vue'
import ProjectControl from './ProjectControl.vue'
import { ProjectState as State } from './ProjectState'

const { state } = defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col justify-between">
    <textarea
      v-if="state.project?.description"
      rows="3"
      class="max-h-max border-y border-stone-300 bg-white font-serif text-xl disabled:bg-white"
      disabled
      :value="state.project.description"
    ></textarea>

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
</template>
