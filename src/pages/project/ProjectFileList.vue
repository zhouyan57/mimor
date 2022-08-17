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
  <div class="py-2 h-full relative">
    <div class="border-b py-1 border-stone-800">
      <div class="flex items-center space-x-2">
        <Lang class="font-bold font-logo text-xl">
          <template #zh>文件</template>
          <template #en>Files</template>
        </Lang>

        <div>
          <Link
            :href="`/projects/${state.name}/new-file`"
            :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
          >
            <PlusIcon
              class="w-5 h-5 text-stone-500 border border-stone-400 hover:bg-stone-100 rounded-full p-1"
            />
          </Link>
        </div>
      </div>
    </div>

    <div v-for="file in files" :key="file.path">
      <ProjectFileListItem :state="state" :file="file" />
    </div>

    <div class="absolute z-10 bottom-2 right-2">
      <Link
        :href="`/projects/${state.name}/new-file`"
        :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
      >
        <PlusIcon
          class="w-8 h-8 text-stone-500 border border-stone-400 hover:bg-stone-100 rounded-full p-2 bg-white shadow"
        />
      </Link>
    </div>
  </div>
</template>
