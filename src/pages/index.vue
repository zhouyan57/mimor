<script setup>
const { x, y } = useMouse()
</script>

<template>
  <div class="text-3xl text-orange-500 font-bold p-4">
    <div>Hello world!</div>

    <Counter></Counter>
    <div>x: {{ x }}, y: {{ y }}</div>
  </div>
</template>
