<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { ProjectJson } from '../../jsons/ProjectJson'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State; project: ProjectJson }>()
</script>

<template>
  <div class="overflow-x-auto rounded-sm border border-stone-500 py-2 text-xl">
    <Link
      :href="`/projects/${project.name}`"
      class="overflow-x-auto px-2 font-bold hover:underline md:px-3"
    >
      {{ project.name }}
    </Link>
    <div v-if="project.description" class="px-2 font-serif md:px-3">
      {{ project.description }}
    </div>
  </div>
</template>
