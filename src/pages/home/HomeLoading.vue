<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="font-sans p-3 text-xl text-stone-500">
      <Lang>
        <template #zh>
          <div>用户列表加载中⋯⋯</div>
          <div>第一次加载速度较慢，</div>
          <div>下次加载会快很多。</div>
        </template>
        <template #en>
          <div>Loading user list...</div>
          <div>The first time loading is relatively slow.</div>
          <div>The next loading will be much faster.</div>
        </template>
      </Lang>

      <div class="font-mono overflow-x-auto whitespace-pre py-1 text-sm">
        {{ options }}
      </div>
    </div>
  </PageLayout>
</template>
