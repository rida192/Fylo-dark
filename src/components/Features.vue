<script setup>
  import { onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#features",
          start: "top 25%",
          end: "bottom top",
          toggleActions: "restart none none reset",
          scrub: 2,
        },
      })
      .from("#feature", { opacity: 0, yPercent: 50, stagger: 0.15, duration: 0.5, ease: "back" })
      // .from(".btn", { opacity: 0, stagger: 0.05, duration: 0.2 }, 0)
      // .from("button", { y: 100, opacity: 0, ease: "back", duration: 1 }, "<1")
      .to("#feature", {
        yPercent: 0,
        opacity: 1,
        duration: 1,
      });
  });
</script>
<template>
  <section id="features" class="bg-darkBlueMain text-white pt-[110px] md:pt-[160px]">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-[78px] md:gap-[148px] text-center">
        <div id="feature" class="flex flex-col items-center">
          <img src="../assets/icon-access-anywhere.svg" alt="" />
          <h3 class="font-raleway font-bold text-[18px] md:text-[21px] mt-[31px] mb-[15px]">Access your files, anywhere</h3>
          <p class="text-[14px] opacity-70">
            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
          </p>
        </div>
        <div id="feature" class="flex flex-col items-center">
          <img src="../assets/icon-security.svg" alt="" />
          <h3 class="font-raleway font-bold text-[18px] md:text-[21px] mt-[31px] mb-[15px]">Security you can trust</h3>
          <p class="text-[14px] opacity-70">
            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div id="feature" class="flex flex-col items-center">
          <img src="../assets/icon-collaboration.svg" alt="" />
          <h3 class="font-raleway font-bold text-[18px] md:text-[21px] mt-[31px] mb-[15px]">Real-time collaboration</h3>
          <p class="text-[14px] opacity-70">
            Securly share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
        </div>
        <div id="feature" class="flex flex-col items-center">
          <img src="../assets/icon-any-file.svg" alt="" />
          <h3 class="font-raleway font-bold text-[18px] md:text-[21px] mt-[31px] mb-[15px]">Store any type of file</h3>
          <p class="text-[14px] opacity-70">
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
