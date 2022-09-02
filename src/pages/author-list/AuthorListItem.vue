<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { AuthorListState as State } from './AuthorListState'
import { AuthorJson } from '../../jsons/AuthorJson'

defineProps<{
  state: State
  author: AuthorJson
}>()
</script>

<template>
  <div>{{ author }}</div>
</template>
