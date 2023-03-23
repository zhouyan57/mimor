<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import PageLayoutLang from './PageLayoutLang.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
</script>

<template>
  <Menu as="div" class="relative flex text-3xl">
    <MenuButton>
      <Bars3Icon class="h-6 w-6 text-stone-500" />
    </MenuButton>

    <Transition
      enter-active-class="transition duration-100"
      enter-from-class="transform opacity-0 translate-x-6 -rotate-45"
      enter-to-class="transform opacity-100 rotate-0"
      leave-active-class="transition duration-100"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0 -translate-x-6"
    >
      <MenuItems
        class="fixed top-0 left-0 z-40 flex h-screen w-screen flex-col justify-center space-y-2 bg-white bg-white px-2 pb-20"
      >
        <div class="absolute top-2 left-2">
          <MenuItem as="div">
            <XMarkIcon class="h-10 w-10 stroke-1" />
          </MenuItem>
        </div>

        <div class="absolute top-0 right-3">
          <MenuItem as="div" v-slot="{ active }">
            <PageLayoutLogo
              class="font-light"
              :class="[active && 'text-stone-600']"
              :state="state"
            />
          </MenuItem>
        </div>

        <div class="flex flex-col items-start space-y-2 py-2">
          <MenuItem as="div" v-slot="{ active }">
            <Hyperlink
              href="/"
              class="hover:underline"
              :class="[
                active && 'decoration-6 underline',
                active && 'text-stone-600',
              ]"
            >
              <Lang>
                <template #zh>首页</template>
                <template #en>Home</template>
              </Lang>
            </Hyperlink>
          </MenuItem>

          <PageLayoutLang :state="state" />
        </div>

        <div class="border-t border-stone-500 py-3">
          <div class="flex">
            <MenuItem as="div" v-slot="{ active }">
              <Hyperlink
                href="/login"
                :class="[
                  active && 'decoration-6 underline',
                  active && 'text-stone-600',
                ]"
              >
                <Lang>
                  <template #zh>登录</template>
                  <template #en>Login</template>
                </Lang>
              </Hyperlink>
            </MenuItem>

            <div class="px-2 font-bold">/</div>

            <MenuItem as="div" v-slot="{ active }">
              <Hyperlink
                href="/register"
                :class="[
                  active && 'decoration-6 underline',
                  active && 'text-stone-600',
                ]"
              >
                <Lang>
                  <template #zh>注册</template>
                  <template #en>Register</template>
                </Lang>
              </Hyperlink>
            </MenuItem>
          </div>
        </div>

        <div class="absolute bottom-4 right-2">
          <MenuItem as="div" v-slot="{ active }">
            <XMarkIcon
              class="h-10 w-10 stroke-1"
              :class="[active && 'border-4 border-stone-500']"
            />
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
