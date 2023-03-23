<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { FileJson } from '../../schemas/FileJson'
import ProjectFileListCreateTheFirstFile from './ProjectFileListCreateTheFirstFile.vue'
import ProjectFileListItem from './ProjectFileListItem.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; files: Array<FileJson> }>()
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="border-b border-stone-500 py-1">
      <div class="flex items-center space-x-2">
        <Lang class="font-logo text-xl font-bold">
          <template #zh>文件</template>
          <template #en>Files</template>
        </Lang>

        <div v-if="$app.auth.user?.username === $route.params.username">
          <Link
            :href="`/authors/${$route.params.username}/projects/${state.name}/file-create`"
            :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
          >
            <PlusIcon
              class="h-5 w-5 rounded-full border border-stone-500 p-1"
            />
          </Link>
        </div>
      </div>
    </div>

    <div class="h-full space-y-2 overflow-y-auto py-2">
      <div v-for="file in files" :key="file.path">
        <ProjectFileListItem :state="state" :file="file" />
      </div>

      <div v-if="files.length === 0">
        <div v-if="$app.auth.user?.username === $route.params.username">
          <ProjectFileListCreateTheFirstFile :state="state" />
        </div>
        <div v-else>
          <Lang class="text-xl text-stone-500">
            <template #zh>空的文件列表</template>
            <template #en>Empty file list.</template>
          </Lang>
        </div>
      </div>
    </div>
  </div>
</template>
