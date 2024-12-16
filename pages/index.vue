<template>
  <div>
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

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-purple-400;
}
</style>