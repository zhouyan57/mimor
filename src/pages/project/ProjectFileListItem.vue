<script setup lang="ts">
import type { FileJson } from '../../jsons/FileJson'
import Link from '../../components/Link.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="border border-stone-500 rounded-sm px-3 py-2">
    <Link
      :href="`/projects/${state.name}/files/${file.path}`"
      class="font-bold hover:underline"
    >
      {{ file.path }}
    </Link>
  </div>
</template>
