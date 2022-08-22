<script setup lang="ts">
import { Head } from '@vueuse/head'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import FormTextarea from '../../components/FormTextarea.vue'
import FormDivider from '../../components/FormDivider.vue'
import Lang from '../../components/Lang.vue'
import { useForm } from '../../hooks/useForm'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  name: '',
  description: '',
})
</script>

<template>
  <PageLayout mode="auth">
    <Head>
      <title v-if="$app.lang.zh">新项目 | 谜墨</title>
      <title v-else>New Project | Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>创建新项目</template>
        <template #en>Create a new project</template>
      </Lang>
    </template>

    <form
      class="flex max-w-lg flex-col space-y-2 text-xl"
      @submit.prevent="
        (event) =>
          form.submit(event, async (values) => {
            if (!$app.auth.user) return

            await $app.projects.post($app.auth.user.username, values)

            $router.replace(`/projects/${form.values.name}`)
          })
      "
    >
      <FormInput :form="form" name="name" required>
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormTextarea :form="form" name="description">
        <template #label>
          <Lang>
            <template #zh>描述</template>
            <template #en>Description</template>
          </Lang>
        </template>
      </FormTextarea>

      <FormDivider />

      <FormButton :disabled="form.processing">
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </FormButton>
    </form>
  </PageLayout>
</template>
