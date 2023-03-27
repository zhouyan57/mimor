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

const name =
  props.element.attributes['color'] || props.element.attributes['颜色']

if (name) {
  props.state.theme.name = name
  programNext(props.program)
}
</script>

<template></template>
