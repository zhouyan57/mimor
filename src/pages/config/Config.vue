<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onBeforeMount, onMounted, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import FormSelect from '../../components/form/FormSelect.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ConfigState as State } from './ConfigState'

const state = reactive(new State())

const router = useRouter()

watch(
  () => app.lang.tag,
  () => {
    state.form.values.lang = app.lang.tag
  },
)

onBeforeMount(async () => {
  await app.guard.userOnly(router)
})

onMounted(async () => {
  await state.load()
})
</script>

<template>
  <PageLayout>
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
        (event: Event) =>
          state.form.submit(event, async (values : any) => {
            if (!$app.auth.user) return

            await $app.configs.put($app.auth.user.username, values)
          })
      "
    >
      <FormInput :form="state.form" name="username" disabled>
        <template #label>
          <Lang>
            <template #zh>用户名</template>
            <template #en>Username</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="state.form" name="email" disabled>
        <template #label>
          <Lang>
            <template #zh>邮箱</template>
            <template #en>Email</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="state.form" name="name" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormSelect
        :form="state.form"
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

      <FormInput :form="state.form" name="name_zh" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>中文名</template>
            <template #en>Chinese Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="state.form" name="name_en" maxlength="64">
        <template #label>
          <Lang>
            <template #zh>英文名</template>
            <template #en>English Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormDivider />

      <FormButton :disabled="state.form.processing">
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </FormButton>
    </form>
  </PageLayout>
</template>
