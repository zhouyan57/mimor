<script setup lang="ts">
import { reactive } from "vue"
import Lang from "../../components/Lang.vue"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"
import { HomeState as State } from "./HomeState"

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
        if ($app.auth.user) {
          $router.replace('/projects')
        } else {
          $router.replace('/explore')
        }
      },
    }"
  >
    <template #title>
      <Lang>
        <template #zh>主页</template>
        <template #en>Home</template>
      </Lang>
    </template>

    <div class="h-full flex flex-col">
      <div>TODO</div>
    </div>
  </PageLayout>
</template>
