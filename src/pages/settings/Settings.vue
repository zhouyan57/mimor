<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'

const router = useRouter()
const lang = useGlobalLang()
const auth = useGlobalAuth()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">设置 | 迷墨</title>
    <title v-else>Settings | Mimor</title>
  </Head>

  <PageLayout>
    <div class="flex h-full flex-col space-y-3 font-serif text-xl">
      <div class="flex items-baseline space-x-4">
        <div class="font-logo text-2xl font-bold text-stone-800">
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
