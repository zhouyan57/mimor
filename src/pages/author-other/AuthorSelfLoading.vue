<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="bg-white p-3 font-sans text-xl text-stone-500">
      <Lang>
        <template #zh> 作者加载中⋯⋯ </template>
        <template #en> Loading author ... </template>
      </Lang>

      <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
        {{ options }}
      </div>
    </div>
  </PageLayout>
</template>
