<script setup lang="ts">
import { watch } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ArrowsUpDownIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()

watch(
  () => app.lang.tag,
  () => {
    app.safe(async () => {
      if (app.auth.user?.username) {
        await app.configs.put(app.auth.user.username, {
          lang: app.lang.tag,
        })
      }
    })
  }
)
</script>

<template>
  <Listbox as="div" class="relative flex" v-model="$app.lang.tag">
    <ListboxButton class="flex items-center">
      <Lang>
        <template #zh>语言</template>
        <template #en>Lang</template>
      </Lang>

      <ArrowsUpDownIcon class="h-5 w-5" />
    </ListboxButton>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ListboxOptions class="absolute left-0 top-9 min-w-max border bg-white">
        <ListboxOption
          v-slot="{ active, selected }"
          v-for="tag of $app.lang.tags"
          :key="tag"
          :value="tag"
        >
          <div
            class="flex min-w-max items-center px-2 py-1"
            :class="[active && `bg-stone-100`]"
          >
            {{ $app.lang.findTagName(tag) }}
            <CheckIcon v-if="selected" class="ml-2 h-5 w-5" />
          </div>
        </ListboxOption>
      </ListboxOptions>
    </Transition>
  </Listbox>
</template>
