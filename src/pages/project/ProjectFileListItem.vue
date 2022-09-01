<script setup lang="ts">
import Link from '../../components/Link.vue'
import type { FileJson } from '../../jsons/FileJson'
import { PlayIcon } from '@heroicons/vue/24/outline'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="flex w-full justify-between py-0.5">
    <Link
      :href="`/authors/${$route.params.username}/projects/${state.name}/files/${file.path}`"
      class="overflow-x-auto overflow-y-hidden whitespace-pre font-bold hover:underline"
    >
      {{ file.path }}
    </Link>

    <div class="flex grow items-center">
      <div class="flex grow flex-col justify-center pl-1.5 pr-0.5 pt-0.5 pb-px">
        <div class="w-full border-b border-dashed border-stone-500"></div>
        <div class="w-full border-t border-dashed border-stone-500"></div>
      </div>

      <Link
        :href="`/authors/${$route.params.username}/projects/${state.name}/files/${file.path}?recall`"
      >
        <PlayIcon class="h-5 w-5 stroke-1 p-px" />
      </Link>
    </div>
  </div>
</template>
