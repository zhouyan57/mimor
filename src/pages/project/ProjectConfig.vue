<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import FormTextarea from '../../components/form/FormTextarea.vue'
import { ProjectState as State } from './ProjectState'

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
  formSubmit(form, event, async (values) => {
    await state.update({
      name: values.name,
      description: values.description,
    })
    router.replace(
      `/authors/${state.username}/projects/${route.params.name}?config`,
    )
  })
}

async function remove() {
  if (state.project === undefined) return
  const path = `${state.username} / ${state.project.name}`
  const message = app.lang.zh ? `删除项目：${path}` : `Delete project ${path}`
  if (window.confirm(message)) {
    await state.remove()
    router.replace(`/authors/${state.username}`)
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
