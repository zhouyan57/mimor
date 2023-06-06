<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between p-2">
    <div class="flex space-x-2">
      <button
        class="px-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
        @click.prevent="state.editor.isPublic = !state.editor.isPublic"
      >
        <LockOpenIcon v-if="state.editor.isPublic" class="h-5 w-5" />
        <LockClosedIcon v-else class="h-5 w-5" />
      </button>
    </div>

    <div class="flex px-1">
      <button
        :disabled="state.editor.text.length === 0"
        class="border border-orange-300 bg-orange-400 px-3 py-1 text-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
      >
        <PaperAirplaneIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
