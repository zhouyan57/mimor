<script setup lang="ts">
import { FileJson } from '../../jsons/FileJson'
import ProjectFileListItem from './ProjectFileListItem.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; files: Array<FileJson> }>()
</script>

<template>
  <div>
    <div v-for="file in files" :key="file.path">
      <ProjectFileListItem :state="state" :file="file" />
    </div>
  </div>
</template>
