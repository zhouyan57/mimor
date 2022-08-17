<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { ProjectListState as State } from './ProjectListState'
import { ProjectJson } from '../../jsons/ProjectJson'

defineProps<{ state: State; project: ProjectJson }>()
</script>

<template>
  <div class="border border-red-400">
    <div>{{ project.name }}</div>
    <div>{{ project.description }}</div>
  </div>
</template>
