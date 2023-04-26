<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label"></slot>
    </label>

    <textarea
      class="w-full border border-black p-3 disabled:bg-stone-100"
      :id="name"
      :name="name"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>
