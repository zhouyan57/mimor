<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  entries: Array<any>
}>()

onMounted(() => {
  document.addEventListener('click', (event) => {})
})
</script>

<template>
  <div>
    <slot
      v-for="(entry, index) of entries"
      :key="index"
      name="entry"
      :entry="entry"
    />
  </div>
</template>
