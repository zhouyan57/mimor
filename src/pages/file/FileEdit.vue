<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import { FileState as State } from './FileState'
import Mimor from '../../components/mimor/Mimor.vue'

defineProps<{ state: State }>()
</script>

<template>
  <div v-if="state.file">TODO</div>
  <Loading v-else class="text-xl">
    <Lang>
      <template #zh>文件加载中……</template>
      <template #en>Loading file...</template>
    </Lang>
  </Loading>
</template>
