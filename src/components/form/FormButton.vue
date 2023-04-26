<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="border border-black px-3 py-3 font-sans font-bold disabled:opacity-50"
    :class="[!disabled && `hover:bg-stone-100`]"
    type="submit"
  >
    <slot />
  </button>
</template>
