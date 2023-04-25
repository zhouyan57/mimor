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
    <PopoverButton>
      <button class="flex">
        <Bars3Icon class="h-7 w-7 text-stone-700" />
      </button>
    </PopoverButton>

    <Watch
      :value="open"
      :effect="(value: any) => {
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
      :effect="(value: any) => {
        if (value === undefined) {
          close()
        }
      }
      "
    />

    <Transition
      enter-active-class="transition duration-100"
      enter-from-class="transform opacity-0 translate-x-6 -rotate-45"
      enter-to-class="transform opacity-100 rotate-0"
      leave-active-class="transition duration-100"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0 -translate-x-6"
    >
      <PopoverPanel
        class="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col justify-center space-y-2 bg-white px-2 pb-20"
      >
        <div class="absolute left-2 top-2">
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

        <div class="absolute right-3 top-0">
          <PageLogo class="font-bold" />
        </div>

        <div class="flex flex-col items-start space-y-2 py-2">
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
                jump('/about')
              }
            "
          >
            <Lang>
              <template #zh>关于</template>
              <template #en>About</template>
            </Lang>
          </button>

          <PageLang />
        </div>

        <div class="border-t border-stone-500 py-3">
          <div class="flex">
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

            <div class="px-2 font-bold">/</div>

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
        </div>

        <div class="absolute bottom-4 right-2">
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
