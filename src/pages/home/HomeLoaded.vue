<script setup lang="ts">
import { reactive } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeAuthors from './HomeAuthors.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <PageLayout>
    <div class="flex flex-col overflow-y-auto p-3">
      <HomeAuthors :state="state" />

      <div class="flex flex-col justify-center py-3">
        <hr class="border-t border-black" />
      </div>

      <Lang>
        <template #zh>迷墨正在 beta 测试中 :)</template>
        <template #en>Mimor is under beta testing :)</template>
      </Lang>
    </div>
  </PageLayout>
</template>
