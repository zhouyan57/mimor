<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import SettingsActionClearCache from './SettingsActionClearCache.vue'
import SettingsActionRemoveServiceWorker from './SettingsActionRemoveServiceWorker.vue'

import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">设置 | 谜墨</title>
      <title v-else>Settings | Mimor</title>
    </Head>

    <div
      class="font-serif flex h-full flex-col space-y-3 overflow-y-auto p-3 text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 设置 </template>
            <template #en> Settings </template>
          </Lang>
        </div>
      </div>

      <div class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]">
        <SettingsActionRemoveServiceWorker />
        <SettingsActionClearCache />
      </div>
    </div>
  </PageLayout>
</template>
