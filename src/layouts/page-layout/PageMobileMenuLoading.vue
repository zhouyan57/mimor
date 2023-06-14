<script setup lang="ts">
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import TranslationRotateInSlideOut from '../../components/transitions/TranslationRotateInSlideOut.vue'
import Popup from '../../components/utils/Popup.vue'
import PopupSyncQuery from '../../components/utils/PopupSyncQuery.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
</script>

<template>
  <Popup>
    <template #toggle>
      <div class="flex border border-black p-2">
        <EllipsisHorizontalIcon class="h-7 w-7" />
      </div>
    </template>

    <template #panel="{ popup }">
      <TranslationRotateInSlideOut>
        <div
          v-show="popup.open"
          class="h-screen-dynamic fixed left-0 top-0 z-40 flex w-full flex-col justify-between bg-white p-2 text-3xl"
        >
          <PopupSyncQuery :popup="popup" name="mobile-menu" />

          <div class="flex justify-between">
            <button
              @click="
                () => {
                  popup.open = false
                  $router.back()
                }
              "
            >
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>

            <PageLogo class="font-bold" />
          </div>

          <div class="flex flex-col items-start space-y-2 overflow-auto">
            <button
              class="hover:underline"
              @click="
                () => {
                  popup.open = false
                  $router.replace('/')
                }
              "
            >
              <Lang>
                <template #zh>首页</template>
                <template #en>Home</template>
              </Lang>
            </button>

            <PageLang />

            <button
              class="hover:underline"
              @click="
                () => {
                  popup.open = false
                  $router.replace('/docs')
                }
              "
            >
              <Lang>
                <template #zh>文档</template>
                <template #en>Docs</template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click="
                () => {
                  popup.open = false
                  $router.replace('/mimors')
                }
              "
            >
              <Lang>
                <template #zh>链接</template>
                <template #en>Link</template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click="
                () => {
                  popup.open = false
                  $router.replace('/about')
                }
              "
            >
              <Lang>
                <template #zh>关于</template>
                <template #en>About</template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click="
                () => {
                  popup.open = false
                  $router.replace('/settings')
                }
              "
            >
              <Lang>
                <template #zh>设置</template>
                <template #en>Settings</template>
              </Lang>
            </button>

            <div class="w-full border-t border-black"></div>

            <Lang>
              <template #zh>加载中⋯⋯</template>
              <template #en>Loading...</template>
            </Lang>
          </div>

          <div class="flex justify-end">
            <button
              @click="
                () => {
                  popup.open = false
                  $router.back()
                }
              "
            >
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>
          </div>
        </div>
      </TranslationRotateInSlideOut>
    </template>
  </Popup>
</template>
