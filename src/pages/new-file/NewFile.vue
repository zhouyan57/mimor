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
  path: '',
  content: '',
})
</script>

<template>
  <PageLayout mode="auth">
    <Head>
      <title v-if="$app.lang.zh">新文件 | 谜墨</title>
      <title v-else>New File | Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>创建新文件</template>
        <template #en>Create a new file</template>
      </Lang>
    </template>

    <form
      class="flex max-w-lg flex-col space-y-2 text-xl"
      @submit.prevent="
        (event) =>
          form.submit(event, async (values) => {
            if (!$app.auth.user) return

            await $app.files.post(
              $app.auth.user.username,
              $route.params.name as string,
              { ...values, path: `${values.path}.mimor` }
            )

            $router.replace(
              `/projects/${$route.params.name}/files/${form.values.path}.mimor`
            )
          })
      "
    >
      <FormInput :form="form" name="path" required>
        <template #label>
          <Lang>
            <template #zh>路径</template>
            <template #en>Path</template>
          </Lang>
        </template>

        <template #input-end>
          <div class="px-1.5 text-sm font-bold">.mimor</div>
        </template>
      </FormInput>

      <FormTextarea :form="form" name="content">
        <template #label>
          <Lang>
            <template #zh>内容</template>
            <template #en>Content</template>
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
