<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import PageLang from './PageLang.vue'
import PageLogo from './PageLogo.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col justify-between pr-4">
    <div class="flex flex-col">
      <div class="flex items-center space-x-1 pb-3">
        <PageLogo class="text-2xl" :state="state" />
        <div
          class="font-mono text-sm text-stone-500"
          title="This is an alpha release, we develop as we use it."
        >
          alpha
        </div>
      </div>

      <div
        class="flex flex-col items-start space-y-2 border-t border-stone-500 py-2 text-2xl"
      >
        <Hyperlink href="/" class="hover:underline">
          <Lang>
            <template #zh>首页</template>
            <template #en>Home</template>
          </Lang>
        </Hyperlink>

        <Hyperlink href="/about" class="hover:underline">
          <Lang>
            <template #zh>关于</template>
            <template #en>About</template>
          </Lang>
        </Hyperlink>

        <PageLang :state="state" />
      </div>
    </div>

    <div class="border-t border-stone-500 pt-2">
      <div class="flex text-2xl">
        <Hyperlink href="/login" class="hover:underline">
          <Lang>
            <template #zh>登录</template>
            <template #en>Login</template>
          </Lang>
        </Hyperlink>

        <div class="px-2 font-bold">/</div>

        <Hyperlink href="/register" class="hover:underline">
          <Lang>
            <template #zh>注册</template>
            <template #en>Register</template>
          </Lang>
        </Hyperlink>
      </div>
    </div>
  </div>
</template>
