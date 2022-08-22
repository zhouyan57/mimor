<script setup lang="ts">
import { reactive } from 'vue'
import { Head } from '@vueuse/head'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import { useForm } from '../../hooks/useForm'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  lang: '',
  name: '',
  name_zh: '',
  name_en: '',
})
</script>

<template>
  <PageLayout mode="auth">
    <Head>
      <title v-if="$app.lang.zh">配置 | 谜墨</title>
      <title v-else>Config | Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>配置</template>
        <template #en>Config</template>
      </Lang>
    </template>

    <form
      class="flex max-w-lg flex-col space-y-2 pb-2 text-xl"
      @submit.prevent="
        (event) => {
          if (!$app.auth.user) return

          form.submit(event, {
            action: async (values) => {
              if (!$app.auth.user) return
            },
          })
        }
      "
    >
      <div class="flex w-full items-center">
        <FormInput class="w-full" :form="form" name="path" disabled>
          <template #label>
            <Lang>
              <template #zh>语言</template>
              <template #en>Lang</template>
            </Lang>
          </template>
        </FormInput>
      </div>

      <div class="flex w-full items-center">
        <FormInput class="w-full" :form="form" name="path">
          <template #label>
            <Lang>
              <template #zh>语言</template>
              <template #en>Lang</template>
            </Lang>
          </template>
        </FormInput>
      </div>

      <FormInput :form="form" name="name">
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="name_en">
        <template #label>
          <Lang>
            <template #zh>英文名</template>
            <template #en>English Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="name_zh">
        <template #label>
          <Lang>
            <template #zh>中文名</template>
            <template #en>Chinese Name</template>
          </Lang>
        </template>
      </FormInput>

      <div class="flex flex-col justify-center py-4">
        <hr class="border-t border-stone-500" />
      </div>

      <FormButton :disabled="form.processing">
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </FormButton>
    </form>
  </PageLayout>
</template>
