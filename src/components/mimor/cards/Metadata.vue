<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { State } from '../State'
import { programNext } from '../programNext'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

for (const [key, value] of Object.entries(props.element.attributes)) {
  if (key === 'theme-color') {
    props.program.metadata.themeColor = value
  }

  if (key === 'keywords') {
    props.program.metadata.keywords = value.split(',')
  }
}

programNext(props.program)
</script>

<template></template>
