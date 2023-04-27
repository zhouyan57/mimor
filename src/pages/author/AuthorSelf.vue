<script setup lang="ts">
import { LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">作者 | 迷墨</title>
      <title v-else>Author | Mimor</title>
    </Head>

    <div class="flex h-full flex-col">
      <div class="flex flex-col font-serif text-xl">
        <AuthorEditor :state="state" />
      </div>

      <div class="mt-4 flex h-full flex-col space-y-4 overflow-y-auto">
        <div v-for="mimorEntry of state.mimorEntries">
          <div class="flex flex-col py-1">
            <button v-if="mimorEntry.isPublic" class="flex space-x-1" @click="">
              <LockOpenIcon class="h-5 w-5" />
              <Lang>
                <template #zh>公开</template>
                <template #en>Public</template>
              </Lang>
            </button>

            <button v-else class="flex space-x-1" @click="">
              <LockClosedIcon class="h-5 w-5" />
              <Lang>
                <template #zh>私人</template>
                <template #en>Private</template>
              </Lang>
            </button>
          </div>

          <Mimor
            class="h-[34rem] max-w-[47rem] shrink-0"
            :key="mimorEntry.path"
            :src="`~/${mimorEntry.path}`"
          />
        </div>
      </div>
    </div>
  </PageLayout>
</template>
