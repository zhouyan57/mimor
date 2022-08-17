<script setup lang="ts">
import FormButton from '../../components/FormButton.vue'
import FormInput from '../../components/FormInput.vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { useForm } from '../../hooks/useForm'
import { RegisterState as State } from './RegisterState'

const { state } = defineProps<{ state: State }>()

const form = useForm({ username: '', name: '', email: '' })
</script>

<template>
  <form
    class="flex max-w-lg flex-col space-y-2 text-xl"
    @submit.prevent="
      (event) =>
        form.postByEvent(event, state.links.register, {
          then: async (response) => {
            state.verifying = await response.json()
          },
        })
    "
  >
    <Lang class="font-logo text-3xl font-bold">
      <template #zh>注册</template>
      <template #en>Register</template>
    </Lang>

    <FormInput :form="form" name="username" required>
      <template #label>
        <Lang>
          <template #zh>用户名</template>
          <template #en>Username</template>
        </Lang>
      </template>
    </FormInput>

    <FormInput :form="form" name="name" required>
      <template #label>
        <Lang>
          <template #zh>名字</template>
          <template #en>Name</template>
        </Lang>
      </template>
    </FormInput>

    <FormInput :form="form" name="email" type="email" required>
      <template #label>
        <Lang>
          <template #zh>电子邮箱</template>
          <template #en>Email</template>
        </Lang>
      </template>
    </FormInput>

    <div class="flex flex-col justify-center py-4">
      <hr class="border-t border-stone-600" />
    </div>

    <FormButton :disabled="form.processing">
      <Lang>
        <template #zh>注册</template>
        <template #en>Register</template>
      </Lang>
    </FormButton>

    <div class="flex justify-end">
      <Lang class="text-xl">
        <template #zh>
          已注册？
          <Link href="/login" class="underline"> 登录 </Link>
        </template>
        <template #en>
          Already Registered?
          <Link href="/login" class="underline"> Login </Link>
          .
        </template>
      </Lang>
    </div>
  </form>
</template>
