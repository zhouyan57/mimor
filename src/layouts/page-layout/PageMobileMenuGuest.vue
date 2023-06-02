<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute, useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import Watch from '../../components/utils/Watch.vue'
import { useCurrentPathname } from '../../reactives/useCurrentPathname'
import { useCurrentQuery } from '../../reactives/useCurrentQuery'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'

const route = useRoute()
const router = useRouter()

function jump(path: string) {
  if (route.path !== path) {
    router.replace(path)
  } else {
    router.back()
  }
}
</script>

<template>
  <Popover as="div" class="relative flex text-3xl" v-slot="{ open, close }">
    <PopoverButton class="flex border border-black p-2">
      <Bars3Icon class="h-7 w-7" />
    </PopoverButton>

    <Watch
      :value="open"
      :action="(value: any) => {
        if (value) {
          $router.push({
            path: useCurrentPathname(),
            query: {
              ...useCurrentQuery(),
              'mobile-menu': null,
            },
          })
        }
      }
      "
    />

    <Watch
      :value="() => $route.query['mobile-menu']"
      :deep="true"
      :action="(value: any) => {
        if (value === undefined) {
          close()
        }
      }
      "
    />

    <Transition
      enterActiveClass="transition duration-100"
      enterFromClass="transform opacity-0 translate-x-6 -rotate-45"
      enterToClass="transform opacity-100 rotate-0"
      leaveActiveClass="transition duration-100"
      leaveFromClass="transform opacity-100"
      leaveToClass="transform opacity-0 -translate-x-6"
    >
      <PopoverPanel
        class="h-screen-dynamic fixed left-0 top-0 z-40 flex w-full flex-col justify-between bg-white p-2"
      >
        <div class="flex justify-between">
          <button
            @click="
              () => {
                close()
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
                close()
                jump('/')
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
                close()
                jump('/docs')
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
                close()
                jump('/mimors')
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
                close()
                jump('/about')
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
                close()
                jump('/settings')
              }
            "
          >
            <Lang>
              <template #zh>设置</template>
              <template #en>Settings</template>
            </Lang>
          </button>

          <div class="w-full border-t border-black"></div>

          <button
            @click="
              () => {
                close()
                jump('/login')
              }
            "
          >
            <Lang>
              <template #zh>登录</template>
              <template #en>Login</template>
            </Lang>
          </button>

          <button
            @click="
              () => {
                close()
                jump('/register')
              }
            "
          >
            <Lang>
              <template #zh>注册</template>
              <template #en>Register</template>
            </Lang>
          </button>
        </div>

        <div class="flex justify-end">
          <button
            @click="
              () => {
                close()
                $router.back()
              }
            "
          >
            <XMarkIcon class="h-10 w-10 stroke-1" />
          </button>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
