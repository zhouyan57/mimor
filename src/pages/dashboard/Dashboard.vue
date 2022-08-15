<script setup lang="ts">
import { reactive } from "vue"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"
import { DashboardState as State } from "./DashboardState"

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: ({ auth }) => {
        if (!auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <div class="h-full flex flex-col">
      <div>TODO project list</div>
    </div>
  </PageLayout>
</template>
