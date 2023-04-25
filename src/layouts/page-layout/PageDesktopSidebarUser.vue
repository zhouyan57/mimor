<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { User } from '../../models/user/User'
import { username } from '../../models/user/username'
import { logout } from '../../reactives/logout'
import PageLang from './PageLang.vue'

defineProps<{ user: User }>()

const lang = useGlobalLang()

function logoutAfterConfirming() {
  const message = lang.isZh() ? '确定要退出吗？' : 'Are you sure to logout?'

  if (window.confirm(message)) {
    logout()
  }
}
</script>

<template>
  <div class="flex h-full flex-col justify-between pr-4">
    <div class="flex flex-col items-start space-y-2 pb-2 text-2xl">
      <Hyperlink href="/" class="hover:underline">
        <Lang>
          <template #zh>首页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <PageLang />

      <Hyperlink href="/docs" class="hover:underline">
        <Lang>
          <template #zh>文档</template>
          <template #en>Docs</template>
        </Lang>
      </Hyperlink>

      <Hyperlink href="/mimors" class="hover:underline">
        <Lang>
          <template #zh>链接</template>
          <template #en>Link</template>
        </Lang>
      </Hyperlink>

      <Hyperlink href="/about" class="hover:underline">
        <Lang>
          <template #zh>关于</template>
          <template #en>About</template>
        </Lang>
      </Hyperlink>

      <Hyperlink :href="`/authors/${username(user)}`" class="hover:underline">
        <Lang>
          <template #zh>创作</template>
          <template #en>Create</template>
        </Lang>
      </Hyperlink>
    </div>

    <div class="flex border-t border-stone-500 pt-2 text-2xl">
      <div class="font-bold">
        {{ user.name }}
      </div>

      <div class="px-2 font-bold">/</div>

      <button class="hover:underline" @click="logoutAfterConfirming()">
        <Lang>
          <template #zh>退出</template>
          <template #en>Logout</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
