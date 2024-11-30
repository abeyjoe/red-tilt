<template>
    <section class="py-16 bg-black text-white">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold">What we offer</h2>
        <p class="mt-4 text-gray-400">
          Our Experts Will Help You In Following Fields
        </p>
      </div>
  
      <!-- Cards Section -->
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <!-- Card 1 -->
        <div class="relative bg-red-900 bg-opacity-75 rounded-lg p-6 text-center shadow-lg">
          <span class="absolute -top-12 left-4 text-[100px] font-extrabold text-red-800 opacity-20">01</span>
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-cogs text-4xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">Development</h3>
          <ul class="text-left text-gray-300 space-y-2">
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> UI/UX</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> DevOps</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Web design</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Frontend dev</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Backend dev</li>
          </ul>
        </div>
  
        <!-- Card 2 -->
        <div class="relative bg-red-900 bg-opacity-50 rounded-lg p-6 text-center shadow-lg">
          <span class="absolute -top-12 left-4 text-[100px] font-extrabold text-red-800 opacity-20">02</span>
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-globe text-4xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">MSP</h3>
          <ul class="text-left text-gray-300 space-y-2">
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Infrastructure management</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Managed Monitoring</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Business Continuity</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Managed Cyber</li>
          </ul>
        </div>
  
        <!-- Card 3 -->
        <div class="relative bg-red-900 bg-opacity-75 rounded-lg p-6 text-center shadow-lg">
          <span class="absolute -top-12 left-4 text-[100px] font-extrabold text-red-800 opacity-20">03</span>
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-cloud text-4xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">Cloud</h3>
          <ul class="text-left text-gray-300 space-y-2">
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> AWS</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Azure</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Multi-Cloud</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> SRE Strategy</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Hybrid Strategy</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Containerisation</li>
          </ul>
        </div>
  
        <!-- Card 4 -->
        <div class="relative bg-red-900 bg-opacity-75 rounded-lg p-6 text-center shadow-lg">
          <span class="absolute -top-12 left-4 text-[100px] font-extrabold text-red-800 opacity-20">04</span>
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-shield-alt text-4xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">Cyber</h3>
          <ul class="text-left text-gray-300 space-y-2">
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Cyber Audit</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Cyber governance</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Security as a service</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Penetration Testing</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "WhatWeOffer",
  };
  </script>
  