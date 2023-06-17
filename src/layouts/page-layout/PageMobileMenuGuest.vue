<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import TransitionRotateInSlideOut from '../../components/transitions/TransitionRotateInSlideOut.vue'
import Popup from '../../components/utils/Popup.vue'
import RouteSyncWithQuery from '../../components/utils/RouteSyncWithQuery.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
</script>

<template>
  <Popup>
    <template #button>
      <div class="flex border border-black p-2">
        <Bars3Icon class="h-7 w-7" />
      </div>
    </template>

    <template #panel="{ popup }">
      <TransitionRotateInSlideOut>
        <div
          v-show="popup.open"
          class="h-screen-dynamic fixed left-0 top-0 z-40 flex w-full flex-col justify-between bg-white p-2 text-3xl"
        >
          <RouteSyncWithQuery :state="popup" name="mobile-menu" />

          <div class="flex justify-between">
            <button @click="popup.open = false">
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>

            <PageLogo class="font-bold" />
          </div>

          <div class="flex flex-col items-start space-y-2 overflow-auto">
            <button class="hover:underline" @click="$router.replace('/')">
              <Lang>
                <template #zh>首页</template>
                <template #en>Home</template>
              </Lang>
            </button>

            <PageLang />

            <button class="hover:underline" @click="$router.replace('/docs')">
              <Lang>
                <template #zh>文档</template>
                <template #en>Docs</template>
              </Lang>
            </button>

            <button class="hover:underline" @click="$router.replace('/mimors')">
              <Lang>
                <template #zh>链接</template>
                <template #en>Link</template>
              </Lang>
            </button>

            <button class="hover:underline" @click="$router.replace('/about')">
              <Lang>
                <template #zh>关于</template>
                <template #en>About</template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click="$router.replace('/settings')"
            >
              <Lang>
                <template #zh>设置</template>
                <template #en>Settings</template>
              </Lang>
            </button>

            <div class="w-full border-t border-black"></div>

            <button @click="$router.replace('/login')">
              <Lang>
                <template #zh>登录</template>
                <template #en>Login</template>
              </Lang>
            </button>

            <button @click="$router.replace('/register')">
              <Lang>
                <template #zh>注册</template>
                <template #en>Register</template>
              </Lang>
            </button>
          </div>

          <div class="flex justify-end">
            <button @click="popup.open = false">
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>
          </div>
        </div>
      </TransitionRotateInSlideOut>
    </template>
  </Popup>
</template>
