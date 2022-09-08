<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import { FileState as State } from './FileState'
import Mimor from '../../components/mimor/Mimor.vue'

defineProps<{ state: State }>()
</script>

<template>
  <Mimor
    v-if="state.file"
    class="h-full border border-stone-300"
    :options="{
      text: state.file.content,
      program: {
        onFinished: () => {
          $router.push(
            `/authors/${state.username}/projects/${state.project.name}/files/${state.path}`,
          )
        },
      },
    }"
  />
  <Loading v-else class="text-xl">
    <Lang>
      <template #zh>回顾加载中……</template>
      <template #en>Loading recall...</template>
    </Lang>
  </Loading>
</template>
