<script setup lang="ts">
import { ProjectsState as State } from './ProjectsState'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="h-full w-full p-2 flex flex-col border border-stone-400 rounded-sm"
  >
    <form class="flex justify-between space-x-3">
      <div class="flex w-full flex-col space-y-2">
        <input
          class="py-1 px-2 w-full"
          name="slug"
          type="text"
          value=""
          placeholder="project-slug"
        />

        <input
          class="py-1 px-2 w-full"
          name="name"
          type="text"
          value=""
          placeholder="Project name"
        />
      </div>
    </form>
  </div>
</template>
