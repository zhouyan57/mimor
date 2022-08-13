<script setup lang="ts">
import { useRouter } from "vue-router"
import Lang from "../../components/Lang.vue"
import { useAuth } from "../../hooks/useAuth"
import { VerifyingJson } from "../../jsons/VerifyingJson"
import { poll } from "../../utils/poll"
import { LoginState as State } from "./LoginState"

const { state, verifying } = defineProps<{
  state: State
  verifying: VerifyingJson
}>()

const router = useRouter()

const { stop } = poll<{ name: string; token: string }>({
  target: async () => {
    console.log({ who: "LoginVerifying", message: "polling" })
    const response = await fetch(verifying.links.verify, {})
    return await response.json()
  },
  check: (confirmed) => Boolean(confirmed),
  then: async ({ token }) => {
    const auth = useAuth()
    await auth.initialize(token)
    router.replace({ path: "/" })
  },
  interval: 3000,
})

async function revoke() {
  stop()
  state.verifying = null
  await fetch(verifying.links.revoke)
}
</script>

<template>
  <div class="text-xm overflow-x-auto py-1">
    <div class="flex flex-col items-center text-center">
      <Lang class="py-2 text-xl font-bold">
        <template #zh> 等待邮件登录确认 </template>
        <template #en> Awaiting Login Email Confirmation </template>
      </Lang>

      <Lang class="py-1 text-lg">
        <template #zh>
          已向 <b>{{ verifying.email }}</b> 发送了邮件
        </template>
        <template #en>
          We just sent an email to <b>{{ verifying.email }}</b>
        </template>
      </Lang>

      <Lang class="py-1 text-lg">
        <template #zh> 确认前，请比对 <b>识别码</b>： </template>
        <template #en>
          Before verifying, please compare the <b>confirmation code</b>:
        </template>
      </Lang>

      <div class="py-2 text-lg">
        <p class="border-4 py-1 px-2 font-black border-stone-300 bg-stone-100">
          {{ verifying.confirmation_code }}
        </p>
      </div>

      <button
        class="my-2 font-sans font-bold hover:text-stone-500"
        @click="revoke()"
      >
        <Lang class="py-1 text-lg">
          <template #zh> 撤销 </template>
          <template #en> Revoke </template>
        </Lang>
      </button>
    </div>
  </div>
</template>
