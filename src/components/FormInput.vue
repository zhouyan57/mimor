<script setup lang="ts">
defineProps<{
  name: string
  type?: string
  required?: boolean
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label"></slot>
    </label>

    <input
      :id="name"
      :name="name"
      class="w-full rounded-sm border p-3 font-bold border-stone-800"
      :type="type || 'text'"
      :maxlength="32"
      :spellcheck="false"
      :required="required"
    />

    <slot name="footer"></slot>
  </div>
</template>
