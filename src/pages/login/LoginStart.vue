<script setup lang="ts">
import {
  EllipsisHorizontalCircleIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline/index.js'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { formSubmit, useForm } from '../../components/form'
import FormInput from '../../components/form/FormInput.vue'
import { LoginState as State } from './LoginState'

const { state } = defineProps<{ state: State }>()

const form = useForm({
  email: '',
})

function submit(event: Event) {
  formSubmit(form, event, async (values) => {
    const verifying = await app.auth.login.start(values)
    if (verifying) state.verifying = verifying
  })
}
</script>

<template>
  <form
    class="flex max-w-md flex-col space-y-2 pt-20 text-xl"
    @submit.prevent="submit"
  >
    <div class="flex flex-col pb-2">
      <div class="flex items-baseline justify-between">
        <div class="font-logo text-3xl font-bold">
          <Lang>
            <template #zh> 登录 </template>
            <template #en> Login </template>
          </Lang>
        </div>

        <div class="text-xl">
          <Lang>
            <template #zh>
              尚未<Hyperlink href="/register" class="underline">注册</Hyperlink
              >？
            </template>
            <template #en>
              Not yet
              <Hyperlink href="/register" class="underline"
                >Registered</Hyperlink
              >?
            </template>
          </Lang>
        </div>
      </div>
    </div>

    <FormInput
      :form="form"
      name="email"
      type="email"
      autocomplete="email"
      maxlength="256"
      required
      :placeholder="$app.lang.zh ? '电子邮箱' : 'Email'"
    >
      <template #input-end>
        <button
          class="px-2"
          :class="[form.processing && 'text-stone-300']"
          type="submit"
          :disabled="form.processing"
        >
          <UserCircleIcon v-if="!form.processing" class="h-8 w-8 stroke-1" />
          <EllipsisHorizontalCircleIcon
            v-if="form.processing"
            class="h-8 w-8 stroke-1"
          />
        </button>
      </template>
    </FormInput>
  </form>
</template>
