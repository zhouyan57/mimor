<template>
  <Transition
    enterActiveClass="transition duration-100 ease-out"
    enterFromClass="transform scale-95 opacity-0"
    enterToClass="transform scale-100 opacity-100"
    leaveActiveClass="transition duration-75 ease-out"
    leaveFromClass="transform scale-100 opacity-100"
    leaveToClass="transform scale-95 opacity-0"
  >
    <slot />
  </Transition>
</template>
