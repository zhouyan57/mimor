<script setup lang="ts">
import { reactive } from "vue"
import Lang from "../../../components/Lang.vue"
import BinaryLayoutHeader from "./BinaryLayoutHeader.vue"
import { MimorState } from "../MimorState"

const { mimor } = defineProps<{ mimor: MimorState }>()

const state = reactive({
  revealed: false,
})

function next() {
  state.revealed = false
  mimor.next()
}
</script>

<template>
  <div class="flex flex-col items-start">
    <BinaryLayoutHeader :mimor="mimor" />

    <div class="py-6">
      <slot :revealed="state.revealed" />
    </div>

    <button v-if="!state.revealed" @click="state.revealed = true">
      <Lang>
        <template #zh>揭示</template>
        <template #en>Reveal</template>
      </Lang>
    </button>

    <div v-else class="flex w-full justify-between">
      <button @click="next()">
        <Lang>
          <template #zh>忘了</template>
          <template #en>Forgotten</template>
        </Lang>
      </button>
      <button @click="next()">
        <Lang>
          <template #zh>记得</template>
          <template #en>Remembered</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
