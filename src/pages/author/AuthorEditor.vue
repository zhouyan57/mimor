<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useForm } from '../../components/form'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

defineProps<{ username: string }>()

const editing = ref(false)
const lang = useGlobalLang()

const form = useForm({
  text: '',
})

const report = reactive({
  errorMessage: '',
})

function numberOfLines() {
  const lines = form.values.text.split('\n')
  return Math.max(3, Math.min(10, lines.length))
}
</script>

<template>
  <form
    class="flex flex-col border border-black p-2"
    :class="{ 'border-orange-400 ring-2 ring-orange-300': editing }"
  >
    <textarea
      class="my-1.5 h-full w-full resize-none px-1.5 font-mono focus:outline-none"
      name="text"
      spellcheck="false"
      @focus="editing = true"
      @blur="editing = false"
      v-model="form.values.text"
      :rows="numberOfLines()"
      :placeholder="lang.isZh() ? '创作卡片⋯⋯' : 'Create cards...'"
    ></textarea>

    <div class="flex justify-end">
      <button
        :disabled="form.values.text.length === 0"
        class="border border-orange-300 bg-orange-400 px-2 py-1 font-sans font-bold text-orange-50 disabled:border-stone-400 disabled:bg-white disabled:text-stone-400"
      >
        <Lang>
          <template #zh>保存</template>
          <template #en>SAVE</template>
        </Lang>
      </button>
    </div>
  </form>
</template>
