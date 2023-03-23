<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex items-center space-x-2">
    <Lang>
      <template #zh>项目</template>
      <template #en>Projects</template>
    </Lang>
    <div v-if="$app.auth.user?.username === state.username">
      <Link
        :href="`/authors/${state.username}/project-create`"
        :title="$app.lang.zh ? '创建新项目' : 'Create a new project.'"
      >
        <PlusIcon class="h-6 w-6 rounded-full border border-stone-500 p-1" />
      </Link>
    </div>
  </div>
</template>
