<script setup lang="ts">
import { parseNodes } from "../../libs/x-node"

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
    <div class="text-3xl">Hi~</div>
    <pre>{{ nodes }}</pre>
  </div>
</template>
