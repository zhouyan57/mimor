<script setup lang="ts">
import { LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { createEditor } from './Editor'

defineProps<{ username: string }>()

const lang = useGlobalLang()

const state = reactive(createEditor())

const report = reactive({
  errorMessage: '',
})

function save() {
  console.log(state.text)
}

function numberOfLines() {
  const lines = state.text.split('\n')
  return Math.max(3, Math.min(10, lines.length))
}
</script>

<template>
  <div
    class="flex flex-col border border-black p-2"
    :class="{ 'border-orange-400 ring-2 ring-orange-300': state.isEditing }"
  >
    <textarea
      class="my-1.5 h-full w-full resize-none px-1.5 font-mono focus:outline-none"
      name="text"
      spellcheck="false"
      @focus="state.isEditing = true"
      @blur="state.isEditing = false"
      v-model="state.text"
      :rows="numberOfLines()"
      :placeholder="lang.isZh() ? '创作卡片⋯⋯' : 'Create cards...'"
    ></textarea>

    <div class="flex justify-between">
      <div class="flex space-x-2 px-1">
        <button
          v-if="state.isPrivate"
          class="text-stone-500"
          @click="state.isPrivate = false"
        >
          <LockClosedIcon class="h-5 w-5" />
        </button>

        <button v-else class="text-stone-500" @click="state.isPrivate = true">
          <LockOpenIcon class="h-5 w-5" />
        </button>
      </div>

      <div class="flex">
        <button
          @click="save()"
          :disabled="state.text.length === 0"
          class="border border-orange-300 bg-orange-400 px-2 py-1 font-sans font-bold text-orange-50 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
        >
          <Lang>
            <template #zh>保存</template>
            <template #en>SAVE</template>
          </Lang>
        </button>
      </div>
    </div>
  </div>
</template>
