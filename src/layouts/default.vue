<template>
  <div class="text-3xl h-screen text-orange-500 bg-orange-50 p-4">
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
