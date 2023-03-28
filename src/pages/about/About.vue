<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">关于 | 迷墨</title>
    <title v-else>About | Mimor</title>
  </Head>

  <PageLayout>
    <template #title>
      <Lang>
        <template #zh>关于</template>
        <template #en>About</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col text-xl">
      <Lang class="font-logo text-2xl">
        <template #zh> 把记忆变成选择 </template>
        <template #en> Making memory a choice </template>
      </Lang>

      <Lang>
        <template #zh>
          <div class="flex max-w-xl flex-col space-y-4 py-2">
            <h1 class="font-logo font-bold">主动回顾</h1>
            <p>
              在学习时，主动地将想要记住的点拆解为问答卡片，可以在之后作为测试来回顾。
            </p>
            <h1 class="font-logo font-bold">间隔重复</h1>
            <p>
              在回顾时，卡片将被分散于时间，并且间隔逐渐稀疏，以此来形成长期记忆。
            </p>
            <h1 class="font-logo font-bold">自我推荐</h1>
            <p>
              现代网络程序都有推荐系统，争相获取人们的注意力。我们也可以通过自己推荐给将来的自己，来管理自己的注意力。
            </p>
          </div>
        </template>
        <template #en>
          <div class="flex max-w-xl flex-col space-y-4 py-2">
            <h1 class="font-logo font-bold">Active recall</h1>
            <p>
              When learning, when want to remember something, actively making
              them cards, to test ourself in recall.
            </p>
            <h1 class="font-logo font-bold">Spaced repetition</h1>
            <p>
              During recall, cards will be spaced in time, more and more sparse,
              to gain long-term memory.
            </p>
            <h1 class="font-logo font-bold">Recommending to ourself</h1>
            <p>
              Modern web apps all have "recommender systems" to grab ones
              attention. We can also manage back our attention by recommending
              to ourself.
            </p>
          </div>
        </template>
      </Lang>
    </div>
  </PageLayout>
</template>
