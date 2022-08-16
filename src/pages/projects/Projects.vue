<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/outline'
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectsState as State } from './ProjectsState'

const state = reactive(new State())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <template #title>
      <Lang>
        <template #zh>项目</template>
        <template #en>Projects</template>
      </Lang>
    </template>

    <div class="h-full flex flex-col relative">
      <div class="absolute z-10 bottom-2 right-2">
        <Link href="/projects/new">
          <PlusIcon
            class="w-8 h-8 text-stone-500 border border-stone-400 hover:bg-stone-100 rounded-full p-2"
          />
        </Link>
      </div>
    </div>
  </PageLayout>
</template>
