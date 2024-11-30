<template>
  <div>
    <!-- Navbar -->
    <header class="bg-black py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="text-white text-lg font-bold hover:text-red-800">RedTilt</div>
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-white hover:text-red-800">Services</a>
          <a href="#" class="text-white hover:text-red-800">Reviews</a>
          <a href="#" class="text-white hover:text-red-800">Blog</a>
          <a href="#" class="text-white hover:text-red-800">Jobs</a>
        </nav>
        <!-- Hamburger Menu for Mobile -->
        <button @click="toggleMenu" class="md:hidden text-white">
          <span class="material-icons text-2xl text-white-800 cursor-pointer">menu</span>
        </button>
        <!-- Start a Project Button -->
        <button @click="showModal = true" class="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-md">Start a Project</button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="bg-black md:hidden">
        <nav class="flex flex-col space-y-2 px-4 py-2">
          <a href="#" class="text-white hover:text-gray-300">Services</a>
          <a href="#" class="text-white hover:text-gray-300">Reviews</a>
          <a href="#" class="text-white hover:text-gray-300">Blog</a>
          <a href="#" class="text-white hover:text-gray-300">Jobs</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="text-center py-16 px-4 bg-gradient-to-r from-red-800 via-black to-red-800">
      <div class="container mx-auto">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          From Concept to Code <br />
          <span class="text-red-500">{{ typedText }}</span>
          <span class="text-red-500 border-r-2 border-red-500 inline-block animate-blink"></span>
        </h1>
        <p class="text-lg md:text-xl mb-8 text-white">
          We help developers and enterprises build amazing websites that deliver their vision to happy customers.
        </p>
        <a href="#"><button
            class="bg-red-600 text-white px-6 py-3 rounded-full text-lg shadow-lg animate-bounce space-x-2">
            <i class="material-icons text-l text-white">call</i>
            <span>Let's have a call</span>
          </button></a>
      </div>
    </section>


    <!-- Trusted Partners -->
    <section class="py-12 px-4 bg-black">
      <div class="container mx-auto">
        <h2 class="text-center text-lg font-semibold text-gray-300 mb-8">
          TRUSTED BY OUR PARTNERS
        </h2>
        <div class="flex justify-center flex-wrap gap-6">
          <img src="../assets/github.png" alt="GitHub" class="opacity-80 partner h-32 w-32" />
          <img src="../assets/digital ocean.png" alt="DigitalOcean" class="opacity-80 partner h-32 w-32" />
          <img src="../assets/intel.png" alt="Intel" class="opacity-80 partner h-32 w-32" />
          <img src="../assets/oracle.png" alt="Oracle" class="opacity-80 partner h-32 w-32" />
          <img src="../assets/azure.png" alt="Azure" class="opacity-80 partner h-32 w-32" />
        </div>
      </div>
    </section>

    <!-- What We Offer -->
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
          <span class="material-icons text-2xl text-white">code</span>
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
      <div class="relative bg-red-900 bg-opacity-75 rounded-lg p-6 text-center shadow-lg">
        <span class="absolute -top-12 left-4 text-[100px] font-extrabold text-red-800 opacity-20">02</span>
        <div class="flex items-center justify-center mb-4">
          <span class="material-icons text-2xl text-white">public</span>
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
          <span class="material-icons text-white-500 text-3xl">cloud</span>
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
          <span class="material-icons text-white-500 text-3xl">shield</span>
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

    <!-- Blog Section -->
    <section class="py-16 px-4 bg-black">
      <div class="container mx-auto">
        <h2 class="text-center text-3xl font-bold mb-8 text-white">Read Our Blog</h2>
        <div class="bg-gray-800 rounded-lg shadow-md p-6">
          <div class="flex flex-wrap gap-6">
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2">
              <img src="../assets/square.jpg" alt="Blog image" class="rounded-lg blog" />
            </div>
            <div class="w-full md:w-2/3">
              <h3 class="text-xl font-semibold text-white">Not Another Framework</h3>
              <p class="text-gray-300 mt-4">
                We brought all the Remix goodies over to React Router and made improvements in the process. Learn more
                about its enhanced APIs.
              </p>
              <ul class="text-left p-0 text-white- space-y-1 mt-7">
                <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Collaboration Tools</li>
                <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Collaboration Tools</li>
              </ul>
              <a href="#"><button class="mt-4 text-gray-400 hover:text-white">Read more</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->

    <section class="py-16 px-4 bg-black">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left Section -->
        <div class="text-white">
          <h2 class="text-3xl font-bold mb-4">Got a project in mind?</h2>
          <h3 class="text-4xl font-bold mb-6">Reserve a Call</h3>
          <ul class="space-y-4 text-gray-300">

            <ul class="text-left text-gray-300 space-y-2">
              <li><i class="fas fa-check-circle text-green-500 mr-2"></i> An in-depth session to understand your needs</li>
              <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Learn which plan is right for your team</li>
              <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Get onboarding help</li>
            </ul>

          </ul>
          <p class="mt-6 text-gray-400">
            Technical support or some query?
            <a href="#" class="text-white underline">Contact support →</a>
          </p>
        </div>

        <!-- Right Section -->
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4 text-white">Tell us about yourself.</h3>
          <form class="space-y-6" action="https://formsubmit.io/send/your-email@example.com" method="POST">
            <!-- Full Name and Work Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" class="w-full px-4 py-3 bg-black text-white rounded-lg" />
              <input type="email" placeholder="Work Email" class="w-full px-4 py-3 bg-black text-white rounded-lg" />
            </div>

            <!-- Company Size -->
            <select class="w-full px-4 py-3 bg-black text-gray-400 rounded-lg">
              <option value="">Company Size</option>
              <option value="1-20">1-20</option>
              <option value="21-50">21-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>

            <!-- Message -->
            <textarea rows="4" placeholder="How Can We Help?"
              class="w-full px-4 py-3 bg-black text-white rounded-lg"></textarea>

            <!-- Email and Button Row -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p class="text-gray-400">
                You can also email us at
                <a href="mailto:apac@redtilt.team" class="text-white underline">
                  apac@redtilt.team
                </a>
              </p>
              <button @click="showModal = true" type="submit" class="bg-red-600 px-6 py-3 text-white rounded-lg hover:bg-red-500">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-400 py-12">
    <!-- Newsletter Section -->
    <div class="bg-red-900 text-white py-6 rounded-lg mx-4 md:mx-auto md:max-w-5xl flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <div>
        <h3 class="text-xl font-bold">Newsletter</h3>
        <p>Be the first one to know about insights, technologies, and innovations.</p>
      </div>
      <button 
        @click="showModal = true" 
        class="bg-red-600 px-6 py-3 text-white rounded-lg hover:bg-red-500">
        Subscribe
      </button>
    </div>

    <!-- Footer Links Section -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 px-4">
      <!-- Footer links as before -->
    </div>

    <!-- Copyright Section -->
    <div class="text-center mt-12 text-gray-500 text-sm">
      &copy; Copyright 2024, All Rights Reserved By Redtilt
    </div>

    <!-- Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-8 text-center">
        <h2 class="text-2xl font-bold text-red-600 mb-4">Coming Soon!</h2>
        <p class="text-gray-700 mb-6">
          This feature is under development and will be available soon. Stay tuned!
        </p>
        <button 
          @click="showModal = false"
          class="bg-red-600 px-6 py-3 text-white rounded-lg hover:bg-red-500">
          Close
        </button>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  components: {
    ServiceCard,
    name: "WhatWeOffer",
    name: "ContactSection",
    name: "Footer",
  },
  data() {
    return {
      isMenuOpen: false,
      fullText: "We Make IT Happen", // Full text to type
      typedText: "", // The currently typed text
      typingSpeed: 100, // Speed of typing each character in milliseconds
      delayBeforeRestart: 2000, // Delay before restarting the typing effect in milliseconds
      showModal: false, // Tracks whether the modal is visible
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    typeText() {
      let index = 0;
      this.typedText = ""; // Clear the text before restarting
      const interval = setInterval(() => {
        if (index < this.fullText.length) {
          this.typedText += this.fullText[index]; // Add one character at a time
          index++;
        } else {
          clearInterval(interval); // Clear the interval once typing is complete
          setTimeout(() => {
            this.typeText(); // Restart typing after a delay
          }, this.delayBeforeRestart);
        }
      }, this.typingSpeed);
    },
  },
  mounted() {
    this.typeText(); // Start the typewriter effect when the component is mounted
  },
};
</script>

<style scoped>
/* Blog Image Logo */
.rounded-lg .blog {
  width: 150px;
  height: 150px;
}
.menu-icon {
    font-size: 36px; /* Adjust the size */
    color: white;    /* Change the color */
    cursor: pointer; /* Make it clickable */
  }
</style>
