<template>
  <header class="flex items-center justify-between bg-white shadow-md p-4">
    <h2 class="text-xl font-semibold">Welcome to 7MWO</h2>
    <div class="flex items-center space-x-4">
      <!-- User Avatar -->
      <div class="relative">
        <button @click="toggleDropdown" class="focus:ring-2 focus:ring-gray-300">
          <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              class="w-10 h-10 rounded-full"
          />
        </button>
        <!-- Dropdown -->
        <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md"
        >
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Plans</a
          >
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Settings</a
          >
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Download App</a
          >
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Logout</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
