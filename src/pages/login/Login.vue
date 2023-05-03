<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { loginByPassword } from '../../models/auth/loginByPassword'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'

const router = useRouter()
const auth = useGlobalAuth()
const lang = useGlobalLang()

const form = useForm({
  username: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})

watch(
  () => auth.user,
  (value) => {
    if (value !== undefined) {
      router.replace({ path: '/' })
    }
  },
  { immediate: true },
)
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">登录 | 谜墨</title>
    <title v-else>Login | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 登录 </template>
            <template #en> Login </template>
          </Lang>
        </div>
      </div>

      <form
        class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]"
        @submit.prevent="
          formSubmit(form, $event, async () => {
            await loginByPassword(form.values, report)
            if (report.errorMessage) return

            $router.replace({ path: `/` })
          })
        "
      >
        <FormInput name="username" autocomplete="name" required>
          <template #label>
            <Lang>
              <template #zh>用户名</template>
              <template #en>Username</template>
            </Lang>
          </template>
        </FormInput>

        <FormInput
          name="password"
          type="password"
          autocomplete="new-password"
          required
        >
          <template #label>
            <Lang>
              <template #zh>密码</template>
              <template #en>Password</template>
            </Lang>
          </template>
        </FormInput>

        <div v-if="report.errorMessage">
          <div class="mt-3 border-2 border-red-300 p-2 text-base">
            {{ report.errorMessage }}
          </div>
        </div>

        <FormDivider />

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh>登录</template>
            <template #en>Login</template>
          </Lang>
        </FormButton>

        <div class="flex justify-end">
          <div class="text-xl">
            <Lang>
              <template #zh>
                尚未
                <Hyperlink href="/register" class="underline"> 注册 </Hyperlink
                >？
              </template>
              <template #en>
                Not yet
                <Hyperlink href="/register" class="underline">
                  registered
                </Hyperlink>
                ?
              </template>
            </Lang>
          </div>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
