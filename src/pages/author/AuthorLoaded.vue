<script setup lang="ts">
import { reactive } from 'vue'
import AuthorOther from './AuthorOther.vue'
import AuthorSelf from './AuthorSelf.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <div>
    <AuthorSelf v-if="state.isSelf" :state="state" />
    <AuthorOther v-else :state="state" />
  </div>
</template>
