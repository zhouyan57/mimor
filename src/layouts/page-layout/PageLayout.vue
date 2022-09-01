<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import PageLoading from './PageLoading.vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutSidebar from './PageLayoutSidebar.vue'
import PageLayoutControl from './PageLayoutControl.vue'
import { PageLayoutState as State } from './PageLayoutState'

const { options, auth, guest } = defineProps<{
  auth?: boolean | { username: string }
  guest?: boolean
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
  if (auth) {
    if (!app.auth.user) {
      router.replace('/')
    }

    if (typeof auth === 'object' && app.auth.user) {
      if (auth.username !== app.auth.user.username) {
        router.replace('/')
      }
    }
  }

  if (guest) {
    if (app.auth.user) {
      router.replace('/')
    }
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
    <div class="hidden h-full w-72 shrink-0 flex-col p-3 md:flex">
      <div class="pb-3">
        <PageLayoutLogo :state="state" />
      </div>

      <PageLayoutSidebar :state="state" />
    </div>

    <div class="flex h-full w-full flex-col space-y-2 py-3">
      <PageLayoutHeader class="px-3" :state="state">
        <template #title>
          <slot name="title" />
        </template>
      </PageLayoutHeader>

      <div class="h-full w-full overflow-y-auto px-3">
        <slot />
      </div>

      <div class="fixed bottom-20 right-4 z-30 md:hidden">
        <PageLayoutControl :state="state" />
      </div>
    </div>
  </div>
</template>
