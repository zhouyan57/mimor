<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="font-sans py-2">
      <slot name="label"></slot>
    </label>

    <div class="w-full border border-black p-3 disabled:bg-stone-100">
      <slot></slot>
    </div>
  </div>
</template>
