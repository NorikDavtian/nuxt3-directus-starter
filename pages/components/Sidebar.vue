<template>
  <aside class="w-64 h-screen bg-gray-800 text-white fixed">
    <div class="p-4">
      <h1 class="text-2xl font-bold">7MWO</h1>
    </div>
    <nav class="mt-4 space-y-4">
      <SidebarItem icon="🏋️‍♂️" label="Saved Workouts" />
      <SidebarItem icon="❤️" label="Favorite Workouts" />
      <SidebarItem icon="💬" label="Motivation Chat" />
      <SidebarItem icon="🔔" label="Notifications" />
      <SidebarItem icon="📅" label="Daily Workouts" />
      <SidebarItem icon="🍽️" label="Meal Plans" />
    </nav>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
};
</script>
