<script setup lang="ts">
import { reactive } from "vue"
import Mimor from "../../components/mimor/Mimor.vue"

const text = `
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
    <div class="text-3xl">Mimor demo:</div>

    <Mimor
      v-if="!state.finished"
      :options="{
        text,
        onFinished: () => {
          state.finished = true
        },
      }"
    />
    <div v-else>The End</div>
  </div>
</template>
