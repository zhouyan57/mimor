<script setup lang="ts">
import { Entry } from './Entry'

defineProps<{
  entry: Entry
}>()
</script>

<template>
  <div>
    <span class="whitespace-pre">{{ entry.path }}</span>
  </div>
</template>
