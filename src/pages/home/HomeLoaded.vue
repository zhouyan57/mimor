<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeUserList from './HomeUserList.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <PageLayout>
    <div class="flex flex-col overflow-y-auto p-3">
      <HomeUserList :state="state" />

      <div class="flex flex-col justify-center py-3">
        <hr class="border-t border-black" />
      </div>

      <Lang>
        <template #zh>谜墨正在 beta 测试中 :)</template>
        <template #en>Mimor is under beta testing :)</template>
      </Lang>
    </div>
  </PageLayout>
</template>
