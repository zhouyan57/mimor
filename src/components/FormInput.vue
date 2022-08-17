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
      <slot name="label" />
    </label>

    <div class="w-full flex items-center rounded-sm border border-stone-900">
      <input
        :id="name"
        :name="name"
        class="w-full p-3 font-bold"
        :type="type || 'text'"
        :maxlength="32"
        :spellcheck="false"
        :required="required"
      />

      <slot name="input-end" />
    </div>

    <ol
      v-if="form.unprocessable?.errors[name]"
      class="list-inside list-disc font-bold text-orange-400 text-base py-1"
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
