<template>
    <div class="bg-red-800 dark:bg-black p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4 text-white">{{ title }}</h3>
      <ul class="space-y-2 text-gray-300 dark:text-white">
        <li v-for="(service, index) in services" :key="index">{{ service }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      services: Array,
    },
  };
  </script>
  