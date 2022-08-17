<script setup lang="ts">
import { Form } from '../models/Form'

defineProps<{
  form: Form<any>
  name: string
  type?: string
  autocomplete?: string
  placeholder?: string
  spellcheck?: boolean
  required?: boolean
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center rounded-sm border border-stone-500">
      <input
        :id="name"
        :name="name"
        class="w-full p-3 font-bold"
        :type="type || 'text'"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :maxlength="32"
        :spellcheck="spellcheck"
        :required="required"
      />

      <slot name="input-end" />
    </div>

    <ol
      v-if="form.unprocessable?.errors[name]"
      class="list-inside list-disc py-1 text-base font-bold text-orange-400"
    >
      <li
        v-for="(message, index) of form.unprocessable.errors[name]"
        :key="index"
      >
        {{ message }}
      </li>
    </ol>
  </div>
</template>
