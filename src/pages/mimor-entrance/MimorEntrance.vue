<script setup lang="ts">
import { PlayIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  url: '',
})

const lang = useGlobalLang()

const origin = window.location.origin

const router = useRouter()

async function submit(event: Event) {
  formSubmit(form, event, async ({ url }) => {
    router.push({ path: `/mimors/${url}` })
  })
}
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨链接</title>
    <title v-else>Mimor Link</title>
  </Head>

  <PageLayout>
    <div class="flex h-full max-w-3xl flex-col justify-center p-3">
      <form @submit.prevent="submit">
        <FormInput name="url" type="url" :form="form">
          <template #label>
            <div class="flex items-end justify-between" title="Docs">
              <Lang class="font-logo text-2xl font-bold">
                <template #zh> 谜墨链接 </template>
                <template #en> Mimor Link </template>
              </Lang>
              <a
                target="_blank"
                :href="
                  lang.isZh()
                    ? `https://readonly.link/manuals/${origin}/contents/manual/zh.json/-/usages/mimorlink.md`
                    : `https://readonly.link/manuals/${origin}/contents/manual/en.json/-/usages/mimorlink.md`
                "
              >
                <QuestionMarkCircleIcon class="h-6 w-6" />
              </a>
            </div>
          </template>

          <template #input-end>
            <button class="px-4">
              <PlayIcon class="w-6" />
            </button>
          </template>
        </FormInput>
      </form>

      <div class="py-16"></div>
    </div>
  </PageLayout>
</template>
