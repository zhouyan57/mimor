<script setup lang="ts">
import { reactive } from 'vue'
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import Lang from '../../components/Lang.vue'
import { useForm } from '../../hooks/useForm'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectsState as State } from './ProjectsState'

const state = reactive(new State())

const form = useForm({ name: '', description: '' })
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <template #title>
      <Lang>
        <template #zh>创建新项目</template>
        <template #en>Create a new project</template>
      </Lang>
    </template>

    <form class="flex max-w-lg flex-col space-y-2">
      <FormInput name="name" required>
        <template #label>
          <Lang>
            <template #zh>项目名</template>
            <template #en>Name</template>
          </Lang>
        </template>
      </FormInput>

      <FormInput name="description">
        <template #label>
          <Lang>
            <template #zh>项目描述</template>
            <template #en>Description</template>
          </Lang>
        </template>
      </FormInput>

      <div class="flex flex-col justify-center py-4">
        <hr class="border-t border-stone-600" />
      </div>

      <FormButton :disabled="form.processing">
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </FormButton>
    </form>
  </PageLayout>
</template>
