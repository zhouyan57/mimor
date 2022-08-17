<script setup lang="ts">
import { Form } from '../models/Form'

defineProps<{
  form: Form<any>
  name: string
  type?: string
  required?: boolean
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label"></slot>
    </label>

    <textarea
      :id="name"
      :name="name"
      class="w-full rounded-sm border border-stone-500 p-3"
      :type="type || 'text'"
      :maxlength="32"
      :spellcheck="false"
      :required="required"
    ></textarea>

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
