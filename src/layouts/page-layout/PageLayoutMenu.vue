<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import PageLayoutLang from './PageLayoutLang.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
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
        class="fixed top-0 left-0 z-40 flex h-screen w-11/12 flex-col justify-center space-y-2 border-4 border-stone-300 bg-white bg-white px-2 pb-20 shadow-lg"
      >
        <div class="absolute top-2 left-2">
          <MenuItem as="div" v-slot="{ active }">
            <XMarkIcon
              class="h-8 w-8 stroke-1"
              :class="[active && 'border-4 border-stone-500']"
            />
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
          <MenuItem as="div" v-if="$app.auth.user" v-slot="{ active }">
            <Link href="/projects" class="hover:underline">
              <Lang
                :class="[
                  active && 'decoration-6 underline',
                  active && 'text-stone-600',
                ]"
              >
                <template #zh>项目</template>
                <template #en>Projects</template>
              </Lang>
            </Link>
          </MenuItem>

          <MenuItem as="div" v-slot="{ active }">
            <Link
              href="/authors"
              class="hover:underline"
              :class="[
                active && 'decoration-6 underline',
                active && 'text-stone-600',
              ]"
            >
              <Lang>
                <template #zh>作者</template>
                <template #en>Authors</template>
              </Lang>
            </Link>
          </MenuItem>

          <MenuItem as="div" v-slot="{ active }">
            <Link
              href="/explore"
              class="hover:underline"
              :class="[
                active && 'decoration-6 underline',
                active && 'text-stone-600',
              ]"
            >
              <Lang>
                <template #zh>探索</template>
                <template #en>Explore</template>
              </Lang>
            </Link>
          </MenuItem>

          <MenuItem as="div" v-if="$app.auth.user" v-slot="{ active }">
            <Link
              href="/config"
              class="hover:underline"
              :class="[
                active && 'decoration-6 underline',
                active && 'text-stone-600',
              ]"
            >
              <Lang>
                <template #zh>配置</template>
                <template #en>Config</template>
              </Lang>
            </Link>
          </MenuItem>

          <PageLayoutLang :state="state" />
        </div>

        <div class="border-t border-stone-500 py-3">
          <div v-if="$app.auth.user" class="flex items-end justify-between">
            <div class="flex flex-col items-start">
              <Lang class="overflow-x-auto whitespace-pre font-logo font-bold">
                <template #zh>
                  <div>
                    {{ $app.auth.config?.name_zh || $app.auth.user.name }}
                  </div>
                </template>
                <template #en>
                  <div>
                    {{ $app.auth.config?.name_en || $app.auth.user.name }}
                  </div>
                </template>
              </Lang>

              <div
                class="overflow-x-auto whitespace-pre text-xl text-stone-600"
              >
                {{ $app.auth.user.username }}
              </div>
            </div>

            <MenuItem as="div" v-slot="{ active }">
              <button
                @click="$app.auth.logout()"
                class="text-xl text-stone-600"
                :class="[
                  active && 'decoration-6 underline',
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

          <div v-if="!$app.auth.user" class="flex">
            <MenuItem as="div" v-slot="{ active }">
              <Link
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
              </Link>
            </MenuItem>

            <div class="px-2 font-bold">/</div>

            <MenuItem as="div" v-slot="{ active }">
              <Link
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
              </Link>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
