<script setup>
  import { onMounted } from "vue";
  import { gsap } from "gsap";

  onMounted(() => {
    const tl = gsap.timeline();
    tl.from("#heading", {
      duration: 0.6,
      xPercent: -100,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    })
      .from(
        "#heroText",
        {
          duration: 0.6,
          xPercent: -100,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        "#btn",
        {
          duration: 1,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        "#hero",
        {
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        ["#heading", "#heroText", "#btn"],
        {
          duration: 1,
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
        },
        "+=1.2"
      );
  });
</script>
<template>
  <section id="hero" class="text-white container text-center pt-[30px] md:pt-[40px]">
    <div class="sm:max-w-[500px] sm:max-h-[255px] mx-auto pb-[20px]">
      <img src="../assets/illustration-intro.png" alt="" class="pointer-events-none mb-8 md:mb-0 mx-auto max-w-full max-h-[255px]" />
    </div>
    <h1 id="heading" class="font-raleway text-2xl font-bold md:text-3xl mb-[24px] md:mb-[32px] md:max-w-[661px] mx-auto">
      All your files in one secure location, accessible anywhere.
    </h1>
    <p id="heroText" class="md:max-w-[584px] mx-auto mb-[28px] text-[14px] opacity-70 text-[#F9FFFF]">
      Fylo stores your most important files in one secure location. <br class="hidden md:block" />
      Access them whereever you need, share and collaborate with friends family, and co-workers.
    </p>
    <button id="btn" class="bg-gradient-to-r from-Cyan to-Blue py-[14px] px-[70px] rounded-3xl hover:to-Cyan font-raleway font-bold">Get Started</button>
  </section>
  <!-- </main> -->
</template>

<style scoped></style>
