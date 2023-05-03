<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()

const avatarInputElement = ref<HTMLInputElement | undefined>(undefined)

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
</template>
