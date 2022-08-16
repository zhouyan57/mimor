<script setup lang="ts">
import { matchElement, XElement } from '../../../libs/x-node'
import MimorNode from '../MimorNode.vue'
import MimorNodes from '../MimorNodes.vue'
import { MimorState } from '../MimorState'

defineProps<{ mimor: MimorState; element: XElement }>()
</script>

<template>
  <div>
    <div v-for="(child, index) of element.children" :key="index">
      <div v-if="matchElement(child, { tags: ['answer', '答'] })">
        <Transition
          enter-active-class="transition duration-700 ease-in-out"
          enter-from-class="transform transform-gpu opacity-0"
          enter-to-class="transform transform-gpu opacity-100"
        >
          <MimorNodes
            v-show="mimor.revealed"
            :mimor="mimor"
            :nodes="child.children"
            class="py-3 text-3xl"
          />
        </Transition>
      </div>
      <MimorNode
        v-else
        :mimor="mimor"
        :node="child"
        :class="[
          mimor.revealed ? 'text-xl' : 'text-2xl',
          mimor.revealed && 'text-stone-700',
        ]"
      />
    </div>
  </div>
</template>
