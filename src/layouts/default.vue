<template>
  <div>
    <Title>Mimor</Title>

    <nav class="text-3xl text-orange-500 font-bold p-4">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/posts">Posts</NuxtLink></li>
      </ul>
    </nav>

    <slot></slot>
  </div>
</template>
