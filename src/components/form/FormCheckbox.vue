<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex w-full items-center pb-2 pt-3">
      <label :for="name" class="font-sans shrink-0">
        <slot name="label" />
      </label>

      <input
        class="ml-1 h-5 w-5 font-bold disabled:bg-stone-100"
        :id="name"
        :name="name"
        type="checkbox"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
