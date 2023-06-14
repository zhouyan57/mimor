<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { Entry } from './Entry'
import { pathParse } from './pathParse'

defineProps<{
  entry: Entry
}>()
</script>

<template>
  <div class="flex items-baseline justify-between">
    <span class="whitespace-pre pr-3">{{ pathParse(entry.path).file }}</span>

    <Lang class="whitespace-pre">
      <template #zh>
        <div class="flex space-x-2 text-sm">
          <span>{{ entry.text.split('\n').length }} 行</span>
          <span>{{ entry.text.length }} 字节</span>
        </div>
      </template>
      <template #en>
        <div class="flex space-x-2 text-sm">
          <span>{{ entry.text.split('\n').length }} lines</span>
          <span>{{ entry.text.length }} bytes</span>
        </div>
      </template>
    </Lang>
  </div>
</template>
