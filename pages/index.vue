<template>
  <div class="relative max-w-4xl px-6 pt-12 pb-24 mx-auto space-y-8">
    <h1>{{title}}</h1>
    <img src="/workout/jumprope.gif" alt="Jump">
  </div>
</template>

<script setup>
const title = '7 Minute Workout'
useHead({
  title: title,
})
</script>
