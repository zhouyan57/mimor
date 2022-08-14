<script setup lang="ts">
import { reactive, watch } from "vue"
import { useRouter } from "vue-router"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"
import LoginStart from "./LoginStart.vue"
import { LoginState as State } from "./LoginState"
import LoginVerifying from "./LoginVerifying.vue"

const state = reactive(new State())

const router = useRouter()

watch(
  () => state.auth.user,
  () => {
    if (state.auth.user) {
      router.replace({ path: "/" })
    }
  },
  { immediate: true }
)
</script>

<template>
  <PageLayout>
    <div
      v-if="!state.verifying"
      class="py-2 flex h-full flex-col items-center md:pt-10"
    >
      <LoginStart :state="state" />
    </div>

    <div v-else class="py-12 flex h-full flex-col items-center md:pt-10">
      <LoginVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
