<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { slug } from '../../utils/slug'
import { Entry } from './Entry'
import { pathParse } from './pathParse'

defineProps<{
  entry: Entry
}>()
</script>

<template>
  <a
    :href="`#${slug(pathParse(entry.path).file)}`"
    class="flex flex-col hover:underline md:flex-row md:items-baseline md:justify-between"
    @click="$emit('jump', slug(pathParse(entry.path).file))"
  >
    <span class="overflow-auto pr-3 md:whitespace-pre">{{
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
  </a>
</template>
