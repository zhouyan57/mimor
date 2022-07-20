<template>
  <div class="text-3xl text-orange-500 p-4">
    <Title>Mimor</Title>

    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/posts">Posts</NuxtLink></li>
      </ul>
    </nav>

    <slot></slot>
  </div>
</template>
