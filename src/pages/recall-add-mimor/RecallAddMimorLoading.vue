<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="font-sans bg-white px-4 py-6 text-xl text-stone-500">
    <Lang>
      <template #zh> 「加入回顾」加载中⋯⋯ </template>
      <template #en> Loading "Add to Recall" ... </template>
    </Lang>

    <div class="font-mono overflow-x-auto whitespace-pre py-1 text-sm">
      {{ options }}
    </div>
  </div>
</template>
