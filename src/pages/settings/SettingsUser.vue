<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive, ref } from 'vue'
import { useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { User } from '../../models/user/User'
import SettingsRemoveServiceWorker from './SettingsRemoveServiceWorker.vue'
import { State } from './State'

defineProps<{
  state: State
  username: string
  user: User
}>()

const avatarInputElement = ref<HTMLInputElement | undefined>(undefined)
const lang = useGlobalLang()

const form = useForm({
  username: '',
  name: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})

function avatarUpload() {
  if (avatarInputElement.value) {
    const files = avatarInputElement.value.files
    if (files) {
      const file = files[0]
      console.log(file)
    }
  }
}
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
          :value="username"
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

        <div class="flex flex-col">
          <label for="avatar" class="py-2 font-sans">
            <Lang>
              <template #zh>头像</template>
              <template #en>Avatar</template>
            </Lang>
          </label>

          <input
            class="hidden"
            id="avatar"
            name="avatar"
            ref="avatarInputElement"
            autocomplete="avatar"
            required
            accept="image/png, image/jpeg"
            type="file"
            @change="avatarUpload()"
          />

          <label
            for="avatar"
            class="flex h-[16rem] w-[16rem] items-center border border-black"
          >
            <div class="p-3">TODO</div>
          </label>
        </div>

        <div v-if="report.errorMessage">
          <div class="mt-3 border-2 border-red-300 p-2 text-base">
            {{ report.errorMessage }}
          </div>
        </div>

        <FormDivider />

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh>保存</template>
            <template #en>Save</template>
          </Lang>
        </FormButton>

        <FormDivider />

        <SettingsRemoveServiceWorker />
      </form>
    </div>
  </PageLayout>
</template>
