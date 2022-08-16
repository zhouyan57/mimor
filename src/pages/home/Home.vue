<script setup lang="ts">
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { HomeState as State } from './HomeState'

const state = reactive(new State())
</script>

<template>
  <PageLayout>
    <template #title>
      <Lang class="font-logo">
        <template #zh>
          <div>把记忆变成选择</div>
        </template>
        <template #en>
          <div class="text-lg md:text-2xl">Making memory a choice</div>
        </template>
      </Lang>
    </template>

    <div class="h-full flex flex-col">
      <Lang>
        <template #zh>
          <div class="flex flex-col py-2 space-y-4 max-w-xl">
            <h1 class="font-logo text-xl font-bold">主动回顾</h1>
            <p class="text-xl">
              在学习时，主动地将想要记住的点拆解为问答卡片，可以在之后作为测试来回顾。
            </p>
            <h1 class="font-logo text-xl font-bold">间隔重复</h1>
            <p class="text-xl">
              在回顾时，卡片将被分散于时间，并且间隔逐渐稀疏，以此来形成长期记忆。
            </p>
            <h1 class="font-logo text-xl font-bold">自我推荐</h1>
            <p class="text-xl">
              现代网络程序都有推荐系统，争相获取人们的注意力。我们也可以通过自己推荐给将来的自己，来管理自己的注意力。
            </p>
          </div>
        </template>
        <template #en>
          <div class="flex flex-col py-2 space-y-4 max-w-xl">
            <h1 class="font-logo text-xl font-bold">Active recall</h1>
            <p class="text-xl">
              When learning, when want to remember something, actively making
              them cards, to test ourself in recall.
            </p>
            <h1 class="font-logo text-xl font-bold">Spaced repetition</h1>
            <p class="text-xl">
              During recall, cards will be spaced in time, more and more sparse,
              to gain long-term memory.
            </p>
            <h1 class="font-logo text-xl font-bold">Recommending to ourself</h1>
            <p class="text-xl">
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
