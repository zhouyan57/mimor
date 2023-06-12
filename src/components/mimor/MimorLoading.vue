<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './loadState'
import MimorHeadStateless from './MimorHeadStateless.vue'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="flex h-full flex-col border border-black bg-white">
    <MimorHeadStateless />

    <div class="font-sans p-3 text-xl text-stone-900">
      <Lang>
        <template #zh> 谜墨加载中⋯⋯ </template>
        <template #en> Loading mimor... </template>
      </Lang>

      <div class="font-mono overflow-x-auto whitespace-pre py-1 text-sm">
        {{ options }}
      </div>
    </div>
  </div>
</template>
