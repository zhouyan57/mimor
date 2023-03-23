<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import type { ProjectJson } from '../../schemas/ProjectJson'
import { formatAgo } from '../../utils/formatDate'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State; project: ProjectJson }>()

function projectFormatAgo(project: ProjectJson): string {
  return formatAgo(app.projects.date(project), { lang: app.lang.tag })
}
</script>

<template>
  <div
    class="flex flex-col space-y-1 overflow-x-auto rounded-sm border border-stone-500 p-3 text-xl"
  >
    <div class="flex items-center justify-between">
      <div class="overflow-x-auto whitespace-pre">
        <Hyperlink
          :href="`/authors/${state.username}/projects/${project.name}`"
          class="overflow-x-auto font-bold hover:underline"
        >
          {{ project.name }}
        </Hyperlink>
      </div>

      <div class="ml-1">
        <Hyperlink
          :href="`/authors/${state.username}/projects/${project.name}?recall`"
        >
          <PlayIcon class="h-6 w-6 stroke-1" />
        </Hyperlink>
      </div>
    </div>

    <div v-if="project.description" class="font-serif">
      {{ project.description }}
    </div>

    <div class="flex flex-col items-end text-lg">
      {{ projectFormatAgo(project) }}
    </div>
  </div>
</template>
