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
      class="overflow-x-auto font-bold hover:underline px-3"
    >
      {{ project.name }}
    </Link>
    <div v-if="project.description" class="font-serif px-3">
      {{ project.description }}
    </div>
  </div>
</template>
