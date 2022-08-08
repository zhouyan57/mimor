<script setup lang="ts">
import { reactive } from "vue"
import Lang from "../../../components/Lang.vue"
import { MimorState } from "../MimorState"
import BinaryLayoutHeader from "./BinaryLayoutHeader.vue"
import BinaryLayoutControl from "./BinaryLayoutControl.vue"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

const { mimor } = defineProps<{ mimor: MimorState }>()

const state = reactive(new State())

function next() {
  state.revealed = false
  mimor.next()
}
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <BinaryLayoutHeader :mimor="mimor" :state="state" />

    <div class="py-6">
      <slot :revealed="state.revealed" />
    </div>

    <BinaryLayoutControl :mimor="mimor" :state="state" />
  </div>
</template>
