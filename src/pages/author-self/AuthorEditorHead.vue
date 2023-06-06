<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="mx-3 mb-1 flex items-baseline border-b border-black pb-1 pt-2"
    :class="{ 'border-orange-500': state.editor.isEditing }"
  >
    <input
      class="w-full font-mono text-base focus:outline-none"
      name="file"
      type="text"
      v-model="state.editor.filename"
      :placeholder="lang.isZh() ? '文件名' : 'filename'"
      required
    />

    <select
      class="bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      name="mode"
      v-model="state.editor.mode"
    >
      <option v-for="mode of state.editor.knownModes" :key="mode" :value="mode">
        <span>.{{ mode }}</span>
      </option>
    </select>
  </div>
</template>
