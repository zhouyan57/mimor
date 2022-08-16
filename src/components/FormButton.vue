<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="rounded-sm border py-3 font-sans font-bold disabled:opacity-50 border-stone-900"
    :class="[!disabled && `hover:bg-stone-100`]"
    type="submit"
  >
    <slot />
  </button>
</template>
