<script setup lang="ts">
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col relative">
    <div class="flex flex-col items-start space-y-1 text-xl">
      <PageLayoutLogo :state="state" />

      <PageLayoutLang :state="state" />

      <Link v-if="!state.auth.user" href="/register" class="hover:underline">
        <Lang>
          <template #zh>注册</template>
          <template #en>Register</template>
        </Lang>
      </Link>

      <Link v-if="!state.auth.user" href="/login" class="hover:underline">
        <Lang>
          <template #zh>登录</template>
          <template #en>Login</template>
        </Lang>
      </Link>
    </div>

    <div class="absolute bottom-0 flex-col flex items-start text-xl space-y-">
      <div v-if="state.auth.user" class="text-lg font-bold">
        {{ state.auth.user.name }}
      </div>

      <button
        v-if="state.auth.user"
        @click="state.auth.logout()"
        class="hover:underline"
      >
        <Lang>
          <template #zh>退出</template>
          <template #en>Logout</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
