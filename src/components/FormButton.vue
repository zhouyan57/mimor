<script setup lang="ts">
import { useLang } from "../hooks/useLang"

const lang = useLang()

defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="rounded-sm border-2 py-3 font-sans font-bold text-white disabled:opacity-50"
    :class="[`border-stone-200`, !disabled && `hover:bg-stone-500`]"
    type="submit"
  >
    <slot />
  </button>
</template>
