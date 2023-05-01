<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="mx-2 flex justify-between border-t border-orange-400 py-2">
    <div class="flex space-x-2"></div>

    <div class="flex px-1">
      <button
        :disabled="state.text.length === 0"
        class="border border-orange-300 bg-orange-400 px-3 py-1 text-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
      >
        <PaperAirplaneIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
