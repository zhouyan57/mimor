<script setup lang="ts">
import { reactive } from "vue"
import Lang from "../../../components/Lang.vue"
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
  <div class="flex w-full justify-between">
    <div></div>
    <div class="font-logo font-bold">
      <Lang>
        <template #zh>迷墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
