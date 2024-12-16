<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="image" alt="Workout Image" class="w-full" />
    <div class="p-4">
      <h5 class="text-lg font-bold">{{ title }}</h5>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutCard',
  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>
