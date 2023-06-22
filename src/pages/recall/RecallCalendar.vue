<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="h-[10rem] border border-black px-3 py-2">
    <div>RecallCalendar</div>
  </div>
</template>
