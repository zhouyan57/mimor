<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { createEditor } from './Editor'
import { editorNumberOfLines } from './editorNumberOfLines'
import { editorSave } from './editorSave'

defineProps<{ username: string }>()

const lang = useGlobalLang()

const editor = reactive(createEditor())

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <form
    @submit.prevent="editorSave(editor, report)"
    class="flex flex-col border border-black p-2"
    :class="{ 'border-orange-400 ring-2 ring-orange-300': editor.isEditing }"
  >
    <div
      class="mb-1 flex items-baseline border-b border-black px-1 pb-1"
      :class="{ 'border-orange-500': editor.isEditing }"
    >
      <input
        class="w-full font-mono text-base focus:outline-none"
        name="file"
        type="text"
        v-model="editor.filename"
        :placeholder="lang.isZh() ? '文件名' : 'filename'"
        required
      />
      <span class="font-mono text-xs text-stone-500">.mimor</span>
    </div>

    <textarea
      class="my-1 h-full w-full resize-none px-1 font-mono text-base focus:outline-none"
      name="text"
      spellcheck="false"
      @focus="editor.isEditing = true"
      @blur="editor.isEditing = false"
      v-model="editor.text"
      :rows="editorNumberOfLines(editor)"
      :placeholder="lang.isZh() ? '创作卡片 *^-^*' : 'Create cards :)'"
    ></textarea>

    <div class="flex justify-between">
      <div class="flex space-x-2">
        <button
          v-if="editor.isPublic"
          class="text-stone-500"
          @click.prevent="editor.isPublic = false"
        >
          <LockOpenIcon class="h-5 w-5" />
        </button>

        <button
          v-else
          class="text-stone-500"
          @click.prevent="editor.isPublic = true"
        >
          <LockClosedIcon class="h-5 w-5" />
        </button>
      </div>

      <div class="flex px-1">
        <button
          :disabled="editor.text.length === 0"
          class="border border-orange-300 bg-orange-400 px-3 py-1 text-orange-50 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
        >
          <PaperAirplaneIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
  </form>
</template>
