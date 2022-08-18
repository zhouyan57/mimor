<script setup lang="ts">
import { FileState as State } from './FileState'
import Mimor from '../../components/mimor/Mimor.vue'

defineProps<{ state: State }>()
</script>

<template>
  <Mimor
    v-if="state.file"
    class="h-full"
    :options="{
      text: state.file.content,
      onFinished: () => {
        $router.push(`/projects/${state.project.name}/files/${state.path}`)
      },
    }"
  />
</template>
