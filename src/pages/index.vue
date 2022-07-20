<script setup>
import { Lang } from "../states/Lang"

const lang = new Lang()

const x = 1
</script>

<template>
  <Observer>
    <h1 class="text-3xl font-bold">
      <div class="p-2">Hello world!</div>
      <div class="p-2">
        {{ lang.count }}
      </div>
    </h1>
  </Observer>
</template>
