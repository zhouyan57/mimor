<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { onUnmounted } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import Watch from '../../components/Watch.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

onUnmounted(() => {
  props.state.isMobileMenuOpen = false
})
</script>

<template>
  <Popover as="div" class="relative flex text-3xl" v-slot="{ open, close }">
    <Watch
      :value="open"
      :effect="
        (value: any) => {
          state.isMobileMenuOpen = value
        }
      "
    />

    <Watch
      :value="() => $route.query['mobile-menu']"
      :deep="true"
      :effect="
        (value: any) => {
          if (value === undefined) {
            close()
          }
        }
      "
    />

    <PopoverButton>
      <button
        class="rounded-full border border-stone-300 bg-white p-3 shadow-md"
      >
        <Bars3Icon class="h-7 w-7 text-stone-500" />
      </button>
    </PopoverButton>

    <Transition
      enter-active-class="transition duration-100"
      enter-from-class="transform opacity-0 translate-x-6 -rotate-45"
      enter-to-class="transform opacity-100 rotate-0"
      leave-active-class="transition duration-100"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0 -translate-x-6"
    >
      <PopoverPanel
        class="fixed top-0 left-0 z-40 flex h-screen w-screen flex-col justify-center space-y-2 bg-white px-2 pb-20"
      >
        <div class="absolute top-2 left-2">
          <button @click="close()">
            <XMarkIcon class="h-10 w-10 stroke-1" />
          </button>
        </div>

        <div class="absolute top-0 right-3">
          <PageLogo class="font-light" :state="state" />
        </div>

        <div class="flex flex-col items-start space-y-2 py-2">
          <Hyperlink href="/" class="hover:underline" @click="close()">
            <Lang>
              <template #zh>首页</template>
              <template #en>Home</template>
            </Lang>
          </Hyperlink>

          <Hyperlink href="/about" class="hover:underline" @click="close()">
            <Lang>
              <template #zh>关于</template>
              <template #en>About</template>
            </Lang>
          </Hyperlink>

          <PageLang :state="state" />
        </div>

        <div class="border-t border-stone-500 py-3">
          <div class="flex">
            <Hyperlink href="/login" @click="close()">
              <Lang>
                <template #zh>登录</template>
                <template #en>Login</template>
              </Lang>
            </Hyperlink>

            <div class="px-2 font-bold">/</div>

            <Hyperlink href="/register" @click="close()">
              <Lang>
                <template #zh>注册</template>
                <template #en>Register</template>
              </Lang>
            </Hyperlink>
          </div>
        </div>

        <div class="absolute bottom-4 right-2">
          <button @click="close()">
            <XMarkIcon class="h-10 w-10 stroke-1" />
          </button>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
