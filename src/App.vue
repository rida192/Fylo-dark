<script setup>
  import Navbar from "./components/Navbar.vue";
  import Hero from "./components/Hero.vue";
  import Features from "./components/Features.vue";
  import Productive from "./components/Productive.vue";
  import Testimonials from "./components/Testimonials.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="bg-darkBlueIintro bg-[url('../assets/bg-curvy-desktop.svg')] bg-no-repeat bg-[center_bottom] bg-[length:100%_388px] font-openSans">
    <Navbar />
    <Hero />
  </main>
  <Features />
  <Productive />
  <Testimonials />
  <Footer />
</template>

<style scoped></style>
