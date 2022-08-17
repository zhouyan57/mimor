<script setup lang="ts">
import Link from '../../components/Link.vue'
import Lang from '../../components/Lang.vue'
import { PlayIcon, XIcon } from '@heroicons/vue/outline'
import { ProjectFileState as State } from './ProjectFileState'
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
