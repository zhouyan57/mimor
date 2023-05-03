<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">设置 | 谜墨</title>
      <title v-else>Settings | Mimor</title>
    </Head>

    <div class="flex h-full flex-col space-y-3 p-3 font-serif text-xl">
      <div class="flex items-baseline space-x-4">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 设置 </template>
            <template #en> Settings </template>
          </Lang>
        </div>
      </div>

      <div class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]">
        <Scope :scope="{ disabled: false }" v-slot="{ scope }">
          <button
            :disabled="scope.disabled"
            class="rounded-sm border border-black py-3 font-sans font-bold disabled:opacity-50"
            :class="[!scope.disabled && `hover:bg-stone-100`]"
            v-mounted="
              async () => {
                scope.disabled = !(await hasServiceWorker())
              }
            "
            @click="
              () => {
                removeServiceWorker()
                scope.disabled = true
              }
            "
          >
            <Lang>
              <template #zh>清除 Service Worker</template>
              <template #en>Remove Service Worker</template>
            </Lang>
          </button>
        </Scope>
      </div>
    </div>
  </PageLayout>
</template>
