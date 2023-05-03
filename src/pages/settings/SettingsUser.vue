<script setup lang="ts">
import { Head } from '@vueuse/head'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { User } from '../../models/user/User'
import SettingsRemoveServiceWorker from './SettingsRemoveServiceWorker.vue'

defineProps<{ user: User }>()

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

      <form class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]">
        <FormInput
          name="name"
          autocomplete="username"
          required
          spellcheck="false"
          :value="user.name"
        >
          <template #label>
            <Lang>
              <template #zh>名字</template>
              <template #en>Name</template>
            </Lang>
          </template>
        </FormInput>

        <div class="flex flex-col justify-center py-3">
          <hr class="border-t border-black" />
        </div>

        <SettingsRemoveServiceWorker />
      </form>
    </div>
  </PageLayout>
</template>
