<script setup lang="ts">
import { ref, watch } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import InsertElement from '../../components/utils/InsertElement.vue'
import { State } from './State'
import { stateAvatarUpload } from './stateAvatarUpload'

const props = defineProps<{
  state: State
  username: string
}>()

const avatarInputElement = ref<HTMLInputElement | undefined>(undefined)
const avatarImageElement = ref<HTMLImageElement | undefined>(undefined)

watch(
  () => props.state.avatarFile,
  (value) => {
    if (!value) {
      return
    }

    const img = document.createElement('img')
    img.src = URL.createObjectURL(value)
    img.onload = () => {
      URL.revokeObjectURL(img.src)
    }

    avatarImageElement.value = img
  },
  {
    immediate: true,
  },
)
</script>

<template>
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
      accept="image/png, image/jpeg"
      type="file"
      @change="
        () => {
          if (avatarInputElement) {
            stateAvatarUpload(state, avatarInputElement)
          }
        }
      "
    />

    <label
      for="avatar"
      class="flex h-[16rem] w-[16rem] items-center justify-center overflow-hidden border border-black"
    >
      <InsertElement v-if="avatarImageElement" :element="avatarImageElement" />
      <img
        v-else-if="state.avatarURL"
        :alt="`Avatar of ${username}`"
        :src="state.avatarURL.href"
      />
      <div v-else class="p-3 text-stone-500">
        <Lang>
          <template #zh>上传图片</template>
          <template #en>Upload image</template>
        </Lang>
      </div>
    </label>
  </div>
</template>
