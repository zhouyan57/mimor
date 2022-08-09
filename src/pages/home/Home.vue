<script setup lang="ts">
import { reactive } from "vue"
import Mimor from "../../components/mimor/Mimor.vue"

const text = `
<填空>
君子知夫不全不粹之不足以为美也
故诵数以贯之 <空>思索</空>以通之
为其人以处之 除其害者以持养之
-- 荀子 劝学
</填空>

<question>
  What is Bayesian interpretation of probability?

  <answer>
    Probabilities encode degrees of belief about events in the world.

    And data are used to strengthen, update, or weaken those degrees of belief.
  </answer>
</question>

<question>
  What are some good examples of "association is not causation"?

  <answer>
    Sleeping with shoes on, and waking up with headache.

    Confounder: drinking the night before.
  </answer>
</question>
`

const state = reactive({
  finished: false,
  flag: true,
})

function again() {
  state.finished = false
  state.flag = !state.flag
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="text-3xl">Demo 1</div>

    <Mimor
      v-if="!state.finished"
      class="h-full overflow-hidden"
      :key="state.flag.toString()"
      :options="{
        text,
        onFinished: () => {
          state.finished = true
        },
      }"
    />
    <div v-else class="h-full flex flex-col items-start justify-between">
      <div></div>

      <div class="flex w-full justify-center">
        <div class="text-4xl">The End</div>
      </div>

      <button class="text-2xl border p-2 border-stone-400" @click="again()">
        Again
      </button>
    </div>
  </div>
</template>
