<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { FileJson } from '../../jsons/FileJson'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="rounded-sm border border-stone-500 px-3 py-2">
    <Link
      :href="`/projects/${state.name}/files/${file.path}`"
      class="font-bold hover:underline"
    >
      {{ file.path }}
    </Link>
  </div>
</template>
