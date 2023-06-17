<script setup lang="ts">
import {
  ArrowPathIcon,
  CloudArrowDownIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Modal from '../../components/utils/Modal.vue'
import RouteSyncWithQuery from '../../components/utils/RouteSyncWithQuery.vue'
import { useWindow } from '../../reactives/useWindow'
import AuthorContents from '../author/AuthorContents.vue'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

defineProps<{ state: State }>()

const lang = useGlobalLang()
const window = useWindow()
</script>

<template>
  <div class="flex max-w-[47rem] justify-between space-x-3 text-base">
    <div class="flex space-x-3 text-base">
      <button
        class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
        :title="
          lang.isZh()
            ? `将云端的文件刷新到 app`
            : `Refresh files from cloud to app`
        "
        :disabled="state.isRefreshing"
        @click="stateRefresh(state)"
      >
        <CloudArrowDownIcon v-if="!state.isRefreshing" class="h-5 w-5" />

        <ArrowPathIcon v-if="state.isRefreshing" class="h-5 w-5 animate-spin" />

        <Lang>
          <template #zh>刷新</template>
          <template #en>Refresh</template>
        </Lang>
      </button>
    </div>

    <div class="flex flex-wrap text-base">
      <button
        v-if="!state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `开始搜索` : `Start searching`"
        @click="state.isSearching = true"
      >
        <MagnifyingGlassIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <button
        v-if="state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `退出搜索` : `Exit searching`"
        @click="state.isSearching = false"
      >
        <XMarkIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <Modal class="flex items-center">
        <template #button>
          <div
            class="flex min-w-max items-center space-x-1"
            :title="lang.isZh() ? `显示目录` : `Show table of contents`"
          >
            <ListBulletIcon class="h-5 w-5" />

            <Lang>
              <template #zh>
                <span>目录：</span>
                <span class="font-bold">{{ state.entries.length }}</span>
              </template>
              <template #en>
                <span>Contents: </span>
                <span class="font-bold">{{ state.entries.length }}</span>
              </template>
            </Lang>
          </div>
        </template>

        <template #panel="{ modal }">
          <RouteSyncWithQuery :state="modal" name="author-contents" />

          <AuthorContents
            class="m-3 border border-black bg-white"
            :lastRefreshedAt="state.lastRefreshedAt"
            :entries="state.entries"
            @close="
              () => {
                modal.open = false
                $router.back()
              }
            "
            @jump="
              (path) => {
                modal.open = false
                $router.back()
                state.isSearching = false
                state.focusedPath = path
                state.eagerLoadAll = true
              }
            "
          />
        </template>
      </Modal>
    </div>
  </div>
</template>
