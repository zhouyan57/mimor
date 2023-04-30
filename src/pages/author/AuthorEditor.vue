<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { editorNumberOfLines } from './editorNumberOfLines'
import { stateSave } from './stateSave'

defineProps<{ state: State }>()

const lang = useGlobalLang()

const report = reactive({
  errorMessage: '',
})

const modes = ['mimor', 'md']
</script>

<template>
  <form
    @submit.prevent="stateSave(state, report)"
    class="flex flex-col border border-black p-2"
    :class="{
      'border-orange-400 ring-2 ring-orange-300': state.editor.isEditing,
    }"
  >
    <div
      class="mb-1 flex items-baseline border-b border-black px-1 pb-1"
      :class="{ 'border-orange-500': state.editor.isEditing }"
    >
      <input
        class="w-full font-mono text-base focus:outline-none"
        name="file"
        type="text"
        v-model="state.editor.filename"
        :placeholder="lang.isZh() ? '文件名' : 'filename'"
        @focus="state.editor.isEditing = true"
        @blur="state.editor.isEditing = false"
        required
      />

      <select
        class="bg-white font-mono text-xs"
        id="mode"
        name="mode"
        @focus="state.editor.isEditing = true"
        @blur="state.editor.isEditing = false"
      >
        <option v-for="mode in modes" :key="mode" :value="mode">
          <span>.{{ mode }}</span>
        </option>
      </select>

      <!-- <span class="font-mono text-xs">.mimor</span> -->
    </div>

    <textarea
      class="my-1 h-full w-full resize-none px-1 font-mono text-base focus:outline-none"
      :class="{
        'transition-[height] duration-200':
          editorNumberOfLines(state.editor) <= 3,
      }"
      name="text"
      spellcheck="false"
      @focus="state.editor.isEditing = true"
      @blur="state.editor.isEditing = false"
      v-model="state.editor.text"
      :style="{ height: editorNumberOfLines(state.editor) * 1.5 + 'rem' }"
      :placeholder="lang.isZh() ? '创作卡片 *^-^*' : 'Create cards :)'"
    ></textarea>

    <div class="flex justify-between">
      <div class="flex space-x-2">
        <button
          v-if="state.editor.isPublic"
          @click.prevent="state.editor.isPublic = false"
        >
          <LockOpenIcon class="h-5 w-5" />
        </button>

        <button v-else @click.prevent="state.editor.isPublic = true">
          <LockClosedIcon class="h-5 w-5" />
        </button>
      </div>

      <div class="flex px-1">
        <button
          :disabled="state.editor.text.length === 0"
          class="border border-orange-300 bg-orange-400 px-3 py-1 text-orange-50 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
        >
          <PaperAirplaneIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
  </form>
</template>
