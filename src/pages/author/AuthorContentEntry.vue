<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { Entry } from './Entry'
import { pathParse } from './pathParse'

defineProps<{
  entry: Entry
}>()
</script>

<template>
  <button
    class="flex flex-col hover:underline md:flex-row md:items-baseline md:justify-between"
    @click="$emit('jump', entry.path)"
  >
    <span class="overflow-auto text-start md:whitespace-pre md:pr-3">{{
      pathParse(entry.path).file
    }}</span>

    <Lang class="whitespace-pre">
      <template #zh>
        <div class="flex space-x-2 text-sm">
          <span>{{ entry.text.length }} 字节</span>
          <span>{{ entry.text.split('\n').length }} 行</span>
        </div>
      </template>
      <template #en>
        <div class="flex space-x-2 text-sm">
          <span>{{ entry.text.length }} bytes</span>
          <span>{{ entry.text.split('\n').length }} lines</span>
        </div>
      </template>
    </Lang>
  </button>
</template>
