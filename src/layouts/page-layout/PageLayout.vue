<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import PageLoading from './PageLoading.vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutMenu from './PageLayoutMenu.vue'
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

const menuButtonElement = ref<HTMLElement | null>(null)

function clickMenu() {
  if (menuButtonElement.value) {
    if (menuButtonElement.value.click instanceof Function) {
      menuButtonElement.value.click()
    }
  }
}

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
        <button
          class="rounded-full bg-white border border-stone-300 p-3 shadow-md"
          @click="clickMenu()"
        >
          <PageLayoutMenu ref="menuButtonElement" :state="state" />
        </button>
      </div>
    </div>
  </div>
</template>
