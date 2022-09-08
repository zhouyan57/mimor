<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { Head } from '@vueuse/head'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import FormSelect from '../../components/FormSelect.vue'
import FormDivider from '../../components/FormDivider.vue'
import { useForm } from '../../hooks/useForm'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  username: '',
  email: '',
  name: '',
  lang: '',
  name_zh: '',
  name_en: '',
})

watch(
  () => app.lang.tag,
  () => {
    form.values.lang = app.lang.tag
  },
)

async function load() {
  await app.auth.initialize()

  const user = app.auth.user
  if (!user) return

  const config = app.auth.config
  if (!config) return

  Object.assign(form.values, {
    username: user.username,
    email: user.email,
    name: config.name,
    lang: config.lang,
    name_zh: config.name_zh,
    name_en: config.name_en,
  })
}

onMounted(async () => {
  await load()
})
</script>

<template>
  <PageLayout auth>
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
        (event) =>
          form.submit(event, async (values) => {
            if (!$app.auth.user) return

            await $app.configs.put($app.auth.user.username, values)
          })
      "
    >
      <FormInput :form="form" name="username" disabled>
        <template #label>
          <Lang>
            <template #zh>用户名</template>
            <template #en>Username</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="email" disabled>
        <template #label>
          <Lang>
            <template #zh>邮箱</template>
            <template #en>Email</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="name" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormSelect
        :form="form"
        name="lang"
        maxlength="10"
        :options="{
          zh: '中文',
          en: 'English',
        }"
      >
        <template #label>
          <Lang>
            <template #zh>语言</template>
            <template #en>Lang</template>
          </Lang>
        </template>
      </FormSelect>

      <FormInput :form="form" name="name_zh" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>中文名</template>
            <template #en>Chinese Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="name_en" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>英文名</template>
            <template #en>English Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormDivider />

      <FormButton :disabled="form.processing">
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </FormButton>
    </form>
  </PageLayout>
</template>
