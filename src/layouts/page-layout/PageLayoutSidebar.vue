<script setup lang="ts">
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import PageLayoutLang from "./PageLayoutLang.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col h-full justify-between text-2xl pr-4">
    <div>
      <div
        class="flex flex-col items-start space-y-2 py-2 border-t border-stone-800"
      >
        <Link v-if="$app.auth.user" href="/projects" class="hover:underline">
          <Lang>
            <template #zh>项目</template>
            <template #en>Projects</template>
          </Lang>
        </Link>

        <Link href="/explore" class="hover:underline">
          <Lang>
            <template #zh>探索</template>
            <template #en>Explore</template>
          </Lang>
        </Link>
      </div>

      <div
        class="flex flex-col items-start space-y-2 py-2 border-t border-stone-800"
      >
        <PageLayoutLang :state="state" />

        <Link v-if="!$app.auth.user" href="/login" class="hover:underline">
          <Lang>
            <template #zh>登录</template>
            <template #en>Login</template>
          </Lang>
        </Link>

        <Link v-if="!$app.auth.user" href="/register" class="hover:underline">
          <Lang>
            <template #zh>注册</template>
            <template #en>Register</template>
          </Lang>
        </Link>

        <button
          v-if="$app.auth.user"
          class="hover:underline"
          @click="
            () => {
              $app.auth.logout()
              $router.replace('/explore')
            }
          "
        >
          <Lang>
            <template #zh>退出</template>
            <template #en>Logout</template>
          </Lang>
        </button>
      </div>
    </div>

    <div>
      <div v-if="$app.auth.user" class="py-2 w-full">
        <div class="border-t py-3 border-stone-800">
          <div class="font-bold">{{ $app.auth.user.name }}</div>
          <div class="text-xl text-stone-600">
            {{ $app.auth.user.username }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
