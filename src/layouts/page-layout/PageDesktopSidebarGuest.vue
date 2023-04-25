<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLang from './PageLang.vue'
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

      <Hyperlink href="/settings" class="hover:underline">
        <Lang>
          <template #zh>设置</template>
          <template #en>Settings</template>
        </Lang>
      </Hyperlink>
    </div>

    <div class="flex border-t border-stone-500 pt-2 text-2xl">
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
</template>
