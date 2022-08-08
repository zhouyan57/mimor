<script setup lang="ts">
import { reactive } from "vue"
import { MimorState } from "../MimorState"
import BinaryLayoutControl from "./BinaryLayoutControl.vue"
import BinaryLayoutHeader from "./BinaryLayoutHeader.vue"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

const { mimor } = defineProps<{ mimor: MimorState }>()

const state = reactive(new State(mimor))
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <BinaryLayoutHeader :state="state" />

    <div>
      <slot :revealed="state.revealed" />
    </div>

    <BinaryLayoutControl :state="state" />
  </div>
</template>
