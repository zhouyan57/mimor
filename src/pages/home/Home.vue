<script setup lang="ts">
import Mimor from "../../components/mimor/Mimor.vue"

const text = `
<question class="text-2xl" color="red"> Hello world </question>

note

<answer> hi </answer>
`
</script>

<template>
  <div>
    <div class="text-3xl">Mimor demo:</div>
    <Mimor :text="text" />
  </div>
</template>
