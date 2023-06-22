<script setup lang="ts">
import {
  ArrowUturnUpIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ArrowsUpDownIcon,
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  FolderOpenIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  ReceiptRefundIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Modal from '../../components/utils/Modal.vue'
import RouteSyncWithQuery from '../../components/utils/RouteSyncWithQuery.vue'
import AuthorContents from '../author/AuthorContents.vue'
import AuthorConnection from './AuthorConnection.vue'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex max-w-[47rem] flex-wrap justify-between text-base">
    <div class="flex flex-wrap text-base"></div>

    <div class="flex flex-wrap text-base">
      <button
        v-if="!state.isAtTheTop"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `回到顶部` : `Back to top`"
        @click="
          state.scrollToTopTick = state.scrollToTopTick
            ? state.scrollToTopTick + 10
            : 10
        "
      >
        <ArrowUturnUpIcon class="h-5 w-5" />
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
          <RouteSyncWithQuery :state="modal" name="countents" />

          <AuthorContents
            class="m-3 border border-black bg-white"
            :entries="state.entries"
            @close="modal.open = false"
            @jump="
              (path) => {
                modal.open = false
                state.isSearching = false
                state.eagerLoadAll = true
                state.focusedPath = path
              }
            "
          />
        </template>
      </Modal>
    </div>
  </div>
</template>
