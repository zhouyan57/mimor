<script setup>
const state = reactive({
  count: 0,
})

onMounted(() => {
  setInterval(() => {
    state.count++
  }, 100)
})
</script>

<template>
  <div>Count: {{ state.count }}</div>
</template>
