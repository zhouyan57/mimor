<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormTextarea from '../../components/form/FormTextarea.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Head } from '@vueuse/head'
import { State } from './State'
import { reactive } from 'vue'

const props = defineProps<{ state: State }>()

const form = useForm({
  src: props.state.src,
})

const report = reactive({
  errorMessage: '',
})

const lang = useGlobalLang()
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

            $router.replace({ path: `/` })
          })
        "
      >
        <FormTextarea
          name="src"
          autocomplete="src"
          required
          disabled
          :value="state.src"
          class=""
        >
          <template #label>
            <Lang>
              <template #zh>来源</template>
              <template #en>Source</template>
            </Lang>
          </template>
        </FormTextarea>

        <FormDivider />

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh> 加入 </template>
            <template #en> Add </template>
          </Lang>
        </FormButton>
      </form>
    </div>
  </PageLayout>
</template>
