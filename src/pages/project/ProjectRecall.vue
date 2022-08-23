<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { FileJson } from '../../jsons/FileJson'
import ProjectFileListItem from './ProjectFileListItem.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="h-full">ProjectRecall</div>
</template>
