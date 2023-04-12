<script setup>
  import Arrow from "../components/Arrow.vue";
  import { onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#productive",
          start: "top 25%",
          end: "bottom top",
          toggleActions: "restart none none reset",
          scrub: 2,
        },
      })
      .from("#image", { opacity: 0, xPercent: -100, duration: 0.5, ease: "back" })

      .from("#text", { opacity: 0, translateX: 100, duration: 0.5, ease: "back" }, "<")

      .to(["#text", "#image"], {
        xPercent: 0,
        opacity: 1,
      });
  });
</script>

<template>
  <section id="productive" class="overflow-hidden text-white bg-darkBlueMain pt-[155px] md:pt-[290px] pb-[125px]">
    <div class="container flex flex-col md:flex-row items-center gap-16 md:justify-between">
      <div id="image" class="max-w-[250px] md:max-w-[480px]">
        <img src="../assets/illustration-stay-productive.png" alt="" class="max-w-full" />
      </div>
      <div id="text">
        <h2 class="font-raleway text-2xl font-bold md:text-3xl mb-6 md:mb-8">
          Stay productive, <br class="hidden md:block" />
          whereever you you are
        </h2>
        <p class="text-[14px] opacity-70 md:max-w-[510px] mb-[20px]">
          Never let location be an issue when accessing your files. Flyo has you covered for all of your file storage needs.
        </p>
        <p class="text-[14px] opacity-70 md:max-w-[510px] mb-[20px]">
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <div
          class="cursor-pointer text-Cyan hover:text-white group flex items-center border-b border-Cyan pb-[3px] hover:border-white duration-150 [&>]:duration-150 w-fit"
        >
          <p class="">See how Fylo works</p>
          <span class="ml-[10px]"><Arrow class="group-hover:grayscale duration-150" /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
