<script setup lang="ts">
import { onMounted, reactive } from "vue"
import Lang from "../../components/Lang.vue"
import Loading from "../../components/Loading.vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())

onMounted(async () => {
  await state.auth.init().catch((error) => {})
  state.loading = false
})
</script>

<template>
  <Loading v-if="state.loading">
    <Lang>
      <template #zh>加载中。。。</template>
      <template #en>Loading...</template>
    </Lang>
  </Loading>
  <div v-else class="flex h-screen p-3">
    <PageLayoutSidebar class="w-1/4 md:block hidden" :state="state" />

    <div class="h-full w-full md:w-3/4 md:px-6">
      <slot />
    </div>
  </div>
</template>
