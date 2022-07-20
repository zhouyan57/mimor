<script setup>
const { x, y } = useMouse()
</script>

<template>
  <div>
    <div>Hello world!</div>

    <Counter />
    <div>Mouse: ({{ x }}, {{ y }})</div>
  </div>
</template>
