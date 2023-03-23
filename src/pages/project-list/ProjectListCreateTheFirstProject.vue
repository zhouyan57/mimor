<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-sm border border-dashed border-stone-900 py-4"
  >
    <Hyperlink
      :href="`/authors/${$route.params.username}/project-create`"
      :title="$app.lang.zh ? '创建新项目' : 'Create a new project.'"
    >
      <PlusIcon
        class="h-8 w-8 rounded-full border border-stone-500 stroke-1 p-1 text-stone-500"
      />
    </Hyperlink>
  </div>
</template>
