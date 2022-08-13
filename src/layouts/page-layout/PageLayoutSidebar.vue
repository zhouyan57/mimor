<script setup lang="ts">
import Lang from "../../components/Lang.vue"
import Link from "../../components/Link.vue"
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <PageLayoutLogo :state="state" />
    <PageLayoutLang :state="state" />

    <div v-if="state.auth.user">
      <div>
        {{ state.auth.user.name }}
      </div>

      <button @clikc="state.auth.logout()" class="hover:underline">
        <Lang>
          <template #zh>退出</template>
          <template #en>Logout</template>
        </Lang>
      </button>
    </div>

    <div v-else class="flex-col flex text-xl font-bold py-1 space-y-2">
      <Link href="/register" class="hover:underline">
        <Lang>
          <template #zh>注册</template>
          <template #en>Register</template>
        </Lang>
      </Link>
      <Link href="/login" class="hover:underline">
        <Lang>
          <template #zh>登录</template>
          <template #en>Login</template>
        </Lang>
      </Link>
    </div>
  </div>
</template>
