<script setup lang="ts">
import { PencilIcon, PlayIcon } from '@heroicons/vue/24/outline'
import Link from '../../components/Link.vue'
import { FileState as State } from './FileState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full items-center space-x-2">
    <div
      class="flex w-full space-x-1 overflow-x-auto overflow-y-hidden whitespace-pre font-sans text-xl"
    >
      <Link :href="`/authors/${state.username}`" class="hover:underline">{{
        state.username
      }}</Link>

      <div>/</div>

      <Link
        :href="`/authors/${state.username}/projects/${state.project.name}`"
        class="font-bold hover:underline"
      >
        {{ state.project.name }}
      </Link>

      <div>/</div>

      <div class="font-normal">{{ state.path }}</div>
    </div>

    <Link
      v-if="$route.query.recall !== undefined"
      mode="replace"
      :href="`/authors/${state.username}/projects/${state.project.name}/files/${state.path}`"
    >
      <PencilIcon class="h-5 w-5 stroke-1" />
    </Link>
    <Link
      v-else
      mode="replace"
      :href="`/authors/${state.username}/projects/${state.project.name}/files/${state.path}?recall`"
    >
      <PlayIcon class="h-5 w-5 stroke-1" />
    </Link>
  </div>
</template>
