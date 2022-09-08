<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import Link from '../../components/Link.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex items-center justify-between">
    <div
      class="flex space-x-1 overflow-x-auto overflow-y-hidden whitespace-pre font-sans"
    >
      <Link :href="`/authors/${state.username}`" class="hover:underline">
        {{ state.username }}
      </Link>

      <div>/</div>

      <div class="font-normal">{{ state.name }}</div>
    </div>

    <div>
      <Link :href="`/authors/${state.username}/projects/${state.name}?recall`">
        <PlayIcon class="h-6 w-6 stroke-1" />
      </Link>
    </div>
  </div>
</template>
