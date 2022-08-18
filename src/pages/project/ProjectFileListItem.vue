<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { FileJson } from '../../jsons/FileJson'
import { PlayIcon } from '@heroicons/vue/outline'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="flex justify-between py-0.5">
    <Link
      :href="`/projects/${state.name}/files/${file.path}`"
      class="font-bold hover:underline"
    >
      {{ file.path }}
    </Link>

    <div class="flex grow">
      <div class="flex grow flex-col justify-center pl-2 pr-0.5 pt-0.5">
        <div class="w-full border-b border-dashed border-stone-900"></div>
        <div class="w-full border-t border-dashed border-stone-900"></div>
      </div>

      <Link :href="`/projects/${state.name}/files/${file.path}?recall`">
        <PlayIcon class="h-5 w-5 pt-1" />
      </Link>
    </div>
  </div>
</template>
