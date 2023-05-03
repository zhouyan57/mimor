<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const triedToLogin = ref(false)
const router = useRouter()
const lang = useGlobalLang()
const auth = useGlobalAuth()

onMounted(async () => {
  await loginByTokenIfNotAlready()

  triedToLogin.value = true
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">回顾 | 谜墨</title>
      <title v-else>Recall | Mimor</title>
    </Head>

    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 回顾 </template>
            <template #en> Recall </template>
          </Lang>
        </div>
      </div>

      <div>TODO</div>
    </div>
  </PageLayout>
</template>
