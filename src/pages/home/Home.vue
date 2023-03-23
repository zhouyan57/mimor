<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = reactive(await loadState({}))
})
</script>

<template>
  <PageLayout>
    <template #title>
      <Lang>
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col text-xl">
      <div>TODO</div>
    </div>
  </PageLayout>
</template>
