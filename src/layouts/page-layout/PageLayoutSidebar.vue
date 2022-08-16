<script setup lang="ts">
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import PageLayoutLang from "./PageLayoutLang.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col items-start text-2xl pr-2 space-y-2">
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

    <div v-if="$app.auth.user" class="py-2 w-full">
      <div class="border-t py-3 border-stone-800">
        <div class="font-bold">{{ $app.auth.user.name }}</div>
        <div class="text-xl text-stone-600">
          {{ $app.auth.user.username }}
        </div>
      </div>
    </div>
  </div>
</template>
