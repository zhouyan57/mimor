<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateEditorExit } from './stateEditorExit'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex justify-between px-2 py-2"
    :class="{ 'border-t border-black': state.theme.name === 'white' }"
  >
    <div class="flex space-x-2"></div>

    <div class="flex space-x-2 px-1">
      <button
        class="mx-2 px-2 py-1 font-bold focus:outline-none focus:ring-2 focus:ring-orange-300"
        :class="[state.theme.name !== 'white' && state.theme.text(800)]"
        @click.prevent="stateEditorExit(state)"
      >
        <Lang>
          <template #zh> 退出 </template>
          <template #en> Exit </template>
        </Lang>
      </button>

      <button
        :disabled="state.text.length === 0"
        class="border border-orange-200 bg-orange-400 px-3 py-1 text-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
      >
        <PaperAirplaneIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
