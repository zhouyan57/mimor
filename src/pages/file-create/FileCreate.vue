<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import FormTextarea from '../../components/form/FormTextarea.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  path: '',
  content: '',
})

const router = useRouter()
const route = useRoute()

onBeforeMount(async () => {
  await app.guard.userOnly(router, {
    username: route.params.username as string,
  })
})

function submit(event: Event) {
  formSubmit(form, event, async (values) => {
    if (!app.auth.user) return

    await app.files.post(
      app.auth.user.username,
      route.params.name as string,
      values,
    )

    router.replace(
      `/authors/${route.params.username}/projects/${route.params.name}/files/${form.values.path}`,
    )
  })
}
</script>

<template>
  <PageLayout>
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
      @submit.prevent="submit"
    >
      <FormInput :form="form" name="path" required maxlength="256">
        <template #label>
          <Lang>
            <template #zh>路径</template>
            <template #en>Path</template>
          </Lang>
        </template>
      </FormInput>

      <FormTextarea :form="form" name="content" maxlength="100000">
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
