<script setup lang="ts">
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import Loading from '../../components/Loading.vue'
import { AuthorListState as State } from './AuthorListState'

const state = reactive(new State())
</script>

<template>
  <PageLayout :options="{ onInitialized: () => state.load() }">
    <template #title>
      <Lang class="font-logo">
        <template #zh>作者</template>
        <template #en>Authors</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col">
      <div v-if="state.authors" class="flex h-full flex-col">
        <div class="flex h-full flex-col space-y-3 overflow-y-auto pb-2">
          <div v-for="author of state.authors" :key="author.name">
            {{ author }}
          </div>
        </div>
      </div>

      <Loading v-else class="text-xl">
        <Lang>
          <template #zh>作者加载中……</template>
          <template #en>Loading authors...</template>
        </Lang>
      </Loading>
    </div>
  </PageLayout>
</template>
