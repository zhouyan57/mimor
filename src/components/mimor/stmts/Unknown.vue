<script setup lang="ts">
import { XElement } from "../../../libs/x-node"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState; element: XElement }>()
</script>

<template>
  <div>
    <div>Unknown tag: {{ element.tag }}</div>
  </div>
</template>
