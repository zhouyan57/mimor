<script setup>
const { x, y } = useMouse()

import { parseNodes } from "../infra/x-node"

const nodes = parseNodes(
  `
<question class="text-2xl" color="red"> Hello world </question>

note

<answer> hi </answer>
`
)
</script>

<template>
  <div>
    <div>Hello world!</div>

    <Counter />
    <div>Mouse: ({{ x }}, {{ y }})</div>

    <div>Nodes: <pre class="text-2xl">{{ JSON.stringify(nodes, null, 2) }}</pre></div>
  </div>
</template>
