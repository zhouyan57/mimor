<script setup lang="ts">
import Link from '../../components/Link.vue'
import { PlayIcon } from '@heroicons/vue/24/outline'
import type { ProjectJson } from '../../jsons/ProjectJson'
import { ProjectListState as State } from './ProjectListState'
import { formatDate, formatAgo } from '../../utils/formatDate'

defineProps<{ state: State; project: ProjectJson }>()

function projectFormatAgo(project: ProjectJson): string {
  return formatAgo(app.projects.date(project), { lang: app.lang.tag })
}
</script>

<template>
  <div
    class="flex flex-col overflow-x-auto rounded-sm border border-stone-500 py-2 text-xl"
  >
    <div class="flex items-center justify-between px-3 py-1">
      <div class="overflow-x-auto whitespace-pre">
        <Link
          :href="`/projects/${project.name}`"
          class="overflow-x-auto font-bold hover:underline"
        >
          {{ project.name }}
        </Link>
      </div>

      <div class="ml-1">
        <Link :href="`/projects/${project.name}?recall`">
          <PlayIcon class="h-6 w-6 stroke-1" />
        </Link>
      </div>
    </div>

    <div v-if="project.description" class="px-3 py-1 font-serif">
      {{ project.description }}
    </div>

    <div class="flex flex-col items-end px-3 py-1 text-lg">
      {{ projectFormatAgo(project) }}
    </div>
  </div>
</template>
