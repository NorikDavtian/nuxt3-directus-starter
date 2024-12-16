<template>
  <a
      href="#"
      class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
  >
    <span>{{ icon }}</span>
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    icon: String,
    label: String,
  },
};
</script>
