<script setup lang="ts">
import { computed } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { FileJson } from '../../jsons/FileJson'
import Loading from '../../components/Loading.vue'
import { ProjectState as State } from './ProjectState'
import Mimor from '../../components/mimor/Mimor.vue'

const props = defineProps<{ state: State }>()

const text = computed(() => {
  if (!props.state.files) return ''
  return props.state.files.map((file) => file.content).join('\n')
})
</script>

<template>
  <Mimor
    v-if="text"
    class="h-screen"
    :options="{
      text,
      program: {
        onFinished: () => {
          $router.push(`/projects/${state.name}`)
        },
      },
    }"
  />

  <Loading
    v-else
    class="flex flex-col h-screen justify-center items-center text-xl"
  >
    <Lang>
      <template #zh>回顾加载中……</template>
      <template #en>Loading recall...</template>
    </Lang>
  </Loading>
</template>
