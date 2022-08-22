<script setup lang="ts">
import { reactive } from 'vue'
import { Head } from '@vueuse/head'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import FormDivider from '../../components/FormDivider.vue'
import { useForm } from '../../hooks/useForm'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  username: '',
  email: '',
  name: '',
  lang: '',
  name_zh: '',
  name_en: '',
})

async function load() {
  const user = app.auth.userOrFail()
  Object.assign(form.values, user)
}
</script>

<template>
  <PageLayout mode="auth" :options="{ onInitialized: () => load() }">
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

      <FormInput :form="form" name="name">
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput :form="form" name="path">
        <template #label>
          <Lang>
            <template #zh>语言</template>
            <template #en>Lang</template>
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
