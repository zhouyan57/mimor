<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter, useRoute } from 'vue-router'
import { watch, onBeforeMount } from 'vue'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import FormTextarea from '../../components/FormTextarea.vue'
import FormDivider from '../../components/FormDivider.vue'
import { ProjectState as State } from './ProjectState'
import { useForm } from '../../hooks/useForm'
import { formatParam } from '../../utils/formatParam'

const { state } = defineProps<{ state: State }>()

const form = useForm({
  name: '',
  description: '',
})

watch(
  () => state.project,
  () => {
    if (state.project) {
      form.values.name = state.project.name
      form.values.description = state.project.description || ''
    }
  },
  { immediate: true },
)

const router = useRouter()
const route = useRoute()

onBeforeMount(async () => {
  await app.guard.userOnly(router, {
    username: state.username,
  })
})

function submit(event: Event) {
  form.submit(event, async (values) => {
    await state.update(values)
    router.replace(
      `/authors/${state.username}/projects/${route.params.name}?config`,
    )
  })
}

async function remove() {
  if (state.project === undefined) return
  // const path = `${state.username} / ${state.project.name} / ${state.file.path}`
  const path = ''
  const message = app.lang.zh ? `删除项目：${path}` : `Delete file： ${path}`
  if (window.confirm(message)) {
    // await state.remove()
    // router.replace(`/authors/${state.username}/projects/${state.project.name}`)
  }
}
</script>

<template>
  <div v-if="state.project">
    <form
      class="flex max-w-lg flex-col space-y-2 text-xl"
      @submit.prevent="submit"
    >
      <FormInput :form="form" name="name" required maxlength="256">
        <template #label>
          <Lang>
            <template #zh>名字</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormTextarea :form="form" name="description" maxlength="256">
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
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </FormButton>
    </form>

    <div class="flex max-w-lg flex-col space-y-2 py-2 text-xl">
      <FormButton @click="remove" class="bg-red-100 text-red-500">
        <Lang>
          <template #zh>删除</template>
          <template #en>Delete</template>
        </Lang>
      </FormButton>
    </div>
  </div>

  <Loading v-else class="text-xl">
    <Lang>
      <template #zh>项目加载中……</template>
      <template #en>Loading project...</template>
    </Lang>
  </Loading>
</template>
