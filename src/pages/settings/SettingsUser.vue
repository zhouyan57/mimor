<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { User } from '../../models/user/User'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import SettingsRemoveServiceWorker from './SettingsRemoveServiceWorker.vue'

defineProps<{ user: User }>()

const auth = useGlobalAuth()
const lang = useGlobalLang()

const form = useForm({
  username: '',
  name: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">设置 | 谜墨</title>
      <title v-else>Settings | Mimor</title>
    </Head>

    <div class="flex h-full flex-col space-y-3 p-3 font-serif text-xl">
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 设置 </template>
            <template #en> Settings </template>
          </Lang>
        </div>
      </div>

      <form class="flex w-auto flex-col space-y-2 text-xl md:w-[24rem]">
        <FormInput
          name="username"
          autocomplete="username"
          required
          disabled
          spellcheck="false"
          :value="auth.username"
        >
          <template #label>
            <Lang>
              <template #zh>用户名</template>
              <template #en>Username</template>
            </Lang>
          </template>
        </FormInput>

        <FormInput
          name="name"
          autocomplete="name"
          required
          spellcheck="false"
          :value="user.name"
        >
          <template #label>
            <Lang>
              <template #zh>名字</template>
              <template #en>Name</template>
            </Lang>
          </template>
        </FormInput>

        <div v-if="report.errorMessage">
          <div class="mt-3 border-2 border-red-300 p-2 text-base">
            {{ report.errorMessage }}
          </div>
        </div>

        <div class="flex flex-col justify-center py-3">
          <hr class="border-t border-black" />
        </div>

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh>保存</template>
            <template #en>Save</template>
          </Lang>
        </FormButton>

        <div class="flex flex-col justify-center py-3">
          <hr class="border-t border-dashed border-black" />
        </div>

        <SettingsRemoveServiceWorker />
      </form>
    </div>
  </PageLayout>
</template>