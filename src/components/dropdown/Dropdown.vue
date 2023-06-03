<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>

<template>
  <div class="relative">
    <slot />

    <div v-show="open" class="absolute">
      <slot name="panel" />
    </div>
  </div>
</template>
