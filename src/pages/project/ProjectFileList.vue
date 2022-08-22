<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { FileJson } from '../../jsons/FileJson'
import ProjectFileListItem from './ProjectFileListItem.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; files: Array<FileJson> }>()
</script>

<template>
  <div class="h-full">
    <div class="border-b border-stone-500 py-1">
      <div class="flex items-center space-x-2">
        <Lang class="font-logo text-xl font-bold">
          <template #zh>文件</template>
          <template #en>Files</template>
        </Lang>

        <div>
          <Link
            :href="`/projects/${state.name}/new-file`"
            :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
          >
            <PlusIcon
              class="h-5 w-5 rounded-full border border-stone-500 p-1 text-stone-500 hover:bg-stone-100"
            />
          </Link>
        </div>
      </div>
    </div>

    <div class="space-y-2 py-2">
      <div v-for="file in files" :key="file.path">
        <ProjectFileListItem :state="state" :file="file" />
      </div>
    </div>

    <div class="fixed bottom-3 right-3 z-10">
      <Link
        :href="`/projects/${state.name}/new-file`"
        :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
      >
        <PlusIcon
          class="h-8 w-8 rounded-full border border-stone-500 bg-white p-2 text-stone-500 shadow hover:bg-stone-100"
        />
      </Link>
    </div>
  </div>
</template>
