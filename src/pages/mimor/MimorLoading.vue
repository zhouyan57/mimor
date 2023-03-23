<script setup lang="ts">
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div>
    <div>Loading...</div>
    <div class="py-1">{{ options }}</div>
  </div>
</template>
