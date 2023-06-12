<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="font-sans py-2">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center border border-black">
      <input
        class="w-full p-3 font-bold disabled:bg-stone-100"
        :id="name"
        :name="name"
        v-bind="$attrs"
      />

      <slot name="input-end" />
    </div>
  </div>
</template>
