<script setup lang="ts">
import { reactive, watch } from "vue"
import { useRouter } from "vue-router"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"
import RegisterStart from "./RegisterStart.vue"
import { RegisterState as State } from "./RegisterState"
import RegisterVerifying from "./RegisterVerifying.vue"

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
      class="pt-4 flex h-full flex-col items-center md:pt-10"
    >
      <RegisterStart :state="state" />
    </div>

    <div v-else class="pt-12 flex h-full flex-col items-center md:pt-10">
      <RegisterVerifying :state="state" :verifying="state.verifying" />
    </div>
  </PageLayout>
</template>
