<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { FileJson } from '../../jsons/FileJson'
import Loading from '../../components/Loading.vue'
import { ProjectState as State } from './ProjectState'
import Mimor from '../../components/mimor/Mimor.vue'

const { state } = defineProps<{ state: State }>()

const text = computed(() => {
  if (!state.files) return ''
  return state.files.map((file) => file.content).join('\n')
})

onMounted(async () => {
  if (!state.files) {
    await state.load()
  }
})
</script>

<template>
  <Mimor
    v-if="state.files"
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
