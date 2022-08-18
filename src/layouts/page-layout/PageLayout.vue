<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutSidebar from './PageLayoutSidebar.vue'
import { PageLayoutState as State } from './PageLayoutState'

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
  state.loading = false

  maybeRedirect()

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
  <Loading v-if="state.loading">
    <Lang>
      <template #zh>加载中。。。</template>
      <template #en>Loading...</template>
    </Lang>
  </Loading>
  <div v-else class="flex h-screen p-3">
    <div class="hidden h-full w-1/4 flex-col md:flex">
      <div class="pb-3">
        <PageLayoutLogo :state="state" />
      </div>

      <PageLayoutSidebar :state="state" />
    </div>

    <div class="flex h-full w-full flex-col space-y-2 md:w-3/4">
      <PageLayoutHeader :state="state">
        <template #title>
          <slot name="title" />
        </template>
      </PageLayoutHeader>

      <slot />
    </div>
  </div>
</template>
