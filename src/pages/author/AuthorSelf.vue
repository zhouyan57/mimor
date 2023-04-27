<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEditor from './AuthorEditor.vue'
import { authorSelfMimors } from './authorSelfMimors'

const props = defineProps<{ username: string }>()

const lang = useGlobalLang()

onMounted(async () => {
  const mimors = await authorSelfMimors(props.username)
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">作者 | 迷墨</title>
      <title v-else>Author | Mimor</title>
    </Head>

    <div class="flex flex-col font-serif text-xl">
      <AuthorEditor :username="username" />
    </div>

    <div>todo</div>
  </PageLayout>
</template>
