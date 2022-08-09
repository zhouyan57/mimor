<script setup lang="ts">
import { onMounted } from "vue"
import { XElement } from "../../../libs/x-node"
import { MimorState } from "../MimorState"

const { mimor, element } = defineProps<{
  mimor: MimorState
  element: XElement
}>()

onMounted(() => {
  const name = element.attributes["color"] || element.attributes["颜色"]
  mimor.theme.name = name
  mimor.next()
})
</script>

<template></template>
