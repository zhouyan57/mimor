<script setup lang="ts">
import Link from '../../components/Link.vue'
import { PlayIcon } from '@heroicons/vue/outline'
import type { ProjectJson } from '../../jsons/ProjectJson'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State; project: ProjectJson }>()
</script>

<template>
  <div
    class="flex flex-col overflow-x-auto rounded-sm border border-stone-500 py-3 text-xl"
  >
    <div class="flex justify-between px-3">
      <div>
      <Link
        :href="`/projects/${project.name}`"
        class="overflow-x-auto font-bold hover:underline"
      >
        {{ project.name }}
      </Link>
      </div>

      <div >
        <Link :href="`/projects/${project.name}?recall`">
          <PlayIcon class="h-6 w-6 stroke-1" />
        </Link>
      </div>
    </div>

    <div v-if="project.description" class="px-3 font-serif">
      {{ project.description }}
    </div>
  </div>
</template>
