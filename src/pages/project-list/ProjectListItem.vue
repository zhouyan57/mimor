<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { ProjectJson } from '../../jsons/ProjectJson'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State; project: ProjectJson }>()
</script>

<template>
  <div class="p-3 border rounded-sm border-stone-400 space-y-2 text-xl">
    <Link
      :href="`/projects/${project.name}`"
      class="font-bold hover:underline"
      >{{ project.name }}</Link
    >
    <div v-if="project.description" class="font-serif">
      {{ project.description }}
    </div>
  </div>
</template>
