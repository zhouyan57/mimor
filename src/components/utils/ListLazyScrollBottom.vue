<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  state: {
    isBottomVisible: boolean
  }
}>()

onMounted(() => {})
</script>

<template>
  <div class="py-px"></div>
</template>
