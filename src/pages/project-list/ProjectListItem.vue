<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { ProjectJson } from '../../jsons/ProjectJson'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State; project: ProjectJson }>()
</script>

<template>
  <div class="space-y-2 rounded-sm border border-stone-500 px-3 py-2 text-xl">
    <Link :href="`/projects/${project.name}`" class="font-bold hover:underline">
      {{ project.name }}
    </Link>
    <div v-if="project.description" class="font-serif">
      {{ project.description }}
    </div>
  </div>
</template>
