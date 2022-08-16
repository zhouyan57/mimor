<script setup lang="ts">
import { onMounted, reactive } from "vue"
import Lang from "../../components/Lang.vue"
import Loading from "../../components/Loading.vue"
import PageLayoutHeader from "./PageLayoutHeader.vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const { options } = defineProps<{
  options?: {
    onInitialized?: (state: State) => void | Promise<void>
  }
}>()

const state = reactive(new State())

onMounted(async () => {
  await app.auth.initialize()
  if (options?.onInitialized) {
    await options?.onInitialized(state)
  }

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
    <PageLayoutSidebar class="h-full w-1/4 md:block hidden" :state="state" />

    <div class="h-full flex flex-col w-full md:w-3/4">
      <PageLayoutHeader :state="state">
        <template #title>
          <slot name="title" />
        </template>
      </PageLayoutHeader>
      <slot />
    </div>
  </div>
</template>
