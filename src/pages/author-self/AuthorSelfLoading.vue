<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="font-sans bg-white p-3 text-xl text-stone-500">
      <Lang>
        <template #zh> 作者加载中⋯⋯ </template>
        <template #en> Loading author ... </template>
      </Lang>

      <div class="font-mono overflow-x-auto whitespace-pre py-1 text-sm">
        {{ options }}
      </div>
    </div>
  </PageLayout>
</template>
