<script setup lang="ts">
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormBox from '../../components/form/FormBox.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Head } from '@vueuse/head'
import { State } from './State'
import { reactive } from 'vue'
import { stateAddToRecall } from './stateAddToRecall'

const props = defineProps<{ state: State }>()

const form = useForm({
  src: props.state.src,
})

const report = reactive({
  errorMessage: '',
})

const lang = useGlobalLang()
const auth = useGlobalAuth()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">加入回顾 | 谜墨</title>
    <title v-else>Add to Recall | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="font-serif flex h-full flex-col space-y-3 overflow-y-auto p-3 text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 加入回顾 </template>
            <template #en> Add to Recall </template>
          </Lang>
        </div>
      </div>

      <form
        class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]"
        @submit.prevent="
          formSubmit(form, $event, async () => {
            if (report.errorMessage) return
            await stateAddToRecall(state, report)

            $router.replace({ path: `/recall` })
          })
        "
      >
        <FormBox name="src">
          <template #label>
            <Lang>
              <template #zh>来源</template>
              <template #en>Source</template>
            </Lang>
          </template>

          <div class="break-words">
            {{ state.src }}
          </div>
        </FormBox>

        <div v-if="report.errorMessage">
          <div class="mt-3 border-2 border-red-300 p-2 text-base">
            {{ report.errorMessage }}
          </div>
        </div>

        <FormDivider />

        <FormButton :disabled="form.processing || !auth.username">
          <Lang>
            <template #zh> 加入 </template>
            <template #en> Add </template>
          </Lang>
        </FormButton>

        <div v-if="!auth.username" class="flex justify-end">
          <div class="text-xl">
            <Lang>
              <template #zh>
                需要
                <Hyperlink href="/login" class="underline">登录</Hyperlink>
                才能加入回顾
              </template>
              <template #en>
                Need to
                <Hyperlink href="/login" class="underline">log in</Hyperlink>
                to add to recall.
              </template>
            </Lang>
          </div>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
