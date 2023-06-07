<script setup lang="ts">
import { ArrowPathIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'
import { stateSaveAllUploadedTexts } from './stateSaveAllUploadedTexts'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button
    class="inline-flex items-center space-x-1 border border-black px-1.5 py-1 disabled:border-stone-500 disabled:text-stone-500"
    :disabled="
      state.isSavingUploadedTexts ||
      !state.entries.some((entry) => entryIsModifiedByUpload(entry))
    "
    @click.prevent.stop="stateSaveAllUploadedTexts(state)"
  >
    <CloudArrowUpIcon v-if="!state.isSavingUploadedTexts" class="h-5 w-5" />

    <ArrowPathIcon
      v-if="state.isSavingUploadedTexts"
      class="h-5 w-5 animate-spin"
    />

    <Lang>
      <template #zh>保存</template>
      <template #en>Save</template>
    </Lang>
  </button>
</template>
