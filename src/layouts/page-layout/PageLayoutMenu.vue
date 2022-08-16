<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline"
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <Menu as="div" class="relative flex text-2xl">
    <MenuButton>
      <MenuIcon class="h-5 w-5" />
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
        class="flex flex-col pb-20 justify-center fixed bg-white top-0 right-0 h-screen w-screen border-4 px-2 space-y-2"
      >
        <div class="fixed top-2 left-2">
          <MenuItem v-slot="{ active }">
            <XIcon
              class="h-8 w-8"
              :class="[
                active && 'border-4 border-stone-600',
                active && 'text-stone-600',
              ]"
            />
          </MenuItem>
        </div>

        <div class="fixed top-0 right-3">
          <MenuItem v-slot="{ active }">
            <PageLayoutLogo
              class="font-light"
              :class="[active && 'text-stone-600']"
              :state="state"
            />
          </MenuItem>
        </div>

        <div>
          <PageLayoutLang :state="state" />
        </div>

        <div v-if="$app.auth.user">
          <MenuItem v-slot="{ active }">
            <button
              @click="$app.auth.logout()"
              :class="[
                active && 'underline decoration-6',
                active && 'text-stone-600',
              ]"
            >
              <Lang>
                <template #zh>退出</template>
                <template #en>Logout</template>
              </Lang>
            </button>
          </MenuItem>
        </div>

        <MenuItem v-if="!$app.auth.user" as="div" v-slot="{ active }">
          <Link
            href="/login"
            :class="[
              active && 'underline decoration-6',
              active && 'text-stone-600',
            ]"
          >
            <Lang>
              <template #zh>登录</template>
              <template #en>Login</template>
            </Lang>
          </Link>
        </MenuItem>

        <MenuItem v-if="!$app.auth.user" as="div" v-slot="{ active }">
          <Link
            href="/register"
            :class="[
              active && 'underline decoration-6',
              active && 'text-stone-600',
            ]"
          >
            <Lang>
              <template #zh>注册</template>
              <template #en>Register</template>
            </Lang>
          </Link>
        </MenuItem>

        <div v-if="$app.auth.user" class="py-2">
          <div class="border-t py-3 border-stone-900">
            <div class="font-bold">{{ $app.auth.user.name }}</div>
            <div class="text-xl text-stone-600">
              {{ $app.auth.user.username }}
            </div>
          </div>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
