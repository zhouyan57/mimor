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
})
</script>

<template>
  <div>
    <div class="text-3xl">Demo</div>

    <Mimor
      class="h-80"
      v-if="!state.finished"
      :options="{
        text,
        onFinished: () => {
          state.finished = true
        },
      }"
    />
    <div v-else>
      <div class="font-bold text-2xl font-logo">The End</div>
    </div>
  </div>
</template>
