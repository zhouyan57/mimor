<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Link from '../../components/Link.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-sm border border-dashed border-stone-900 py-4"
  >
    <Link
      :href="`/authors/${$route.params.username}/projects/${state.name}/file-create`"
      :title="$app.lang.zh ? '创建新文件' : 'Create a new file.'"
    >
      <PlusIcon
        class="h-8 w-8 rounded-full border border-stone-500 stroke-1 p-1 text-stone-500"
      />
    </Link>
  </div>
</template>
