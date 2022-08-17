<script setup lang="ts">
import {
  ArrowCircleRightIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/vue/outline/index.js'
import FormInput from '../../components/FormInput.vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { useForm } from '../../hooks/useForm'
import { LoginState as State } from './LoginState'

const { state } = defineProps<{ state: State }>()

const form = useForm({ email: '' })
</script>

<template>
  <form
    class="flex max-w-md flex-col pt-20 space-y-2 text-xl"
    @submit.prevent="
      (event) => {
        form.post(event, `${$app.api.url}/login`, {
          then: async (response) => {
            state.verifying = await response.json()
          },
        })
      }
    "
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
              尚未<Link href="/register" class="underline">注册</Link>？
            </template>
            <template #en>
              Not yet
              <Link href="/register" class="underline">Registered</Link>?
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
      :placeholder="$app.lang.zh ? '电子邮箱' : 'Email'"
    >
      <template #input-end>
        <button
          class="px-2"
          :class="[form.processing && 'text-stone-300']"
          type="submit"
          :disabled="form.processing"
        >
          <ArrowCircleRightIcon v-if="!form.processing" class="h-8 w-8" />
          <DotsCircleHorizontalIcon v-if="form.processing" class="h-8 w-8" />
        </button>
      </template>
    </FormInput>

    <div v-if="form.response && !form.response.ok" class="mt-1">
      <Lang class="font-bold text-orange-400 text-base py-1">
        <template #zh>这个邮箱不对</template>
        <template #en>Invalid email.</template>
      </Lang>
    </div>
  </form>
</template>
