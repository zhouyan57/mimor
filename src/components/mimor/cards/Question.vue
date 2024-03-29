<script setup lang="ts">
import { XElement, isElement } from '@xieyuheng/x-node'
import { reactive, watch } from 'vue'
import TransitionReveal from '../../transitions/TransitionReveal.vue'
import MimorFootRemembering from '../MimorFootRemembering.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorTransitionCard from '../MimorTransitionCard.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import Nodes from '../nodes/Nodes.vue'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const remembering = reactive({ revealed: false })

watch(
  () => props.state.theme.name,
  () => {
    if (props.state.withMetaThemeColor) {
      props.state.themeColor = props.state.theme.colors[300]
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <MimorHeadProgram :state="state" :program="program" />

    <MimorTransitionCard :state="state" :program="program">
      <div v-for="(child, index) of element.children" :key="index">
        <div v-if="isElement(child) && child.tag === 'answer'" class="py-2">
          <TransitionReveal>
            <Nodes
              v-if="remembering.revealed"
              :state="state"
              :program="program"
              :nodes="child.children"
              class="py-3 text-3xl"
            />
          </TransitionReveal>
        </div>
        <Node
          v-else
          :state="state"
          :program="program"
          :node="child"
          :class="[
            remembering.revealed ? 'text-xl' : 'text-2xl',
            remembering.revealed && 'text-stone-700',
          ]"
        />
      </div>
    </MimorTransitionCard>

    <div class="flex w-full pb-1.5">
      <MimorFootRemembering
        :state="state"
        :program="program"
        :remembering="remembering"
      />
    </div>
  </div>
</template>
