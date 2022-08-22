<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import PageLoading from './PageLoading.vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutSidebar from './PageLayoutSidebar.vue'
import { PageLayoutState as State } from './PageLayoutState'
import { wait } from '../../utils/wait'

const { mode, options } = defineProps<{
  mode?: string
  options?: {
    onInitialized?: (state: State) => Promise<void>
  }
}>()

const router = useRouter()

const state = reactive(new State())

onMounted(async () => {
  state.loading = true
  await app.auth.initialize()

  maybeRedirect()

  state.loading = false

  if (options?.onInitialized) {
    options.onInitialized(state)
  }
})

function maybeRedirect() {
  if (mode === 'auth' && !app.auth.user) {
    router.replace('/explore')
  }

  if (mode === 'guest' && app.auth.user) {
    router.replace('/projects')
  }
}
</script>

<template>
  <PageLoading v-if="state.loading">
    <Lang>
      <template #zh>加载中……</template>
      <template #en>Loading...</template>
    </Lang>
  </PageLoading>
  <div v-else class="flex h-screen">
    <div class="hidden h-full w-1/4 flex-col p-3 md:flex">
      <div class="pb-3">
        <PageLayoutLogo :state="state" />
      </div>

      <PageLayoutSidebar :state="state" />
    </div>

    <div
      class="flex h-full w-full flex-col space-y-2 overflow-y-auto p-3 md:w-3/4"
    >
      <PageLayoutHeader :state="state">
        <template #title>
          <slot name="title" />
        </template>
      </PageLayoutHeader>

      <slot />
    </div>
  </div>
</template>
