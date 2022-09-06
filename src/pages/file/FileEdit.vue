<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import FormTextarea from '../../components/FormTextarea.vue'
import FormDivider from '../../components/FormDivider.vue'
import { FileState as State } from './FileState'
import { useForm } from '../../hooks/useForm'

const { state } = defineProps<{ state: State }>()

const form = useForm({
  path: '',
  content: '',
})

watch(
  () => state.file,
  () => {
    if (state.file) {
      form.values.path = state.file.path
      form.values.content = state.file.content
    }
  },
  { immediate: true },
)

const router = useRouter()
const route = useRoute()

function submit(event: Event) {
  form.submit(event, async (values) => {
    //
  })
}
</script>

<template>
  <form
    v-if="state.file"
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
        <template #zh>保存</template>
        <template #en>Save</template>
      </Lang>
    </FormButton>
  </form>

  <Loading v-else class="text-xl">
    <Lang>
      <template #zh>文件加载中……</template>
      <template #en>Loading file...</template>
    </Lang>
  </Loading>
</template>
